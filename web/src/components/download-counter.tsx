"use client";

import { useState, useEffect } from "react";

export function DownloadCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch download count from Pepy API
    const fetchCount = async () => {
      try {
        const response = await fetch("https://api.pepy.tech/api/v2/projects/run-git");
        if (response.ok) {
          const data = await response.json();
          const totalDownloads = data.total_downloads || 0;
          setCount(totalDownloads);
        } else {
          // Fallback to parsing from image
          setCount(null);
        }
      } catch {
        setCount(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  // If we have count, show animated counter
  if (!loading && count !== null && count > 0) {
    return <AnimatedCounter target={count} />;
  }

  // Otherwise show the Pepy badge image
  return (
    <a 
      href="https://pepy.tech/projects/run-git" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block transition-transform hover:scale-105"
    >
      <img 
        src="https://static.pepy.tech/personalized-badge/run-git?period=total&units=INTERNATIONAL_SYSTEM&left_color=grey&right_color=brightgreen&left_text=downloads" 
        alt="PyPI Downloads"
        className="h-7"
      />
    </a>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const [displayCount, setDisplayCount] = useState(1);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 1;
    const endValue = target;

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(startValue + (endValue - startValue) * easedProgress);
      
      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <a 
      href="https://pepy.tech/projects/run-git" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full border border-border hover:border-green-500/50 hover:bg-secondary transition-all duration-300"
    >
      <div className="relative">
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
      </div>
      
      <span className="text-muted-foreground text-sm font-medium">Downloads</span>
      
      <span 
        className="text-3xl font-bold text-green-400 tabular-nums tracking-tight"
        style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
      >
        {formatNumber(displayCount)}
      </span>
    </a>
  );
}
