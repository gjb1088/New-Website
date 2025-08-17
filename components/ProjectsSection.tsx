import Image from "next/image";
import { motion } from "framer-motion";

export type Project = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  stat?: string;
  thumb: string;
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-cyan-200">
          PROJECTS & CASE STUDIES
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: i * 0.06 }} className="group overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-900/40 p-0">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={p.thumb} alt={p.title} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="px-5 pb-5 pt-4">
                <h3 className="text-xl font-bold text-cyan-100">{p.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-fuchsia-300/80">{p.industry}</p>
                <p className="mt-3 text-sm text-cyan-100/80">{p.summary}</p>
                {p.stat && <p className="mt-2 text-xs font-semibold text-emerald-300/90">{p.stat}</p>}
                <div className="mt-5 flex items-center gap-3">
                  <a href={`/projects/${p.slug}`} className="inline-flex items-center rounded-xl border border-fuchsia-400/40 bg-black/30 px-4 py-2 text-sm font-semibold text-fuchsia-200 hover:bg-black/50">VIEW DETAILS</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
