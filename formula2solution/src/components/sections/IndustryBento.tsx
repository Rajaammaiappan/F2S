"use client";

import React from "react";
import { 
  Factory, 
  Plane, 
  Wrench, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  Users, 
  Activity, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industriesData";

interface IndustryBentoProps {
  onOpenConsultation: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Plane,
  Wrench,
  ShieldCheck,
  CreditCard,
  Truck,
  Users,
  Activity,
};

export default function IndustryBento({ onOpenConsultation }: IndustryBentoProps) {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>VERTICAL-SPECIFIC ARCHITECTURES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Tailored Solutions for <span className="gradient-text-glow text-glow-cyan">Industry Leaders</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every sector has unique regulatory mandates, hardware protocols, and operational workflows. We build custom-calibrated automation frameworks.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry) => {
            const Icon = iconMap[industry.iconName] || Activity;
            const isSpan2 = industry.size === "large";

            return (
              <div
                key={industry.id}
                onClick={onOpenConsultation}
                className={`group relative rounded-3xl p-7 glass-card glass-card-hover cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isSpan2 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Background Gradient Mesh */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top Bar: Icon + Metric Tag */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-300 font-bold">
                        {industry.metrics}{" "}
                        <span className="text-[10px] text-slate-400 font-normal">
                          {industry.metricLabel}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/20 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {industry.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>

                {/* Use-cases list */}
                <div className="pt-4 border-t border-white/10 relative z-10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    Enterprise Deployments:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {industry.useCases.map((uc, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.03] border border-white/10 text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
