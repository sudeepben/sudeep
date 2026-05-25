export interface GrowthItem {
  title: string;
  organization: string;
  date: string;
  kind: "Hackathon" | "Conference" | "Community" | "Workshop";
  logo?: string;
  link?: string;
  note: string;
  children?: {
    title: string;
    date: string;
    location?: string;
    note: string;
    link?: string;
  }[];
}

export const growth: GrowthItem[] = [
  {
    title: "DaSSA Hackathon 2026, 2nd Place",
    organization: "Data Science Student Association, CU Boulder",
    date: "Feb 2026",
    kind: "Hackathon",
    logo: "/assets/logo-dassa.png",
    link: "https://github.com/DaSSA-Hackathon-2026/Outliers-Ricoh_agent-Ricoh",
    note: "Built a Ricoh manual-grounded agentic AI troubleshooting system with query decomposition, hybrid retrieval, citations, and uncertainty handling.",
  },
  {
    title: "Silicon Flatirons Events",
    organization: "CU Boulder",
    date: "2025 - 2026",
    kind: "Community",
    logo: "/assets/logo-silicon-flatirons.png",
    link: "https://siliconflatirons.org",
    note: "Joined events on AI infrastructure, legal technology, venture ecosystems, and the Give First philosophy shaping Boulder entrepreneurship.",
    children: [
      {
        title: "Brad and Brad on Give First",
        date: "Oct 3, 2025",
        location: "Boulder, CO",
        note: "Learned how mentorship, generous networks, and the Give First philosophy helped shape Boulder startup culture.",
        link: "https://siliconflatirons.org/events/brad-and-brad-on-give-first_2025-10-03/",
      },
      {
        title: "Powering AI: Data Centers, Energy Demand & the Public Interest",
        date: "Mar 5, 2026",
        location: "Boulder, CO",
        note: "Explored the energy and water demands of AI infrastructure through law, policy, engineering, and industry perspectives.",
        link: "https://siliconflatirons.org/events/powering-ai-data-centers-energy-demand-and-the-public-interest-2026-03-05/",
      },
      {
        title: "Capital Evolution: The New American Economy",
        date: "Mar 24, 2026",
        location: "Boulder, CO",
        note: "Attended a conversation on long-term capitalism, inclusive growth, and the shifting relationship between venture capital and communities.",
        link: "https://siliconflatirons.org/events/capital-evolution-a-conversation-on-the-new-american-economy-with-seth-levine-and-elizabeth-macbride-2026-03-24/",
      },
      {
        title: "Legal Tech Startup Variety Show",
        date: "Apr 7, 2026",
        location: "Boulder, CO",
        note: "Saw how early-stage startups and established firms are transforming legal work with technology, funding models, and product thinking.",
        link: "https://siliconflatirons.org/events/legal-tech-startup-variety-show-2026-04-07/",
      },
    ],
  },
  {
    title: "Boulder Climate Ventures",
    organization: "CU Boulder",
    date: "2025 - 2026",
    kind: "Workshop",
    logo: "/assets/logo-bcv.png",
    note: "Explored climate-tech venture building through mentorship, sustainability thinking, and applied data science opportunities.",
  },
  {
    title: "ADCIS 2024 International Conference",
    organization: "Springer",
    date: "2024",
    kind: "Conference",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-5370-6_14",
    note: "Presented research on public sentiment analysis of India's Agnipath Scheme using hybrid deep learning.",
  },
];
