"use client";

import React from "react";
import { 
  Factory, 
  Plane, 
  Wrench, 
  CreditCard, 
  HeartPulse, 
  ShoppingBag, 
  Building, 
  Cpu, 
  ShieldCheck,
  Zap,
  Globe2,
  Server
} from "lucide-react";

export default function TrustBar() {
  const industries = [
    { name: "Manufacturing 4.0", icon: Factory },
    { name: "Aerospace & Defense", icon: Plane },
    { name: "Precision Engineering", icon: Wrench },
    { name: "Global Finance & Banking", icon: CreditCard },
    { name: "Healthcare & MedTech", icon: HeartPulse },
    { name: "Omnichannel Retail", icon: ShoppingBag },
    { name: "Global Enterprise", icon: Building },
    { name: "Energy & Utilities", icon: Zap },
    { name: "Supply Chain & Freight", icon: Globe2 },
  ];

  const techPartners = [
    "Microsoft Certified Partner",
    "OpenAI Enterprise Ecosystem",
    "UiPath Automation Certified",
    "Power BI & Fabric Specialist",
    "AWS Advanced Architecture",
    "ISO 27001 Security Aligned",
  ];

  return (
    <section id="trust-bar" className="relative py-12 border-y border-white/5 bg-[#070D1C]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Trusted by Leaders in Mission-Critical Industries
        </span>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070D1C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070D1C] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track (Repeated twice for seamless loop) */}
        <div className="flex shrink-0 animate-marquee items-center gap-6 py-2">
          {industries.concat(industries).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface/80 border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all whitespace-nowrap group cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-white/5 group-hover:bg-cyan-400/20 flex items-center justify-center text-cyan-400 transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium font-heading tracking-wide">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partner & Certification Badges Strip */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-400 text-xs font-mono">
        {techPartners.map((partner, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
            <span className="hover:text-slate-200 transition-colors">{partner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
