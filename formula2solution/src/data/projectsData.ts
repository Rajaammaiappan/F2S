export interface ProjectItem {
  id: string;
  title: string;
  industry: string;
  clientType: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  techStack: string[];
  imageGradient: string;
  badge: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "smart-production-dashboard",
    title: "Smart Production AI Telemetry Dashboard",
    industry: "Manufacturing 4.0",
    clientType: "Tier-1 Precision Component Manufacturer",
    summary:
      "Real-time shopfloor telemetry tracking 120+ CNC machines, predicting tool wear, and eliminating unplanned downtime with automated operator dispatch.",
    challenge:
      "The client suffered from 18% machine idle time, manual chalkboard shift handovers, and delayed defect detection causing $450k in annual scrap metal loss.",
    solution:
      "Engineered IoT edge sensor collectors communicating with a low-latency Next.js & Power BI dashboard with predictive ML tool wear models and instant mobile SMS alerts.",
    results: [
      { label: "Unplanned Downtime", value: "-42%" },
      { label: "OEE (Overall Equipment Efficiency)", value: "+28%" },
      { label: "Annual Cost Savings", value: "$380K" },
      { label: "Telemetry Latency", value: "< 250ms" },
    ],
    techStack: ["Next.js", "Power BI Embedded", "Azure IoT Hub", "Python FastAI", "TimescaleDB"],
    imageGradient: "from-blue-600/30 via-cyan-500/20 to-surface",
    badge: "Industrial IoT",
  },
  {
    id: "ai-document-processing",
    title: "Autonomous AI Document Extraction Engine",
    industry: "Finance & Logistics",
    clientType: "Global Multi-Freight Logistics Provider",
    summary:
      "Automated extraction and reconciliation of 15,000+ multi-language customs invoices, bills of lading, and freight manifests daily with zero human intervention.",
    challenge:
      "A 40-person data entry team spent 6 hours per day manually typing 50-page unstructured PDF shipping invoices into legacy SAP with an 8% error rate.",
    solution:
      "Implemented a multimodal Vision-LLM extraction pipeline with automated OCR fallback, automated cross-field mathematical validation, and SAP RFC bot automation.",
    results: [
      { label: "Extraction Accuracy", value: "99.2%" },
      { label: "Processing Speed", value: "3.2s / doc" },
      { label: "Manual Effort Reduction", value: "91%" },
      { label: "Monthly Volume", value: "450K+ docs" },
    ],
    techStack: ["Claude 3.5 Sonnet", "LangChain", "FastAPI", "UiPath RPA", "PostgreSQL", "Docker"],
    imageGradient: "from-cyan-600/30 via-indigo-500/20 to-surface",
    badge: "GenAI & OCR",
  },
  {
    id: "sharepoint-approval-system",
    title: "Enterprise SharePoint & M365 Approval Engine",
    industry: "Aerospace & Defense",
    clientType: "Aerospace Component Engineering Firm",
    summary:
      "High-security, multi-stage engineering change request (ECR) governance engine with automated compliance gates, digital signatures, and audit logs.",
    challenge:
      "Engineering Change Orders required paper signatures across 7 departments, taking an average of 19 days per approval and risking FAA audit non-compliance.",
    solution:
      "Constructed a zero-trust SharePoint Framework (SPFx) & Power Automate architecture with dynamic matrix routing, parallel reviews, and automated cryptographic audit stamps.",
    results: [
      { label: "Approval Cycle Time", value: "19d → 36h" },
      { label: "Audit Compliance", value: "100%" },
      { label: "Process Velocity", value: "+85%" },
      { label: "Paper Waste", value: "0 Sheets" },
    ],
    techStack: ["SharePoint Online", "Power Automate", "Power Apps", "Azure Functions", "SPFx React"],
    imageGradient: "from-purple-600/30 via-blue-500/20 to-surface",
    badge: "Microsoft 365",
  },
  {
    id: "inventory-automation",
    title: "Predictive Inventory & Reordering System",
    industry: "Supply Chain & Retail",
    clientType: "Omnichannel Consumer Electronics Distributor",
    summary:
      "AI-driven demand forecasting platform automating purchase order generation and supplier sync across 14 regional distribution warehouses.",
    challenge:
      "Excess dead stock tied up $2.4M in capital while high-velocity items experienced frequent stockouts during seasonal demand spikes.",
    solution:
      "Built an automated time-series forecasting model integrating historical sales velocity, supplier lead times, and weather factors with automated EDI purchase order triggers.",
    results: [
      { label: "Dead Stock Reduction", value: "34%" },
      { label: "Stockout Elimination", value: "96%" },
      { label: "Capital Freed Up", value: "$1.8M" },
      { label: "Automated POs/mo", value: "12,000+" },
    ],
    techStack: ["Python ML", "Node.js", "PostgreSQL", "Redis", "Next.js Admin UI", "AWS Lambda"],
    imageGradient: "from-emerald-600/30 via-teal-500/20 to-surface",
    badge: "Supply Chain AI",
  },
  {
    id: "quality-analytics-platform",
    title: "Vision AI Quality Analytics & Defect Platform",
    industry: "Automotive Precision Engineering",
    clientType: "EV Powertrain Component Manufacturer",
    summary:
      "High-speed edge camera computer vision scanning 60 parts per minute for micro-cracks, surface blemishes, and dimensional tolerances.",
    challenge:
      "Human visual inspection suffered from inspector fatigue on 10-hour shifts, resulting in micro-defects slipping through to OEM assembly lines.",
    solution:
      "Deployed high-frame-rate edge cameras with TensorRT-optimized YOLO deep learning models and an interactive quality telemetry web application.",
    results: [
      { label: "Defect Escape Rate", value: "0.01%" },
      { label: "Inspection Throughput", value: "60 parts/min" },
      { label: "False Positive Reduction", value: "78%" },
      { label: "Warranty Claim Drop", value: "65%" },
    ],
    techStack: ["NVIDIA TensorRT", "PyTorch", "OpenCV", "WebSockets", "React UI", "FastAPI"],
    imageGradient: "from-amber-600/30 via-red-500/20 to-surface",
    badge: "Computer Vision",
  },
  {
    id: "executive-kpi-dashboard",
    title: "C-Suite Consolidated KPI Cockpit",
    industry: "Conglomerate Operations",
    clientType: "Diversified Energy & Industrial Holding Group",
    summary:
      "Single-pane-of-glass executive intelligence command center consolidating financial, operational, HR, and project telemetry from 9 subsidiaries.",
    challenge:
      "C-level executives waited 2 weeks after month-end for consolidated Excel financial reports, making proactive operational interventions impossible.",
    solution:
      "Built a unified Microsoft Fabric & Power BI enterprise lakehouse architecture with automated nightly consolidation, scenario modeling, and mobile push alerts.",
    results: [
      { label: "Reporting Lag", value: "14d → Instant" },
      { label: "Subsidiary Data Sync", value: "100% Auto" },
      { label: "Executive Adoption", value: "94%" },
      { label: "Decision Velocity", value: "4x Faster" },
    ],
    techStack: ["Microsoft Fabric", "Power BI", "Azure Synapse", "DAX", "DirectLake", "Azure DevOps"],
    imageGradient: "from-blue-600/30 via-purple-500/20 to-surface",
    badge: "Executive BI",
  },
];
