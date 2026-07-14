"use client";

import { site } from "@/lib/site";
import { WhatsApp } from "./Icons";

/**
 * Floating WhatsApp call-to-action, fixed to the lower-right on every page.
 * Brand green for instant recognition, with a gentle pulsing ring
 * (disabled under prefers-reduced-motion).
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-da yazın"
      className="wp-fab fixed bottom-5 right-5 z-[9998] block h-14 w-14 rounded-full sm:bottom-7 sm:right-7"
    >
      <span
        className="wp-pulse absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden="true"
      />
      <span
        className="relative z-10 flex h-full w-full items-center justify-center rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsApp className="text-[26px]" />
      </span>
    </a>
  );
}
