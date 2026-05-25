import { ExternalLink } from "lucide-react";
import { certifications } from "../../data/certifications";
import { withBase } from "../../lib/paths";
import { SectionHeader } from "../ui/SectionHeader";
import { FallbackLogo } from "../ui/FallbackLogo";

export function CredentialsSection() {
  return (
    <section id="credentials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Certifications"
          title="Credentials earned."
          description="Continuous learning through recognized programs and platforms."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <article key={cert.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <div className="mb-4 flex items-start gap-3">
                {cert.logo ? (
                  <img src={withBase(cert.logo)} alt={`${cert.issuer} logo`} className="h-11 w-11 rounded-xl border border-white/10 bg-white p-1.5 object-contain" />
                ) : (
                  <FallbackLogo label={cert.issuer} />
                )}
                <div>
                  <h3 className="text-base font-semibold leading-snug text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-ember-200">{cert.issuer}</p>
                </div>
              </div>
              {cert.image ? (
                <img src={withBase(cert.image)} alt={`${cert.title} certificate preview`} className="mb-4 aspect-[16/10] w-full rounded-xl border border-white/10 object-cover object-top" />
              ) : null}
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/42">{cert.date}</p>
              {cert.credentialId ? <p className="mt-2 font-mono text-xs text-white/45">ID: {cert.credentialId}</p> : null}
              {cert.skills ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-white/55">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
              {cert.credentialUrl ? (
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-200 hover:text-ember-100">
                  Show credential <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
