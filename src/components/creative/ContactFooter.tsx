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
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="reveal-item">
            <p className="creative-kicker">Contact</p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/54">
              Location: {contact.location}. Open to AI, data science, data engineering, and decision-support product conversations.
            </p>
          </div>
          <div>
            <h2 className="reveal-item text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.085em] text-white">
              Let&apos;s build something<span className="ml-4 inline-block h-[0.13em] w-[0.13em] rounded-full bg-ember-500 align-middle" />
            </h2>
            <p className="reveal-item mt-8 max-w-2xl text-lg leading-8 text-white/62">
              Whether it&apos;s a role, a collaboration, or just a good conversation about data - I&apos;m all ears.
            </p>
            <div className="reveal-item mt-10 grid gap-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              <MagneticLink data-cursor="mail" href={`mailto:${contact.email}`} className="group inline-flex w-fit items-center gap-3">
                {contact.email}
                <ArrowUpRight className="h-7 w-7 text-ember-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticLink>
              <MagneticLink data-cursor="open" href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="inline-flex w-fit text-white/64 hover:text-white">
                {contact.phone}
              </MagneticLink>
            </div>
          </div>
        </div>

        <footer className="reveal-item grid gap-8 border-t border-white/10 pt-8 text-sm text-white/52 md:grid-cols-4">
          <div>
            <p className="creative-kicker mb-3">Identity</p>
            <p>{contact.name}</p>
            <p className="mt-2">{contact.brand}</p>
          </div>
          <div>
            <p className="creative-kicker mb-3">Socials</p>
            <div className="flex flex-col gap-2">
              {socials.map((item) => (
                <MagneticLink
                  key={item.label}
                  data-cursor="open"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="w-fit hover:text-white"
                >
                  {item.label}
                </MagneticLink>
              ))}
            </div>
          </div>
          <div>
            <p className="creative-kicker mb-3">Navigate</p>
            <div className="flex flex-col gap-2">
              {["work", "story", "info", "stack", "archive", "contact"].map((item) => (
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
