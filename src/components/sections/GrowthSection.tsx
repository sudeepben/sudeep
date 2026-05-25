import { ExternalLink } from "lucide-react";
import { growth } from "../../data/growth";
import { withBase } from "../../lib/paths";
import { SectionHeader } from "../ui/SectionHeader";
import { FallbackLogo } from "../ui/FallbackLogo";

export function GrowthSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Beyond the Classroom"
          title="Where I show up."
          description="Hackathons, conferences, and communities that sharpen the edge."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {growth.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <div className="flex gap-4">
                {item.logo ? (
                  <img src={withBase(item.logo)} alt={`${item.organization} logo`} className="h-12 w-12 rounded-xl border border-white/10 bg-white p-1.5 object-contain" />
                ) : (
                  <FallbackLogo label={item.organization} />
                )}
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-ember-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ember-200">{item.kind}</span>
                    {item.children ? (
                      <span className="rounded-full bg-ember-500/10 px-2.5 py-1 font-mono text-[11px] text-ember-200">{item.children.length} events</span>
                    ) : null}
                    <span className="font-mono text-xs text-white/38">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{item.organization}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/62">{item.note}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-200 hover:text-ember-100">
                  View reference <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              {item.children ? (
                <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                  {item.children.map((event) => (
                    <article key={event.title} className="rounded-xl border border-white/10 bg-black/10 p-4">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-white">{event.title}</h4>
                          <p className="mt-1 font-mono text-[11px] text-white/45">
                            {event.date}{event.location ? ` / ${event.location}` : ""}
                          </p>
                        </div>
                        {event.link ? (
                          <a href={event.link} target="_blank" rel="noreferrer" aria-label={`Open ${event.title}`} className="text-ember-200 hover:text-ember-100">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/60">{event.note}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
