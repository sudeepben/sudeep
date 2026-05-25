import { ArrowDown, Download, Github, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { withBase } from "../../lib/paths";

const consoleRows = [
  ["Input", "messy data, technical docs, workflows"],
  ["Process", "retrieve, model, automate, explain"],
  ["Output", "reliable decisions"],
];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/sudeepben", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/benarjeesudeep", icon: Linkedin },
  { label: "Email", href: "mailto:sudeepsampathpb@gmail.com", icon: Mail },
  { label: "Instagram", href: "https://www.instagram.com/walkedawhile/", icon: Instagram },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-ember-300" />
            BSSP / The Builder's Console
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build intelligent data systems that turn messy information into reliable decisions.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
            Data Science graduate student and AI/Data Engineer focused on RAG systems, analytics pipelines, cloud-native applications, and decision-support products.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
            From India to Colorado, my work has moved through research labs, healthcare analytics, data engineering, legal-tech AI, hackathons, and cloud-native systems. The common thread is simple: make data tell a better, more useful story.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/projects">View Builds <ArrowDown className="h-4 w-4" /></ButtonLink>
            <ButtonLink to="/about" variant="secondary">Read My Story</ButtonLink>
            <ButtonLink href={withBase("/resume.pdf")} variant="ghost" download>
              Download Resume <Download className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {profileLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-white/65 transition hover:border-ember-400/50 hover:text-ember-200"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
            <a href="https://sudeepiterate.blogspot.com/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white/62 hover:text-ember-200">
              Blog
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-ember-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-[0.86fr_1.14fr]">
              <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img
                  src={withBase("/assets/profile-professional.jpg")}
                  alt="Benarjee Sudeep Sampath Pyla profile portrait"
                  className="h-full min-h-80 w-full object-cover object-center saturate-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="portrait-caption absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-200">Benarjee Sudeep Sampath Pyla</p>
                  <p className="mt-1 text-sm text-white/70">Boulder, Colorado</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink/72 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">console</span>
                </div>
                <div className="space-y-3">
                  {consoleRows.map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember-200">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="hero-note mt-4 rounded-xl border border-ember-400/20 bg-ember-500/10 p-4">
                  <p className="text-sm leading-6 text-ember-50">The work is not to make AI feel magical. It is to make the decision path understandable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
