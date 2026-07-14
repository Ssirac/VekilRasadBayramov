"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A small oxblood "ink" dot that trails the pointer with easing and swells into
 * a hollow ring over interactive elements. Fine-pointer (mouse) only — hidden on
 * touch devices and under prefers-reduced-motion. Purely decorative.
 */
export function InkCursor() {
  const reduce = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    dot.style.display = "block";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let hover = false;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      hover = !!el?.closest('a, button, input, textarea, [role="button"]');
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    let raf = 0;
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      const s = hover ? 2.8 : 1;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${s})`;
      dot.dataset.hover = hover ? "1" : "0";
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [reduce]);

  return <div ref={dotRef} aria-hidden="true" className="ink-cursor" />;
}
