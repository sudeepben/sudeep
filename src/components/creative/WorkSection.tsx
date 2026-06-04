import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useReveal } from "../../hooks/useReveal";

export function WorkSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(projects[0]);
  useReveal(ref, { selector: ".reveal-item" });

  return (
    <section ref={ref} id="work" className="creative-section px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="mb-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <p className="reveal-item creative-kicker">Selected Work</p>
          <h2 className="reveal-item max-w-4xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl">
            Problems I have turned into systems.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                data-cursor="view"
                onMouseEnter={() => setActive(project)}
                className="reveal-item group grid gap-4 py-7 transition hover:bg-white/[0.035] sm:grid-cols-[4rem_1fr_auto] sm:px-4"
              >
                <span className="font-mono text-xs text-ember-300">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-2xl font-semibold tracking-[-0.04em] text-white transition group-hover:translate-x-3 sm:text-4xl">
                    {project.title}
                  </span>
                  <span className="mt-2 block text-sm text-white/48">{project.category} / {project.tech.slice(0, 3).join(", ")}</span>
                </span>
                <span className="flex items-center gap-3 text-sm text-white/48">
                  {project.links.length ? "Link" : "Case"}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember-300" />
                </span>
              </Link>
            ))}
          </div>

          <aside className="sticky top-28 hidden h-fit rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur lg:block">
            <div className="mb-5 aspect-[4/3] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_25%_25%,rgba(249,115,22,0.45),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-300">Preview</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{active.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/56">{active.summary}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
