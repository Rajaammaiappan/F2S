"use client";

import React from "react";
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Bot, 
  BarChart3, 
  GitFork, 
  Globe, 
  Smartphone, 
  Cloud 
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectConsultation: (serviceId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Bot,
  Cpu,
  BarChart3,
  GitFork,
  Globe,
  Smartphone,
  Cloud,
  Layers,
};

export default function ServiceDetailModal({
  service,
  onClose,
  onSelectConsultation,
}: ServiceDetailModalProps) {
  if (!service) return null;

  const Icon = iconMap[service.iconName] || Layers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#0B1220] border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.25)] overflow-hidden z-10 my-8">
        {/* Top Gradient Banner */}
        <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {service.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {service.badge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {service.title}
              </h2>
              <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-0.5">
                {service.tagline}
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Metric Highlight */}
          <div className="p-4 rounded-2xl bg-surface border border-white/10 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-lg font-mono">
                {service.metric}
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Target Benchmark</div>
                <div className="text-xs text-slate-400">{service.metricLabel}</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                Enterprise SLA Guaranteed
              </span>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Solution Architecture Pipeline
            </h3>
            <div className="space-y-2">
              {service.architecture.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200 hover:border-cyan-500/30 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-cyan-400/10 text-cyan-300 font-mono flex items-center justify-center text-[11px] shrink-0 border border-cyan-400/20">
                    0{idx + 1}
                  </span>
                  <span className="flex-1 font-medium">{step}</span>
                  <span className="text-[10px] font-mono text-slate-500">
                    STAGE {idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Deliverables / Features */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Key Enterprise Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
              Supported Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
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
              Ready to engineer this architecture for your team?
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
                  onSelectConsultation(service.id);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                Deploy This Solution
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
