"use client";

import { Fragment } from "react";

/**
 * Editorial band of Latin legal maxims that scrolls infinitely — a law-journal
 * motif. Latin is language-neutral, so it stays identical in AZ/EN.
 * Pauses on hover; frozen entirely under prefers-reduced-motion (CSS).
 */
const MAXIMS = [
  "Pacta sunt servanda",
  "Audiatur et altera pars",
  "Dura lex, sed lex",
  "In dubio pro reo",
  "Fiat justitia",
  "Nemo judex in causa sua",
  "Ubi jus, ibi remedium",
];

function Items() {
  return (
    <>
      {MAXIMS.map((m) => (
        <Fragment key={m}>
          <span className="font-serif text-lg tracking-wide text-ink/70 sm:text-xl">
            {m}
          </span>
          <span className="marquee-sep" />
        </Fragment>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div className="border-y border-ink/15 py-5">
      <div className="marquee">
        {/* Items rendered twice inside one animated track → seamless -50% loop */}
        <div className="marquee-track">
          <Items />
          <Items />
        </div>
      </div>
      <span className="sr-only">
        Latın hüquqi maksimləri: {MAXIMS.join(", ")}.
      </span>
    </div>
  );
}
