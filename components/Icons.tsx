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
