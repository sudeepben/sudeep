import { useRef } from "react";
import { skillGroups } from "../../data/skills";
import { useReveal } from "../../hooks/useReveal";

export function SkillsSection() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref, { selector: ".reveal-item" });

  return (
    <section ref={ref} id="stack" className="creative-section px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="reveal-item creative-kicker">Stack</p>
          <h2 className="reveal-item max-w-4xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl">
            Tools I use to build reliable systems.
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="reveal-item group border-t border-white/10 pt-5 transition hover:border-ember-400/40">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-300">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-white/62 transition group-hover:text-white/78">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
