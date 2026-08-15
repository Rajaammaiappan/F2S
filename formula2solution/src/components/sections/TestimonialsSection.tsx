"use client";

import React from "react";
import { 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Building
} from "lucide-react";
import { testimonialsData, TestimonialItem } from "@/data/testimonialsData";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050816] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>VERIFIED ENTERPRISE ENDORSEMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Trusted by Leaders Who <span className="gradient-text-glow text-glow-cyan">Demand Precision</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read how chief digital officers and operations vice presidents scaled efficiency with Formula2Solution.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info & Impact Badge */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm font-mono shadow-md">
                    {test.avatarText}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white font-heading">
                        {test.name}
                      </h4>
                      {test.verified && (
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-medium">
                      {test.role}
                    </p>
                    <p className="text-xs text-cyan-400 font-mono">
                      {test.company}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-surface border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Impact Metric:</span>
                  <span className="text-emerald-400 font-mono font-bold">
                    {test.impactMetric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
