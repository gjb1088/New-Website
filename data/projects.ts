import type { Project } from "@/components/ProjectsSection";

export const projects: Project[] = [
  {
    slug: "network-overhaul-manufacturing",
    title: "Manufacturing – Core Network Overhaul",
    industry: "Manufacturing",
    summary: "Re-architected LAN/WAN with segmented VLANs, redundant firewalls, and centralized monitoring.",
    stat: "99.95% uptime within first month",
    thumb: "/images/projects/manufacturing-overhaul.jpg",
  },
  {
    slug: "finance-security-hardening",
    title: "Finance – Security Hardening & SIEM",
    industry: "Financial Services",
    summary: "Implemented identity governance, MFA, and SIEM alerting with automated playbooks.",
    stat: "Reduced mean-time-to-detect by 68%",
    thumb: "/images/projects/finance-security.jpg",
  },
  {
    slug: "healthcare-cloud-migration",
    title: "Healthcare – Hybrid Cloud Migration",
    industry: "Healthcare",
    summary: "Migrated on‑prem workloads to Azure with HIPAA-aligned policies and encrypted transit.",
    stat: "Cut infra costs by 34%",
    thumb: "/images/projects/healthcare-cloud.jpg",
  },
];
