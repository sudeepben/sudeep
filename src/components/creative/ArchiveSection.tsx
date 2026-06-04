import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { certifications } from "../../data/certifications";
import { education } from "../../data/education";
import { experience } from "../../data/experience";
import { growth } from "../../data/growth";
import { useReveal } from "../../hooks/useReveal";
import { withBase } from "../../lib/paths";
import { FallbackLogo } from "../ui/FallbackLogo";
import { MagneticLink } from "./MagneticLink";

export function ArchiveSection() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref, { selector: ".reveal-item" });

  return (
    <section ref={ref} id="archive" className="creative-section px-5 py-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[92rem]">
        <div className="mb-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="reveal-item creative-kicker">Archive</p>
          <h2 className="reveal-item max-w-5xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-7xl">
            The proof behind the builds.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="reveal-item rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="creative-kicker">Experience</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Where I contributed.</h3>
              </div>
              <span className="font-mono text-xs text-white/38">{experience.length} roles</span>
            </div>
            <div className="space-y-5">
              {experience.map((role) => (
                <div key={`${role.company}-${role.title}`} className="group grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[3.25rem_1fr]">
                  {role.logo ? (
                    <img src={withBase(role.logo)} alt={`${role.company} logo`} className="h-12 w-12 rounded-xl border border-white/10 bg-white p-2 object-contain" />
                  ) : (
                    <FallbackLogo label={role.company} />
                  )}
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold text-white transition group-hover:text-ember-200">{role.company}</h4>
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/38">{role.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/58">{role.title} / {role.location}</p>
                    <p className="mt-3 text-sm leading-6 text-white/54">{role.highlights[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="reveal-item rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
            <div className="mb-8">
              <p className="creative-kicker">Education</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Where the foundation formed.</h3>
            </div>
            <div className="space-y-5">
              {education.map((school) => (
                <div key={school.institution} className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[3.25rem_1fr]">
                  {school.logo ? (
                    <img src={withBase(school.logo)} alt={`${school.institution} logo`} className="h-12 w-12 rounded-xl border border-white/10 bg-white p-2 object-contain" />
                  ) : (
                    <FallbackLogo label={school.institution} />
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-white">{school.institution}</h4>
                    <p className="mt-1 text-sm text-white/58">{school.degree}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/38">
                      {school.period} / {school.location}
                    </p>
                    {school.detail ? <p className="mt-3 text-sm text-ember-200">{school.detail}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="reveal-item rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur lg:col-span-2">
            <div className="mb-8 grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="creative-kicker">Credentials</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Recognized learning.</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-white/55">
                Certifications and conference work kept as compact evidence, not visual clutter.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="group rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:border-ember-400/35 hover:bg-white/[0.055]">
                  <div className="flex gap-3">
                    {cert.logo ? (
                      <img src={withBase(cert.logo)} alt={`${cert.issuer} logo`} className="h-10 w-10 rounded-lg border border-white/10 bg-white p-1.5 object-contain" />
                    ) : (
                      <FallbackLogo label={cert.issuer} />
                    )}
                    <div>
                      <h4 className="text-sm font-semibold leading-snug text-white">{cert.title}</h4>
                      <p className="mt-1 text-xs text-white/48">{cert.issuer} / {cert.date}</p>
                    </div>
                  </div>
                  {cert.credentialUrl ? (
                    <MagneticLink data-cursor="open" href={cert.credentialUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-200">
                      Show credential <ArrowUpRight className="h-4 w-4" />
                    </MagneticLink>
                  ) : null}
                </div>
              ))}
            </div>
          </article>

          <article className="reveal-item rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur lg:col-span-2">
            <div className="mb-8 grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="creative-kicker">Beyond the Classroom</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Where I show up.</h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-white/55">
                Hackathons, conferences, workshops, and communities that sharpen the edge.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {growth.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="flex items-start gap-3">
                    {item.logo ? (
                      <img src={withBase(item.logo)} alt={`${item.organization} logo`} className="h-10 w-10 rounded-lg border border-white/10 bg-white p-1.5 object-contain" />
                    ) : (
                      <FallbackLogo label={item.organization} />
                    )}
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-ember-400/25 bg-ember-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ember-200">{item.kind}</span>
                        <span className="font-mono text-[11px] text-white/38">{item.date}</span>
                      </div>
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs text-white/45">{item.organization}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/56">{item.note}</p>
                  {item.children ? (
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">{item.children.length} related events</p>
                  ) : null}
                  {item.link ? (
                    <MagneticLink data-cursor="open" href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-200">
                      View reference <ArrowUpRight className="h-4 w-4" />
                    </MagneticLink>
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
