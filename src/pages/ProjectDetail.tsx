import { ArrowLeft, ExternalLink, Github, Globe2, ScrollText } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { findProject } from "../data/projects";
import type { ProjectLinkType } from "../data/projects";

const linkIcon: Record<ProjectLinkType, typeof Github> = {
  github: Github,
  demo: Globe2,
  paper: ScrollText,
  credential: ScrollText,
  external: ExternalLink,
};

export function ProjectDetail() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <article className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/58 hover:text-ember-200">
          <ArrowLeft className="h-4 w-4" />
          Back to all builds
        </Link>
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-ember-400/30 bg-ember-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-ember-200">
              {project.category}
            </span>
            <span className="font-mono text-xs text-white/36">{project.number}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const Icon = linkIcon[link.type];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/72 transition hover:border-ember-400/45 hover:text-ember-100"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <DetailBlock title="Problem" body={project.problem} />
          <DetailBlock title="Approach" body={project.approach} />
          <DetailBlock title="Outcome / Impact" body={project.outcome} />
          <DetailBlock title="What I Learned" body={project.learned} />
        </div>

        <section className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-6">
          <h2 className="text-xl font-semibold text-white">System / Design Highlights</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-white/64">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-400" />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6">
          <h2 className="text-xl font-semibold text-white">Decision Path</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
            Every build is framed as a path from unclear inputs to a decision someone can trust.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Input", project.problem],
              ["System", project.approach],
              ["Decision", project.outcome],
            ].map(([label, text], index) => (
              <div
                key={label}
                className="relative min-h-48 rounded-2xl border border-white/10 bg-[rgba(13,17,23,0.74)] p-5 shadow-xl transition hover:-translate-y-1 hover:rotate-1 hover:border-ember-400/45"
                style={{ transform: `perspective(900px) rotateX(${index === 1 ? "-2deg" : "2deg"})` }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-200">{label}</span>
                <p className="mt-4 text-sm leading-7 text-white/68">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-6">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 bg-black/15 px-3 py-1.5 font-mono text-xs text-white/62">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-white/64">{body}</p>
    </section>
  );
}
