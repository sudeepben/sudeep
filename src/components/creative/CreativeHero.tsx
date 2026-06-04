import { ArrowDown, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { contact } from "../../data/socials";
import { withBase } from "../../lib/paths";
import { MagneticLink } from "./MagneticLink";

const socialLinks = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  { label: "Instagram", href: contact.instagram, icon: Instagram },
];

export function CreativeHero() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !ref.current) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "expo.out" } });
      timeline
        .from(".hero-meta", { y: 24, opacity: 0, duration: 0.8, stagger: 0.06, clearProps: "all" })
        .from(".hero-copy", { y: 28, opacity: 0, duration: 0.9, stagger: 0.08, clearProps: "all" }, "-=0.65")
        .fromTo(".hero-dot", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(2)" }, "-=0.45")
        .from(".hero-portrait", { y: 60, rotate: -3, opacity: 0, duration: 1.1, clearProps: "all" }, "-=0.85");
    }, ref);

    return () => context.revert();
  }, []);

  return (
    <section ref={ref} id="top" className="creative-section relative min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-[92rem] grid-rows-[1fr_auto]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_22rem]">
          <div>
            <div className="hero-meta mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              <span>{contact.email}</span>
              <span>© {new Date().getFullYear()}</span>
              <span>Boulder, Colorado</span>
            </div>

            <h1 className="creative-title hero-title-shell max-w-6xl text-[clamp(4.8rem,15vw,13.5rem)] font-black uppercase leading-[0.78] tracking-[-0.09em] text-white">
              <span className="block overflow-hidden pb-4">
                <span className="hero-line block">Sudeep</span>
              </span>
              <span className="block overflow-hidden pb-6">
                <span className="hero-line block">
                  Builds<span className="hero-dot ml-4 inline-block h-[0.13em] w-[0.13em] rounded-full bg-ember-500 align-middle" />
                </span>
              </span>
            </h1>

            <div className="mt-4 grid max-w-5xl gap-7 lg:grid-cols-[0.78fr_1.22fr]">
              <p className="hero-copy text-xl leading-8 text-white/84">
                I build intelligent data systems that turn messy information into reliable decisions.
              </p>
              <p className="hero-copy text-sm leading-7 text-white/58">
                Data Science graduate student and AI/Data Engineer focused on RAG systems, analytics pipelines, cloud-native applications, and decision-support products.
              </p>
            </div>

            <div className="hero-copy mt-8 flex flex-wrap gap-3">
              <MagneticLink data-cursor="view" href="#work" className="creative-button creative-button-primary">
                View Builds <ArrowDown className="h-4 w-4" />
              </MagneticLink>
              <MagneticLink data-cursor="open" href={withBase("/resume.pdf")} className="creative-button" download>
                Resume <Download className="h-4 w-4" />
              </MagneticLink>
            </div>
          </div>

          <aside className="hero-portrait relative mx-auto w-full max-w-[18rem] lg:mx-0">
            <div className="absolute -inset-10 rounded-full bg-ember-500/10 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-white/14 bg-white/[0.065] p-3 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <img
                src={withBase("/assets/profile-professional.jpg")}
                alt="Benarjee Sudeep Sampath Pyla"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-center"
              />
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                <span>BSSP</span>
                <span>AI/Data</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-meta flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <MagneticLink
                key={link.label}
                data-cursor="open"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={link.label}
                className="creative-icon-link"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </MagneticLink>
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/42">Scroll for selected work</p>
        </div>
      </div>
    </section>
  );
}
