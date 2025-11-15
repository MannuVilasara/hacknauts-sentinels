import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-16 relative">
      <div className="fixed inset-0 z-0">
        <img
          src="/background-auth.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                SecureAuth
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A unified cybersecurity platform designed for developers, startups, and enterprises
              that consolidates multiple security tools into one comprehensive solution.
            </p>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/20 p-3 rounded-2xl mr-4">
                  <svg
                    className="w-8 h-8 text-red-400"
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
                <h2 className="text-3xl font-bold text-white">The Problem</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Developers juggle multiple security tools - separate solutions for code scanning,
                secrets management, vulnerability tracking, and compliance monitoring. This
                fragmentation leads to:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Increased costs and complexity</li>
                <li>• Security gaps between tools</li>
                <li>• Difficult centralized management</li>
                <li>• Slower incident response times</li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="bg-green-500/20 p-3 rounded-2xl mr-4">
                  <svg
                    className="w-8 h-8 text-green-400"
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
                <h2 className="text-3xl font-bold text-white">Our Solution</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                SecureAuth provides a unified platform with integrated security features:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>
                  • <span className="text-green-400">All-in-one</span> security dashboard
                </li>
                <li>
                  • <span className="text-blue-400">AI-powered</span> vulnerability analysis
                </li>
                <li>
                  • <span className="text-purple-400">Zero-trust</span> secrets vault
                </li>
                <li>
                  • <span className="text-red-400">Real-time</span> threat monitoring
                </li>
              </ul>
            </div>
          </div>

          {/* System Architecture */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              System <span className="text-purple-400">Architecture</span>
            </h2>

            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Frontend Layer</h3>
                  <p className="text-sm text-gray-400">Next.js dashboard with React components</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">API Gateway</h3>
                  <p className="text-sm text-gray-400">Fastify-based central routing layer</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Microservices</h3>
                  <p className="text-sm text-gray-400">Specialized security services</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="text-lg font-bold text-white mb-6 text-center">
                  Microservices Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white font-semibold">Auth Service</span>
                    </div>
                    <p className="text-xs text-gray-400">User management & authentication</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-white font-semibold">Scanner Service</span>
                    </div>
                    <p className="text-xs text-gray-400">Repository security analysis</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white font-semibold">AI Service</span>
                    </div>
                    <p className="text-xs text-gray-400">Vulnerability explanations & fixes</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white font-semibold">Vault Service</span>
                    </div>
                    <p className="text-xs text-gray-400">Zero-trust secrets management</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white font-semibold">Log Service</span>
                    </div>
                    <p className="text-xs text-gray-400">Real-time monitoring & alerts</p>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-white font-semibold">Billing Service</span>
                    </div>
                    <p className="text-xs text-gray-400">Subscription management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Technology <span className="text-cyan-400">Stack</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Frontend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Framework</span>
                    <span className="text-cyan-400 font-semibold">Next.js 14+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">UI Library</span>
                    <span className="text-blue-400 font-semibold">React 18+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Styling</span>
                    <span className="text-pink-400 font-semibold">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">State Management</span>
                    <span className="text-orange-400 font-semibold">Zustand</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Type Safety</span>
                    <span className="text-blue-400 font-semibold">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  Backend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Runtime</span>
                    <span className="text-green-400 font-semibold">Node.js 20+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">ORM</span>
                    <span className="text-blue-400 font-semibold">Prisma</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">AI Model</span>
                    <span className="text-purple-400 font-semibold">Gemini 2.5 flash</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">GitHub Integration</span>
                    <span className="text-gray-300 font-semibold">GitHub API </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  Data & Storage
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Primary Database</span>
                    <span className="text-blue-400 font-semibold">PostgreSQL 16+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Caching</span>
                    <span className="text-red-400 font-semibold">Redis 7+</span>
                  </div>
                  2
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  DevOps & Infrastructure
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">Containerization</span>
                    <span className="text-blue-400 font-semibold">Docker</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl">
                    <span className="text-gray-300">CI/CD</span>
                    <span className="text-purple-400 font-semibold">GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-orange-400"
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
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Applications?
            </h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust SecureAuth to protect their code, secure their
              secrets, and maintain compliance with enterprise-grade security tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border border-orange-400/50 text-orange-400 px-8 py-3 rounded-xl font-semibold hover:bg-orange-400/10 transition-colors duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
