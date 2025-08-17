import { motion } from "framer-motion";

export type Step = {
  title: string;
  blurb: string;
  icon?: React.ReactNode;
};

export function ProcessSection({ steps }: { steps: Step[] }) {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-cyan-200">
          OUR PROCESS
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-cyan-400/30 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-black/40 text-cyan-200">
                  {s.icon ?? <span className="text-lg">{i + 1}</span>}
                </div>
                <h3 className="text-lg font-bold text-cyan-100">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-cyan-100/80">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
