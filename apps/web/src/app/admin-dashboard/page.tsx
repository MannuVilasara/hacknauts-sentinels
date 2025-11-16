'use client';

import React from 'react';
import { useAuthStore } from '@/stores/auth.store';

const AdminDashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage users, security settings, and system administration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 border border-primary/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary text-sm font-medium">Total Users</p>
                  <p className="text-3xl font-bold text-foreground">1,234</p>
                </div>
                <div className="bg-primary/30 p-3 rounded-full">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-xl rounded-2xl p-6 border border-primary/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary text-sm font-medium">Active Sessions</p>
                  <p className="text-3xl font-bold text-foreground">842</p>
                </div>
                <div className="bg-primary/30 p-3 rounded-full">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-xl rounded-2xl p-6 border border-destructive/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-destructive text-sm font-medium">Security Alerts</p>
                  <p className="text-3xl font-bold text-foreground">7</p>
                </div>
                <div className="bg-destructive/30 p-3 rounded-full">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 border border-border/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">System Status</p>
                  <p className="text-3xl font-bold text-foreground">99.9%</p>
                </div>
                <div className="bg-muted/30 p-3 rounded-full">
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
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                User Management
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-muted transition-colors duration-200 text-foreground flex items-center justify-between">
                  <span>View All Users</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-muted transition-colors duration-200 text-foreground flex items-center justify-between">
                  <span>Manage Roles</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-muted transition-colors duration-200 text-foreground flex items-center justify-between">
                  <span>User Activity Logs</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Security Management
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-muted transition-colors duration-200 text-foreground flex items-center justify-between">
                  <span>Security Alerts</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-muted transition-colors duration-200 text-foreground flex items-center justify-between">
                  <span>Failed Login Attempts</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-muted transition-colors duration-200 text-foreground flex items-center justify-between">
                  <span>System Configuration</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-card/40 backdrop-blur-xl rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Recent System Activities</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <p className="text-foreground">New user registration: john@example.com</p>
                  <p className="text-muted-foreground text-sm">2 minutes ago</p>
                </div>
                <span className="text-primary text-sm">Success</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <p className="text-foreground">Failed login attempt from unknown IP</p>
                  <p className="text-muted-foreground text-sm">5 minutes ago</p>
                </div>
                <span className="text-destructive text-sm">Alert</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <p className="text-foreground">System backup completed successfully</p>
                  <p className="text-muted-foreground text-sm">1 hour ago</p>
                </div>
                <span className="text-primary text-sm">Info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
