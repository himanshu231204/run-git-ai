"use client";

import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  type: "input" | "output" | "success" | "info" | "error" | "command";
  content: string;
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { type: "info", content: "╭──────────────────────────────────────────────────────────────────╮", delay: 0 },
  { type: "info", content: "│  ⚡ RUN-GIT - Git Operations Made Simple              │", delay: 50 },
  { type: "info", content: "╰──────────────────────────────────────────────────────────────────╯", delay: 50 },
  { type: "output", content: "", delay: 200 },
  { type: "command", content: "$ run-git --help", delay: 400 },
  { type: "output", content: "", delay: 100 },
  { type: "info", content: "━━━ AVAILABLE COMMANDS ━━━", delay: 150 },
  { type: "output", content: "", delay: 100 },
  { type: "success", content: "🚀  Quick Push        [p]  Push changes instantly", delay: 100 },
  { type: "success", content: "🆕  Create Repo      [n]  Create GitHub repository", delay: 80 },
  { type: "success", content: "📥  Clone Repo       [c]  Clone existing repo", delay: 80 },
  { type: "success", content: "🌿  Branch Ops       [b]  Branch management", delay: 80 },
  { type: "success", content: "📊  Status           [s]  View status & logs", delay: 80 },
  { type: "success", content: "🌳  Commit Graph    [g]  Visual commit tree", delay: 80 },
  { type: "success", content: "🔄  Sync             [y]  Pull & push", delay: 80 },
  { type: "success", content: "⚙️  Settings         [c]  Configuration", delay: 80 },
  { type: "success", content: "🤖  AI Assistant    [i]  AI commit, PR & review", delay: 80 },
  { type: "success", content: "🔧  Advanced         [a]  Stash, undo, etc.", delay: 80 },
  { type: "success", content: "📚  Help            [h]  Keyboard shortcuts", delay: 80 },
  { type: "output", content: "", delay: 100 },
  { type: "info", content: "━━━ QUICK START ━━━", delay: 150 },
  { type: "output", content: "", delay: 100 },
  { type: "command", content: "$ pip install run-git", delay: 100 },
  { type: "success", content: "✓ Installed successfully!", delay: 200 },
  { type: "output", content: "", delay: 100 },
  { type: "command", content: "$ run-git ai commit", delay: 100 },
  { type: "output", content: "  Analyzing changes...", delay: 150 },
  { type: "success", content: "  ✓ feat(auth): implement JWT login system", delay: 100 },
  { type: "output", content: "    - added login API endpoint", delay: 50 },
  { type: "output", content: "    - token validation middleware", delay: 50 },
  { type: "output", content: "    - improved security", delay: 50 },
  { type: "output", content: "", delay: 100 },
  { type: "info", content: "Press [q] to exit or [h] for more commands", delay: 200 },
];

export function CliDemo() {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex >= terminalLines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = terminalLines[currentIndex];
    const delay = currentLine.delay || 50;

    if (currentLine.type === "command" || currentLine.type === "input") {
      // Typing effect for commands
      if (charIndex < currentLine.content.length) {
        const timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, { ...currentLine, content: currentLine.content }]);
          setCurrentIndex((prev) => prev + 1);
          setCharIndex(0);
        }, delay);
        return () => clearTimeout(timer);
      }
    } else {
      // Instant display for other lines
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, charIndex]);

  useEffect(() => {
    // Auto scroll to bottom
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  const restartAnimation = () => {
    setDisplayedLines([]);
    setCurrentIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  };

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
      case "input":
        return { color: "#22c55e", prefix: "$ " };
      case "success":
        return { color: "#22c55e", prefix: "" };
      case "error":
        return { color: "#ef4444", prefix: "" };
      case "info":
        return { color: "#a78bfa", prefix: "" };
      case "output":
      default:
        return { color: "#9ca3af", prefix: "" };
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        onClick={restartAnimation}
        className="rounded-xl overflow-hidden cursor-pointer group"
        style={{
          background: "#0d1117",
          boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.4)'
        }}
      >
        {/* Terminal Header */}
        <div 
          className="flex items-center justify-between px-4 py-3"
          style={{ 
            background: "#161b22",
            borderBottom: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }}></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "#8b949e" }}>run-git</span>
            <span 
              className="text-xs px-2 py-0.5 rounded transition-opacity duration-300"
              style={{ 
                background: "rgba(167, 139, 250, 0.2)", 
                color: "#a78bfa",
                opacity: isTyping ? 1 : 0.5
              }}
            >
              {isTyping ? "running..." : "completed"}
            </span>
          </div>
          <div className="w-20"></div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={containerRef}
          className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto max-h-[500px] overflow-y-auto"
          style={{ color: "#c9d1d9" }}
        >
          {displayedLines.map((line, index) => {
            const style = getLineColor(line.type);
            const content = line.type === "command" || line.type === "input" 
              ? line.content.substring(0, charIndex) 
              : line.content;
            
            return (
              <div 
                key={index} 
                className="whitespace-pre"
                style={{ 
                  color: style.color,
                  lineHeight: "1.8",
                  minHeight: "1.8em"
                }}
              >
                {line.type === "command" || line.type === "input" ? (
                  <>
                    <span style={{ color: "#22c55e" }}>$ </span>
                    {content}
                    {index === currentIndex - 1 && isTyping && (
                      <span 
                        className="animate-pulse" 
                        style={{ 
                          background: "#22c55e",
                          width: "8px",
                          height: "14px",
                          display: "inline-block",
                          verticalAlign: "middle",
                          marginLeft: "2px"
                        }}
                      ></span>
                    )}
                  </>
                ) : (
                  content
                )}
              </div>
            );
          })}

          {/* Blinking cursor when done */}
          {!isTyping && (
            <div className="flex items-center gap-2 mt-4" style={{ color: "#8b949e" }}>
              <span style={{ color: "#22c55e" }}>$</span>
              <span 
                className="animate-pulse" 
                style={{ 
                  background: "#22c55e",
                  width: "8px",
                  height: "14px",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
              ></span>
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        <div 
          className="flex items-center justify-between px-4 py-2 text-xs"
          style={{ 
            background: "#161b22",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "#8b949e"
          }}
        >
          <div className="flex items-center gap-4">
            <span>▲ ready</span>
            <span>Python 3.x</span>
          </div>
          <div className="flex items-center gap-4">
            <span 
              className="transition-opacity duration-300 group-hover:opacity-100 opacity-50"
            >
              Click to replay ↻
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
