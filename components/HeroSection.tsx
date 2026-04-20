"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 1 hr", label: "Response Time" },
  { value: "50+", label: "Clients Served" },
  { value: "24 / 7", label: "Monitoring" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[110px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 left-1/3 h-[300px] w-[300px] rounded-full bg-purple-600/6 blur-[90px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-400/20 rounded-tl-lg" />
      <div className="pointer-events-none absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-400/20 rounded-tr-lg" />
      <div className="pointer-events-none absolute bottom-12 left-8 w-20 h-20 border-l-2 border-b-2 border-fuchsia-400/20 rounded-bl-lg" />
      <div className="pointer-events-none absolute bottom-12 right-8 w-20 h-20 border-r-2 border-b-2 border-fuchsia-400/20 rounded-br-lg" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/8 px-4 py-1.5 mb-8 backdrop-blur-sm">
          <Zap className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
          <span className="text-xs font-semibold tracking-[0.15em] text-cyan-300 uppercase">
            Enterprise IT Consulting & Managed Services
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.1)}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <span className="text-white">BURN</span>
            <br />
            <span className="text-gradient-cyan">THE BOATS.</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.25)}
          className="mt-7 max-w-2xl mx-auto text-base md:text-xl text-cyan-100/60 leading-relaxed"
        >
          We partner with companies ready to leave the old way behind — modernizing their
          technology, eliminating legacy risk, and building systems engineered for what
          comes next, not what worked yesterday.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => window.dispatchEvent(new Event('open-consultation'))}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.55)] hover:scale-105 transition-all duration-300"
          >
            BOOK A CONSULTATION
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-white/4 px-8 py-4 text-sm font-semibold text-cyan-200 hover:bg-white/8 hover:border-cyan-400/60 backdrop-blur-sm transition-all duration-300"
          >
            VIEW CASE STUDIES
          </a>
        </motion.div>

        {/* Stats — re-enable when ready to display metrics
        <motion.div
          {...fadeUp(0.55)}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-cyan-400/20 bg-white/3 p-4 backdrop-blur-sm hover:border-cyan-400/40 transition-colors duration-300"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-cyan-300">
                {s.value}
              </span>
              <span className="text-xs text-cyan-100/50 tracking-wide text-center">{s.label}</span>
            </div>
          ))}
        </motion.div>
        */}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cyan-400/40"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
