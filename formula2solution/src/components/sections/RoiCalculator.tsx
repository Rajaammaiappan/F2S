"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  CheckCircle2,
  Zap,
  Users
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenConsultation: () => void;
}

export default function RoiCalculator({ onOpenConsultation }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [automationRate, setAutomationRate] = useState(75);

  // Calculations
  const totalAnnualManualHours = teamSize * hoursPerWeek * 50;
  const automatedHoursSaved = Math.round(totalAnnualManualHours * (automationRate / 100));
  const annualCostBefore = totalAnnualManualHours * hourlyRate;
  const annualDollarSavings = Math.round(annualCostBefore * (automationRate / 100));
  const estimatedPaybackDays = Math.max(25, Math.round(180 / (teamSize / 5 + 1)));

  return (
    <section id="roi-calculator" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070D1E]/80 border-y border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[350px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Calculator className="w-3.5 h-3.5 text-cyan-300" />
            <span>ENTERPRISE VALUE AUDIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Calculate Your <span className="gradient-text-glow text-glow-cyan">Automation ROI</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estimate how many thousands of hours and dollars your organization will save by implementing Formula2Solution software and AI systems.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#0B1220] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
          {/* Sliders Input Column (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                Operational Parameters
              </span>
              <span className="text-xs font-mono text-slate-400">
                Adjust Sliders Live
              </span>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  Team Members Performing Repetitive Tasks
                </span>
                <span className="font-mono text-cyan-400 font-bold">
                  {teamSize} People
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Slider 2: Hours/week */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  Manual Hours Spent / Person / Week
                </span>
                <span className="font-mono text-purple-400 font-bold">
                  {hoursPerWeek} Hours / Wk
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Slider 3: Hourly Cost */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Average Blended Hourly Labor Cost
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  ${hourlyRate} / Hour
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="120"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Slider 4: Target Automation Efficiency */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Formula2Solution Automation Depth Target
                </span>
                <span className="font-mono text-cyan-300 font-bold">
                  {automationRate}% Automated
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                step="5"
                value={automationRate}
                onChange={(e) => setAutomationRate(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>
          </div>

          {/* Results Column (Right 6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-surface border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Projected Annual Savings
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400 text-glow-cyan tracking-tight mb-2">
                ${annualDollarSavings.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal font-sans ml-2">
                  / Year
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Direct bottom-line savings by eliminating manual keying, paperwork, and rework.
              </p>
            </div>

            {/* Mini Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                  Human Hours Reclaimed
                </span>
                <span className="text-xl font-bold font-mono text-purple-400">
                  {automatedHoursSaved.toLocaleString()} hrs
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                  Estimated Payback
                </span>
                <span className="text-xl font-bold font-mono text-emerald-400">
                  ~{estimatedPaybackDays} Days
                </span>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 px-6 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:opacity-95 shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Request Custom Enterprise ROI Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
