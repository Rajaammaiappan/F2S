"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  ChevronDown, 
  Activity, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Cpu,
  BarChart2,
  CheckCircle2,
  Clock
} from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
}

export default function HeroSection({
  onOpenConsultation,
  onOpenVideo,
}: HeroSectionProps) {
  // Live simulated telemetry stream in Hero HUD
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [processedCount, setProcessedCount] = useState(148290);
  const [uptimeSeconds, setUptimeSeconds] = useState(128490);

  const liveTasks = [
    { name: "SAP Invoice Three-Way Reconcile", speed: "1.2s", status: "Auto-Cleared", color: "text-emerald-400" },
    { name: "CNC Tool Wear ML Prediction (Line 4)", speed: "35ms", status: "Optimal", color: "text-cyan-400" },
    { name: "Multimodal Bill of Lading OCR Intake", speed: "2.4s", status: "Verified 99.8%", color: "text-purple-400" },
    { name: "Engineering Change ECR Authorization", speed: "1.1s", status: "Dispatched", color: "text-blue-400" },
    { name: "Automated Power BI Nightly ETL Sync", speed: "850ms", status: "Aggregated", color: "text-amber-400" },
  ];

  useEffect(() => {
    const taskInterval = setInterval(() => {
      setActiveTaskIndex((prev) => (prev + 1) % liveTasks.length);
      setProcessedCount((prev) => prev + Math.floor(Math.random() * 3 + 1));
    }, 2800);

    const uptimeInterval = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(taskInterval);
      clearInterval(uptimeInterval);
    };
  }, [liveTasks.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          src="/videos/digital-network.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/50 to-[#050816]/90" />
      </div>

      {/* Floating Volumetric Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column: Cinematic Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide uppercase">
                Next-Generation Enterprise AI & Automation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white font-heading leading-[1.08]">
              Automating the{" "}
              <span className="relative inline-block">
                <span className="gradient-text-glow text-glow-cyan">
                  Future
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </span>{" "}
              of Business
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build intelligent software, AI systems, and end-to-end automation solutions that eliminate manual work, accelerate operations, and unlock exponential business growth.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] transition-all duration-300 transform active:scale-95 group flex items-center justify-center gap-2.5 overflow-hidden"
              >
                <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
                <span>Start Your Automation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-md shadow-lg"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black text-cyan-300 transition-all">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Our Journey</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                  99.8%
                </div>
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  Process Accuracy
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  100k+
                </div>
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  Hours Automated
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  &lt; 30ms
                </div>
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  AI Latency
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive AI Automation Cockpit HUD */}
          <div className="lg:col-span-5 relative">
            {/* Surrounding Ambient Ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/20 to-purple-600/30 blur-xl opacity-75" />

            <div className="relative rounded-3xl bg-[#0B1220]/90 border border-cyan-400/30 backdrop-blur-2xl p-6 shadow-[0_0_50px_rgba(34,211,238,0.2)] overflow-hidden">
              {/* Cockpit Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    F2S_NEURAL_KERNEL_v4.2
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  ACTIVE STREAM
                </div>
              </div>

              {/* Central Dynamic Processing Visual */}
              <div className="py-5 space-y-4">
                {/* Live Counter Widget */}
                <div className="p-4 rounded-2xl bg-[#050816] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                      Autonomous Actions Executed
                    </span>
                    <div className="text-2xl font-bold font-mono text-white text-glow-cyan">
                      {processedCount.toLocaleString()}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <Zap className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Currently Processing Job */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Bot className="w-3.5 h-3.5" />
                      Current Autonomous Job
                    </span>
                    <span>Latency: {liveTasks[activeTaskIndex].speed}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/30 flex items-center justify-between transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs font-semibold text-white">
                        {liveTasks[activeTaskIndex].name}
                      </span>
                    </div>
                    <span className={`text-[11px] font-mono font-bold ${liveTasks[activeTaskIndex].color}`}>
                      {liveTasks[activeTaskIndex].status}
                    </span>
                  </div>
                </div>

                {/* Mini System Telemetry Bars */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>Multi-Agent Memory Sync</span>
                    <span className="text-cyan-400">99.98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 w-[99.98%]" />
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
                    <span>Zero-Trust Encryption Guardrails</span>
                    <span className="text-purple-400">AES-256 Enabled</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[100%]" />
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Info */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  Uptime: {Math.floor(uptimeSeconds / 3600)}h {Math.floor((uptimeSeconds % 3600) / 60)}m {uptimeSeconds % 60}s
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  0 Security Incidents
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
          <a
            href="#trust-bar"
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to discover"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-cyan-300 transition-colors">
              Scroll to explore ecosystem
            </span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
