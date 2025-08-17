export default function CTASection() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide text-cyan-200">
          Ready to Burn and Build?
        </h2>
        <p className="mt-3 text-cyan-100/80">
          Let’s scope your goals and craft a plan that delivers measurable outcomes.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center rounded-2xl border border-fuchsia-400/40 bg-black/30 px-6 py-3 text-sm font-semibold tracking-wide text-fuchsia-200 shadow-[0_0_20px_rgba(232,121,249,0.35)] hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
        >
          BOOK A CONSULTATION
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 bottom-4 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[90px]" />
      </div>
    </section>
  );
}
