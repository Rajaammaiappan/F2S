"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

const playlist = [
  {
    src: "/videos/ai-transforms-data.mp4",
    title: "AI Data Transformation",
    label: "AI / ML",
  },
  {
    src: "/videos/digital-network.mp4",
    title: "Enterprise Digital Network",
    label: "Enterprise",
  },
  {
    src: "/videos/data-stream-automation.mp4",
    title: "Stream Automation",
    label: "Automation",
  },
  {
    src: "/videos/automated-machinery.mp4",
    title: "Industrial Automation",
    label: "Manufacturing",
  },
  {
    src: "/videos/cloud-devops.mp4",
    title: "Cloud & DevOps",
    label: "Cloud Ops",
  },
  {
    src: "/videos/data-analytics.mp4",
    title: "Data Analytics Engine",
    label: "Analytics",
  },
  {
    src: "/videos/manual-to-automation.mp4",
    title: "Manual → Automation",
    label: "Transformation",
  },
];

export default function VideoModal({
  isOpen,
  onClose,
  onOpenConsultation,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "vision" | "architecture" | "impact"
  >("vision");

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isOpen, activeIndex]);

  if (!isOpen) return null;

  const active = playlist[activeIndex];

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

  const toggleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % playlist.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050816]/90 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0B1220] border border-cyan-500/40 rounded-3xl shadow-[0_0_80px_rgba(34,211,238,0.3)] overflow-hidden z-10 my-8">
        {/* Top Glow Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/20 text-slate-300 hover:text-white hover:bg-black/80 transition-colors z-30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Real Video Player */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
          <video
            ref={videoRef}
            key={active.src}
            src={active.src}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            playsInline
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all z-20"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all z-20"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <span className="text-[11px] font-mono text-slate-400">
                {active.title} • HD
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                {activeIndex + 1} / {playlist.length}
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-2 z-20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            {active.label}
          </div>
        </div>

        {/* Playlist Thumbnails */}
        <div className="px-6 pt-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {playlist.map((item, idx) => (
            <button
              key={item.src}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden flex-shrink-0 w-28 aspect-video border-2 transition-all ${
                idx === activeIndex
                  ? "border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
              }`}
            >
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
              {idx === activeIndex && (
                <div className="absolute inset-0 bg-cyan-400/10 flex items-center justify-center">
                  <Play className="w-3 h-3 text-cyan-400 fill-current" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-1 py-0.5">
                <span className="text-[8px] font-mono text-white truncate block">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Video Story Chapters & Deep-Dive Info */}
        <div className="p-6 sm:p-8 bg-[#0B1220]">
          <div className="flex border-b border-white/10 mb-4 gap-4">
            {[
              { id: "vision", label: "Executive Vision" },
              { id: "architecture", label: "Autonomous Core" },
              { id: "impact", label: "Enterprise Impact" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 font-mono ${
                  activeTab === tab.id
                    ? "border-cyan-400 text-cyan-300"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {activeTab === "vision" && (
              <p>
                At Formula2Solution, we believe the next era of enterprise value
                belongs to companies that seamlessly fuse human ingenuity with
                relentless autonomous software. Every repetitive manual process
                is an opportunity to reclaim millions in lost productivity.
              </p>
            )}
            {activeTab === "architecture" && (
              <p>
                Our architectures blend event-driven microservices, cognitive LLM
                reasoning pipelines, zero-trust cloud orchestration, and
                high-frequency robotic process bots into a unified self-healing
                digital nervous system.
              </p>
            )}
            {activeTab === "impact" && (
              <p>
                Across manufacturing, aerospace, fintech, and supply chain
                enterprises, Formula2Solution deployments have automated over
                100,000 human labor hours while elevating operational accuracy to
                99.8%.
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <span className="text-xs text-slate-400">
              Ready to write your company&apos;s automation success story?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              Book Architecture Discovery Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
