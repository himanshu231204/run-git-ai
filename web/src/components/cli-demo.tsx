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
  { icon: "⚙️", text: "Settings", shortcut: "[c]", description: "Configuration" },
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
    const timer1 = setTimeout(() => setShowAscii(true), 100);
    const timer2 = setTimeout(() => setPhase(1), 800);
    const timer3 = setTimeout(() => setPhase(2), 1200);
    const timer4 = setTimeout(() => setShowMenu(true), 1600);
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
      }, 80 * (index + 1));
      return () => clearTimeout(timer);
    });
  }, [showMenu]);

  useEffect(() => {
    if (!showSubMenu) return;
    branchOpsFeatures.forEach((_, index) => {
      const timer = setTimeout(() => {
        setSubMenuItems((prev) => [...prev, index]);
      }, 100 * (index + 1));
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
        className="rounded-xl overflow-hidden cursor-pointer group"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0px rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Terminal Header - macOS style */}
        <div 
          className="flex items-center justify-between px-4 py-3"
          style={{ 
            background: 'linear-gradient(180deg, #2d2d44 0%, #1a1a2e 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }}></div>
          </div>
          <div className="flex items-center gap-3">
            <span 
              className="text-xs px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-70"
              style={{ 
                background: 'rgba(99, 102, 241, 0.2)', 
                color: '#818cf8',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}
            >
              ⚡ RUN-GIT Terminal
            </span>
          </div>
          <div className="w-20"></div>
        </div>

        {/* CLI Content */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
          {/* ASCII Art */}
          <pre 
            className={`font-bold mb-4 leading-tight transition-opacity duration-700 ${showAscii ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: '#a78bfa' }}
          >{`██████╗ ██╗   ██╗██╗   ██╗      ██████╗ ██╗████████╗
██╔══██╗██║   ██║██║   ██║     ██╔════╝ ██║╚══██╔══╝
██████╔╝██║   ██║██║   ██║     ██║  ███╗██║   ██║   
██╔══██╗██║   ██║██║   ██║     ██║   ██║██║   ██║   
██║  ██║╚██████╔╝██║   ██║     ╚██████╔╝██║   ██║   
╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═════╝ ╚═╝   ╚═╝`}</pre>

          {/* Tagline */}
          <div className={`text-center mb-4 transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-lg font-bold" style={{ color: '#a78bfa' }}>⚡ RUN-GIT ⚡</span>
          </div>
          <div className={`text-center mb-4 transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`} style={{ color: '#6b7280' }}>
            Git Operations, Simplified
          </div>
          <div className={`text-center mb-4 transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`} style={{ color: '#6b7280' }}>
            One Command • Zero Hassle • Full Control
          </div>

          {/* Menu Border */}
          <div className={`my-4 transition-all duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              className="py-2 text-center text-xs"
              style={{ 
                borderTop: '1px solid rgba(167, 139, 250, 0.3)',
                borderBottom: '1px solid rgba(167, 139, 250, 0.3)',
                color: '#a78bfa'
              }}
            >
              ╔═══════════════════════════════════════════════════════ 🚀 MAIN MENU ═══════════════════════════════════════════════════════╗
            </div>
          </div>

          {/* Welcome Text */}
          <div className={`text-center mb-4 transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div style={{ color: '#e5e7eb' }}>Welcome to run-git</div>
            <div className="text-xs" style={{ color: '#6b7280' }}>Git operations made effortless</div>
            <div className="mt-2" style={{ color: '#a78bfa' }}>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>

          {/* Features */}
          <div className={`space-y-0.5 transition-opacity duration-300 ${showMenu ? 'opacity-100' : 'opacity-0'}`}>
            {cliFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 py-1.5 px-3 rounded-lg transition-all duration-300 ${
                  visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${feature.selected ? "" : ""}`}
                style={{
                  background: feature.selected ? 'rgba(99, 102, 241, 0.15)' : 'transparent'
                }}
              >
                {feature.selected ? (
                  <span style={{ color: '#a78bfa' }}>▶ </span>
                ) : (
                  <span className="w-3"></span>
                )}
                <span className="text-base">{feature.icon}</span>
                <span 
                  className="font-medium"
                  style={{ color: feature.selected ? '#a78bfa' : '#e5e7eb' }}
                >
                  {feature.text}
                </span>
                <span 
                  className="px-2 py-0.5 rounded text-xs"
                  style={{ 
                    background: 'rgba(167, 139, 250, 0.2)', 
                    color: '#a78bfa',
                    border: '1px solid rgba(167, 139, 250, 0.3)'
                  }}
                >
                  {feature.shortcut}
                </span>
                <span className="text-xs hidden md:inline" style={{ color: '#6b7280' }}>
                  - {feature.description}
                </span>
              </div>
            ))}
          </div>

          {/* Branch Ops Submenu */}
          {showSubMenu && (
            <div 
              className={`mt-4 ml-4 pl-4 transition-opacity duration-500 ${showSubMenu ? 'opacity-100' : 'opacity-0'}`}
              style={{ borderLeft: '2px solid rgba(167, 139, 250, 0.4)' }}
            >
              <div className="text-xs mb-2" style={{ color: '#a78bfa' }}>
                ╭─────────────────────────────────────────────────── 🌿 BRANCH OPERATIONS ───────────────────────────────────────────────────╮
              </div>
              <div className="text-xs mb-2" style={{ color: '#e5e7eb' }}>
                │ Branch Operations
              </div>
              <div className="text-xs mb-2" style={{ color: '#6b7280' }}>
                │ Manage your branches easily
              </div>
              <div className="text-xs mb-2" style={{ color: '#a78bfa' }}>
                ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
              </div>
              
              <div className="space-y-0.5">
                {branchOpsFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 py-1.5 px-2 rounded transition-all duration-300 ${
                      subMenuItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      background: feature.selected ? 'rgba(99, 102, 241, 0.15)' : 'transparent'
                    }}
                  >
                    {feature.selected ? (
                      <span style={{ color: '#a78bfa' }}>▶ </span>
                    ) : (
                      <span className="w-3"></span>
                    )}
                    <span>{feature.icon}</span>
                    <span 
                      className="font-medium"
                      style={{ color: feature.selected ? '#a78bfa' : '#e5e7eb' }}
                    >
                      {feature.text}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ 
                        background: 'rgba(167, 139, 250, 0.2)', 
                        color: '#a78bfa',
                        border: '1px solid rgba(167, 139, 250, 0.3)'
                      }}
                    >
                      {feature.shortcut}
                    </span>
                    <span className="text-xs hidden md:inline" style={{ color: '#6b7280' }}>
                      - {feature.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exit */}
          <div 
            className={`mt-4 pt-3 transition-opacity duration-500 ${visibleItems.length > 0 ? 'opacity-100' : 'opacity-0'}`}
            style={{ borderTop: '1px solid rgba(167, 139, 250, 0.3)' }}
          >
            <span style={{ color: '#ef4444' }}>❌</span>
            <span style={{ color: '#e5e7eb' }} className="ml-2">Exit</span>
            <span 
              className="px-2 py-0.5 rounded text-xs ml-2"
              style={{ 
                background: 'rgba(167, 139, 250, 0.2)', 
                color: '#a78bfa',
                border: '1px solid rgba(167, 139, 250, 0.3)'
              }}
            >[q]</span>
          </div>

          {/* Footer hint */}
          <div className={`text-center mt-4 text-xs transition-opacity duration-500 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`} style={{ color: '#6b7280' }}>
            <span style={{ color: '#a78bfa' }}>➜</span> <span style={{ opacity: 0.6 }}>(Use arrow keys)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
