import { Flame, Github, Linkedin, Twitter } from "lucide-react";

const nav = {
  Services: [
    { label: "Infrastructure Management", href: "#services" },
    { label: "Cloud & Virtualization", href: "#services" },
    { label: "Automation & DevOps", href: "#services" },
    { label: "Monitoring & Analytics", href: "#services" },
    { label: "Cybersecurity", href: "#services" },
    { label: "AI-Ops", href: "#services" },
  ],
  Company: [
    { label: "Projects", href: "#projects" },
    { label: "Our Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

const socials = [
  { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
  { icon: <Github className="h-4 w-4" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-[#050a14]">
      {/* Top glow line */}
      <div className="divider-glow" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1 space-y-4">
            <a href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-600 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-white">
                BURN<span className="text-cyan-400">.</span>IT
              </span>
            </a>
            <p className="text-sm text-cyan-100/45 leading-relaxed max-w-[220px]">
              Enterprise IT consulting and managed services. Built for businesses that refuse to accept downtime.
            </p>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-cyan-300/60 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-400/8 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-cyan-100/50 hover:text-cyan-200 transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-display text-xs font-semibold tracking-[0.2em] text-white/40 uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cyan-100/50">
              <li>contact@burn.it</li>
              <li>+1 (555) 000-BURN</li>
              <li>Serving clients nationwide</li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-400/25 bg-emerald-400/8 px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-300/80">Systems operational</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {year} Burn.IT LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
