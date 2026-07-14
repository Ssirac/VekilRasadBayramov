"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { ArrowRight } from "@/components/Icons";

export default function PrivacyPage() {
  const { t } = useLang();

  return (
    <section className="scroll-mt-20 pt-32 pb-24 sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="flex items-baseline gap-3">
          <span className="section-index text-oxblood">05</span>
          <span className="section-index text-ink/40">/</span>
          <span className="section-index text-ink">{t.privacy.title}</span>
        </div>

        <h1 className="mt-8 max-w-3xl font-serif leading-[1.02] text-ink [font-size:clamp(2.5rem,6vw,4.5rem)]">
          {t.privacy.title}
        </h1>
        <p className="eyebrow mt-6 text-ink/45">{t.privacy.updated}</p>

        <hr className="hairline mt-12" />

        <div className="mt-12 max-w-prose space-y-6 text-pretty text-ink/80">
          {t.privacy.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <p className="mt-16">
          <Link
            href="/"
            className="link-draw group inline-flex items-center gap-2 font-serif text-lg text-ink"
          >
            <span className="rotate-180">
              <ArrowRight className="translate-y-[1px] text-oxblood" />
            </span>
            {t.privacy.back}
          </Link>
        </p>
      </div>
    </section>
  );
}
