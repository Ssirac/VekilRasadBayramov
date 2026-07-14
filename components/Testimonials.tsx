"use client";

import { useLang } from "./LanguageProvider";
import { Reveal, RevealItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  const { t } = useLang();

  return (
    <section id="reyler" className="scroll-mt-20 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeader index={t.testimonials.index} title={t.testimonials.title} />

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3">
            {t.testimonials.items.map((item) => (
              <RevealItem key={item.attr}>
                <figure className="flex h-full flex-col border-t border-ink/15 pt-8">
                  <span className="font-serif text-4xl leading-none text-oxblood" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-4 flex-1 text-balance font-serif leading-snug text-ink [font-size:clamp(1.25rem,1.9vw,1.6rem)]">
                    {item.quote}
                  </blockquote>
                  <figcaption className="eyebrow mt-8 text-ink/55">
                    {item.attr}
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
