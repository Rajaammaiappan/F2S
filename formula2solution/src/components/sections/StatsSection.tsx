"use client";

import React from "react";
import { 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Users, 
  Layers, 
  ShieldCheck,
  Zap
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "50+",
      label: "Enterprise Projects Delivered",
      subtext: "Across Manufacturing, Aerospace, and Finance",
      icon: Layers,
      color: "text-cyan-400",
    },
    {
      value: "20+",
      label: "Global Enterprise Clients",
      subtext: "Tier-1 Manufacturers, Fintechs, & Conglomerates",
      icon: Users,
      color: "text-blue-400",
    },
    {
      value: "100k+",
      label: "Human Labor Hours Automated",
      subtext: "Eliminating repetitive spreadsheets & manual entry",
      icon: Clock,
      color: "text-purple-400",
    },
    {
      value: "99.8%",
      label: "Process Execution Accuracy",
      subtext: "Zero-defect robotic bots & guarded LLM agents",
      icon: ShieldCheck,
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#070D1E]/95 border-y border-white/10 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-purple-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div
                    className={`text-4xl sm:text-5xl font-extrabold font-mono tracking-tight ${stat.color} text-glow-cyan mb-2`}
                  >
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold text-white font-heading mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
