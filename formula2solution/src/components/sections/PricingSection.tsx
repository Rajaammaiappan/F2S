"use client";

import React from "react";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, Flag } from "lucide-react";

interface PricingSectionProps {
  onOpenConsultation: (planName?: string) => void;
}

export default function PricingSection({ onOpenConsultation }: PricingSectionProps) {
  const plans = [
    {
      id: "sprint-fix",
      name: "Sprint Fix",
      tagline: "One painful repetitive task, automated and handed over.",
      price: "₹39K",
      period: "/ project",
      features: [
        "Mini process analysis of target task",
        "One custom automation script or bot",
        "Full documentation & handover session",
        "30-day post-delivery support warranty",
      ],
      isPopular: false,
      buttonText: "Choose Sprint Fix",
    },
    {
      id: "full-lap",
      name: "Full Lap",
      tagline: "A complete workflow, mapped end-to-end and rebuilt with automation.",
      price: "₹1.2L",
      period: "/ engagement",
      features: [
        "Full value stream map (current + future state)",
        "Up to 5 automations or one custom web tool",
        "Quantified waste & operational ROI report",
        "2 team training & walkthrough sessions",
        "90-day comprehensive support & tuning",
      ],
      isPopular: true,
      buttonText: "Choose Full Lap",
    },
    {
      id: "championship",
      name: "Championship",
      tagline: "Department-level CI program with ongoing development capacity.",
      price: "Custom",
      period: "Enterprise SLA",
      features: [
        "Department-wide multi-team process mapping",
        "Ongoing dedicated AI & software development",
        "Real-time executive KPI & Power BI dashboards",
        "Comprehensive team upskilling program",
        "Priority Tier-3 engineering support with SLA",
      ],
      isPopular: false,
      buttonText: "Talk to Us",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070D1E]/90 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Pays for Itself. <span className="gradient-text-glow text-glow-cyan">Usually in Month One.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Fixed-scope packages so you know the investment up front. Every plan includes deep process analysis, documentation, and source code handover.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.isPopular
                  ? "bg-gradient-to-b from-cyan-500/15 via-[#0B1220] to-[#0B1220] border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.25)] scale-105 z-20"
                  : "bg-[#0B1220] border border-white/10 hover:border-white/20 shadow-lg"
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-cyan-400 text-black shadow-md">
                  Most Chosen Plan
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white font-heading mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {p.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold font-mono text-cyan-400 text-glow-cyan">
                    {p.price}
                  </span>
                  <span className="text-xs text-slate-400 font-sans ml-2">
                    {p.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(p.name)}
                className={`w-full py-3.5 px-6 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  p.isPopular
                    ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:opacity-95"
                    : "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
                }`}
              >
                <span>{p.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
