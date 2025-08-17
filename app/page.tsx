import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ProjectsSection from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";

import { services } from "@/data/services";
import { projects } from "@/data/projects";

import { Cpu, Settings, Server, TrendingUp } from "lucide-react";

export default function Home() {
  const steps = [
    {
      title: "Discovery",
      blurb: "Deep-dive on goals, risks, and constraints so we target the biggest wins first.",
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      title: "Strategy",
      blurb: "Architecture plan: security baselines, landing zones, and success metrics.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Implementation",
      blurb: "IaC-driven rollout with change control, playbooks, and zero-downtime windows.",
      icon: <Server className="h-5 w-5" />,
    },
    {
      title: "Optimization",
      blurb: "Telemetry + AI insights to tune performance, reliability, and cost over time.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <main className="relative overflow-x-clip bg-gradient-to-b from-[#0b0615] via-[#140a2a] to-[#0b0615] text-cyan-50">
      <ServicesSection services={require('@/data/services').services} />

      <ProjectsSection projects={projects} />
      <ProcessSection steps={steps} />

      <CTASection />
      {/* CTA */}
      <CTASection />

      {/* Contact + Footer here */}
    </main>
  );
}
