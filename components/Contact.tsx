"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "./LanguageProvider";
import { site } from "@/lib/site";
import { Reveal, RevealItem } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ArrowRight } from "./Icons";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // No backend: compose the entered details into a WhatsApp message.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Salam! Ad: ${form.name}\nTelefon: ${form.phone}\n\n${form.message}`,
    );
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const details = [
    { label: t.contact.phoneLabel, value: site.phoneDisplay, href: site.phoneTel, tnum: true },
    { label: t.contact.whatsappLabel, value: t.contact.whatsappCta, href: site.whatsapp, external: true },
    { label: t.contact.addressLabel, value: site.location },
    { label: t.contact.hoursLabel, value: site.hours },
  ];

  const fieldClass =
    "w-full border-0 border-b border-ink/25 bg-transparent py-3 text-ink placeholder-ink/35 outline-none transition-colors focus:border-oxblood";

  return (
    <section id="elaqe" className="scroll-mt-20 py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeader index={t.contact.index} title={t.contact.title} />

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 lg:mt-16 lg:grid-cols-12">
            {/* Left — invitation + details */}
            <div className="lg:col-span-6">
              <RevealItem>
                <h3 className="font-serif leading-[0.95] text-ink [font-size:clamp(3rem,6vw,5rem)]">
                  {t.contact.heading}
                </h3>
              </RevealItem>
              <RevealItem>
                <p className="mt-6 max-w-prose text-pretty text-ink/80">
                  {t.contact.lead}
                </p>
              </RevealItem>

              <RevealItem>
                <dl className="mt-12 space-y-5">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-col gap-1 border-t border-ink/15 pt-4 sm:flex-row sm:items-baseline sm:gap-8"
                    >
                      <dt className="eyebrow w-32 shrink-0 text-ink/45">{d.label}</dt>
                      <dd className={d.tnum ? "tnum text-ink" : "text-ink"}>
                        {d.href ? (
                          <a
                            href={d.href}
                            {...(d.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="link-draw"
                          >
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </RevealItem>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-5 lg:col-start-8">
              <RevealItem>
                <form onSubmit={onSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="eyebrow text-ink/55">
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="eyebrow text-ink/55">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`${fieldClass} tnum`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="eyebrow text-ink/55">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="link-draw group inline-flex items-center gap-2 font-serif text-xl text-ink"
                  >
                    {t.contact.form.submit}
                    <ArrowRight className="translate-y-[1px] text-oxblood transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
                  </button>

                  <p className="text-sm text-ink/50">{t.contact.form.privacy}</p>
                </form>
              </RevealItem>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
