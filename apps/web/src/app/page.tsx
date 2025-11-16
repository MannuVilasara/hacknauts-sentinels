'use client';

import Link from 'next/link';
import { useAuthStore } from '@/stores/auth.store';

export default function HomePage() {
  const user = useAuthStore((state) => state.user);

  const getDashboardRoute = () => {
    if (!user) return '/user-dashboard';
    return user.role === 'serviceProvider' ? '/provider-dashboard' : '/user-dashboard';
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0">
        <img
          src="/background-auth.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-card/80"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl border border-border mb-8">
                <svg
                  className="w-10 h-10 text-foreground"
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

              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Zero-Day
                <span className="text-transparent bg-clip-text bg-primary"> Protection</span>
              </h1>

              <p className="text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
                Bridge the critical security gap. Get vulnerability fixes from service providers
                <span className="text-destructive font-semibold"> before public patches</span> are
                released, protecting your users during the most dangerous vulnerability window.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {!user ? (
                  <Link
                    href="/signup"
                    className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold text-lg hover:bg-muted/100 transition-all duration-300 shadow-2xl hover:shadow-primary/20"
                  >
                    Start Free Protection
                  </Link>
                ) : (
                  <Link
                    href={getDashboardRoute()}
                    className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold text-lg hover:bg-muted/100 transition-all duration-300 shadow-2xl hover:shadow-primary/20"
                  >
                    Go to Dashboard
                  </Link>
                )}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-primary">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">
                  FREE Plan Available • Premium Subscriptions Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Security Gap Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Critical <span className="text-destructive">Security Gap</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When servers discover vulnerabilities, there's a dangerous window between discovery
                and public patch release. We eliminate this gap by providing immediate protection.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border text-center hover:border-red-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-destructive/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-destructive"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Vulnerability Discovered</h3>
                <p className="text-muted-foreground">
                  Server providers (Ubuntu, AWS, Vercel) discover security vulnerabilities in their
                  systems before public disclosure.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border text-center hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Private Sharing</h3>
                <p className="text-muted-foreground">
                  Partners share vulnerability details and tested fixes with SecureAuth immediately
                  - before working on public patches.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border text-center hover:border-green-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Instant Protection</h3>
                <p className="text-muted-foreground">
                  We automatically apply fixes to registered users' GitHub repos via Pull Requests -
                  protecting them during the critical window.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Features Section */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Unified <span className="text-primary">Security Platform</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for enterprise-grade security in one comprehensive platform.
                Stop juggling multiple tools and consolidate your security stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border hover:border-red-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-destructive/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-destructive"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Git Repository Scanner</h3>
                <p className="text-muted-foreground text-sm">
                  Automated code analysis detecting hardcoded secrets, API keys, vulnerabilities,
                  and unsafe configurations with AI-powered auto-fixes.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Zero-Trust Secrets Vault</h3>
                <p className="text-muted-foreground text-sm">
                  Client-side encrypted vault for API keys, passwords, tokens, and certificates.
                  Only you can decrypt your data.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-muted/20 rounded-2xl flex items-center justify-center mb-4">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">AI Security Assistant</h3>
                <p className="text-muted-foreground text-sm">
                  Intelligent AI explains vulnerabilities in plain language, suggests secure
                  practices, and generates automated fixes.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border hover:border-yellow-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-muted/20 rounded-2xl flex items-center justify-center mb-4">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Log Monitoring & Alerts</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time log analysis detecting application errors, attack attempts, suspicious
                  behavior, and misconfigurations.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Zero-Day Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Get security fixes immediately when vulnerabilities are discovered, before public
                  patches are released.
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/500/20 rounded-2xl flex items-center justify-center mb-4">
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
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Developer Dashboard</h3>
                <p className="text-muted-foreground text-sm">
                  Modern UI with vulnerability reports, secrets management, log viewer, and auto-fix
                  suggestions in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Revolutionize Your Security?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the future of automated cybersecurity and protect what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!user ? (
                <Link
                  href="/signup"
                  className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold hover:bg-muted/100 transition-all duration-300"
                >
                  Start Free Protection
                </Link>
              ) : (
                <Link
                  href={getDashboardRoute()}
                  className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold hover:bg-muted/100 transition-all duration-300"
                >
                  Go to Dashboard
                </Link>
              )}
              <Link
                href="/about"
                className="border border-border text-foreground px-8 py-4 rounded-2xl font-bold hover:bg-muted transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
