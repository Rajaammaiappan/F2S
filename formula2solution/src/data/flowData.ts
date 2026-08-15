export interface FlowStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  signalSpeed: string;
  stats: string;
  techKeywords: string[];
  beforeStatus: string;
  afterStatus: string;
}

export const flowStepsData: FlowStep[] = [
  {
    stepNumber: 1,
    title: "Manual Process",
    shortDesc: "Siloed legacy data & human bottlenecks",
    fullDesc:
      "Employees manually copy-paste unstructured emails, PDF invoices, paper work-orders, and messy Excel spreadsheets with high error risks.",
    badge: "Legacy Baseline",
    iconName: "FileSpreadsheet",
    signalSpeed: "Slow & Fragmented",
    stats: "6-8 hrs wasted daily",
    techKeywords: ["Paper Forms", "Manual Entry", "Scattered Spreadsheets", "Unstructured Emails"],
    beforeStatus: "Prone to human error, slow turnaround, zero audit trail",
    afterStatus: "Cataloged and prepared for automated ingestion",
  },
  {
    stepNumber: 2,
    title: "Data Capture",
    shortDesc: "Multimodal ingestion & edge digitisation",
    fullDesc:
      "High-throughput edge collectors, webhooks, smart OCR, and camera sensors ingest raw files, databases, and IoT streams into an encrypted buffer.",
    badge: "Omni-Channel Intake",
    iconName: "Binary",
    signalSpeed: "Sub-Second Ingestion",
    stats: "10,000+ events / min",
    techKeywords: ["Vision OCR", "IoT MQTT", "REST Webhooks", "File Watchers", "Azure Event Hub"],
    beforeStatus: "Waiting days for manual data keying",
    afterStatus: "Instantaneous JSON normalization & zero data loss",
  },
  {
    stepNumber: 3,
    title: "AI Processing",
    shortDesc: "Cognitive parsing & autonomous reasoning",
    fullDesc:
      "LLM agents, vector embeddings, and computer vision models extract contextual semantics, detect anomalies, and make deterministic validation decisions.",
    badge: "Cognitive Engine",
    iconName: "BrainCircuit",
    signalSpeed: "99.8% Inference Precision",
    stats: "30ms Latency",
    techKeywords: ["LLM Agents", "Computer Vision", "RAG Vector DB", "NLP Sentiment", "Anomaly Models"],
    beforeStatus: "Cognitive fatigue & missed edge cases",
    afterStatus: "Self-correcting, guarded neural verification",
  },
  {
    stepNumber: 4,
    title: "Workflow Automation",
    shortDesc: "Self-executing bots & system dispatch",
    fullDesc:
      "Orchestrated RPA software bots and event pipelines execute transactional writes into SAP, Salesforce, Oracle, and SharePoint without human lag.",
    badge: "Autonomous Execution",
    iconName: "Zap",
    signalSpeed: "Zero Lag Dispatch",
    stats: "100% Unattended",
    techKeywords: ["UiPath Bots", "Power Automate", "Kafka Queues", "Webhook Dispatch", "Bi-directional Sync"],
    beforeStatus: "Multi-week approval latency & lost paperwork",
    afterStatus: "Instantaneous multi-system writeback with audit trails",
  },
  {
    stepNumber: 5,
    title: "Real-time Dashboard",
    shortDesc: "C-suite telemetry & live pulse metrics",
    fullDesc:
      "DirectQuery Power BI and Next.js visual cockpits stream real-time throughput, defect rates, cost savings, and operational health.",
    badge: "Executive Cockpit",
    iconName: "BarChart4",
    signalSpeed: "Live Stream Telemetry",
    stats: "100% Transparency",
    techKeywords: ["Power BI Embedded", "Live WebSockets", "Executive KPIs", "Automated Alerts", "Mobile Dashboards"],
    beforeStatus: "Blind spots & stale end-of-month spreadsheets",
    afterStatus: "Instantaneous operational foresight and live telemetry",
  },
  {
    stepNumber: 6,
    title: "Business Growth",
    shortDesc: "Exponential scale & operational margin",
    fullDesc:
      "Your enterprise unlocks 10x throughput capacity, slashes overhead by up to 70%, and frees your talent to drive strategic innovation.",
    badge: "Max ROI Target",
    iconName: "TrendingUp",
    signalSpeed: "Compound Velocity",
    stats: "+300% Scaling Power",
    techKeywords: ["Zero Marginal Cost", "Scalable Operations", "Customer Delight", "10x Valuation Uplift"],
    beforeStatus: "Growth constrained by headcount additions",
    afterStatus: "Infinite scalability with predictable software precision",
  },
];
