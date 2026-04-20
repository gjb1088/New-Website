"use client";

import { motion } from "framer-motion";
import { Search, Map, Rocket, BarChart3 } from "lucide-react";

export type Step = {
  title: string;
  blurb: string;
  icon: React.ReactNode;
  color: string;
};

const defaultSteps: Step[] = [
  {
    title: "Discovery",
    blurb: "Deep-dive on your goals, risks, and constraints. We audit your current stack and map every pain point.",
    icon: <Search className="h-6 w-6" />,
    color: "#22d3ee",
  },
  {
    title: "Strategy",
    blurb: "Architecture plan, baseline benchmarks, and success metrics. You approve before a single change is made.",
    icon: <Map className="h-6 w-6" />,
    color: "#a855f7",
  },
  {
    title: "Implementation",
    blurb: "IaC rollout with strict change control, rollback playbooks, and zero-downtime deployment windows.",
    icon: <Rocket className="h-6 w-6" />,
    color: "#e879f9",
  },
  {
    title: "Optimization",
    blurb: "Continuous telemetry, AI-driven insights, cost tuning, and quarterly performance reviews.",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "#10b981",
  },
];

export function ProcessSection({ steps = defaultSteps }: { steps?: Step[] }) {
  return (
    <section id="process" className="relative py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[60vw] rounded-full bg-fuchsia-700/8 blur-[120px]" />
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
          <p className="font-terminal text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            OUR <span className="text-gradient-cyan">PROCESS</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-cyan-100/55 text-base leading-relaxed">
            A proven four-phase methodology that eliminates guesswork and delivers
            measurable outcomes from day one.
          </p>
          <div className="mt-6 divider-glow max-w-xs mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-emerald-400/20 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div
                className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${s.color}12`,
                  borderColor: `${s.color}30`,
                  color: s.color,
                  boxShadow: `0 0 30px ${s.color}20`,
                }}
              >
                {s.icon}
                {/* Step number */}
                <span
                  className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {i + 1}
                </span>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/8 bg-white/3 p-5 w-full backdrop-blur-sm card-hover">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-cyan-100/55 leading-relaxed">{s.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-cyan-100/50 mb-4">
            Ready to start your engagement?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
          >
            START WITH DISCOVERY
          </a>
        </motion.div>
      </div>
    </section>
  );
}
