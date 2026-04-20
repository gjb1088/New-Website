export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  industry: string;
  summary: string;
  stat?: string;
  statLabel?: string;
  gradient: string;
  accentColor: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "network-overhaul-manufacturing",
    title: "Manufacturing – Core Network Overhaul",
    shortTitle: "Network Overhaul",
    industry: "Manufacturing",
    summary:
      "Re-architected a 400-node production LAN/WAN with segmented VLANs, redundant HA firewalls, and centralized observability. Eliminated single points of failure across 3 facilities.",
    stat: "99.95%",
    statLabel: "Uptime in first 30 days",
    gradient: "from-cyan-900/80 via-slate-900 to-blue-950/80",
    accentColor: "#22d3ee",
    challenges: [
      "Legacy flat network created lateral movement risk and cascading failures.",
      "No centralized logging — incidents took hours to diagnose.",
      "Manual change management caused configuration drift and unexpected downtime.",
    ],
    solutions: [
      "Segmented VLAN design with micro-perimeters for each production zone.",
      "Dual HA firewall clusters with automated failover in < 500ms.",
      "IaC deployment (Ansible/Terraform) with change control and rollback playbooks.",
      "Centralized SIEM with real-time alerting and incident dashboards.",
    ],
    outcomes: [
      "99.95% uptime achieved within the first month post-migration.",
      "Mean-time-to-detect incidents dropped from 4 hours to 12 minutes.",
      "Zero unplanned outages in 6 months following deployment.",
    ],
  },
  {
    slug: "finance-security-hardening",
    title: "Finance – Security Hardening & SIEM",
    shortTitle: "E-Commerce Security",
    industry: "Financial Services",
    summary:
      "Implemented identity governance, MFA enforcement, SIEM alerting with automated response playbooks, and a full SOC 2 Type II compliance baseline for a fintech platform.",
    stat: "68%",
    statLabel: "Faster threat detection",
    gradient: "from-fuchsia-900/80 via-slate-900 to-purple-950/80",
    accentColor: "#e879f9",
    challenges: [
      "No multi-factor authentication across 200+ privileged accounts.",
      "Alert fatigue — security team received 5,000+ daily unfiltered events.",
      "SOC 2 audit deadline in 90 days with no existing compliance posture.",
    ],
    solutions: [
      "Identity governance with MFA/SSO rollout across all privileged accounts.",
      "SIEM deployment with ML-driven noise reduction — 95% alert reduction.",
      "SOAR playbooks for automated threat containment and escalation.",
      "Compliance baseline configuration across all endpoints and cloud services.",
    ],
    outcomes: [
      "Mean-time-to-detect reduced by 68% within 60 days.",
      "Passed SOC 2 Type II audit with zero critical findings.",
      "Zero successful phishing incidents in the 12 months post-deployment.",
    ],
  },
  {
    slug: "healthcare-cloud-migration",
    title: "Healthcare – Hybrid Cloud Migration",
    shortTitle: "Data Center Upgrade",
    industry: "Healthcare",
    summary:
      "Migrated on-premises workloads to a HIPAA-aligned Azure hybrid cloud with encrypted transit, automated compliance scanning, and a 34% reduction in infrastructure costs.",
    stat: "34%",
    statLabel: "Infrastructure cost reduction",
    gradient: "from-emerald-900/80 via-slate-900 to-teal-950/80",
    accentColor: "#10b981",
    challenges: [
      "On-prem data centers approaching end-of-life with costly hardware refresh needed.",
      "HIPAA compliance required encrypted data at rest and in transit.",
      "Clinical staff needed zero-downtime migration with no workflow interruption.",
    ],
    solutions: [
      "Hybrid Azure deployment with ExpressRoute for dedicated private connectivity.",
      "End-to-end encryption, Azure Policy enforcement, and automated compliance scanning.",
      "Phased migration with blue-green deployment strategy — zero downtime.",
      "Right-sizing analysis eliminated 40% of over-provisioned resources.",
    ],
    outcomes: [
      "34% reduction in annual infrastructure spend within 3 months.",
      "Full HIPAA compliance validated by external audit.",
      "Migration completed with zero clinical workflow interruptions.",
    ],
  },
];
