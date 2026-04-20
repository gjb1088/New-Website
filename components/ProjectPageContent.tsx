"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectPageContent({ project }: { project: Project }) {
  return (
    <main className="relative min-h-screen bg-[#080d1c] text-cyan-50 overflow-x-hidden pt-24 pb-20">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[130px]"
          style={{ backgroundColor: `${project.accentColor}0A` }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm text-cyan-400/70 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </a>
        </motion.div>

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              backgroundColor: `${project.accentColor}18`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}35`,
            }}
          >
            {project.industry}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h1>
        </motion.header>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`mt-8 rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} overflow-hidden relative`}
          style={{ minHeight: "280px" }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: `radial-gradient(ellipse at center, ${project.accentColor}28 0%, transparent 70%)` }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[280px] gap-2">
            {project.stat && (
              <>
                <div
                  className="font-display text-6xl md:text-8xl font-bold text-white"
                  style={{ textShadow: `0 0 40px ${project.accentColor}` }}
                >
                  {project.stat}
                </div>
                <div className="text-base font-medium" style={{ color: project.accentColor }}>
                  {project.statLabel}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 text-base md:text-lg text-cyan-100/70 leading-relaxed"
        >
          {project.summary}
        </motion.p>

        {/* Details grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Challenges */}
          <div className="rounded-2xl border border-red-400/15 bg-red-900/10 p-5">
            <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-red-300/80 mb-4">
              Challenges
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-cyan-100/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400/60" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl border border-cyan-400/15 bg-cyan-900/10 p-5">
            <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-cyan-300/80 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {project.solutions.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-cyan-100/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/60" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-900/10 p-5">
            <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-emerald-300/80 mb-4">
              Outcomes
            </h3>
            <ul className="space-y-3">
              {project.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-cyan-100/60">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
          >
            <TrendingUp className="h-4 w-4" />
            BOOK A CONSULTATION
          </a>
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-8 py-4 text-sm font-semibold text-white/70 hover:bg-white/8 hover:text-white transition-all duration-300"
          >
            VIEW ALL PROJECTS
          </a>
        </motion.div>
      </div>
    </main>
  );
}
