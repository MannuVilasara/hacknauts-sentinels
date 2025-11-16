'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useAuthStore } from '@/stores/auth.store';
import axios from 'axios';
// import { API_URL } from '@/lib/env';

interface LoginHistoryItem {
  id: string;
  loggedInAt: string;
  ipAddress: string;
  city: string;
  region: string;
  country: string;
  browser: string;
  os: string;
  isp: string;
}

const ProfileTab = () => {
  const { user } = useAuthStore();
  const [loginHistory, setLoginHistory] = useState<LoginHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLoginHistory = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get(`http://localhost:3001/api/users/login-history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (response.data?.data?.loginHistory) {
        setLoginHistory(response.data.data.loginHistory);
      }
    } catch (error) {
      console.error('Error fetching login history:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLoginHistory();
  }, [fetchLoginHistory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Account Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Profile Details</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">Username</p>
                <p className="text-foreground font-medium">{user?.username || 'N/A'}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="text-foreground font-medium">{user?.email || 'N/A'}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Role</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary capitalize">
                  {user?.role || 'user'}
                </span>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Member Since</p>
                <p className="text-foreground font-medium">
                  {user?.createdAt ? formatDate(user.createdAt) : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Security Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Account Status</span>
                <span className="text-primary font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Protected Repos</span>
                <span className="text-foreground font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">GitHub Connected</span>
                <span className="text-destructive font-medium">Not Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Last Security Scan</span>
                <span className="text-muted-foreground font-medium">Never</span>
              </div>
            </div>
          </div>

          <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-muted/20 rounded-2xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Protection Stats</h3>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive">0</div>
                <div className="text-muted-foreground text-sm">Vulnerabilities Fixed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-muted-foreground">0</div>
                <div className="text-muted-foreground text-sm">Pending Patches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Login Activity</h2>
        <div className="bg-card/40 backdrop-blur-xl rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/20">
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-foreground/90 font-medium">
                    Date & Time
                  </th>
                  <th className="text-left py-4 px-6 text-foreground/90 font-medium">Location</th>
                  <th className="text-left py-4 px-6 text-foreground/90 font-medium">Device</th>
                  <th className="text-left py-4 px-6 text-foreground/90 font-medium">IP Address</th>
                  <th className="text-left py-4 px-6 text-foreground/90 font-medium">ISP</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-8 px-6 text-center text-muted-foreground">
                      Loading login history...
                    </td>
                  </tr>
                ) : loginHistory && loginHistory.length > 0 ? (
                  loginHistory.map((login) => (
                    <tr
                      key={login.id}
                      className="border-b border-border hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-6 text-foreground">{formatDate(login.loggedInAt)}</td>
                      <td className="py-4 px-6 text-foreground/90">
                        {[login.city, login.region, login.country]
                          .filter(Boolean)
                          .filter((item) => item !== 'Unknown')
                          .join(', ') || 'Unknown'}
                      </td>
                      <td className="py-4 px-6 text-foreground/90">
                        {login.browser && login.os
                          ? `${login.browser} on ${login.os}`
                          : 'Unknown Device'}
                      </td>
                      <td className="py-4 px-6 text-foreground/90 font-mono">
                        {login.ipAddress || 'N/A'}
                      </td>
                      <td className="py-4 px-6 text-foreground/90">{login.isp || 'Unknown'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 px-6 text-center text-muted-foreground">
                      No login history available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
