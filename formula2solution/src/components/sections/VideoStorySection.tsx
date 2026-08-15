"use client";

import React, { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

interface VideoStorySectionProps {
  onOpenVideo: () => void;
  onOpenConsultation: () => void;
}

export default function VideoStorySection({
  onOpenVideo,
  onOpenConsultation,
}: VideoStorySectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>THE AUTOMATION EVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            From Manual Work to{" "}
            <span className="gradient-text-glow text-glow-cyan">
              Intelligent Automation
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience how modern autonomous AI software liberates engineering
            and business teams from tedious legacy overhead.
          </p>
        </div>

        {/* Cinematic Video Card & Interactive Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video Preview Card (Left 6 cols) — Real video player */}
          <div className="lg:col-span-6">
            <div className="group relative rounded-3xl aspect-[16/10] bg-slate-950 border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.25)]">
              {/* Actual Video */}
              <video
                ref={videoRef}
                src="/videos/manual-to-automation.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                muted={isMuted}
                playsInline
                loop
                preload="metadata"
              />

              {/* Dark overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-[#050816]/60 backdrop-blur-[2px] transition-all duration-500" />
              )}

              {/* Play/Pause overlay button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {!isPlaying && (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-[0_0_40px_rgba(34,211,238,0.8)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(34,211,238,1)] transition-all duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                )}
              </button>

              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  Manual → Automation • HD
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Before vs After Comparison Card (Right 6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0B1220] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
                Operational Paradigm Comparison
              </span>
              <span className="text-xs font-mono text-slate-400">
                Formula2Solution Benchmark
              </span>
            </div>

            {/* Comparison Cards */}
            <div className="space-y-3">
              {/* Legacy Manual Row */}
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-red-400 font-heading">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    <span>Traditional Manual Operations</span>
                  </div>
                  <span className="font-mono">8% Error Margin</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>
                    Disjointed emails, paper printouts, and copy-paste
                    spreadsheet entry
                  </li>
                  <li>
                    14 to 21 days for multi-tier executive signatures &amp;
                    approvals
                  </li>
                  <li>
                    Blind spots on shopfloor downtime and machine degradation
                  </li>
                </ul>
              </div>

              {/* Formula2Solution Automated Row */}
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.15)] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-cyan-300 font-heading">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Formula2Solution Autonomous Architecture</span>
                  </div>
                  <span className="font-mono text-emerald-400">
                    99.8% Precision
                  </span>
                </div>
                <ul className="text-xs text-slate-200 space-y-1.5 list-disc list-inside">
                  <li>
                    Zero-touch multimodal AI OCR &amp; autonomous cross-system
                    sync
                  </li>
                  <li>
                    Sub-second event-driven triggers with cryptographic audit
                    logs
                  </li>
                  <li>
                    Instantaneous Power BI live telemetry &amp; predictive ML
                    prevention
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA within card */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Ready to retire manual spreadsheets for good?
              </span>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-1.5"
              >
                <span>Automate Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
