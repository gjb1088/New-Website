"use client";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const LINES = [
  "> BURN.IT SYSTEMS // INITIALIZING...",
  "> ESTABLISHING SECURE CHANNEL...",
  "> AUTH: RSA-4096 // HANDSHAKE COMPLETE",
  "> LOADING: [INFRA] [CLOUD] [SECURITY] [AI-OPS]",
  "> ALL SYSTEMS NOMINAL",
  "> ACCESS GRANTED. IGNITION SEQUENCE READY.",
];

export default function BootScreen() {
  const [show, setShow] = useState<boolean | null>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let bootDone = false;
    try { bootDone = !!sessionStorage.getItem("boot_done"); } catch {}
    if (bootDone) {
      setShow(false);
      return;
    }
    setShow(true);

    let idx = 0;
    function addLine() {
      if (idx >= LINES.length) {
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setShow(false);
            try { sessionStorage.setItem("boot_done", "1"); } catch {}
          }, 700);
        }, 600);
        return;
      }
      setLines((prev) => [...prev, LINES[idx]]);
      idx++;
      setTimeout(addLine, 340);
    }
    setTimeout(addLine, 250);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#030709] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="scanlines absolute inset-0 pointer-events-none" />

      <div className="relative max-w-xl w-full px-8 space-y-3">
        <div className="flex items-center gap-3 mb-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-600 shadow-[0_0_24px_rgba(34,211,238,0.6)]">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <span className="font-terminal text-cyan-400 text-base font-bold tracking-[0.25em]">
            BURN.IT
          </span>
        </div>

        {lines.map((line, i) => (
          <p
            key={i}
            className={`font-terminal text-sm leading-relaxed tracking-wide transition-colors duration-300 ${
              i === lines.length - 1 && !fading
                ? line.includes("GRANTED")
                  ? "text-emerald-400"
                  : "text-cyan-300"
                : line.includes("GRANTED")
                ? "text-emerald-400/60"
                : "text-cyan-400/40"
            }`}
          >
            {line}
            {i === lines.length - 1 && !fading && (
              <span className="terminal-cursor ml-1" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
