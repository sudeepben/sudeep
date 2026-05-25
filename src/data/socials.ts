import { FileDown, Github, Instagram, Linkedin, Mail, PenLine, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const contact = {
  name: "Benarjee Sudeep Sampath Pyla",
  brand: "BSSP / Sudeep Builds",
  location: "Boulder, Colorado",
  email: "sudeepsampathpb@gmail.com",
  phone: "+1 720-878-0464",
  linkedin: "https://linkedin.com/in/benarjeesudeep",
  github: "https://github.com/sudeepben",
  instagram: "https://www.instagram.com/walkedawhile/",
  blog: "https://sudeepiterate.blogspot.com/",
  resume: "/resume.pdf",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  { label: "Phone", href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
  { label: "Instagram", href: contact.instagram, icon: Instagram },
  { label: "Blog", href: contact.blog, icon: PenLine },
  { label: "Resume", href: contact.resume, icon: FileDown },
];
