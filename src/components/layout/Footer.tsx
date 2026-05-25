import { socials } from "../../data/socials";
import { LogoMark } from "../ui/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size="sm" />
          <p className="text-sm text-white/55">BSSP / Sudeep Builds. Intelligent systems for reliable decisions.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-sm text-white/55 hover:text-ember-200">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
