"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Workflow,
  Activity,
  ShieldCheck,
  Brain,
  ArrowRight,
} from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Cloud,
  Workflow,
  Activity,
  ShieldCheck,
  Brain,
};

const iconColors = [
  "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20",
  "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "text-amber-400 bg-amber-400/10 border-amber-400/20",
];

export default function ServicesSection({ items }: { items: Service[] }) {
  return (
    <section id="services" className="relative py-28">
      {/* Section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[70vw] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[100px]" />
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
          <p className="font-terminal text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            OUR <span className="text-gradient-cyan">SERVICES</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-cyan-100/55 text-base leading-relaxed">
            End-to-end IT solutions engineered for performance, security, and scale.
            Every engagement is backed by our 99.99% uptime SLA.
          </p>
          <div className="mt-6 divider-glow max-w-xs mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => {
            const Icon = iconMap[s.iconName] ?? Server;
            const colorClass = iconColors[i % iconColors.length];

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 card-hover overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-[60px] bg-gradient-to-bl from-white/3 to-transparent" />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl border ${colorClass} mb-5`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Index number */}
                <div className="absolute top-5 right-5 font-display text-4xl font-bold text-white/5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-2 tracking-wide">
                  {s.title}
                </h3>
                <p className="text-sm text-cyan-100/55 leading-relaxed mb-5">{s.blurb}</p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400/80 hover:text-cyan-300 group-hover:gap-2.5 transition-all duration-200"
                >
                  REQUEST A QUOTE
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400/50 to-fuchsia-500/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
