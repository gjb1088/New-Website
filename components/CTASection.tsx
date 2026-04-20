"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, CalendarDays } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";

const benefits = [
  "Free 30-minute discovery call",
  "No commitment required",
  "Response within 2 business hours",
  "Custom proposal within 48 hours",
];

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const timeString = selectedDate
      ? selectedDate.toLocaleString(undefined, {
          month: "long", day: "numeric", year: "numeric",
          hour: "numeric", minute: "2-digit", hour12: true, timeZoneName: "short",
        })
      : undefined;
    const timeISO = selectedDate ? selectedDate.toISOString() : undefined;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, time: timeString, timeISO }),
      });
      if (!res.ok) throw new Error(await res.text());
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-fuchsia-600/8 blur-[100px]" />
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
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            READY TO <span className="text-gradient-cyan">IGNITE</span>
            <br />
            YOUR INFRASTRUCTURE?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-cyan-100/55 text-base leading-relaxed">
            Let&apos;s scope your goals and craft a plan that delivers measurable outcomes.
            No jargon, no fluff — just results.
          </p>
          <div className="mt-6 divider-glow max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm">
              <h3 className="font-display text-lg font-semibold text-white mb-5">
                What to expect
              </h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-cyan-100/70">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Mail className="h-4 w-4" />, label: "questions@burnthe.network" },
                { icon: <MapPin className="h-4 w-4" />, label: "Serving clients nationwide" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm text-cyan-100/60">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/8 text-cyan-400 flex-shrink-0">
                    {c.icon}
                  </div>
                  {c.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/8 p-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                <h3 className="font-display text-xl font-semibold text-white">Message sent!</h3>
                <p className="text-sm text-cyan-100/60">We&apos;ll be in touch within 2 business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["name", "company"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-semibold tracking-wide text-cyan-300/70 uppercase mb-1.5">
                        {field === "name" ? "Your Name" : "Company"}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === "name" ? "John Smith" : "Acme Corp"}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-cyan-300/70 uppercase mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                  />
                </div>

                {/* Date & time picker */}
                <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/5 p-4">
                  <label className="flex items-center gap-2 text-xs font-semibold tracking-wide text-cyan-300/80 uppercase mb-3">
                    <CalendarDays className="h-4 w-4 text-cyan-400" />
                    Preferred Date & Time
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    showTimeSelect
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Click to pick a date and time…"
                    minDate={new Date()}
                    className="w-full rounded-lg border border-cyan-400/30 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 transition-colors cursor-pointer"
                    wrapperClassName="w-full"
                    popperClassName="!z-[200]"
                    popperPlacement="top-start"
                    popperProps={{ strategy: "fixed" }}
                  />
                  {selectedDate && (
                    <p className="mt-2 text-xs text-cyan-300/70 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                      {selectedDate.toLocaleString(undefined, {
                        weekday: "long", month: "long", day: "numeric",
                        year: "numeric", hour: "numeric", minute: "2-digit",
                        hour12: true, timeZoneName: "short",
                      })}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-cyan-300/70 uppercase mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Describe your current challenges, goals, and timeline..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all duration-300"
                >
                  SEND MESSAGE
                  <Send className="h-4 w-4" />
                </button>

                <p className="text-xs text-center text-white/30">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
