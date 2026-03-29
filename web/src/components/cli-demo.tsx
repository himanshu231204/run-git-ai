"use client";

import { useState, useEffect } from "react";

interface CliFeature {
  icon: string;
  text: string;
  shortcut: string;
  description: string;
  selected?: boolean;
}

interface SubFeature {
  icon: string;
  text: string;
  shortcut: string;
  description: string;
  selected?: boolean;
}

const cliFeatures: CliFeature[] = [
  { icon: "🚀", text: "Quick Push", shortcut: "[p]", description: "Push changes instantly" },
  { icon: "🆕", text: "Create New Repo", shortcut: "[n]", description: "Create GitHub repository" },
  { icon: "📥", text: "Clone Repo", shortcut: "[c]", description: "Clone existing repository" },
  { icon: "🌿", text: "Branch Ops", shortcut: "[b]", description: "Branch management", selected: true },
  { icon: "📊", text: "Status/History", shortcut: "[s]", description: "View status & logs" },
  { icon: "🌳", text: "Commit Graph", shortcut: "[g]", description: "Visual commit tree & diff" },
  { icon: "🔄", text: "Sync", shortcut: "[y]", description: "Pull & push" },
  { icon: "⚙️", text: "Settings", shortcut: "[s]", description: "Configuration" },
  { icon: "🤖", text: "AI Assistant", shortcut: "[i]", description: "AI commit, PR & review" },
  { icon: "🔧", text: "Advanced Tools", shortcut: "[a]", description: "Stash, undo, etc." },
  { icon: "📚", text: "Help & Docs", shortcut: "[h]", description: "Keyboard shortcuts" },
];

const branchOpsFeatures: SubFeature[] = [
  { icon: "📋", text: "List Branches", shortcut: "[l]", description: "View all branches", selected: true },
  { icon: "➕", text: "Create Branch", shortcut: "[n]", description: "Create new branch" },
  { icon: "🔄", text: "Switch Branch", shortcut: "[s]", description: "Switch to branch" },
  { icon: "🗑️", text: "Delete Branch", shortcut: "[d]", description: "Delete a branch" },
  { icon: "🔀", text: "Merge Branch", shortcut: "[m]", description: "Merge branch" },
  { icon: "⬅️", text: "Back", shortcut: "[b]", description: "Return to main menu" },
];

