"use client";

import Link from "next/link";
import { useState } from "react";
import { DownloadCounter } from "./download-counter";
import { CliDemo } from "./cli-demo";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText("pip install run-git");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          AI-powered Git assistant for developers
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Write Better Commits & PRs
          <br />
          <span className="text-primary">with AI</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Stop wasting time writing PRs and reviewing code manually.
          <br className="hidden sm:block" />
          Let RUN-GIT do it for you.
        </p>

        {/* Install Command */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="bg-secondary rounded-xl border border-border overflow-hidden max-w-xl w-full">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <a 
                href="https://pypi.org/project/run-git/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                View on PyPI →
              </a>
              <button
                onClick={copyCommand}
                className="text-xs text-primary hover:text-primary/80 font-medium"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="p-4 text-left font-mono text-sm flex items-center gap-2">
              <span className="text-green-400">$</span>
              <span className="text-foreground">pip install run-git</span>
            </div>
          </div>
        </div>

        {/* Animated Download Counter */}
        <div className="mb-10">
          <DownloadCounter />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/signup"
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Try Free
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto border border-border text-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary transition-colors"
          >
            View Pricing
          </Link>
        </div>

        {/* Animated CLI Demo */}
        <div className="mb-8">
          <CliDemo />
        </div>

        {/* Learn More Link */}
        <div className="mb-16">
          <a
            href="https://github.com/himanshu231204/gitpush#features"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>View all features in documentation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}