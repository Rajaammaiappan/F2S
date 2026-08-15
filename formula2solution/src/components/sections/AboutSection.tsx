"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Search,
  PenTool,
  Code2,
  Gauge,
  Rocket
} from "lucide-react";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  const [activePhase, setActivePhase] = useState(2); // Automate by default

  const timelinePhases = [
    {
      step: "01",
      title: "Discover",
      subtitle: "Process Mining & Friction Audit",
      desc: "We analyze your existing workflows, shadow operators, extract baseline metrics, and pinpoint high-ROI automation candidates.",
      deliverable: "Diagnostic Blueprint & ROI Model",
      icon: Search,
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Architecture & Security Protocol",
      desc: "Our architects draft end-to-end data schemas, model guardrails, RPA exception flows, and SOC2-compliant access policies.",
      deliverable: "Technical Specification & Wireframes",
      icon: PenTool,
    },
    {
      step: "03",
      title: "Automate",
      subtitle: "Rapid Engineering & AI Deployment",
      desc: "We construct custom AI agents, RPA bots, Power BI data models, and Next.js applications in agile 2-week continuous delivery sprints.",
      deliverable: "Tested Production System & Bot Swarm",
      icon: Code2,
    },
    {
      step: "04",
      title: "Optimize",
      subtitle: "Telemetry Tuning & Error Minimization",
      desc: "We monitor live transactional loads, refine LLM prompts, tune DAX query latencies, and eliminate residual edge-case errors.",
      deliverable: "99.8% Accuracy Benchmark SLA",
      icon: Gauge,
    },
    {
      step: "05",
      title: "Scale",
      subtitle: "Cross-Departmental Expansion",
      desc: "We expand the verified automation framework across other facilities, business units, and international subsidiaries.",
      deliverable: "Enterprise-Wide Automation Autonomy",
      icon: Rocket,
    },
  ];

  const pillars = [
    {
      title: "Who We Are",
      desc: "Formula2Solution is an enterprise automation, AI, and digital transformation powerhouse based in Bangalore & Coimbatore. We bridge deep software engineering with modern cognitive AI.",
      icon: Cpu,
    },
    {
      title: "What We Solve",
      desc: "We eradicate fragmented paper operations, manual copy-pasting, multi-week approval delays, and disconnected legacy ERP systems.",
      icon: Target,
    },
    {
      title: "Why Clients Trust Us",
      desc: "Our solutions are zero-trust compliant, cloud-agnostic, built for 99.99% uptime, and engineered to deliver measurable ROI within the first 60 days.",
      icon: ShieldCheck,
    },
    {
      title: "Automation-First Mindset",
      desc: "We treat every manual step as an engineering problem waiting for an elegant, self-healing automated solution.",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>THE FORMULA2SOLUTION DNA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Engineering the <span className="gradient-text-glow text-glow-cyan">Autonomous Enterprise</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We partner with ambitious enterprises to eliminate operational drag through resilient AI systems, precision RPA software bots, and real-time intelligence.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-5 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5-Phase Animated Timeline Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#070D1E] border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
              Our 5-Phase Delivery Lifecycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Discover → Design → Automate → Optimize → Scale
            </h3>
          </div>

          {/* Timeline Phase Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {timelinePhases.map((phase, idx) => {
              const Icon = phase.icon;
              const isActive = activePhase === idx;

              return (
                <button
                  key={phase.step}
                  onClick={() => setActivePhase(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    isActive
                      ? "bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] scale-105"
                      : "bg-surface/80 border-white/10 text-slate-400 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {phase.step}
                    </span>
                    <Icon className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div className="text-sm font-bold font-heading text-white">
                    {phase.title}
                  </div>
                  <span className="text-[10px] text-slate-400 truncate block mt-0.5">
                    {phase.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Banner */}
          <div className="p-6 rounded-2xl bg-[#0B1220] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono text-cyan-400 uppercase">
                PHASE {timelinePhases[activePhase].step} • {timelinePhases[activePhase].title}
              </span>
              <h4 className="text-lg font-bold text-white font-heading">
                {timelinePhases[activePhase].subtitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {timelinePhases[activePhase].desc}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Deliverable: {timelinePhases[activePhase].deliverable}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2"
            >
              <span>Initiate Phase 01 Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
