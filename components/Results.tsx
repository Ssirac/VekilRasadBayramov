"use client";

import { useLang } from "./LanguageProvider";
import { Reveal, RevealItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { CountUp } from "./CountUp";
import { Scales } from "./Scales";

export function Results() {
  const { t } = useLang();

  return (
    <section
      id="netice"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-paper sm:py-28 lg:py-36"
    >
      {/* Self-drawing scales of justice — faint watermark, upper right */}
      <Scales className="pointer-events-none absolute -right-10 top-4 hidden h-[26rem] w-[26rem] text-paper/20 lg:block" />

      <div className="relative mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="section-index text-paper/60">{t.results.index}</span>
            <span className="section-index text-paper/30">/</span>
            <h2 className="section-index text-paper">{t.results.title}</h2>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {t.results.stats.map((s) => (
              <RevealItem key={s.label}>
                <div>
                  <div className="font-serif leading-none tnum text-paper [font-size:clamp(2.5rem,5vw,4rem)]">
                    <CountUp value={s.n} />
                  </div>
                  <div className="mt-3 text-sm text-paper/60">{s.label}</div>
                </div>
              </RevealItem>
            ))}
          </div>

          <RevealItem>
            <p className="mt-6 text-xs text-paper/40">{t.results.footnote}</p>
          </RevealItem>

          <div className="mt-16 h-px w-full bg-paper/15" />

          {/* Selected matters */}
          <RevealItem>
            <p className="eyebrow mt-14 text-paper/50">{t.results.casesLabel}</p>
          </RevealItem>

          <ul className="mt-8 grid grid-cols-1 gap-x-10 lg:grid-cols-3">
            {t.results.cases.map((c, i) => (
              <RevealItem key={c}>
                <li className="border-t border-paper/15 py-6 lg:border-t-0 lg:py-0">
                  <span className="section-index tnum text-paper/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-pretty font-serif leading-snug text-paper [font-size:clamp(1.125rem,1.6vw,1.375rem)]">
                    {c}
                  </p>
                </li>
              </RevealItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
