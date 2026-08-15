export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  badge: string;
  metric: string;
  metricLabel: string;
  features: string[];
  architecture: string[];
  techStack: string[];
  gradient: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-automation",
    title: "AI Automation & GenAI Systems",
    category: "Next-Gen AI",
    tagline: "Autonomous Agentic AI & Intelligent Cognitive Decisioning",
    description:
      "Transform manual knowledge operations into self-correcting, autonomous multi-agent pipelines with Large Language Models, custom domain RAG, and Vision AI.",
    badge: "Core Enterprise AI",
    metric: "10x",
    metricLabel: "Operational Speedup",
    features: [
      "Autonomous Multi-Agent Task Orchestration",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Computer Vision & Document OCR Extraction",
      "Predictive Machine Learning Pipelines",
      "Zero-Trust Private AI Model Deployments",
    ],
    architecture: [
      "Raw Multi-Format Input Ingestion",
      "Semantic Embedding & Vector Indexing",
      "Autonomous Agent Cognitive Reasoning",
      "Validation & Guardrail Verification",
      "Downstream Enterprise ERP/CRM Execution",
    ],
    techStack: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Python", "FastAPI"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconName: "Bot",
  },
  {
    id: "rpa-solutions",
    title: "RPA (Robotic Process Automation)",
    category: "Robotic Systems",
    tagline: "Precision Software Bots for Repetitive Digital Labor",
    description:
      "Deploy 24/7 autonomous software robots that mimic human desktop and web actions, eliminating error-prone manual data entry, reconciliation, and cross-system sync.",
    badge: "24/7 Unattended Bots",
    metric: "99.9%",
    metricLabel: "Execution Accuracy",
    features: [
      "Unattended & Attended Bot Swarms",
      "Cross-System Legacy ERP Automation",
      "Invoice Reconciliation & Bank Clearing",
      "Automated Regulatory Compliance Checks",
      "Real-time Bot Health & Heartbeat Monitoring",
    ],
    architecture: [
      "Trigger (Schedule, Webhook, File Drop)",
      "Bot Sandbox Initialization",
      "Surface & API Automation Execution",
      "Exception Handling & Human Escalation",
      "Audit Trail & Compliance Logging",
    ],
    techStack: ["UiPath", "Power Automate Desktop", "Selenium", "Playwright", "Python RPA", "BluePrism"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconName: "Cpu",
  },
  {
    id: "power-bi-analytics",
    title: "Power BI & Enterprise Analytics",
    category: "Business Intelligence",
    tagline: "Real-Time Telemetry & Predictive Executive Dashboards",
    description:
      "Convert fragmented transactional data into stunning, real-time executive cockpits with complex DAX modeling, automated ETL pipelines, and predictive analytics.",
    badge: "Executive Cockpit",
    metric: "100%",
    metricLabel: "Real-Time Visibility",
    features: [
      "Real-Time Executive KPI Telemetry",
      "Advanced DAX & Tabular Data Modeling",
      "Automated DirectQuery & Incremental Refresh",
      "Row-Level Security (RLS) & Multi-Tenant Governance",
      "Automated PDF/Email Executive Briefings",
    ],
    architecture: [
      "Multi-Source Ingestion (SQL, Dataverse, APIs)",
      "Automated Medallion ETL (Bronze/Silver/Gold)",
      "Optimized Semantic Star-Schema Modeling",
      "Interactive Low-Latency DAX Measures",
      "Cross-Platform Power BI Mobile & Embedded UI",
    ],
    techStack: ["Power BI", "Fabric", "DAX Studio", "Azure Synapse", "SQL Server", "Tabular Editor"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconName: "BarChart3",
  },
  {
    id: "workflow-automation",
    title: "Business Process & Workflow Automation",
    category: "BPA & Orchestration",
    tagline: "End-to-End Event-Driven Digital Pipelines",
    description:
      "Eliminate organizational bottlenecks by unifying approvals, document handoffs, human-in-the-loop decisions, and third-party integrations into fluid automated workflows.",
    badge: "Zero Bottlenecks",
    metric: "85%",
    metricLabel: "Cycle Time Reduction",
    features: [
      "Multi-Tier Dynamic Approval Matrixes",
      "Human-in-the-Loop Smart Exception Handling",
      "Enterprise Webhook & Event-Driven Triggers",
      "Conditional Branching & Escalation SLAs",
      "Unified Audit Logs & ISO Compliance",
    ],
    architecture: [
      "Event Ingestion (Forms, Sensors, Webhooks)",
      "State Machine Evaluation & Branching",
      "Parallel Approver & System Dispatch",
      "SLA Timer & Automatic Escalation Gate",
      "Notification Dispatch & Ledger Update",
    ],
    techStack: ["Power Automate", "n8n", "Make", "Zapier Enterprise", "Camunda", "Node.js"],
    gradient: "from-purple-500/20 via-blue-500/10 to-transparent",
    iconName: "GitFork",
  },
  {
    id: "web-applications",
    title: "Modern Web Application Development",
    category: "Engineering",
    tagline: "Ultra-Fast, Scalable, Cloud-Native Portals & Platforms",
    description:
      "Craft world-class enterprise SaaS products, customer portals, and internal operations hubs with sub-second response times, bulletproof security, and intuitive UX.",
    badge: "Sub-Second Speed",
    metric: "99.99%",
    metricLabel: "Uptime Reliability",
    features: [
      "Modern React / Next.js 15 Server-Driven Architecture",
      "Real-Time Collaborative WebSockets & Live Telemetry",
      "Role-Based Access Control (RBAC) & SSO Integration",
      "Micro-Frontends & Modular Scalable Component Systems",
      "Comprehensive SEO, Accessibility & High-Performance CWV",
    ],
    architecture: [
      "Edge-Cached CDN Request Routing",
      "Next.js SSR & Server Action Compute",
      "GraphQL / REST Microservice Layer",
      "Distributed PostgreSQL / Redis Cache",
      "Continuous Zero-Downtime Deployment",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"],
    gradient: "from-cyan-500/20 via-indigo-500/10 to-transparent",
    iconName: "Globe",
  },
  {
    id: "mobile-apps",
    title: "Enterprise Mobile App Development",
    category: "Mobile Systems",
    tagline: "Native-Speed Cross-Platform iOS & Android Applications",
    description:
      "Equip field technicians, executives, and remote operations teams with offline-first, high-performance mobile apps integrated directly with back-office systems.",
    badge: "Offline-First Ready",
    metric: "60 FPS",
    metricLabel: "Fluid Performance",
    features: [
      "Offline-First SQLite & Instant Background Sync",
      "Biometric Authentication & Enterprise Mobile Security",
      "Camera Barcode, QR & OCR Scanning Engines",
      "Push Notification & Geofenced Alerts",
      "Bluetooth & Industrial Sensor Connectivity",
    ],
    architecture: [
      "Client Device Storage & Encrypted SQLite",
      "Sync Queue & Conflict-Free Resolution",
      "Authenticated WebSocket / HTTPS Gateway",
      "Enterprise Service Bus / Backend API",
      "Real-Time Push Notification Engine",
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "iOS Swift", "Android Kotlin", "Firebase"],
    gradient: "from-blue-500/20 via-purple-500/10 to-transparent",
    iconName: "Smartphone",
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps Automation",
    category: "Infrastructure",
    tagline: "Resilient Infrastructure as Code & Automated CI/CD",
    description:
      "Architect self-healing, auto-scaling cloud foundations across Azure, AWS, and GCP with automated CI/CD pipelines, container orchestration, and zero-trust security.",
    badge: "Zero-Downtime CI/CD",
    metric: "70%",
    metricLabel: "Cloud Cost Efficiency",
    features: [
      "Infrastructure as Code (Terraform / Pulumi)",
      "Automated Zero-Downtime CI/CD Blue/Green Deployments",
      "Kubernetes & Docker Container Orchestration",
      "24/7 Automated Health Checks & Log Observability",
      "SOC2, ISO27001, and HIPAA Security Hardening",
    ],
    architecture: [
      "Git Commit & Automated Security Linting",
      "Multi-Stage Docker Image Build & Test",
      "Terraform State Provisioning",
      "Kubernetes Rolling Zero-Downtime Release",
      "Prometheus & Grafana Telemetry Tracing",
    ],
    techStack: ["AWS", "Microsoft Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    gradient: "from-indigo-500/20 via-cyan-500/10 to-transparent",
    iconName: "Cloud",
  },
  {
    id: "custom-software",
    title: "Custom Enterprise Software & Integrations",
    category: "Bespoke Solutions",
    tagline: "Tailor-Made Solutions for Unique Engineering Demands",
    description:
      "Bridge legacy ERPs, MES shopfloor hardware, proprietary databases, and modern cloud APIs with custom engineered, highly resilient software architecture.",
    badge: "Bespoke Architecture",
    metric: "100%",
    metricLabel: "Custom Fit",
    features: [
      "Bespoke ERP / CRM Custom Modules & Extensions",
      "High-Throughput REST & GraphQL API Middleware",
      "Industrial MES & SCADA Data Connectors",
      "Legacy Database Migration & Bi-directional Sync",
      "Comprehensive Automated Unit & Integration Test Suites",
    ],
    architecture: [
      "Requirement Domain-Driven Modeling",
      "Secure Microservice Protocol Layer",
      "High-Performance Event Broker (Kafka/RabbitMQ)",
      "Idempotent Transactional Persistence",
      "Real-time Enterprise Audit & Diagnostic Console",
    ],
    techStack: ["Node.js", "Python", "Go", "C# .NET Core", "PostgreSQL", "Kafka", "Docker"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    iconName: "Layers",
  },
];
