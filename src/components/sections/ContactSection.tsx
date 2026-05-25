import { Mail, MapPin } from "lucide-react";
import { contact, socials } from "../../data/socials";
import { ButtonLink } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
        <SectionHeader
          label="Get in Touch"
          title="Let's build something."
          description="Whether it's a role, a collaboration, or just a good conversation about data - I'm all ears."
        />
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-3 text-sm text-white/65">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-ember-300" /> {contact.location}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-ember-300" /> {contact.email}</p>
            <p className="flex items-center gap-2">Phone: {contact.phone}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${contact.email}`}>Email Me</ButtonLink>
            {socials.filter((social) => ["GitHub", "LinkedIn", "Blog"].includes(social.label)).map((social) => (
              <ButtonLink key={social.label} href={social.href} target="_blank" rel="noreferrer" variant="secondary">
                <social.icon className="h-4 w-4" /> {social.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
