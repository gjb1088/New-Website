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
    slug: "sharepoint-intranet-spfx",
    title: "Corporate Intranet – Custom SPFx Add-On Development",
    shortTitle: "SharePoint Intranet Add-On",
    industry: "Enterprise Collaboration",
    summary:
      "Built a custom SharePoint Framework (SPFx) add-on unifying five subsidiaries under a single intranet platform — with per-company dynamic branding, logo switching, and theme customization, all driven through a configurable web part panel.",
    stat: "5",
    statLabel: "Companies unified on one platform",
    gradient: "from-cyan-900/80 via-slate-900 to-blue-950/80",
    accentColor: "#22d3ee",
    challenges: [
      "Five distinct business units each needed unique branding — logos, color themes, and display names — on a shared SharePoint tenant.",
      "Out-of-the-box SharePoint theming couldn't dynamically switch context per company without separate site collections and duplicated maintenance overhead.",
      "Intranet needed to feel native to each brand without requiring IT intervention every time content or branding changed.",
    ],
    solutions: [
      "Developed a custom SPFx web part using TypeScript, HTML, and CSS that reads company context from SharePoint site properties and renders the correct logo, color palette, and display name dynamically.",
      "Built a configurable property pane allowing site owners to select their business unit — no developer involvement needed for branding updates.",
      "Implemented responsive CSS theming via CSS custom properties, allowing instant theme switching across all intranet components from a single variable update.",
      "Integrated a centralized asset library in SharePoint so all five companies pull logos and brand assets from one governed source of truth.",
    ],
    outcomes: [
      "All five subsidiaries launched on a single SharePoint tenant with zero cross-brand bleed.",
      "Branding updates that previously required developer deployments now take under 5 minutes by site owners.",
      "Eliminated 5 separate intranet maintenance streams, reducing ongoing IT overhead by an estimated 60%.",
    ],
  },
  {
    slug: "intune-autopilot-zero-trust-byod",
    title: "Zero-Trust Endpoint Management – Intune, Autopilot & Conditional Access",
    shortTitle: "Intune Zero-Trust & BYOD",
    industry: "Cybersecurity & Endpoint",
    summary:
      "Deployed a full Microsoft Intune and Autopilot ecosystem with Conditional Access policies and App Protection Policies — completely segregating company data on BYOD devices, enforcing compliant-device-only sign-ins, and automating the entire device lifecycle from enrollment to retirement.",
    stat: "100%",
    statLabel: "Company data isolated on BYOD",
    gradient: "from-fuchsia-900/80 via-slate-900 to-purple-950/80",
    accentColor: "#e879f9",
    challenges: [
      "Employees accessing corporate Microsoft 365 data on personal devices with no MDM controls — no visibility, no enforcement, no wipe capability.",
      "No conditional access in place meant any credential compromise could grant full access from any device, anywhere.",
      "Device provisioning was fully manual — IT spent 3–4 hours per machine on imaging, software installs, and policy application.",
    ],
    solutions: [
      "Stood up Windows Autopilot with zero-touch provisioning — devices ship directly to employees and self-configure to corporate policy on first boot.",
      "Deployed Intune MDM for corporate devices and MAM (App Protection Policies) for BYOD — company data containerized in managed apps with no ability to copy out to personal storage.",
      "Configured Conditional Access policies requiring compliant device status, MFA, and approved client apps before any Microsoft 365 sign-in is permitted.",
      "Built App Protection Policies enforcing PIN, encryption, and selective wipe on corporate data without touching personal content on BYOD.",
      "Automated device lifecycle management — enrollment, compliance checks, remediation, and off-boarding retirement handled through Intune automation rules.",
    ],
    outcomes: [
      "Corporate data fully isolated on all BYOD devices — personal and work data completely segregated with selective wipe capability.",
      "New device provisioning time reduced from 3–4 hours to under 45 minutes with zero IT physical touch via Autopilot.",
      "Non-compliant device sign-ins blocked at 100% — zero unauthorized access incidents post-deployment.",
      "Conditional Access enforcement reduced credential-based attack surface, with no successful account compromise in 12 months following rollout.",
    ],
  },
  {
    slug: "self-healing-network-monitor",
    title: "Self-Healing Network Monitor – Ansible, Playwright & AI Analytics",
    shortTitle: "AI Self-Healing Network Monitor",
    industry: "Network Operations",
    summary:
      "Engineered an autonomous network monitoring platform combining Ansible remediation playbooks, Playwright-driven synthetic testing, and an AI layer that provides real-time health analysis — diagnosing faults and triggering background remediation before users ever notice an issue.",
    stat: "87%",
    statLabel: "Of incidents auto-remediated",
    gradient: "from-emerald-900/80 via-slate-900 to-teal-950/80",
    accentColor: "#10b981",
    challenges: [
      "Network incidents were reactive — engineers only discovered issues after users reported them, often 20–40 minutes into an outage.",
      "Repetitive remediation tasks (interface resets, BGP session restarts, DHCP lease flushes) consumed hours of engineer time weekly on toil that could be automated.",
      "No single pane of glass for network health — data was fragmented across vendor dashboards with no correlated intelligence.",
    ],
    solutions: [
      "Built a real-time network analytics dashboard aggregating SNMP, syslog, and flow data into a unified interface with live topology visualization.",
      "Integrated an AI layer that continuously analyzes health signals — flagging anomalies, predicting degradation patterns, and surfacing a plain-English status summary of network condition.",
      "Deployed Ansible remediation playbooks covering the most common fault classes — interface bounces, routing protocol resets, DNS/DHCP recovery, and switch config drift correction.",
      "Used Playwright for synthetic end-to-end connectivity probes running on a scheduled loop, validating critical paths and triggering playbooks the moment a probe fails.",
      "Built an alerting pipeline that pages engineers only when automation fails to resolve an issue, eliminating noise from self-correcting events.",
    ],
    outcomes: [
      "87% of detected network incidents resolved autonomously before user impact — no ticket opened, no engineer paged.",
      "Mean time to remediation dropped from an average of 34 minutes to under 4 minutes for automated fault classes.",
      "Engineer toil from repetitive remediation tasks reduced by over 70%, freeing the team for higher-value infrastructure work.",
      "AI health summaries provided instant situational awareness, reducing time spent correlating logs during incidents by 65%.",
    ],
  },
];
