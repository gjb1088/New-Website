export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: string; // /images/services/*.svg|png
};

export const services: Service[] = [
  {
    slug: "network-engineering",
    title: "Network Engineering",
    blurb: "LAN/WAN design, VLAN segmentation, HA firewalls, VPN, QoS, and zero‑touch rollout.",
    icon: "/images/services/network.svg",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    blurb: "MFA/SSO, endpoint hardening, SIEM + SOAR playbooks, compliance-ready baselines.",
    icon: "/images/services/security.svg",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    blurb: "IaC (Terraform/Ansible), CI/CD pipelines, container platforms, cost and perf tuning.",
    icon: "/images/services/cloud.svg",
  },
  {
    slug: "ai-ops",
    title: "AI‑Ops",
    blurb: "Telemetry ingestion, anomaly detection, LLM-driven insight and self‑healing actions.",
    icon: "/images/services/ai.svg",
  }
];
