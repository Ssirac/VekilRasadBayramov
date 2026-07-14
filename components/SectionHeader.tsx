import { RevealItem } from "./Reveal";

/** "01 / Fəaliyyət sahələri" — small-caps numbered section masthead. */
export function SectionHeader({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <RevealItem>
      <div className="flex items-baseline gap-3">
        <span className="section-index text-oxblood">{index}</span>
        <span className="section-index text-ink/40">/</span>
        <h2 className="section-index text-ink">{title}</h2>
      </div>
    </RevealItem>
  );
}
