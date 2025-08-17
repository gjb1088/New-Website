import Image from "next/image";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

export default function ServicesSection({ items }: { items: Service[] }) {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-cyan-200"
        >
          SERVICES
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 p-5 shadow-[0_0_24px_-10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_36px_-8px_rgba(232,121,249,0.5)] duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image src={s.icon} alt={s.title} fill className="object-contain" />
                </div>
                <h3 className="text-base font-bold text-cyan-100 tracking-wide">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-cyan-100/80">{s.blurb}</p>

              <a
                href={`/#contact`}
                className="mt-5 inline-flex rounded-xl border border-fuchsia-400/40 bg-black/30 px-3 py-2 text-xs font-semibold text-fuchsia-200 hover:bg-black/50"
              >
                REQUEST A QUOTE
              </a>

              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-fuchsia-500/40" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[90px]" />
      </div>
    </section>
  );
}
