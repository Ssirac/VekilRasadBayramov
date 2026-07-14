"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Brand logo. Renders the gold emblem from /images/logo.png; if that asset is
 * missing it degrades to a serif "RB" seal so nothing ever breaks. next/image
 * handles the GitHub Pages base-path automatically.
 */
export function Logo({
  wordmark = true,
  size = 44,
  className = "",
}: {
  wordmark?: boolean;
  size?: number;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {errored ? (
        <span
          aria-hidden="true"
          className="relative grid shrink-0 place-items-center overflow-hidden bg-ink"
          style={{ width: size, height: size }}
        >
          <span
            className="font-serif font-medium leading-none tracking-tight text-paper"
            style={{ fontSize: size * 0.42 }}
          >
            RB
          </span>
          <span
            className="absolute inset-x-0 bottom-0 bg-oxblood"
            style={{ height: Math.max(2, size * 0.08) }}
          />
        </span>
      ) : (
        <Image
          src={site.logo}
          alt={wordmark ? "" : site.logoAlt}
          width={size}
          height={size}
          priority
          onError={() => setErrored(true)}
          className="shrink-0 object-contain"
          style={{ width: size, height: size }}
        />
      )}
      {wordmark && (
        <span className="font-serif text-lg leading-none tracking-tight text-ink">
          Rəşad Bayramov
        </span>
      )}
    </span>
  );
}
