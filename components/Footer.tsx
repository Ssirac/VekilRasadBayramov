"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/15 py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        {/* One bold serif line */}
        <p className="max-w-3xl text-balance font-serif leading-[1.05] text-ink [font-size:clamp(2rem,5vw,3.5rem)]">
          {t.footer.tagline}
        </p>

        <p className="eyebrow mt-6 text-ink/50">
          {site.bureau} · {site.location}
        </p>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <a href={site.phoneTel} className="link-draw tnum text-ink">
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-ink"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-ink/50">
            <Link href="/gizlilik" className="link-draw">
              {t.footer.privacy}
            </Link>
            <span className="tnum">© {year}</span>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink/40">
          {site.name} — {site.title}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
