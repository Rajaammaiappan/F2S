"use client";

import React, { useState } from "react";
import CinematicCanvas from "@/components/background/CinematicCanvas";
import CursorSpotlight from "@/components/background/CursorSpotlight";
import AiHeadBackground from "@/components/background/AiHeadBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AiNeuralSection from "@/components/sections/AiNeuralSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AutomationFlow from "@/components/sections/AutomationFlow";
import IndustryBento from "@/components/sections/IndustryBento";
import PitCrewSection from "@/components/sections/PitCrewSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import StatsSection from "@/components/sections/StatsSection";
import VideoStorySection from "@/components/sections/VideoStorySection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import RoiCalculator from "@/components/sections/RoiCalculator";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

import ConsultationModal from "@/components/ui/ConsultationModal";
import ServiceDetailModal from "@/components/ui/ServiceDetailModal";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import VideoModal from "@/components/ui/VideoModal";

import { ServiceItem } from "@/data/servicesData";
import { ProjectItem } from "@/data/projectsData";

export default function HomePage() {
  // Modal states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsConsultationOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-white">
      {/* Futuristic Animated AI Cyber Head Background */}
      <AiHeadBackground />

      {/* Background Interactive Visual Canvas */}
      <CinematicCanvas />
      
      {/* Dynamic Cursor Spotlight for Desktop */}
      <CursorSpotlight />

      {/* Primary Sticky Glass Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Page Content Assembly */}
      <main className="relative z-10">
        {/* 1. Hero Section with Live Telemetry Cockpit */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 2. Trust Bar & Enterprise Marquee */}
        <TrustBar />

        {/* 3. AI-Powered Neural Network Engine & Live Canvas */}
        <AiNeuralSection
          onOpenConsultation={() => handleOpenConsultation("ai-automation")}
        />

        {/* 4. Core Services Section (8 Cards with Modals) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 5. Cinematic Automation Flow Pipeline (6 Stages) */}
        <AutomationFlow />

        {/* 6. Industry Solutions Bento Grid (8 Verticals) */}
        <IndustryBento
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 7. Pit Crew for Individual Professionals */}
        <PitCrewSection
          onOpenConsultation={(plan) => handleOpenConsultation(plan)}
        />

        {/* 8. Case Studies & Project Showcase */}
        <ProjectShowcase
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 9. Animated Statistics Section */}
        <StatsSection />

        {/* 10. Cinematic Video Showcase Gallery (All 7 Videos) */}
        <VideoShowcase
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 11. Video Story & Before/After Comparison */}
        <VideoStorySection
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 12. Interactive ROI / Automation Savings Calculator */}
        <RoiCalculator
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 12. About Section & 5-Phase Timeline */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 13. Team Section */}
        <TeamSection />

        {/* 14. Transparent Value Pricing Section */}
        <PricingSection
          onOpenConsultation={(plan) => handleOpenConsultation(plan)}
        />

        {/* 15. Enterprise Testimonials */}
        <TestimonialsSection />

        {/* 16. Frequently Asked Questions Accordion */}
        <FaqSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 17. Final CTA Banner & Quick Triggers */}
        <FinalCtaSection
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedServiceId}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectConsultation={(srvId) => handleOpenConsultation(srvId)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
