"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Mail 
} from "lucide-react";

interface FinalCtaSectionProps {
  onOpenConsultation: () => void;
}

export default function FinalCtaSection({ onOpenConsultation }: FinalCtaSectionProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Formula2Solution! I would like to schedule an enterprise AI & automation consultation for my organization."
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Cinematic Blue to Purple Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#050816] to-purple-900/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[450px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0B1220]/90 to-[#070D1E]/95 border border-cyan-400/40 shadow-[0_0_80px_rgba(34,211,238,0.25)] text-center space-y-8 backdrop-blur-2xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>COMMENCE YOUR AUTOMATION JOURNEY</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to <span className="gradient-text-glow text-glow-cyan">Transform</span> Your Business?
          </h2>

          {/* Subheadline */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Let’s build intelligent systems that save time, reduce errors, and scale your operations with mathematically predictable ROI.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:shadow-[0_0_45px_rgba(34,211,238,0.7)] transition-all duration-300 transform active:scale-95 group flex items-center justify-center gap-2.5 overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.55)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us Directly</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Sub-2hr Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>NDA Protected Discovery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Commitment Assessment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
