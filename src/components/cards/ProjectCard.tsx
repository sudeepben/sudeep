import { ArrowUpRight, Github, Globe2, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";

const linkIcon = {
  github: Github,
  demo: Globe2,
  paper: ScrollText,
  credential: ScrollText,
  external: ArrowUpRight,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:rotate-[0.35deg] hover:border-ember-400/45 hover:bg-white/[0.075] md:[transform-style:preserve-3d]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full border border-ember-400/30 bg-ember-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ember-200">
              {project.category}
            </span>
            <span className="font-mono text-xs text-white/35">{project.number}</span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        </div>
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`Open ${project.title}`}
          className="rounded-lg p-2 text-white/45 transition hover:bg-white/10 hover:text-ember-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember-400"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
      <p className="min-h-20 text-sm leading-6 text-white/64">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-md border border-white/10 bg-black/15 px-2.5 py-1 font-mono text-[11px] text-white/58">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-4">
        <Link className="text-sm font-semibold text-ember-200 hover:text-ember-100" to={`/projects/${project.slug}`}>
          Read build story
        </Link>
        {project.links.slice(0, 2).map((link) => {
          const Icon = linkIcon[link.type];
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/55 transition hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </a>
          );
        })}
      </div>
    </article>
  );
}
