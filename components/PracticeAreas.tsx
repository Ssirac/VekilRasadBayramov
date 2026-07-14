"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { Reveal, RevealItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Plus } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PracticeAreas() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="fealiyyet" className="scroll-mt-20 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeader index={t.practice.index} title={t.practice.title} />
          <RevealItem>
            <h3 className="mt-8 max-w-2xl font-serif leading-tight text-ink [font-size:clamp(1.75rem,3.5vw,2.75rem)]">
              {t.practice.title}
            </h3>
          </RevealItem>
        </Reveal>

        <div className="mt-12 border-t border-ink/15">
          {t.practice.areas.map((area, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");
            const panelId = `practice-panel-${i}`;
            const btnId = `practice-btn-${i}`;

            return (
              <div key={area.title} className="border-b border-ink/15">
                <h4>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group flex w-full items-center gap-5 py-6 text-left sm:gap-8 sm:py-7"
                  >
                    <span className="section-index w-8 shrink-0 text-ink/40 tnum">
                      {num}
                    </span>
                    <span className="flex-1 font-serif leading-tight text-ink transition-colors group-hover:text-oxblood [font-size:clamp(1.25rem,2.4vw,1.75rem)]">
                      {area.title}
                    </span>
                    <span
                      className={[
                        "shrink-0 text-xl text-ink transition-transform duration-300 ease-editorial",
                        isOpen ? "rotate-45 text-oxblood" : "rotate-0",
                      ].join(" ")}
                    >
                      <Plus />
                    </span>
                  </button>
                </h4>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      key="content"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-12 sm:gap-8 sm:pl-16">
                        <p className="max-w-prose text-pretty text-ink/80 sm:col-span-7">
                          {area.body}
                        </p>
                        <ul className="space-y-2 sm:col-span-5">
                          {area.cases.map((c) => (
                            <li
                              key={c}
                              className="flex items-baseline gap-3 text-sm text-ink/70"
                            >
                              <span className="mt-[2px] block h-px w-4 shrink-0 translate-y-2 bg-oxblood" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-ink/50">{t.practice.note}</p>
      </div>
    </section>
  );
}
