"use client";

import React, { useState, useRef } from "react";
import {
  Play,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Cpu,
  Factory,
  Cloud,
  BarChart2,
  Zap,
  Network,
  ArrowRight,
} from "lucide-react";

interface VideoItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  accent: string;
  badge: string;
}

const videos: VideoItem[] = [
  {
    id: "ai-transforms",
    src: "/videos/ai-transforms-data.mp4",
    title: "AI Data Transformation",
    subtitle: "Intelligent Business Intelligence",
    description:
      "Watch how AI transforms raw business data into actionable intelligence in real-time, powering decisions at the speed of thought.",
    icon: Cpu,
    gradient: "from-cyan-500/20 to-blue-600/20",
    accent: "cyan",
    badge: "AI / ML",
  },
  {
    id: "automated-machinery",
    src: "/videos/automated-machinery.mp4",
    title: "Industrial Automation",
    subtitle: "Smart Factory Operations",
    description:
      "Automated machinery operating with precision — zero-touch manufacturing powered by intelligent control systems.",
    icon: Factory,
    gradient: "from-emerald-500/20 to-teal-600/20",
    accent: "emerald",
    badge: "Manufacturing",
  },
  {
    id: "cloud-devops",
    src: "/videos/cloud-devops.mp4",
    title: "Cloud & DevOps",
    subtitle: "Infrastructure at Scale",
    description:
      "Cloud infrastructure and DevOps pipelines orchestrating seamless deployments across multi-cloud environments.",
    icon: Cloud,
    gradient: "from-purple-500/20 to-indigo-600/20",
    accent: "purple",
    badge: "Cloud Ops",
  },
  {
    id: "data-analytics",
    src: "/videos/data-analytics.mp4",
    title: "Data Analytics Engine",
    subtitle: "Particle-Level Precision",
    description:
      "Data particles forming analytics dashboards — from raw streams to visual intelligence in milliseconds.",
    icon: BarChart2,
    gradient: "from-amber-500/20 to-orange-600/20",
    accent: "amber",
    badge: "Analytics",
  },
  {
    id: "data-stream",
    src: "/videos/data-stream-automation.mp4",
    title: "Stream Automation",
    subtitle: "Real-Time Business Flows",
    description:
      "Data streams automating business processes end-to-end — from intake to action, without human intervention.",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-600/20",
    accent: "blue",
    badge: "Automation",
  },
  {
    id: "digital-network",
    src: "/videos/digital-network.mp4",
    title: "Enterprise Network",
    subtitle: "Connected Intelligence",
    description:
      "Digital networks forming enterprise-grade architectures — interconnected systems communicating at light speed.",
    icon: Network,
    gradient: "from-rose-500/20 to-pink-600/20",
    accent: "rose",
    badge: "Enterprise",
  },
  {
    id: "manual-to-auto",
    src: "/videos/manual-to-automation.mp4",
    title: "Manual → Automation",
    subtitle: "The Transformation Journey",
    description:
      "Manual processes transform into automated workflows — witness the paradigm shift from legacy to autonomous.",
    icon: Sparkles,
    gradient: "from-teal-500/20 to-cyan-600/20",
    accent: "teal",
    badge: "Transformation",
  },
];

interface VideoShowcaseProps {
  onOpenConsultation: () => void;
}

export default function VideoShowcase({
  onOpenConsultation,
}: VideoShowcaseProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsMuted(false);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setIsMuted(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
    }
  };

  const toggleFullscreen = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.requestFullscreen) {
        modalVideoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <>
      <section
        id="video-showcase"
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-purple-600/8 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-xs font-mono text-purple-300">
              <Play className="w-3.5 h-3.5 text-purple-300" />
              <span>CINEMATIC SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              See Our{" "}
              <span className="gradient-text-glow text-glow-cyan">
                Solutions in Action
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Watch real demonstrations of how Formula2Solution transforms
              operations across AI, automation, cloud, and enterprise systems.
            </p>
          </div>

          {/* Video Grid — Featured (first 2 large) + rest in 3-col grid */}
          <div className="space-y-6">
            {/* Featured Row — 2 large cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {videos.slice(0, 2).map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={() => openVideo(video)}
                  size="large"
                />
              ))}
            </div>

            {/* Grid Row — remaining 5 in responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(2).map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={() => openVideo(video)}
                  size="normal"
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 hover:from-purple-500 hover:via-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all duration-300 transform active:scale-95 inline-flex items-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Let&apos;s Build Your Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Full-screen Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#050816]/95 backdrop-blur-xl"
            onClick={closeVideo}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl z-10 my-8">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 p-2 rounded-full bg-black/60 border border-white/20 text-slate-300 hover:text-white hover:bg-black/80 transition-colors z-30"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-cyan-500/30 shadow-[0_0_80px_rgba(34,211,238,0.25)]">
              {/* Top Glow Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 animate-shimmer" />

              {/* Actual Video Player */}
              <video
                ref={modalVideoRef}
                src={activeVideo.src}
                className="w-full aspect-video object-cover"
                autoPlay
                muted={isMuted}
                controls={false}
                playsInline
                loop
              />

              {/* Controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {activeVideo.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-4">
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
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Telemetry tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                {activeVideo.badge} • HD
              </div>
            </div>

            {/* Playlist Strip below modal */}
            <div className="mt-4 grid grid-cols-7 gap-2">
              {videos.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVideo(v)}
                  className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all ${
                    v.id === activeVideo.id
                      ? "border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                      : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <video
                    src={v.src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  {v.id === activeVideo.id && (
                    <div className="absolute inset-0 bg-cyan-400/10 flex items-center justify-center">
                      <Play className="w-3 h-3 text-cyan-400 fill-current" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Individual Video Card Component ─── */
function VideoCard({
  video,
  onPlay,
  size,
}: {
  video: VideoItem;
  onPlay: () => void;
  size: "large" | "normal";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Icon = video.icon;

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onPlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] ${
        size === "large" ? "aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      {/* Video Background (autoplay on hover) */}
      <video
        ref={videoRef}
        src={video.src}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
        muted
        playsInline
        preload="metadata"
        loop
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent group-hover:via-[#050816]/40 transition-all duration-500" />

      {/* Gradient Tint */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-40 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Play Button Center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <Play className="w-7 h-7 fill-current ml-1" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-cyan-400">
            <Icon className="w-4 h-4" />
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-cyan-300 uppercase tracking-wider">
            {video.badge}
          </span>
        </div>

        <h3
          className={`font-bold text-white font-heading group-hover:text-cyan-300 transition-colors ${
            size === "large" ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
        >
          {video.title}
        </h3>
        <p
          className={`text-slate-300 leading-relaxed mt-1 ${
            size === "large" ? "text-sm" : "text-xs"
          }`}
        >
          {video.subtitle}
        </p>
      </div>

      {/* Top Badge */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-slate-400 z-10 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping inline-block" />
        HD Video
      </div>
    </div>
  );
}
