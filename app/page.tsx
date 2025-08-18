import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ProjectsSection from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";

import { services } from "@/data/services";
import { projects } from "@/data/projects";

import { Cpu, Settings, Server, TrendingUp } from "lucide-react";

export default function Home() {
  const steps = [
    { title: "Discovery", blurb: "Deep-dive on goals, risks, constraints.", icon: <Cpu className="h-5 w-5" /> },
    { title: "Strategy", blurb: "Architecture plan, baselines, success metrics.", icon: <Settings className="h-5 w-5" /> },
    { title: "Implementation", blurb: "IaC rollout with change control & playbooks.", icon: <Server className="h-5 w-5" /> },
    { title: "Optimization", blurb: "Telemetry + AI insights for perf & cost.", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  return (
    <main className="relative overflow-x-clip bg-gradient-to-b from-[#0b0615] via-[#140a2a] to-[#0b0615] text-cyan-50">
      {/* Services */}
      <ServicesSection items={services} />

      {/* Projects */}
      <ProjectsSection projects={projects} />

      {/* Process */}
      <ProcessSection steps={steps} />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
