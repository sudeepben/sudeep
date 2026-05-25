import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export function ProjectOrbit() {
  return (
    <section className="mb-14 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 [perspective:1200px] md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">Build Map</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Not a project list. A system map.</h2>
          <p className="mt-4 text-sm leading-7 text-white/62">
            The work clusters around four repeatable moves: retrieve knowledge, model signals, move data, and make decisions readable.
          </p>
        </div>
        <div className="relative min-h-[360px]">
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember-400/30 bg-ember-500/10" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          {projects.slice(0, 8).map((project, index) => {
            const angle = (index / 8) * Math.PI * 2;
            const x = 50 + Math.cos(angle) * 38;
            const y = 50 + Math.sin(angle) * 38;
            return (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="absolute w-36 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[rgba(13,17,23,0.82)] p-3 text-left shadow-xl backdrop-blur transition hover:z-10 hover:-translate-y-[calc(50%+6px)] hover:border-ember-400/50"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className="font-mono text-[10px] text-ember-200">{project.number}</span>
                <span className="mt-1 block text-xs font-semibold leading-snug text-white">{project.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
