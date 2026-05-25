export interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo?: string;
  image?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    title: "Internship 4.0 - Social Media Hate Speech Detection with ML",
    issuer: "Infosys Springboard",
    date: "Sep 2024",
    logo: "/assets/logo-infosys.png",
    image: "/assets/cert-hate-speech.png",
    skills: ["Machine Learning", "Python", "Data Analysis"],
  },
  {
    title: "Artificial Intelligence Primer Certification",
    issuer: "Infosys Springboard",
    date: "Feb 2024",
    logo: "/assets/logo-infosys.png",
    image: "/assets/cert-ai-primer.png",
    skills: ["AI Foundations", "Machine Learning"],
  },
  {
    title: "KPMG AU Data Analytics Virtual Internship",
    issuer: "Forage",
    date: "2024",
    logo: "/assets/logo-forage.png",
    credentialUrl: "https://www.theforage.com/",
    skills: ["Data Analytics", "Dashboarding", "Customer Segmentation"],
  },
  {
    title: "Introduction to Business Analytics with R",
    issuer: "University of Illinois Urbana-Champaign",
    date: "Oct 2023",
    logo: "/assets/logo-cu-boulder.png",
    credentialId: "CSGHYG5J77TT",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/CSGHYG5J77TT",
  },
  {
    title: "Business Analytics for Decision Making",
    issuer: "University of Colorado Boulder",
    date: "Oct 2023",
    logo: "/assets/logo-cu-boulder.png",
    credentialId: "E74XUBJY54UM",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/E74XUBJY54UM",
  },
];
