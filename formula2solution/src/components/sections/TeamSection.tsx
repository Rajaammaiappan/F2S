"use client";

import React from "react";
import { Sparkles, Users, Cpu, Code2, Gauge, ShieldCheck } from "lucide-react";

export default function TeamSection() {
  const members = [
    {
      code: "ALPHA-F2F",
      role: "Founder · Automation Lead",
      desc: "Aerospace-grade process discipline meets Python. Leads every VSM audit and mission-critical automation build.",
      avatarText: "RJ",
      color: "from-red-600 to-rose-500",
      borderColor: "border-red-500/30",
    },
    {
      code: "BETA-F2F",
      role: "Principal Software Engineer",
      desc: "Web applications, cloud integrations, and real-time executive dashboards clients actually enjoy opening daily.",
      avatarText: "AK",
      color: "from-blue-600 to-cyan-500",
      borderColor: "border-cyan-500/30",
    },
    {
      code: "GAMMA-F2F",
      role: "CI / Lean Six Sigma Consultant",
      desc: "Value stream mapping, KPI telemetry design, and the operational rigor to ensure efficiency gains stick permanently.",
      avatarText: "PS",
      color: "from-amber-600 to-orange-500",
      borderColor: "border-amber-500/30",
    },
    {
      code: "DELTA-F2F",
      role: "Data Systems & QA Architect",
      desc: "Data pipelines, automated verification testing, and zero-defect validation keeping every deployment audit-ready.",
      avatarText: "DK",
      color: "from-emerald-600 to-teal-500",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050816] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Users className="w-3.5 h-3.5" />
            <span>THE CREW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Small Team. <span className="gradient-text-glow text-glow-cyan">Full Grid Coverage.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineers first, consultants second. Everyone at Formula2Solution builds and ships code — nobody just gives generic advice.
          </p>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((tm, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-[#0B1220] border ${tm.borderColor} hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col items-center text-center group`}
            >
              {/* Avatar Box */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tm.color} flex items-center justify-center text-white font-bold text-lg font-mono mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <span>{tm.avatarText}</span>
              </div>

              <h3 className="text-base font-bold text-white font-heading mb-1">
                {tm.code}
              </h3>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                {tm.role}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {tm.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
