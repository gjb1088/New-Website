import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageContent from "@/components/ProjectPageContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Project – Not found" };
  return {
    title: `${project.title} – Burn.IT Case Study`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <ProjectPageContent project={project} />
      <Footer />
    </>
  );
}
