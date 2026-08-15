"use client";

import React from "react";
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  BarChart, 
  Layers, 
  Building2, 
  Cpu, 
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onOpenConsultation,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0B1220] border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.25)] overflow-hidden z-10 my-8">
        {/* Top Glow Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 max-h-[85vh] overflow-y-auto">
          {/* Badges & Industry */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-0.5 rounded-full text-xs font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {project.industry}
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-mono uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {project.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-2">
            {project.title}
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Client: {project.clientType}</span>
          </div>

          {/* Key Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {project.results.map((res, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-surface border border-white/10 flex flex-col justify-between"
              >
                <span className="text-xs text-slate-400 font-medium mb-1">
                  {res.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono text-glow-cyan">
                  {res.value}
                </span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
              Case Summary
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-400 uppercase tracking-wider mb-2">
                <span>The Operational Challenge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                <span>The Formula2Solution Architecture</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
              Engineered Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="text-xs text-slate-400">
              Want similar automated ROI for your operations?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white border border-white/10 hover:bg-white/5"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                Schedule Case Deep-Dive
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
