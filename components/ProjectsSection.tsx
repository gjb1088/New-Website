"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative py-28">
      {/* Section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[70vw] -translate-x-1/2 rounded-full bg-cyan-600/8 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-fuchsia-400 uppercase mb-3">
            Proven Results
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            PROJECTS &{" "}
            <span className="text-gradient-fuchsia">CASE STUDIES</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-cyan-100/55 text-base leading-relaxed">
            Real outcomes from real engagements. Every case study is backed by measurable results.
          </p>
          <div className="mt-6 divider-glow max-w-xs mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/3 overflow-hidden card-hover"
            >
              {/* Gradient "image" header */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(ellipse at center, ${p.accentColor}30 0%, transparent 70%)`,
                  }}
                />
                {/* Industry tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{
                      backgroundColor: `${p.accentColor}20`,
                      color: p.accentColor,
                      border: `1px solid ${p.accentColor}40`,
                    }}
                  >
                    {p.industry}
                  </span>
                </div>
                {/* Stat overlay */}
                {p.stat && (
                  <div className="relative z-10 text-center">
                    <div className="font-display text-5xl font-bold text-white drop-shadow-lg" style={{ textShadow: `0 0 30px ${p.accentColor}` }}>
                      {p.stat}
                    </div>
                    <div className="text-xs font-medium tracking-wide mt-1" style={{ color: p.accentColor }}>
                      {p.statLabel}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-2 leading-tight">
                  {p.shortTitle}
                </h3>
                <p className="text-sm text-cyan-100/55 leading-relaxed flex-1">{p.summary}</p>

                {/* Key outcome */}
                {p.outcomes?.[0] && (
                  <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-400/8 border border-emerald-400/20 px-3 py-2">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-emerald-300/80 leading-relaxed">{p.outcomes[0]}</span>
                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
