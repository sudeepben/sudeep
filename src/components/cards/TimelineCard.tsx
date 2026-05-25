import { withBase } from "../../lib/paths";
import { FallbackLogo } from "../ui/FallbackLogo";

interface TimelineCardProps {
  title: string;
  subtitle: string;
  meta: string;
  logo?: string;
  alt: string;
  points?: string[];
}

export function TimelineCard({ title, subtitle, meta, logo, alt, points }: TimelineCardProps) {
  return (
    <article className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:grid-cols-[auto_1fr_auto]">
      {logo ? (
        <img className="h-12 w-12 rounded-xl border border-white/10 bg-white p-1.5 object-contain" src={withBase(logo)} alt={alt} />
      ) : (
        <FallbackLogo label={subtitle} />
      )}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm font-medium text-ember-200">{subtitle}</p>
        {points ? (
          <ul className="mt-4 space-y-2">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-white/62">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-400" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/38 md:text-right">{meta}</p>
    </article>
  );
}
