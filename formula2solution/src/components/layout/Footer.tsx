"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Youtube,
  ShieldCheck,
  CheckCircle2,
  Send
} from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer className="relative bg-[#050816] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[250px] bg-gradient-to-t from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <svg
                  className="w-6 h-6 text-cyan-400"
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

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We engineer mission-critical AI systems, robotic process automation, and bespoke cloud architectures that eliminate manual overhead and accelerate enterprise growth.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://x.com", label: "Twitter" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Solutions & Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 font-semibold">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  AI & GenAI Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Robotic Process Automation (RPA)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Power BI & Telemetry
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Workflow Orchestration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Next.js Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Enterprise Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Cloud DevOps & Kubernetes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industry Verticals */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 font-semibold">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  Manufacturing 4.0
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  Aerospace & Defense
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  Precision Engineering
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  Quality Management (Vision AI)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  Finance & Invoice Processing
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  Global Supply Chain
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-300 transition-colors">
                  HR & Operations Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 font-semibold">
              Enterprise Hubs
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Bangalore & Coimbatore, Karnataka / Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a
                href="mailto:hello@formula2solution.com"
                className="hover:text-cyan-400 transition-colors font-mono"
              >
                hello@formula2solution.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-mono">+91 XXXXX XXXXX</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-slate-400">
              SOC2 Ready • ISO 27001 Compliant Architecture
            </span>
          </div>

          <div className="font-mono text-center sm:text-right">
            © {new Date().getFullYear()} Formula2Solution. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
