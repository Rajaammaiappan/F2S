"use client";

import React, { useState, useEffect } from "react";
import { 
  Cpu, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight, 
  Activity,
  Layers,
  BarChart3,
  Bot,
  ShieldCheck,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = [
        "hero",
        "services",
        "automation-flow",
        "solutions",
        "projects",
        "roi-calculator",
        "about",
        "contact",
      ];
      
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Automation Flow", href: "#automation-flow" },
    { name: "Industries", href: "#solutions" },
    { name: "Case Studies", href: "#projects" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3",
          isScrolled
            ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Formula2Solution Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 border border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
              <div className="absolute inset-0 bg-cyan-400/10 rounded-xl blur-sm group-hover:blur-md transition-all" />
              <svg 
                className="w-6 h-6 text-cyan-400 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-lg font-bold tracking-tight text-white font-heading">
                <span>Formula</span>
                <span className="text-cyan-400">2</span>
                <span className="text-cyan-400 ml-0.5">Solution</span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono -mt-1">
                Enterprise AI & Automation
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "text-cyan-300 bg-white/10 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action & System Status */}
          <div className="hidden md:flex items-center gap-4">
            {/* System Status Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/5 text-[11px] text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono">AI Systems 99.9% Online</span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.55)] transition-all duration-300 transform active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
                <span>Start Automation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#050816]/95 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between border-b border-white/10 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400">Navigation Menu</span>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Live Systems
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-lg font-medium text-slate-200 hover:text-cyan-400 border-b border-white/5 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              Start Your Automation
            </button>
            <div className="text-center text-xs text-slate-500 font-mono">
              Formula2Solution • Bangalore / Coimbatore, India
            </div>
          </div>
        </div>
      )}
    </>
  );
}
