export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: string;
  metricLabel: string;
  useCases: string[];
  iconName: string;
  gradient: string;
  size: "large" | "medium" | "small";
}

export const industriesData: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Manufacturing 4.0",
    tagline: "Connected Smart Factory Floors & OEE Optimization",
    description:
      "Telemetry from PLC/SCADA devices, automated machine health prediction, scrap reduction, and shopfloor scheduling.",
    metrics: "+32%",
    metricLabel: "OEE Uplift",
    useCases: ["Predictive Machine Maintenance", "Automated Shift Handover Logs", "Production Line Balancing"],
    iconName: "Factory",
    gradient: "from-blue-600/30 via-cyan-500/10 to-transparent",
    size: "large",
  },
  {
    id: "aerospace",
    name: "Aerospace & Defense",
    tagline: "Mission-Critical Traceability & Engineering Governance",
    description:
      "Zero-defect digital work instructions, AS9100 audit compliance trails, and CAD/PLM automated sync.",
    metrics: "100%",
    metricLabel: "AS9100 Compliance",
    useCases: ["Engineering Change Governance", "Material Certification OCR", "Tool Calibration Automation"],
    iconName: "Plane",
    gradient: "from-cyan-600/30 via-blue-500/10 to-transparent",
    size: "medium",
  },
  {
    id: "engineering",
    name: "Precision Engineering",
    tagline: "Parametric Design Automation & Quality Telemetry",
    description:
      "Automated bill of materials (BOM) generation, CNC job queue scheduling, and automated dimensional inspection.",
    metrics: "-65%",
    metricLabel: "BOM Prep Time",
    useCases: ["Automated CAD Model Validation", "Tolerance Stack-up Scripts", "Shopfloor Work Order Dispatch"],
    iconName: "Wrench",
    gradient: "from-purple-600/30 via-indigo-500/10 to-transparent",
    size: "medium",
  },
  {
    id: "quality-management",
    name: "Quality Management",
    tagline: "Vision AI & Closed-Loop Corrective Action (CAPA)",
    description:
      "Automated optical inspection, statistical process control (SPC) chart alerts, and Non-Conformance (NCR) workflows.",
    metrics: "99.8%",
    metricLabel: "Defect Catch Rate",
    useCases: ["Vision AI Surface Defect Detection", "Automated 8D Root Cause Reports", "Supplier Quality Portals"],
    iconName: "ShieldCheck",
    gradient: "from-amber-600/30 via-orange-500/10 to-transparent",
    size: "large",
  },
  {
    id: "finance",
    name: "Enterprise Finance & Banking",
    tagline: "Zero-Touch Invoice Reconciliation & AP/AR Bots",
    description:
      "End-to-end invoice OCR, three-way matching with purchase orders, bank reconciliation bots, and regulatory filings.",
    metrics: "3.2s",
    metricLabel: "Invoice Clearing",
    useCases: ["Automated Three-Way Matching", "Bank Statement Parsing Bots", "Fraud Anomaly Detection"],
    iconName: "CreditCard",
    gradient: "from-emerald-600/30 via-teal-500/10 to-transparent",
    size: "medium",
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    tagline: "Dynamic Freight Tracking & Predictive Reordering",
    description:
      "Real-time shipment telemetry, automated carrier bidding, dock appointment scheduling, and warehouse inventory sync.",
    metrics: "-40%",
    metricLabel: "Lead Time Variance",
    useCases: ["Automated Bill of Lading Intake", "Dynamic Safety Stock Calculation", "Carrier EDI Orchestration"],
    iconName: "Truck",
    gradient: "from-blue-600/30 via-sky-500/10 to-transparent",
    size: "medium",
  },
  {
    id: "hr-admin",
    name: "HR & Enterprise Admin",
    tagline: "Frictionless Employee Lifecycle & Compliance Workflows",
    description:
      "Automated candidate resume parsing, one-click IT asset provisioning, leave tracking, and automated payroll audits.",
    metrics: "90%",
    metricLabel: "Onboarding Velocity",
    useCases: ["Automated SSO Account Provisioning", "Policy Acknowledgement Bot", "Automated Reimbursement Audit"],
    iconName: "Users",
    gradient: "from-indigo-600/30 via-purple-500/10 to-transparent",
    size: "small",
  },
  {
    id: "operations",
    name: "Global Operations",
    tagline: "C-Suite Observability & Automated Incident Escalation",
    description:
      "Cross-departmental telemetry aggregation, SLA breach prediction, and automated executive decision briefings.",
    metrics: "24/7",
    metricLabel: "Autonomous Vigilance",
    useCases: ["SLA Escalation Matrixes", "Multi-Entity Financial Rollup", "Operational Risk Radar"],
    iconName: "Activity",
    gradient: "from-cyan-600/30 via-teal-500/10 to-transparent",
    size: "small",
  },
];
