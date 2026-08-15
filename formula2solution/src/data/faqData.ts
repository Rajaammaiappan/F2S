export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "Security & Compliance",
    question: "How does Formula2Solution ensure enterprise data security and confidentiality?",
    answer:
      "We operate under strict Zero-Trust security protocols and comply with SOC2, ISO27001, and GDPR guidelines. All data in transit and at rest is protected with AES-256 and TLS 1.3 encryption. For AI workloads, we deploy private, air-gapped or dedicated tenant models ensuring your proprietary enterprise data is never used for external public training.",
  },
  {
    id: "faq-2",
    category: "Integration",
    question: "Can you automate legacy on-premise ERPs, MES hardware, and bespoke databases?",
    answer:
      "Yes. Our hybrid integration architecture connects modern cloud-native systems with legacy SAP, Oracle, AS/400, custom SQL databases, and shopfloor SCADA/PLC hardware through secure REST/GraphQL middleware, specialized RPA bots, and IoT edge collectors.",
  },
  {
    id: "faq-3",
    category: "Timeline & ROI",
    question: "What is the typical timeline to deploy an end-to-end automation solution?",
    answer:
      "Our rapid engineering sprints deliver functional POCs and baseline automation in 2 to 3 weeks. Production-grade enterprise rollouts with end-to-end telemetry and multi-system integrations typically deploy within 4 to 8 weeks, with measurable ROI visible from week one.",
  },
  {
    id: "faq-4",
    category: "Technology",
    question: "How do you choose between RPA, Custom AI Agents, and Low-Code Power Automate?",
    answer:
      "We follow an objective engineering matrix: high-volume repetitive surface UI tasks are routed to precision RPA bots; unstructured cognitive decisions (OCR, semantic reasoning, classification) are handled by dedicated AI models; and core Microsoft ecosystem approvals are orchestrated via Power Platform to maximize cost-efficiency and maintainability.",
  },
  {
    id: "faq-5",
    category: "Support & SLA",
    question: "What post-deployment maintenance and SLA monitoring do you provide?",
    answer:
      "We offer 24/7 autonomous heartbeat observability, automated failover triggers, and dedicated Tier-3 engineering support with guaranteed sub-1-hour critical response SLAs to ensure 99.99% operational continuity.",
  },
];
