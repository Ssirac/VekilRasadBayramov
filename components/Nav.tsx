"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, Close } from "./Icons";

export function Nav() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/#haqqinda", label: t.nav.about },
    { href: "/#fealiyyet", label: t.nav.practice },
    { href: "/#netice", label: t.nav.results },
    { href: "/#elaqe", label: t.nav.contact },
  ];

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-editorial",
        scrolled || open
          ? "bg-paper/95 supports-[backdrop-filter]:bg-paper/80 backdrop-blur-sm border-b border-ink/15"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Əsas naviqasiya"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link href="/#top" aria-label={site.name} onClick={() => setOpen(false)}>
          <Logo size={56} />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="nav-link text-ink/80 hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-1">
            <button
              type="button"
              onClick={toggle}
              className="eyebrow text-ink/60 transition-colors hover:text-ink"
              aria-label={lang === "az" ? "Switch to English" : "Azərbaycan dilinə keç"}
            >
              {lang === "az" ? "AZ / EN" : "EN / AZ"}
            </button>
            <ThemeToggle />
            <a
              href={site.phoneTel}
              className="nav-link text-sm tnum text-ink"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-2xl text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.nav.close : t.nav.menu}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <div className="mx-auto max-w-content px-5 pb-8 pt-2 sm:px-8">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href} className="border-b border-ink/15">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-2xl text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <a href={site.phoneTel} className="tnum text-lg text-ink">
                {site.phoneDisplay}
              </a>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggle}
                  className="eyebrow text-ink/60"
                  aria-label={lang === "az" ? "Switch to English" : "Azərbaycan dilinə keç"}
                >
                  {lang === "az" ? "AZ / EN" : "EN / AZ"}
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
