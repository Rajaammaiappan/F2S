export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatarText: string;
  rating: number;
  quote: string;
  impactMetric: string;
  impactLabel: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Vikramaditya Sharma",
    role: "VP of Global Manufacturing Operations",
    company: "Apex Precision Engineering",
    industry: "Aerospace & Industrial",
    avatarText: "VS",
    rating: 5,
    quote:
      "Formula2Solution transformed our 4 shopfloor facilities in 6 weeks. Their AI telemetry dashboard and automated CNC tool wear alerts eliminated 42% of our unplanned downtime in the first quarter alone.",
    impactMetric: "-42% Downtime",
    impactLabel: "Verified Q1 ROI",
    verified: true,
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Chief Digital Officer (CDO)",
    company: "Nordic Global Logistics",
    industry: "Logistics & Supply Chain",
    avatarText: "ER",
    rating: 5,
    quote:
      "The custom multimodal AI document extraction engine built by Formula2Solution now processes 15,000 customs bills daily with 99.2% accuracy. It feels like we stepped 5 years into the future.",
    impactMetric: "15,000 docs/day",
    impactLabel: "Zero-Touch Automation",
    verified: true,
  },
  {
    id: "test-3",
    name: "Rajesh K. Nambiar",
    role: "Head of Enterprise IT & Automation",
    company: "Vanguard Capital Partners",
    industry: "Financial Services",
    avatarText: "RN",
    rating: 5,
    quote:
      "Their Power BI analytics suite and automated RPA reconciliation bots saved our finance division over 850 hours every single month. Outstanding engineering depth and enterprise security compliance.",
    impactMetric: "850+ hrs/mo saved",
    impactLabel: "Direct Operational ROI",
    verified: true,
  },
];