export function CliDemo() {
  const [showAscii, setShowAscii] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [subMenuItems, setSubMenuItems] = useState<number[]>([]);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Show ASCII art
    const timer1 = setTimeout(() => setShowAscii(true), 100);
    
    // Phase 2: Show menu border
    const timer2 = setTimeout(() => setPhase(1), 800);
    
    // Phase 3: Show welcome text
    const timer3 = setTimeout(() => setPhase(2), 1200);
    
    // Phase 4: Show features
    const timer4 = setTimeout(() => setShowMenu(true), 1600);

    // Phase 5: Show submenu (Branch Ops)
    const timer5 = setTimeout(() => setShowSubMenu(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  useEffect(() => {
    if (!showMenu) return;
    cliFeatures.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, 100 * (index + 1));
      return () => clearTimeout(timer);
    });
  }, [showMenu]);

  useEffect(() => {
    if (!showSubMenu) return;
    branchOpsFeatures.forEach((_, index) => {
      const timer = setTimeout(() => {
        setSubMenuItems((prev) => [...prev, index]);
      }, 150 * (index + 1));
      return () => clearTimeout(timer);
    });
  }, [showSubMenu]);

  const restartAnimation = () => {
    setShowAscii(false);
    setShowMenu(false);
    setShowSubMenu(false);
    setVisibleItems([]);
    setSubMenuItems([]);
    setPhase(0);
    
    setTimeout(() => setShowAscii(true), 100);
    setTimeout(() => setPhase(1), 800);
    setTimeout(() => setPhase(2), 1200);
    setTimeout(() => setShowMenu(true), 1600);
    setTimeout(() => setShowSubMenu(true), 3500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        onClick={restartAnimation}
        className="bg-secondary rounded-xl border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all group"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
              Click to replay
            </span>
            <span className="text-primary">⚡</span>
          </div>
        </div>

        {/* CLI Content */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
          {/* ASCII Art */}
          <pre className={`text-primary font-bold mb-3 leading-tight transition-opacity duration-500 ${showAscii ? 'opacity-100' : 'opacity-0'}`}>{`██████╗ ██╗   ██╗██╗   ██╗      ██████╗ ██╗████████╗
██╔══██╗██║   ██║██║   ██║     ██╔════╝ ██║╚══██╔══╝
██████╔╝██║   ██║██║   ██║     ██║  ███╗██║   ██║   
██╔══██╗██║   ██║██║   ██║     ██║   ██║██║   ██║   
██║  ██║╚██████╔╝██║   ██║     ╚██████╔╝██║   ██║   
╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═════╝ ╚═╝   ╚═╝`}</pre>

          {/* Tagline */}
          <div className={`text-center text-primary mb-4 transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            ⚡ RUN-GIT ⚡
          </div>
          <div className={`text-center text-muted-foreground text-xs mb-4 transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            Git Operations, Simplified
          </div>
          <div className={`text-center text-muted-foreground text-xs mb-4 transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            One Command • Zero Hassle • Full Control
          </div>

          {/* Menu Border */}
          <div className={`my-4 transition-all duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="border-t border-b border-primary/30 py-2 text-center text-primary text-xs">
              ╔═══════════════════════════════════════════════════════ 🚀 MAIN MENU ═══════════════════════════════════════════════════════╗
            </div>
          </div>

          {/* Welcome Text */}
          <div className={`text-center mb-4 transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-foreground">Welcome to run-git</div>
            <div className="text-muted-foreground text-xs">Git operations made effortless</div>
            <div className="mt-2 text-primary">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>

          {/* Features */}
          <div className={`space-y-0.5 transition-opacity duration-300 ${showMenu ? 'opacity-100' : 'opacity-0'}`}>
            {cliFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 py-1 px-2 rounded transition-all duration-300 ${
                  visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${feature.selected ? "bg-primary/10" : ""}`}
              >
                {feature.selected ? (
                  <span className="text-primary">► </span>
                ) : (
                  <span className="w-3"></span>
                )}
                <span className="text-lg">{feature.icon}</span>
                <span className={`font-medium ${feature.selected ? "text-primary" : "text-foreground"}`}>
                  {feature.text}
                </span>
                <span className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">
                  {feature.shortcut}
                </span>
                <span className="text-muted-foreground text-xs hidden md:inline">
                  - {feature.description}
                </span>
              </div>
            ))}
          </div>

          {/* Branch Ops Submenu */}
          {showSubMenu && (
            <div className={`mt-4 ml-4 border-l-2 border-primary/50 pl-4 transition-opacity duration-500 ${showSubMenu ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-primary text-xs mb-2">
                ╭─────────────────────────────────────────────────── 🌿 BRANCH OPERATIONS ───────────────────────────────────────────────────╮
              </div>
              <div className="text-foreground text-xs mb-2">
                │ Branch Operations
              </div>
              <div className="text-muted-foreground text-xs mb-2">
                │ Manage your branches easily
              </div>
              <div className="text-primary text-xs mb-2">
                ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
              </div>
              
              <div className="space-y-0.5">
                {branchOpsFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 py-1 px-2 rounded transition-all duration-300 ${
                      subMenuItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    } ${feature.selected ? "bg-primary/10" : ""}`}
                  >
                    {feature.selected ? (
                      <span className="text-primary">► </span>
                    ) : (
                      <span className="w-3"></span>
                    )}
                    <span>{feature.icon}</span>
                    <span className={`font-medium ${feature.selected ? "text-primary" : "text-foreground"}`}>
                      {feature.text}
                    </span>
                    <span className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">
                      {feature.shortcut}
                    </span>
                    <span className="text-muted-foreground text-xs hidden md:inline">
                      - {feature.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exit */}
          <div className={`mt-3 pt-2 border-t border-primary/30 transition-opacity duration-500 ${visibleItems.length > 0 ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-red-400">❌</span>
            <span className="text-foreground ml-2">Exit</span>
            <span className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs ml-2">[q]</span>
          </div>

          {/* Footer hint */}
          <div className={`text-center mt-4 text-muted-foreground text-xs transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            ➜ <span className="text-muted-foreground/60">(Use arrow keys)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
