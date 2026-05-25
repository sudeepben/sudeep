export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  detail?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    institution: "University of Colorado Boulder",
    degree: "MS in Data Science",
    period: "Aug 2024 - May 2026",
    location: "Boulder, Colorado",
    detail: "GPA: 3.92 / 4.00",
    logo: "/assets/logo-cu-boulder.png",
  },
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "BTech in Computer Science and Engineering",
    period: "Aug 2020 - May 2024",
    location: "India",
    logo: "/assets/logo-amrita.png",
  },
];
