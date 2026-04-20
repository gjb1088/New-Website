import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
// import TestimonialsSection from "@/components/TestimonialsSection"; // re-enable when testimonials are ready
import { ProcessSection } from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080d1c] text-cyan-50 overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />

        {/* Divider */}
        <div className="divider-glow mx-auto max-w-4xl" />

        <ServicesSection items={services} />

        {/* Divider */}
        <div className="divider-glow mx-auto max-w-4xl" />

        <ProjectsSection projects={projects} />

        {/* Divider */}
        <div className="divider-glow mx-auto max-w-4xl" />
        {/* <TestimonialsSection /> */}

        <ProcessSection />

        {/* Divider */}
        <div className="divider-glow mx-auto max-w-4xl" />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
