"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Mock user data - replace with actual API call
const mockUserData = {
  email: "developer@example.com",
  apiKey: "sk_rungit_abc123xyz789",
  plan: "Free",
  usage: {
    used: 12,
    limit: 50,
  },
};

export default function DashboardPage() {
  const [userData, setUserData] = useState(mockUserData);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Copy API key to clipboard
  const copyApiKey = async () => {
    try {
      await navigator.clipboard.writeText(userData.apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback: select the text
      const codeElement = document.querySelector('code');
      if (codeElement) {
        const range = document.createRange();
        range.selectNode(codeElement);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  };

  // Handle upgrade button click
  const handleUpgrade = async () => {
    setLoading(true);
    
    // Mock payment flow - replace with actual payment integration
    // 1. Call backend to create order
    // 2. Open payment UI (Razorpay/Stripe)
    // 3. On success, redirect to dashboard
    
    setTimeout(() => {
      // Simulate successful upgrade
      setUserData(prev => ({
        ...prev,
        plan: "Pro",
        usage: { used: 12, limit: 999999 },
      }));
      setLoading(false);
      alert("Successfully upgraded to Pro! Unlimited requests unlocked.");
    }, 1500);
  };

  // Calculate usage percentage
  const usagePercentage = Math.min(
    (userData.usage.used / userData.usage.limit) * 100,
    100
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RG</span>
            </div>
            <span className="text-xl font-bold text-foreground">RUN-GIT</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">{userData.email}</span>
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* API Key Section */}
          <div className="bg-secondary/50 rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Your API Key
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Use this key to authenticate with the RUN-GIT CLI tool.
            </p>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-background px-4 py-3 rounded-lg text-foreground font-mono text-sm overflow-x-auto">
                {userData.apiKey}
              </code>
              <button
                onClick={copyApiKey}
                className="bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Usage Section */}
          <div className="bg-secondary/50 rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Usage
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Your current API usage this month.
            </p>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">
                  Requests Used: <strong>{userData.usage.used}</strong> /{" "}
                  {userData.usage.limit === 999999
                    ? "Unlimited"
                    : userData.usage.limit}
                </span>
                <span className="text-muted-foreground">
                  {usagePercentage.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-background rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    userData.plan === "Pro"
                      ? "bg-green-500"
                      : usagePercentage > 80
                      ? "bg-red-500"
                      : "bg-primary"
                  }`}
                  style={{ width: `${usagePercentage}%` }}
                />
              </div>
            </div>
            {userData.plan === "Free" && userData.usage.limit - userData.usage.used <= 10 && (
              <p className="text-yellow-500 text-sm mt-4">
                ⚠️ You're running low on free requests.{" "}
                <button
                  onClick={handleUpgrade}
                  className="underline hover:text-yellow-400"
                >
                  Upgrade to Pro
                </button>{" "}
                for unlimited requests.
              </p>
            )}
          </div>

          {/* Plan Section */}
          <div className="bg-secondary/50 rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Current Plan
            </h2>
            <div className="flex items-center gap-4">
              <div
                className={`px-4 py-2 rounded-lg font-medium ${
                  userData.plan === "Pro"
                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                    : "bg-secondary text-muted-foreground border border-border"
                }`}
              >
                {userData.plan}
              </div>
              {userData.plan === "Free" && (
                <span className="text-muted-foreground text-sm">
                  5 requests/day • Basic features
                </span>
              )}
              {userData.plan === "Pro" && (
                <span className="text-green-500 text-sm">
                  Unlimited requests • Full features
                </span>
              )}
            </div>
          </div>

          {/* Upgrade Section */}
          {userData.plan === "Free" && (
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Upgrade to Pro
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                Unlock unlimited requests and advanced features.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited requests
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Full PR review feature
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Faster responses
                </li>
              </ul>
              <button
                onClick={handleUpgrade}
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? "Processing..." : "Upgrade to Pro - ₹299/month"}
              </button>
            </div>
          )}

          {/* Pro Features (for Pro users) */}
          {userData.plan === "Pro" && (
            <div className="bg-green-500/10 rounded-xl border border-green-500/20 p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Pro Features Active
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                You have access to all Pro features:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited requests
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Full PR review feature
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Faster responses
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Quick Start Guide */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Quick Start Guide
          </h2>
          <div className="bg-secondary/50 rounded-xl border border-border p-6">
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium">
                  1
                </span>
                <div>
                  <strong className="text-foreground">Install the CLI</strong>
                  <p className="text-sm mt-1">
                    Run: <code className="bg-background px-2 py-1 rounded">npm install -g run-git-ai</code>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium">
                  2
                </span>
                <div>
                  <strong className="text-foreground">Configure your API key</strong>
                  <p className="text-sm mt-1">
                    Run: <code className="bg-background px-2 py-1 rounded">run-git config set-api-key {userData.apiKey.substring(0, 15)}...</code>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium">
                  3
                </span>
                <div>
                  <strong className="text-foreground">Generate commit messages</strong>
                  <p className="text-sm mt-1">
                    Run: <code className="bg-background px-2 py-1 rounded">run-git ai commit</code>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}