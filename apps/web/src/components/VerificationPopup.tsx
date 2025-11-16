'use client';

import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { env } from '@/lib/env';

interface Server {
  _id: string;
  name: string;
  serverIP?: string;
  isVerified?: boolean;
}

interface VerificationPopupProps {
  server: Server | null;
  isOpen: boolean;
  onClose: () => void;
  onVerificationComplete?: () => void;
}

const VerificationPopup: React.FC<VerificationPopupProps> = ({
  server,
  isOpen,
  onClose,
  onVerificationComplete,
}) => {
  const [otp, setOtp] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isPolling, setIsPolling] = useState(false);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && server) {
      generateOTP();
      startTimer();
      startPolling();
    } else {
      stopPolling();
      stopTimer();
      resetState();
    }

    return () => {
      stopPolling();
      stopTimer();
    };
  }, [isOpen, server]);

  const startTimer = () => {
    setTimeLeft(600);
    timerIntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopTimer();
          toast.error('Verification timeout. Please try again.');
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const startPolling = () => {
    setIsPolling(true);
    pollingIntervalRef.current = setInterval(async () => {
      await checkVerificationStatus();
    }, 2000);
  };

  const stopPolling = () => {
    setIsPolling(false);
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
  };

  const resetState = () => {
    setOtp('');
    setTimeLeft(600);
    setLoading(false);
  };

  const generateOTP = async () => {
    if (!server) return;

    try {
      setLoading(true);
      const response = await axios.post(
        `${env.API_URL}/generate-otp/${server._id}`,
        {},
        { withCredentials: true }
      );

      if (response.data.otp) {
        setOtp(response.data.otp);
      }
    } catch (error: any) {
      console.error('Error generating OTP:', error);
      toast.error('Failed to generate OTP');
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const checkVerificationStatus = async () => {
    if (!server) return;

    try {
      const response = await axios.get(`${env.API_URL}/my/servers`, {
        withCredentials: true,
      });

      const updatedServer = response.data.servers?.find((s: Server) => s._id === server._id);

      if (updatedServer?.isVerified) {
        stopPolling();
        stopTimer();
        toast.success('Server verified successfully!');
        if (onVerificationComplete) {
          onVerificationComplete();
        } else {
          onClose();
        }
      }
    } catch (error) {
      console.error('Error checking verification status:', error);
    }
  };

  const handleCopyOTP = () => {
    navigator.clipboard.writeText(otp);
    toast.success('OTP copied to clipboard!');
  };

  const handleCopyCommand = () => {
    const command = `echo "${otp}" > /tmp/secureauth_verification.txt`;
    navigator.clipboard.writeText(command);
    toast.success('Command copied to clipboard!');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen || !server) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-card/70 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Verify Server</h2>
            <p className="text-muted-foreground text-sm mt-1">{server.name}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-muted/10 border border-muted-foreground/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">Time Remaining</h3>
                <p className="text-foreground text-2xl font-bold">{formatTime(timeLeft)}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Complete verification before time runs out
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-primary font-medium mb-1">Verification Code</h3>
                <p className="text-muted-foreground text-sm">
                  Use this OTP to verify server ownership
                </p>
              </div>
              <button
                onClick={handleCopyOTP}
                className="bg-primary hover:bg-primary/90 text-foreground px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </button>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4">
              <code className="text-foreground font-mono text-lg tracking-wider">
                {otp || 'Generating...'}
              </code>
            </div>
          </div>

          <div className="bg-card/50 border border-border rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-foreground font-medium mb-1 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l3 3-3 3m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Verification Command
                </h3>
                <p className="text-muted-foreground text-sm">Run this on your server</p>
              </div>
              <button
                onClick={handleCopyCommand}
                className="bg-muted hover:bg-muted text-foreground px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </button>
            </div>
            <div className="bg-background rounded-lg p-3 overflow-x-auto">
              <code className="text-primary font-mono text-sm whitespace-nowrap">
                echo &quot;{otp}&quot; &gt; /tmp/secureauth_verification.txt
              </code>
            </div>
          </div>

          <div className="bg-white/5 border border-border rounded-xl p-4">
            <h3 className="text-foreground font-medium mb-3 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Verification Steps
            </h3>
            <ol className="space-y-3 text-foreground/90 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-foreground text-xs rounded-full flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-foreground">SSH into your server</strong>
                  <p className="text-muted-foreground mt-1">
                    Connect to your server using SSH or your preferred method
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-foreground text-xs rounded-full flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-foreground">Run the verification command</strong>
                  <p className="text-muted-foreground mt-1">
                    Copy and paste the command shown above to create the verification file
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-foreground text-xs rounded-full flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-foreground">Wait for automatic verification</strong>
                  <p className="text-muted-foreground mt-1">
                    Our system will automatically detect and verify your server within a few seconds
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {isPolling && (
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="animate-spin w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-primary font-medium">Checking verification status...</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Waiting for server verification
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/20">
          <p className="text-muted-foreground text-sm">
            OTP expires in <strong className="text-foreground">{formatTime(timeLeft)}</strong>
          </p>
          <button
            onClick={onClose}
            className="bg-muted hover:bg-muted text-foreground px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPopup;
