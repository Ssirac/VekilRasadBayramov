"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { site } from "@/lib/site";
import { Portrait } from "./Portrait";
import { ArrowRight } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  // Each element carries its own mount animation with a manual stagger delay —
  // no reliance on variant propagation (which proved flaky when nested).
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  // Name lines rise from behind a mask.
  const line = (delay: number) => ({
    initial: reduce ? false : { y: "110%" },
    animate: { y: "0%" },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Vertical rotated edge label — the page signature */}
      <span
        aria-hidden="true"
        className="vertical-label eyebrow pointer-events-none absolute right-4 top-32 hidden text-ink/50 lg:block"
      >
        {t.hero.edge}
      </span>

      <div className="mx-auto max-w-content px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          {/* Text column */}
          <div className="lg:col-span-7 lg:pt-6">
            <motion.p className="eyebrow text-oxblood" {...rise(0.1)}>
              {t.hero.eyebrow}
            </motion.p>

            <h1 className="mt-6 font-serif leading-[0.92] tracking-[-0.02em] text-ink [font-size:clamp(2.75rem,8vw,7.5rem)]">
              <span className="mask-line">
                <motion.span className="block" {...line(0.24)}>
                  Rəşad
                </motion.span>
              </span>
              <span className="mask-line">
                <motion.span className="block" {...line(0.36)}>
                  Bayramov
                </motion.span>
              </span>
            </h1>

            <motion.div className="mt-7 flex items-center gap-4" {...rise(0.52)}>
              <span className="hairline hidden max-w-[4rem] flex-1 sm:block" />
              <p className="eyebrow text-ink/70">
                {site.title} — {site.location}
              </p>
            </motion.div>

            <motion.p
              className="mt-8 max-w-prose text-pretty text-lg leading-relaxed text-ink/80 sm:text-xl"
              {...rise(0.62)}
            >
              {t.hero.positioning}
            </motion.p>

            <motion.p className="mt-10" {...rise(0.72)}>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw group inline-flex items-center gap-2 font-serif text-xl text-ink sm:text-2xl"
              >
                {t.hero.cta}
                <ArrowRight className="translate-y-[1px] text-oxblood transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
              </a>
            </motion.p>
          </div>

          {/* Portrait column — clip reveal */}
          <div className="lg:col-span-5 lg:pl-4">
            <motion.div
              className="relative"
              initial={reduce ? false : { clipPath: "inset(100% 0 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            >
              <Portrait priority />
              <span className="eyebrow absolute -bottom-6 left-0 hidden text-ink/50 sm:block">
                {site.bureauUpper}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        {/* Masthead rule draws in */}
        <motion.hr
          className="hairline origin-left"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
