"use client";

import React, { useState, useEffect } from "react";
import { 
  FileSpreadsheet, 
  Binary, 
  BrainCircuit, 
  Zap, 
  BarChart4, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Layers
} from "lucide-react";
import { flowStepsData, FlowStep } from "@/data/flowData";

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  Binary,
  BrainCircuit,
  Zap,
  BarChart4,
  TrendingUp,
};

export default function AutomationFlow() {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // AI Processing by default
  const [autoCycle, setAutoCycle] = useState(true);

  // Auto-cycle through the steps unless user interacts
  useEffect(() => {
    if (!autoCycle) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % flowStepsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoCycle]);

  const currentStep = flowStepsData[activeStepIndex];
  const CurrentIcon = iconMap[currentStep.iconName] || Zap;

  return (
    <section id="automation-flow" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070D1E]/90 border-y border-white/10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>THE INTELLIGENT TRANSFORMATION PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            From Manual Friction to <span className="gradient-text-glow text-glow-cyan">Autonomous Scale</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Witness how Formula2Solution takes fragmented analog inputs and turns them into self-healing, high-velocity enterprise workflows.
          </p>
        </div>

        {/* 6-Node Horizontal Pipeline Flow */}
        <div className="mb-12">
          {/* Horizontal Desktop Flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {flowStepsData.map((step, idx) => {
              const Icon = iconMap[step.iconName] || Zap;
              const isActive = activeStepIndex === idx;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setAutoCycle(false);
                  }}
                  className={`group relative p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? "bg-cyan-500/15 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)] scale-105 z-20"
                      : isPast
                      ? "bg-surface/90 border-cyan-500/30 text-slate-300"
                      : "bg-surface/50 border-white/5 text-slate-400 hover:border-white/20"
                  }`}
                >
                  {/* Glowing Connection Header */}
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isActive
                          ? "bg-cyan-400 text-black shadow-md"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      0{step.stepNumber}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        isActive ? "text-cyan-300 font-bold" : "text-slate-500"
                      }`}
                    >
                      STAGE {step.stepNumber}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-1 my-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                        isActive
                          ? "text-cyan-300 bg-cyan-400/20"
                          : "text-slate-400 bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div
                      className={`text-xs font-bold font-heading ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                      {step.shortDesc}
                    </div>
                  </div>

                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Deep-Dive Card (Inspector Panel) */}
        <div className="relative rounded-3xl bg-[#0B1220] border border-cyan-400/30 p-6 sm:p-10 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Stage Title & Descriptions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-mono uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                  STAGE 0{currentStep.stepNumber} • {currentStep.badge}
                </span>
                <span className="px-3 py-0.5 rounded-full text-xs font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Throughput: {currentStep.stats}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {currentStep.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.fullDesc}
              </p>

              {/* Before vs After Impact Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20">
                  <span className="text-[10px] font-mono uppercase text-red-400 font-bold tracking-wider block mb-1">
                    Without Formula2Solution
                  </span>
                  <p className="text-xs text-slate-300">
                    {currentStep.beforeStatus}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider block mb-1">
                    With Formula2Solution Engine
                  </span>
                  <p className="text-xs text-slate-200">
                    {currentStep.afterStatus}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Telemetry & Connected Modules */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  Telemetry Profile
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentStep.signalSpeed}
                </span>
              </div>

              <div>
                <span className="text-xs font-medium text-slate-300 mb-2 block">
                  Underlying Tech Engine
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentStep.techKeywords.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Interactive Pipeline Step</span>
                <button
                  onClick={() => {
                    setActiveStepIndex(
                      (prev) => (prev + 1) % flowStepsData.length
                    );
                    setAutoCycle(false);
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  <span>Advance to Stage 0{((activeStepIndex + 1) % flowStepsData.length) + 1}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
