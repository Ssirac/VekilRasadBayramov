"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Hero portrait with an editorial duotone treatment applied purely in CSS
 * (.portrait-frame). If the asset is missing at build/runtime, we never show a
 * broken image — we render a solid ink block with the serif initials instead.
 */
export function Portrait({ priority = false }: { priority?: boolean }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="portrait-frame">
      {!errored ? (
        <Image
          src={site.portrait}
          alt={site.portraitAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 88vw, 40vw"
          className="object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="portrait-fallback" role="img" aria-label={site.portraitAlt}>
          {site.initials}
        </div>
      )}
    </div>
  );
}
