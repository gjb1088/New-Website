export type Service = {
  slug: string;
  title: string;
  blurb: string;
  iconName: string;
  highlight?: boolean;
};

export const services: Service[] = [
  {
    slug: "infrastructure-management",
    title: "Infrastructure Management",
    blurb: "LAN/WAN design, VLAN segmentation, HA firewalls, VPN, QoS, and zero-touch provisioning across your entire network fabric.",
    iconName: "Server",
  },
  {
    slug: "cloud-virtualization",
    title: "Cloud & Virtualization",
    blurb: "Hybrid and multi-cloud architecture, VMware/Hyper-V, IaC (Terraform/Ansible), cost optimization, and cloud-native migrations.",
    iconName: "Cloud",
  },
  {
    slug: "automation-devops",
    title: "Automation & DevOps",
    blurb: "CI/CD pipelines, container platforms (Docker/Kubernetes), GitOps workflows, and infrastructure automation at scale.",
    iconName: "Workflow",
  },
  {
    slug: "monitoring-analytics",
    title: "Monitoring & Analytics",
    blurb: "Full-stack observability, real-time dashboards, SIEM integration, log aggregation, and proactive alerting with intelligent triage.",
    iconName: "Activity",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    blurb: "MFA/SSO, endpoint hardening, SIEM + SOAR playbooks, penetration testing, and compliance-ready baselines (SOC2, HIPAA, PCI-DSS).",
    iconName: "ShieldCheck",
  },
  {
    slug: "ai-ops",
    title: "AI-Ops",
    blurb: "Telemetry ingestion, anomaly detection, LLM-driven insights, predictive capacity planning, and self-healing automation actions.",
    iconName: "Brain",
  },
];
