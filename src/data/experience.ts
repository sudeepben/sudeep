export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  type: string;
  logo?: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "LexTrack AI",
    title: "Data Science Intern / AI-ML Developer",
    location: "Remote",
    period: "Aug 2025 - Dec 2025",
    type: "Internship",
    logo: "/assets/logo-lextrack.png",
    highlights: [
      "Developed end-to-end analytics workflows with live datasets to improve decision-making.",
      "Engineered data pipelines and feature sets for predictive analysis.",
      "Built generative AI workflows that transformed model outputs into actionable summaries.",
    ],
  },
  {
    company: "Amrita School of Engineering",
    title: "Undergraduate Research Assistant",
    location: "Kerala, India",
    period: "Oct 2023 - Feb 2024",
    type: "Research",
    logo: "/assets/logo-amrita-soe.png",
    highlights: [
      "Researched public sentiment around the Agnipath Recruitment Scheme using X/Twitter data.",
      "Developed a hybrid BiLSTM-CNN-XGBoost model with 84% accuracy.",
      "Co-authored research presented at ADCIS 2024 and published by Springer.",
    ],
  },
  {
    company: "Astragen",
    title: "Junior Data Engineer",
    location: "Vijayawada, India",
    period: "Dec 2023 - Apr 2024",
    type: "Full-time",
    highlights: [
      "Designed MySQL database architecture for a school multimedia application.",
      "Developed backend APIs and data pipelines for engagement tracking.",
      "Created monitoring dashboards for stakeholder decision-making.",
    ],
  },
  {
    company: "EVE HealthCare",
    title: "Data Analyst Intern",
    location: "Remote",
    period: "Jun 2023 - Sep 2023",
    type: "Internship",
    logo: "/assets/logo-eve.png",
    highlights: [
      "Analyzed scheduling and capacity data to identify bottlenecks and exceptions.",
      "Developed Power BI dashboards and KPI reports for trend monitoring.",
      "Provided business recommendations to support planning improvements.",
    ],
  },
];
