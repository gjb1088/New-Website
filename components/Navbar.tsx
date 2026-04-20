"use client";

import { useState, useEffect } from "react";
import { Flame, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080d1c]/92 backdrop-blur-xl border-b border-cyan-400/15 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-shadow duration-300">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-wider text-white glitch-logo">
            BURN<span className="text-cyan-400">.</span>IT
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm font-medium text-cyan-100/60 hover:text-cyan-200 transition-colors duration-200 tracking-wide group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => window.dispatchEvent(new Event('open-consultation'))}
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300"
        >
          GET STARTED
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-cyan-400/25 text-cyan-200 hover:bg-cyan-400/10 transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#080d1c]/98 backdrop-blur-xl border-t border-cyan-400/15 px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center h-12 text-sm font-medium text-cyan-100/70 hover:text-cyan-200 border-b border-cyan-400/10 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); window.dispatchEvent(new Event('open-consultation')); }}
              className="mt-3 flex justify-center items-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 py-3 text-sm font-semibold text-white w-full"
            >
              GET STARTED
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
