"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  BarChart3
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projectsData";

interface ProjectShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectShowcase({ onSelectProject }: ProjectShowcaseProps) {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050816]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>PROVEN ENTERPRISE DELIVERIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Case Studies in <span className="gradient-text-glow text-glow-cyan">Autonomous Impact</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real deployments delivering verifiable ROI, slashed overhead, and zero-defect operational velocity.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((proj) => {
            const primaryMetric = proj.results[0];

            return (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-3xl p-6 glass-card glass-card-hover cursor-pointer flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Visual Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {proj.industry}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {proj.summary}
                  </p>
                </div>

                {/* Metrics Highlight Strip */}
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {primaryMetric.label}
                      </span>
                      <div className="text-xl font-bold font-mono text-cyan-400 text-glow-cyan">
                        {primaryMetric.value}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {proj.results[1].label}
                      </span>
                      <div className="text-sm font-bold font-mono text-white">
                        {proj.results[1].value}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-cyan-400">
                        +{proj.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Full Architecture Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>View Case Study Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
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
