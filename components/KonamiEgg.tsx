"use client";
import { useEffect, useState } from "react";

const SEQ = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiEgg() {
  const [buffer, setBuffer] = useState<string[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      setBuffer((prev) => {
        const next = [...prev, e.key].slice(-SEQ.length);
        if (next.join(",") === SEQ.join(",")) {
          setActive(true);
          setTimeout(() => setActive(false), 3800);
          return [];
        }
        return next;
      });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[99998] flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/3 to-transparent" />

      <div className="relative text-center space-y-5 px-8">
        <p className="font-terminal text-cyan-400/40 text-xs tracking-[0.4em] uppercase">
          BURN.IT SYSTEMS // OPERATOR MODE UNLOCKED
        </p>
        <h2 className="font-terminal text-6xl md:text-8xl font-bold text-cyan-400 glitch-logo tracking-[0.1em] leading-none">
          ACCESS<br />GRANTED
        </h2>
        <p className="font-terminal text-emerald-400/70 text-sm tracking-[0.3em]">
          &gt; WELCOME BACK, OPERATOR_
        </p>
        <p className="font-terminal text-cyan-300/30 text-xs tracking-[0.35em] pt-2">
          NO RETREAT // NO FALLBACK // NO LEGACY
        </p>
      </div>
    </div>
  );
}
