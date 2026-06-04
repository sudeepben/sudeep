import { ArrowDown, Download, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { contact } from "../../data/socials";
import { withBase } from "../../lib/paths";
import { MagneticLink } from "./MagneticLink";

const socialLinks = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  { label: "Phone", href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
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
        .from(".hero-meta", { y: 20, opacity: 0, duration: 0.75, stagger: 0.05, clearProps: "all" })
        .fromTo(".hero-dot", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.65, ease: "back.out(2)" }, "-=0.45");
    }, ref);

    return () => context.revert();
  }, []);

  return (
    <section ref={ref} id="top" className="creative-section relative min-h-screen overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-[92rem] grid-rows-[1fr_auto]">
        <div className="grid min-w-0 content-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="min-w-0">
            <div className="hero-meta mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              <span>{contact.email}</span>
              <span>© {new Date().getFullYear()}</span>
              <span>{contact.location}</span>
              <span>Portfolio / V1.0</span>
            </div>

            <h1 className="creative-title hero-title-shell max-w-full text-[clamp(3.35rem,9.4vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-white">
              <span className="block pb-4">Sudeep</span>
              <span className="block pb-6">
                Builds<span className="hero-dot ml-4 inline-block h-[0.13em] w-[0.13em] rounded-full bg-ember-500 align-middle" />
              </span>
            </h1>

            <div className="mt-2 grid max-w-5xl min-w-0 gap-7 border-t border-white/10 pt-6 lg:grid-cols-[0.82fr_1.18fr]">
              <p className="hero-copy max-w-[21rem] text-xl leading-8 text-white/86 sm:max-w-full md:text-2xl md:leading-9">
                I build intelligent data systems that turn messy information into reliable decisions.
              </p>
              <p className="hero-copy max-w-[21rem] text-sm leading-7 text-white/58 sm:max-w-full">
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

            <div className="hero-copy mt-10 grid max-w-4xl gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.18em] text-white/40 sm:grid-cols-3">
              <p><span className="block font-mono text-ember-300">Focus</span><span className="mt-2 block normal-case tracking-normal text-white/58">RAG, pipelines, dashboards</span></p>
              <p><span className="block font-mono text-ember-300">Role</span><span className="mt-2 block normal-case tracking-normal text-white/58">AI/Data Engineer</span></p>
              <p><span className="block font-mono text-ember-300">Based</span><span className="mt-2 block normal-case tracking-normal text-white/58">{contact.location}</span></p>
            </div>
          </div>

          <aside className="hero-portrait relative mx-auto w-full max-w-[15rem] self-center lg:mx-0">
            <div className="absolute -inset-8 rounded-full bg-ember-500/10 blur-3xl" />
            <div className="relative border border-white/14 bg-[#111111]/70 p-2 shadow-2xl shadow-black/30">
              <img
                src={withBase("/assets/profile-professional.jpg")}
                alt="Benarjee Sudeep Sampath Pyla"
                className="aspect-[4/5] w-full object-cover object-center grayscale"
              />
              <div className="mt-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                <span>Benarjee Sudeep Sampath Pyla</span>
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
