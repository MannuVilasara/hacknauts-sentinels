'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuthStore } from '@/stores/auth.store';
import { authService } from '@/services/auth.service';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error('All fields are required');
      return;
    }

    if (!acceptedTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setIsLoading(true);

    try {
      const response = await authService.login({ email, password });
      console.log('Login response:', response);

      const transformedUser = {
        ...response.user,
        loginHistory: response.user.loginHistory?.map(
          (entry: {
            timestamp?: string;
            loggedInAt?: string;
            ipAddress?: string;
            ip?: string;
          }) => ({
            ...entry,
            loggedInAt: entry.timestamp || entry.loggedInAt || new Date().toISOString(),
            ip: entry.ipAddress || entry.ip || 'unknown',
          })
        ),
      };

      setAuth(transformedUser, response.token);
      setEmail('');
      setPassword('');

      router.push('/');
      toast.success(response.message || 'Logged in successfully');
    } catch (err: unknown) {
      const errorMessage =
        (
          err as {
            response?: { data?: { error?: { message?: string } } };
            message?: string;
          }
        ).response?.data?.error?.message ||
        (err as { message?: string }).message ||
        'Error logging in';
      toast.error(errorMessage);
      console.error(
        'Login error:',
        (err as { response?: { data?: unknown } }).response?.data || err
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/background-auth.webp"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-card/60"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-foreground rounded-3xl shadow-2xl mb-6">
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Welcome
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {' '}
                  Back
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-md">
                Access your SecureAuth dashboard with enterprise-grade security
              </p>

              <div className="space-y-3 text-left max-w-md">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <span className="text-foreground/90">Secure authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <span className="text-foreground/90">Protected user sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <span className="text-foreground/90">Advanced threat detection</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="backdrop-blur-xl rounded-3xl shadow-2xl border border-border p-8 bg-card/95">
                <h2 className="text-2xl text-foreground font-bold mb-1 text-center">Log In</h2>

                <p className="text-muted-foreground text-sm text-center mb-8">
                  Enter your credentials to access your account
                </p>

                <form onSubmit={submitHandler} className="space-y-5">
                  <div className="space-y-4">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 rounded-xl bg-card/40 text-foreground placeholder-muted-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    />

                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-xl bg-card/40 text-foreground placeholder-muted-foreground border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="acceptTermsLogin"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded bg-card/40 border border-border/40 text-foreground focus:ring-primary/50"
                    />
                    <label
                      htmlFor="acceptTermsLogin"
                      className="text-foreground/90 text-sm cursor-pointer"
                    >
                      I agree to the{' '}
                      <Link
                        href="/terms-and-conditions"
                        className="text-foreground hover:text-foreground/90 underline"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>

                  <div className="text-right mt-2">
                    <a
                      href="#"
                      className="text-foreground hover:text-foreground/90 transition-colors duration-300 text-sm"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 py-3 cursor-pointer rounded-xl bg-foreground text-background font-semibold hover:bg-muted/100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                        Log In
                      </div>
                    )}
                  </button>
                </form>

                <div className="text-center mt-6 pt-6 border-t border-border/30">
                  <p className="text-muted-foreground text-sm">
                    Don&apos;t have an account?{' '}
                    <Link
                      href="/signup"
                      className="text-foreground hover:text-foreground/90 font-medium transition-colors duration-300"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
