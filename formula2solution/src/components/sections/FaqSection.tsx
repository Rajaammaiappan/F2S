"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { faqData, FaqItem } from "@/data/faqData";

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export default function FaqSection({ onOpenConsultation }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#070D1E]/60 border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>EXECUTIVE CLARITY & FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Frequently Asked <span className="gradient-text-glow text-glow-cyan">Questions</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm">
            Everything you need to know about our security protocols, engineering timelines, and legacy integration capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-white font-heading">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-surface border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have a specialized engineering question?</h4>
            <p className="text-xs text-slate-400">Our Principal AI Architect is ready to answer specific technical inquiries.</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask an Architect</span>
          </button>
        </div>
      </div>
    </section>
  );
}
