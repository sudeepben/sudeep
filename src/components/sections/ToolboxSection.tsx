import { skillGroups } from "../../data/skills";
import { SectionHeader } from "../ui/SectionHeader";

export function ToolboxSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Toolkit" title="What I work with." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <h3 className="mb-4 text-base font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-black/15 px-2.5 py-1.5 font-mono text-[11px] text-white/60">
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
