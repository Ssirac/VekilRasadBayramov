"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const LINES = ["Rəşad", "Bayramov"];
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The hero name, split into letters. Each letter's variable-font weight ('wght')
 * responds in real time to the cursor's distance — a wave of ink-weight follows
 * the pointer across the name. With no pointer (idle / touch) a slow wave travels
 * through the letters instead. Static under prefers-reduced-motion.
 */
export function KineticName() {
  const reduce = useReducedMotion();
  const letters = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (reduce) return;
    const els = letters.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length) return;

    const BASE = 360;
    const MIN = 300;
    const MAX = 900;
    const RADIUS = 200;

    let mx = -99999;
    let my = -99999;
    let lastMove = -99999;
    const weights = els.map(() => BASE);

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      lastMove = performance.now();
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const loop = (t: number) => {
      const rects = els.map((el) => el.getBoundingClientRect()); // batch reads
      const idle = t - lastMove > 1400;
      for (let i = 0; i < els.length; i++) {
        const r = rects[i];
        let target: number;
        if (idle) {
          const wave = (Math.sin(t / 620 - i * 0.55) + 1) / 2; // 0..1
          target = BASE + wave * 240;
        } else {
          const dx = mx - (r.left + r.width / 2);
          const dy = my - (r.top + r.height / 2);
          const influence = Math.max(0, 1 - Math.hypot(dx, dy) / RADIUS);
          target = MIN + influence * (MAX - MIN);
        }
        weights[i] += (target - weights[i]) * 0.16; // smooth
      }
      for (let i = 0; i < els.length; i++) {
        els[i].style.fontVariationSettings = `'wght' ${weights[i].toFixed(0)}`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  let gi = 0;
  return (
    <h1 className="mt-6 font-serif leading-[0.92] tracking-[-0.02em] text-ink [font-size:clamp(2.75rem,8vw,7.5rem)]">
      {LINES.map((word, li) => (
        <span className="mask-line" key={word}>
          <motion.span
            className="block"
            style={{ whiteSpace: "nowrap" }}
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.24 + li * 0.12 }}
          >
            {Array.from(word).map((ch, ci) => {
              const idx = gi++;
              return (
                <span
                  key={ci}
                  ref={(el) => {
                    letters.current[idx] = el;
                  }}
                  style={{
                    display: "inline-block",
                    fontVariationSettings: "'wght' 400",
                    willChange: "font-variation-settings",
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
