/**
 * The complete icon set — 5 inline custom SVGs, uniform 1.5px stroke.
 * No emoji, no icon library, no brand logos. (Brief cap: max 6.)
 */

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

/** Plus that becomes an X when rotated 45° — used for accordion state. */
export function Plus({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Menu({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M3 7h18" />
      <path d="M3 17h18" />
    </svg>
  );
}

export function Close({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function Phone({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M6.5 4h3l1.5 4.5-2 1.2a11 11 0 0 0 5.3 5.3l1.2-2 4.5 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
    </svg>
  );
}

/** WhatsApp brand glyph (filled) — for the contact CTA button. */
export function WhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2.02c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.96L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04a9.9 9.9 0 0 0-7.05-2.9Zm0 18.17h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.24 8.24 0 0 1-1.26-4.37c0-4.56 3.71-8.27 8.28-8.27a8.2 8.2 0 0 1 5.84 2.43 8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.28-8.28 8.28Zm4.54-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.42.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function Moon({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function Sun({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} {...base} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
