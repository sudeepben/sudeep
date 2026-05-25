import { projects } from "../../data/projects";
import { SectionHeader } from "../ui/SectionHeader";

export function BuildStories() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Build Stories"
          title="Seven builds, one operating pattern."
          description="The homepage stays light; the detail pages hold the deeper problem, approach, and system notes."
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`${import.meta.env.BASE_URL}projects/${project.slug}`}
              className="grid gap-3 border-b border-white/10 px-5 py-4 transition last:border-b-0 hover:bg-white/[0.05] md:grid-cols-[80px_1fr_1fr]"
            >
              <span className="font-mono text-xs text-ember-200">{project.number}</span>
              <span className="font-semibold text-white">{project.title}</span>
              <span className="text-sm text-white/58">{project.signal}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
