"use client";

import React from "react";
import { 
  Sparkles, 
  UserCheck, 
  Wrench, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lightbulb,
  Flag
} from "lucide-react";

interface PitCrewSectionProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export default function PitCrewSection({ onOpenConsultation }: PitCrewSectionProps) {
  const steps = [
    {
      step: "30-MIN CALL",
      title: "Tell us the chore",
      desc: "A confidential chat about the repetitive task eating your week — reports, data entry, file wrangling, follow-ups. NDA-level discretion, always.",
      icon: UserCheck,
    },
    {
      step: "3–7 DAYS",
      title: "We build your tool",
      desc: "A small, private automation built around your exact workflow — simple enough that you fully understand and can explain every part of it.",
      icon: Wrench,
    },
    {
      step: "YOUR MOMENT",
      title: "You deliver the win",
      desc: "You deploy it, demo it, and present the improvement. We prep you with a walkthrough, talking points and a before/after savings summary.",
      icon: Award,
    },
    {
      step: "ONGOING",
      title: "Grow into the role",
      desc: "Optional coaching so you can maintain and extend the tool yourself — becoming your team's genuine go-to automation person.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="foryou" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050816] via-[#080E1E] to-[#050816] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-xs font-mono text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>FOR INDIVIDUAL PROFESSIONALS & CAREER LEADERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            You're the Driver. <br />
            <span className="text-amber-400 text-glow-cyan">We're the Pit Crew.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Working in a corporate job and want to stand out? Bring us the repetitive task that eats your week. We quietly build a small automation tool sized for you — <strong className="text-white">we put in the effort, you take the credit.</strong> Demo it to your team, log the hours saved, and turn it into your next appraisal story.
          </p>
        </div>

        {/* 4-Step Horizontal Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#0B1220] border border-white/10 hover:border-amber-400/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Details Grid: What's in the Box + Personal Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 cols: Package Breakdown */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0B1220] border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white font-heading mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                What's in Every Pit Crew Package
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {[
                  "A working tool for your exact task",
                  "Full code handover — it's 100% yours",
                  "Line-by-line walkthrough session",
                  "Demo prep & talking points script",
                  "Before/after time-savings summary report",
                  "Strict NDA & confidentiality guaranteed",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050816] border border-white/10 flex items-start gap-3 text-xs text-slate-300">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                <strong>Typical wins:</strong> A weekly report that took 4 hours now runs in 2 minutes · 300 files renamed and sorted in one click · meeting minutes auto-formatted and distributed · Excel consolidation that ran your Friday, retired.
              </p>
            </div>
          </div>

          {/* Right 5 cols: Pit Crew Personal Plans */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-500/10 via-[#0B1220] to-[#0B1220] border border-amber-400/40 flex flex-col justify-between shadow-[0_0_35px_rgba(245,158,11,0.15)]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-4">
                Personal Career Plans
              </span>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline pb-3 border-b border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Quick Lap</h4>
                    <p className="text-xs text-slate-400">One small tool + walkthrough session</p>
                  </div>
                  <span className="text-base font-mono font-bold text-amber-400">₹4,999</span>
                </div>

                <div className="flex justify-between items-baseline pb-3 border-b border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Race Season</h4>
                    <p className="text-xs text-slate-400">2 tools/month + Python automation coaching</p>
                  </div>
                  <span className="text-base font-mono font-bold text-amber-400">₹9,999<span className="text-xs text-slate-400 font-normal">/mo</span></span>
                </div>

                <div className="flex justify-between items-baseline pb-3 border-b border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Career Podium</h4>
                    <p className="text-xs text-slate-400">Tools + resume & appraisal strategy coaching</p>
                  </div>
                  <span className="text-base font-mono font-bold text-amber-400">₹14,999<span className="text-xs text-slate-400 font-normal">/mo</span></span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenConsultation("pit-crew")}
                className="w-full py-3 px-6 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-amber-600 via-red-500 to-amber-600 hover:opacity-95 shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center justify-center gap-2"
              >
                <Flag className="w-4 h-4" />
                <span>Start My Pit Stop (Confidential)</span>
              </button>
              <p className="text-center text-[10px] text-slate-400 font-mono mt-2">
                Personal plans. Personal invoicing. 100% confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
