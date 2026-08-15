"use client";

import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Bot, 
  Cpu, 
  BarChart3, 
  GitFork, 
  Globe, 
  Smartphone, 
  Cloud, 
  Layers,
  MessageSquare,
  Mail,
  Building2,
  User,
  Phone,
  Clock,
  Send
} from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const serviceOptions = [
  { id: "ai-automation", label: "AI & GenAI Automation", icon: Bot },
  { id: "rpa-solutions", label: "RPA Robotic Process Automation", icon: Cpu },
  { id: "power-bi", label: "Power BI & Enterprise Analytics", icon: BarChart3 },
  { id: "workflow-automation", label: "Business Workflow Automation", icon: GitFork },
  { id: "web-apps", label: "Modern Web Applications", icon: Globe },
  { id: "mobile-apps", label: "Enterprise Mobile Apps", icon: Smartphone },
  { id: "cloud-devops", label: "Cloud & DevOps Architecture", icon: Cloud },
  { id: "custom-software", label: "Custom Software & ERP Sync", icon: Layers },
];

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService,
}: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ["ai-automation"]
  );
  const [timeline, setTimeline] = useState("Immediate (1-3 weeks)");
  const [teamSize, setTeamSize] = useState("20-100 employees");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#22D3EE", "#2563EB", "#7C3AED", "#F59E0B"],
      });
    } catch {
      // ignore
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Formula2Solution Team! I'm interested in enterprise automation for my company ${
        formData.company || "[Company Name]"
      }. Selected services: ${selectedServices.join(", ")}.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050816]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0B1220] border border-white/15 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.2)] overflow-hidden z-10 my-8">
        {/* Top Glow Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 animate-shimmer" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 flex items-center justify-center mb-6 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
              Transmission Confirmed
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
              Automation Request Dispatched!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mb-8 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name || "partner"}</span>. Our Principal AI Architect will review your scope ({selectedServices.length} modules selected) and connect with you within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                Chat Immediately on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <Sparkles className="w-4 h-4" />
                <span>STEP {step} OF 3 • ARCHITECTURAL CONSULTATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {step === 1 && "Select Your Automation Scope"}
                {step === 2 && "Deployment Timeline & Scale"}
                {step === 3 && "Enterprise Contact & Brief"}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                {step === 1 && "Choose the key operational areas you want Formula2Solution to engineer."}
                {step === 2 && "Specify your team size and desired implementation velocity."}
                {step === 3 && "Where should our Principal Automation Engineer deliver your roadmap?"}
              </p>
            </div>

            {/* Step 1: Select Services */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                  {serviceOptions.map((srv) => {
                    const Icon = srv.icon;
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-cyan-500/15 border-cyan-400/60 shadow-[0_0_15px_rgba(34,211,238,0.2)] text-white"
                            : "bg-surface border-white/5 text-slate-300 hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected
                              ? "bg-cyan-400 text-black"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium">{srv.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2"
                  >
                    <span>Next: Timeline & Scale</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Deployment Timeline & Team Scale */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Implementation Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      "Immediate (1-3 weeks)",
                      "Strategic Q1/Q2 (1-2 months)",
                      "Enterprise Transformation (3-6 months)",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTimeline(opt)}
                        className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                          timeline === opt
                            ? "bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                            : "bg-surface border-white/5 text-slate-400 hover:border-white/20"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Current Organization / Facility Scale
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {["10-50 users", "50-250 users", "250-1,000 users", "1,000+ Enterprise"].map(
                      (opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setTeamSize(opt)}
                          className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                            teamSize === opt
                              ? "bg-purple-500/20 border-purple-400 text-white shadow-[0_0_12px_rgba(124,58,237,0.25)]"
                              : "bg-surface border-white/5 text-slate-400 hover:border-white/20"
                          }`}
                        >
                          {opt}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Final Dispatch */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full glass-input rounded-xl pl-9 pr-3 py-2.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="john@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full glass-input rounded-xl pl-9 pr-3 py-2.5 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company / Organization *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Aerospace Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full glass-input rounded-xl pl-9 pr-3 py-2.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full glass-input rounded-xl pl-9 pr-3 py-2.5 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Process Description or Challenge Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe the manual bottleneck or system you want to automate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-input rounded-xl px-3 py-2 text-xs text-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:opacity-95 shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Automation Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
