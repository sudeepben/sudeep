import {
  ArrowDown,
  BrainCircuit,
  CloudCog,
  Database,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { withBase } from "../../lib/paths";

const roleSignals = ["AI Engineer", "Data Engineer", "Data Scientist", "RAG Systems"];

const profileLinks = [
  { label: "GitHub", href: "https://github.com/sudeepben", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/benarjeesudeep", icon: Linkedin },
  { label: "Email", href: "mailto:sudeepsampathpb@gmail.com", icon: Mail },
  { label: "Instagram", href: "https://www.instagram.com/walkedawhile/", icon: Instagram },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div className="min-w-0">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-ember-300" />
                BSSP / Sudeep Builds
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">V1.0</span>
            </div>

            <p className="mb-4 max-w-[19rem] font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-ember-300 sm:max-w-none sm:text-[11px] sm:tracking-[0.24em]">
              Data systems / AI products / decisions
            </p>
            <h1 className="max-w-5xl text-[3.15rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[6.6rem]">
              <span className="block">Sudeep</span>
              <span className="block text-white/72">Builds.</span>
          </h1>

            <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <p className="text-lg leading-8 text-white/76">
                I build intelligent data systems that turn messy information into reliable decisions.
              </p>
              <p className="text-sm leading-7 text-white/58">
                Data Science graduate student and AI/Data Engineer focused on RAG systems, analytics pipelines, cloud-native applications, and decision-support products. From India to Colorado, the common thread is simple: make data tell a better, more useful story.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {roleSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/62">
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/projects" className="w-full sm:w-auto">View Builds <ArrowDown className="h-4 w-4" /></ButtonLink>
              <ButtonLink to="/about" variant="secondary" className="w-full sm:w-auto">Read My Story</ButtonLink>
              <ButtonLink href={withBase("/resume.pdf")} variant="ghost" className="w-full sm:w-auto" download>
                Download Resume <Download className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-[18rem] lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-ember-500/10 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20">
                <img
                  src={withBase("/assets/profile-professional.jpg")}
                  alt="Benarjee Sudeep Sampath Pyla profile portrait"
                  className="aspect-[4/5] w-full object-cover object-center saturate-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="portrait-caption absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-200">Benarjee Sudeep Sampath Pyla</p>
                  <p className="mt-1 text-sm text-white/70">Boulder, Colorado</p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-ember-300">
                {[Database, BrainCircuit, CloudCog].map((Icon, index) => (
                  <div key={index} className="grid h-12 place-items-center rounded-xl border border-white/10 bg-black/10">
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
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
    </section>
  );
}
