"use client";

import { motion } from "framer-motion";
import { Award, Star, Quote } from "lucide-react";

const partners = [
  { name: "EAGLE", initials: "E", color: "#22d3ee" },
  { name: "HEXACORP", initials: "HX", color: "#a855f7" },
  { name: "NEXTNOVA", initials: "NN", color: "#e879f9" },
  { name: "IRONVAULT", initials: "IV", color: "#10b981" },
  { name: "DATAPLEX", initials: "DP", color: "#f59e0b" },
];

const testimonial = {
  quote:
    "Burn.IT transformed our entire infrastructure in 90 days. Our uptime went from 97.2% to 99.98%, incident response time dropped by over 70%, and we finally passed our SOC 2 audit on the first attempt. This team is the real deal.",
  author: "Marcus R.",
  role: "CTO, Hexacorp Financial",
  rating: 5,
};

const badges = [
  {
    label: "PREMIER PARTNER",
    sub: "Microsoft Azure & AWS",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
  },
  {
    label: "AWARD WINNER",
    sub: "Best MSP 2024",
    color: "#e879f9",
    bg: "rgba(232,121,249,0.08)",
    border: "rgba(232,121,249,0.25)",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-80 w-[50vw] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-80 w-[40vw] rounded-full bg-cyan-600/6 blur-[100px]" />
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
          <p className="text-xs font-semibold tracking-[0.25em] text-purple-400 uppercase mb-3">
            Client Trust
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            WHAT OUR <span className="text-gradient-cyan">CLIENTS SAY</span>
          </h2>
          <div className="mt-6 divider-glow max-w-xs mx-auto" />
        </motion.div>

        {/* Partner logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-5 py-3 backdrop-blur-sm hover:border-white/15 transition-colors duration-300"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                style={{ backgroundColor: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}
              >
                {p.initials}
              </div>
              <span className="font-display text-sm font-semibold tracking-widest text-white/60">
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main testimonial block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-4 rounded-2xl p-5 border"
                style={{ backgroundColor: b.bg, borderColor: b.border }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${b.color}18`, border: `1px solid ${b.color}30` }}
                >
                  <Award className="h-6 w-6" style={{ color: b.color }} />
                </div>
                <div>
                  <div className="font-display text-sm font-bold tracking-widest" style={{ color: b.color }}>
                    {b.label}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">{b.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-2 relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-slate-900/40 to-cyan-900/20 p-8 backdrop-blur-sm overflow-hidden"
          >
            {/* Big quote mark */}
            <Quote className="absolute top-5 right-6 h-20 w-20 text-white/4" />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-base md:text-lg text-cyan-100/80 leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                {testimonial.author[0]}
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                <div className="text-xs text-cyan-100/50">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
