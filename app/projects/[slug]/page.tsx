import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Project – Not found" };
  return {
    title: `${project.title} – Burn.IT Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} – Burn.IT Case Study`,
      description: project.summary,
      images: [{ url: project.thumb }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <main className="relative mx-auto max-w-5xl px-6 py-16 text-cyan-50">
      <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">{project.industry}</p>
        <h1 className="mt-1 text-3xl md:text-5xl font-extrabold tracking-wide text-cyan-200">{project.title}</h1>
        {project.stat && <p className="mt-3 text-emerald-300/90 text-sm font-semibold">{project.stat}</p>}
      </motion.header>

      <div className="relative mb-10 overflow-hidden rounded-2xl border border-cyan-400/30">
        <div className="relative aspect-[16/9] w-full">
          <Image src={project.thumb} alt={project.title} fill className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      <section className="prose prose-invert prose-cyan max-w-none">
        <h2>Overview</h2>
        <p>{project.summary}</p>

        <h3>Challenges</h3>
        <ul>
          <li>Legacy network topology created lateral risk and frequent outages.</li>
          <li>Limited observability; no centralized logging or telemetry.</li>
          <li>Manual change management created drift and downtime risk.</li>
        </ul>

        <h3>Solution</h3>
        <ul>
          <li>Segmented VLAN design; HA firewalls; least‑privilege access.</li>
          <li>Identity & access hardening (MFA/SSO), baseline policies.</li>
          <li>IaC deployment (Ansible/Terraform) with change control.</li>
          <li>Telemetry + SIEM with actionable alerting and playbooks.</li>
        </ul>

        <h3>Outcomes</h3>
        <ul>
          <li>Reduced incidents and mean‑time‑to‑repair (MTTR).</li>
          <li>Improved compliance posture and audit readiness.</li>
          <li>Cost optimization via right‑sizing and automation.</li>
        </ul>
      </section>

      <div className="mt-14 text-center">
        <a href="/#contact" className="inline-flex items-center rounded-2xl border border-fuchsia-400/40 bg-black/30 px-6 py-3 text-sm font-semibold tracking-wide text-fuchsia-200 hover:bg-black/50">
          BOOK A CONSULTATION
        </a>
      </div>
    </main>
  );
}
