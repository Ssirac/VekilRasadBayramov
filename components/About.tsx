"use client";

import { useLang } from "./LanguageProvider";
import { Reveal, RevealItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const { t } = useLang();

  return (
    <section id="haqqinda" className="scroll-mt-20 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeader index={t.about.index} title={t.about.title} />

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:mt-16 lg:grid-cols-12">
            {/* Sticky serif pull-quote */}
            <div className="lg:col-span-5">
              <RevealItem>
                <figure className="lg:sticky lg:top-28">
                  <blockquote className="text-balance font-serif leading-[1.15] text-ink [font-size:clamp(1.5rem,2.6vw,2.25rem)]">
                    {t.about.pull}
                  </blockquote>
                </figure>
              </RevealItem>
            </div>

            {/* Body paragraphs */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-6 text-pretty text-ink/80">
                <RevealItem>
                  <p>{t.about.p1}</p>
                </RevealItem>
                <RevealItem>
                  <p>{t.about.p2}</p>
                </RevealItem>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
