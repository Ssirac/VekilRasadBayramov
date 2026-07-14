/**
 * Monogram logo — an ink "seal" tile with serif RB initials and an oxblood base
 * stripe, optionally locked up with the wordmark. Matches the portrait fallback
 * aesthetic (ink block + serif initials) so the identity reads as one system.
 */
export function Logo({
  wordmark = true,
  className = "",
}: {
  wordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden bg-ink"
      >
        <span className="font-serif text-[15px] font-medium leading-none tracking-tight text-paper">
          RB
        </span>
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-oxblood" />
      </span>
      {wordmark && (
        <span className="font-serif text-lg leading-none tracking-tight text-ink">
          Rəşad Bayramov
        </span>
      )}
    </span>
  );
}
