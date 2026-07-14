"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Line-art Scales of Justice that draw themselves stroke-by-stroke when scrolled
 * into view, then the beam + pans sway gently as if balancing.
 * 1.5px non-scaling stroke, currentColor. Purely decorative (aria-hidden).
 * Under prefers-reduced-motion: rendered fully drawn and still.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export function Scales({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const draw: Variants = {
    hidden: { pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 },
    show: (i: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.1, ease: EASE, delay: 0.15 * i },
        opacity: { duration: 0.25, delay: 0.15 * i },
      },
    }),
  };

  // The beam group sways after it has drawn in.
  const sway = reduce
    ? {}
    : {
        rotate: [-2.4, 2.4, -2.4],
      };

  const stroke = {
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden="true"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {/* Ground + curved foot */}
      <motion.path d="M92 206 H148" custom={0} variants={draw} {...stroke} />
      <motion.path d="M100 200 Q120 186 140 200" custom={0} variants={draw} {...stroke} />
      {/* Central column */}
      <motion.path d="M120 62 V200" custom={1} variants={draw} {...stroke} />
      {/* Pivot + finial */}
      <motion.circle cx="120" cy="58" r="5" custom={2} variants={draw} {...stroke} />
      <motion.path d="M120 53 V46" custom={2} variants={draw} {...stroke} />
      <motion.circle cx="120" cy="42" r="3.5" custom={2} variants={draw} {...stroke} />

      {/* Balancing group: beam, suspensions, pans */}
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "50% 0%" }}
        animate={sway}
        transition={
          reduce
            ? undefined
            : { duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 1.9 }
        }
      >
        {/* Beam */}
        <motion.path d="M64 58 H176" custom={3} variants={draw} {...stroke} />
        {/* Left suspension + pan */}
        <motion.path d="M64 58 L50 92" custom={4} variants={draw} {...stroke} />
        <motion.path d="M64 58 L98 92" custom={4} variants={draw} {...stroke} />
        <motion.path d="M48 92 Q74 118 100 92" custom={5} variants={draw} {...stroke} />
        {/* Right suspension + pan */}
        <motion.path d="M176 58 L142 92" custom={4} variants={draw} {...stroke} />
        <motion.path d="M176 58 L190 92" custom={4} variants={draw} {...stroke} />
        <motion.path d="M140 92 Q166 118 192 92" custom={5} variants={draw} {...stroke} />
      </motion.g>
    </motion.svg>
  );
}
