import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { contact, socials } from "../../data/socials";
import { useReveal } from "../../hooks/useReveal";
import { MagneticLink } from "./MagneticLink";

export function ContactFooter() {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref, { selector: ".reveal-item" });

  return (
    <section ref={ref} id="contact" className="creative-section relative min-h-screen overflow-hidden px-5 py-24 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent" />
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[92rem] content-between gap-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="reveal-item creative-kicker">Contact</p>
          <div>
            <h2 className="reveal-item text-[clamp(4rem,13vw,12rem)] font-black uppercase leading-[0.82] tracking-[-0.09em] text-white">
              Let&apos;s Talk<span className="ml-4 inline-block h-[0.13em] w-[0.13em] rounded-full bg-ember-500 align-middle" />
            </h2>
            <p className="reveal-item mt-8 max-w-2xl text-lg leading-8 text-white/62">
              Have a messy information problem, AI product idea, or data engineering role where reliability matters?
            </p>
            <MagneticLink data-cursor="mail" href={`mailto:${contact.email}`} className="reveal-item mt-10 inline-flex items-center gap-3 text-2xl font-semibold text-white sm:text-4xl">
              {contact.email}
              <ArrowUpRight className="h-7 w-7 text-ember-300" />
            </MagneticLink>
          </div>
        </div>

        <footer className="reveal-item grid gap-8 border-t border-white/10 pt-8 text-sm text-white/52 md:grid-cols-4">
          <div>
            <p className="creative-kicker mb-3">Location</p>
            <p>{contact.location}</p>
          </div>
          <div>
            <p className="creative-kicker mb-3">Socials</p>
            <div className="flex flex-col gap-2">
              {socials.filter((item) => ["GitHub", "LinkedIn", "Blog"].includes(item.label)).map((item) => (
                <MagneticLink key={item.label} data-cursor="open" href={item.href} target="_blank" rel="noreferrer" className="w-fit hover:text-white">
                  {item.label}
                </MagneticLink>
              ))}
            </div>
          </div>
          <div>
            <p className="creative-kicker mb-3">Navigate</p>
            <div className="flex flex-col gap-2">
              {["work", "info", "stack", "contact"].map((item) => (
                <MagneticLink key={item} href={`#${item}`} className="w-fit capitalize hover:text-white">
                  {item}
                </MagneticLink>
              ))}
            </div>
          </div>
          <div>
            <p className="creative-kicker mb-3">BSSP</p>
            <p>© {new Date().getFullYear()} Benarjee Sudeep Sampath Pyla</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
