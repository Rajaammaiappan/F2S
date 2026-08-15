"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Cpu, 
  BarChart3, 
  GitFork, 
  Globe, 
  Smartphone, 
  Cloud, 
  Layers, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
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

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All 8 Core Services" },
    { id: "ai", label: "AI & GenAI" },
    { id: "automation", label: "RPA & Workflows" },
    { id: "analytics", label: "Power BI & Analytics" },
    { id: "engineering", label: "Web, Mobile & Cloud" },
  ];

  const filteredServices = servicesData.filter((srv) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return srv.id.includes("ai");
    if (activeFilter === "automation") return srv.id.includes("rpa") || srv.id.includes("workflow");
    if (activeFilter === "analytics") return srv.id.includes("power-bi");
    if (activeFilter === "engineering") return srv.id.includes("web") || srv.id.includes("mobile") || srv.id.includes("cloud") || srv.id.includes("custom");
    return true;
  });

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>FULL-SPECTRUM AUTOMATION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Engineered for <span className="gradient-text-glow text-glow-cyan">Relentless Efficiency</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From cognitive AI agents to unattended robotic swarms and real-time BI cockpits, we deliver end-to-end solutions that elevate enterprise velocity.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                    : "bg-surface border border-white/10 text-slate-300 hover:text-white hover:border-white/25"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || Layers;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative rounded-3xl p-6 glass-card glass-card-hover cursor-pointer flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Subtle Card Background Accent Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top Row: Animated Icon & Metric Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300 shadow-md group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 font-bold">
                      {service.metric}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row: Feature Sneak Peek & Explore Button */}
                <div className="pt-4 border-t border-white/10 space-y-3 relative z-10">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{service.features[0]}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>Explore Architecture</span>
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
