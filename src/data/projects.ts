export type ProjectLinkType = "github" | "demo" | "paper" | "credential" | "external";

export interface ProjectLink {
  label: string;
  href: string;
  type: ProjectLinkType;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  highlights: string[];
  tech: string[];
  outcome: string;
  learned: string;
  signal: string;
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "rare",
    number: "01",
    title: "RARE",
    category: "RAG / Civic AI",
    summary: "AI chatbot that answers renter rights questions for Colorado international students using legal PDFs.",
    problem: "International students often need fast, plain-language answers about renter rights, but the trustworthy source material lives in dense legal PDFs.",
    approach: "Built a retrieval-augmented Streamlit assistant using LangChain and FAISS so answers are grounded in source documents instead of model memory.",
    highlights: [
      "Semantic PDF retrieval with chunked legal context",
      "Question-answer flow designed for non-expert renters",
      "Grounded responses that favor traceable context over confident guessing",
    ],
    tech: ["Python", "LangChain", "RAG", "FAISS", "Streamlit"],
    outcome: "Turned difficult legal documents into a focused decision-support assistant for student renters.",
    learned: "Good AI products start with trust boundaries: what the system knows, what it can cite, and when it should slow down.",
    signal: "Messy legal PDFs -> grounded renter guidance",
    links: [{ label: "View code", href: "https://github.com/sudeepben/Renter-Chatbot", type: "github" }],
    featured: true,
  },
  {
    slug: "agentic-ai-troubleshooting-system",
    number: "02",
    title: "Agentic AI Troubleshooting System",
    category: "Agentic AI / Retrieval",
    summary: "Ricoh / DaSSA Hackathon 2nd Place system for citation-first troubleshooting from technical manuals.",
    problem: "Technical support questions often span multiple symptoms, device states, and manual sections. A single retrieval call can miss the reasoning path.",
    approach: "Designed an agentic troubleshooting pipeline that decomposes questions, retrieves across technical manuals, and synthesizes cited answers under no-hallucination constraints.",
    highlights: [
      "Query decomposition for multi-step support questions",
      "Hybrid retrieval using keyword and semantic search",
      "FAISS-backed retrieval with citation traceability",
      "Uncertainty handling when manuals did not support an answer",
    ],
    tech: ["Python", "LangChain", "OpenAI API", "FAISS", "Hybrid Retrieval"],
    outcome: "Won 2nd Place at DaSSA Hackathon 2026 for a reliable, well-architected support agent.",
    learned: "Agentic workflows work best when every step is accountable: retrieve, inspect, cite, then answer.",
    signal: "Technical manuals -> cited troubleshooting decisions",
    links: [
      {
        label: "View code",
        href: "https://github.com/DaSSA-Hackathon-2026/Outliers-Ricoh_agent-Ricoh",
        type: "github",
      },
    ],
    featured: true,
  },
  {
    slug: "agnipath-sentiment-analysis",
    number: "03",
    title: "Sentiment Analysis on Agnipath Scheme",
    category: "Research / NLP",
    summary: "Hybrid sentiment classification on Twitter/X data with 84% accuracy, presented at ADCIS 2024.",
    problem: "Public reaction to the Agnipath Scheme was noisy, emotional, and distributed across social media posts that needed structured interpretation.",
    approach: "Built a BiLSTM-CNN and XGBoost sentiment pipeline to classify X/Twitter data and convert raw public discourse into measurable patterns.",
    highlights: [
      "Hybrid deep learning and gradient boosting approach",
      "Text preprocessing for noisy social media data",
      "Research presented at ADCIS 2024 and published by Springer",
    ],
    tech: ["Python", "BiLSTM-CNN", "XGBoost", "NLP", "Research"],
    outcome: "Reached 84% accuracy and converted social media text into research-grade sentiment evidence.",
    learned: "Model performance matters, but research clarity depends on making data choices explainable.",
    signal: "Noisy social posts -> measurable public sentiment",
    links: [{ label: "Read paper", href: "https://link.springer.com/chapter/10.1007/978-981-96-5370-6_14", type: "paper" }],
    featured: true,
  },
  {
    slug: "newslens-ai",
    number: "04",
    title: "NewsLens AI",
    category: "AI / News Analytics",
    summary: "AI-powered news aggregation and analysis platform for smarter, context-aware news consumption.",
    problem: "News readers face repeated stories, missing context, and uneven framing across sources.",
    approach: "Built an AI-assisted platform that aggregates, summarizes, and analyzes news articles to help users scan context faster.",
    highlights: [
      "News aggregation and summarization workflows",
      "NLP-assisted analysis for article context",
      "Simple public-facing project site",
    ],
    tech: ["AI", "NLP", "Python", "News Analytics"],
    outcome: "Created a clearer reading layer for navigating fast-moving news signals.",
    learned: "Summaries become more useful when they are paired with source awareness and frictionless scanning.",
    signal: "News streams -> compressed context",
    links: [{ label: "Live demo", href: "https://sites.google.com/view/newslensai/home", type: "demo" }],
  },
  {
    slug: "air-quality-analysis",
    number: "05",
    title: "Air Quality Analysis",
    category: "Analytics / Environment",
    summary: "Data-driven analysis of air quality patterns to identify pollution trends and environmental insights.",
    problem: "Environmental datasets can hide seasonal trends and local outliers unless they are cleaned, visualized, and compared carefully.",
    approach: "Analyzed air quality data with Python, statistical summaries, and visualizations to expose pollution patterns and contributing factors.",
    highlights: [
      "Exploratory analysis of environmental data",
      "Trend and seasonality investigation",
      "Visual storytelling for non-technical readers",
    ],
    tech: ["Python", "Data Analysis", "Visualization", "Environmental Data"],
    outcome: "Produced a data story that makes air quality patterns easier to understand and discuss.",
    learned: "The best chart is the one that makes a hidden pattern obvious without needing a long explanation.",
    signal: "Environmental readings -> visible pollution patterns",
    links: [{ label: "Live demo", href: "https://sites.google.com/view/airqualityanalysis", type: "demo" }],
  },
  {
    slug: "cloud-native-appointment-system",
    number: "06",
    title: "Cloud-Native Appointment System",
    category: "Cloud / Data Engineering",
    summary: "Microservices appointment platform with auth, role-aware APIs, orchestration, and CI/CD.",
    problem: "Appointment systems need reliable service boundaries, secure user flows, background processing, and deployment paths that can grow.",
    approach: "Built a cloud-native platform using a React frontend, FastAPI services, Redis/RabbitMQ messaging, Airflow workflows, and GKE deployment tooling.",
    highlights: [
      "JWT authentication and role-aware API behavior",
      "Containerized services with Docker and Kubernetes",
      "Helm charts and GitHub Actions for repeatable deployment",
      "GCP/GKE-oriented architecture",
    ],
    tech: ["React", "FastAPI", "Redis", "RabbitMQ", "Airflow", "Docker", "Kubernetes", "Helm", "GitHub Actions", "GCP/GKE"],
    outcome: "Designed a production-minded appointment architecture with clear service responsibilities and deployment automation.",
    learned: "Cloud-native work rewards boring reliability: observability, boundaries, and repeatable deploys.",
    signal: "Appointments -> secure cloud workflow",
    links: [],
    featured: true,
  },
  {
    slug: "lextrack-ai",
    number: "07",
    title: "LexTrack AI",
    category: "AI / Analytics Pipelines",
    summary: "AI/ML workflows and analytics pipelines using live ecosystem data.",
    problem: "Dynamic business data needs pipelines that can feed models, analytics, and stakeholder-ready summaries.",
    approach: "Built data science workflows that prepared live datasets, supported predictive analysis, and transformed model outputs into useful recommendations.",
    highlights: [
      "Feature engineering for predictive workflows",
      "Generative AI summaries for internal stakeholders",
      "Automation-minded analytics pipelines",
    ],
    tech: ["Python", "ML", "Generative AI", "Analytics Pipelines", "Automation"],
    outcome: "Helped convert live ecosystem data into model-ready signals and decision-ready summaries.",
    learned: "The final mile of analytics is communication: outputs need to become decisions someone can use.",
    signal: "Live data -> stakeholder-ready recommendations",
    links: [],
  },
  {
    slug: "kpmg-au-data-analytics",
    number: "08",
    title: "KPMG AU Data Analytics Virtual Internship",
    category: "Analytics / Simulation",
    summary: "Forage job simulation focused on customer targeting, data quality assessment, analysis, and dashboard development.",
    problem: "Business teams need to know whether customer data is complete enough to trust before using it for targeting and recommendations.",
    approach: "Assessed data quality, analyzed customer segments, and prepared dashboard-style recommendations for stakeholder communication.",
    highlights: [
      "Data quality and completeness review",
      "Customer segmentation based on demographics and attributes",
      "Dashboard thinking for business-facing recommendations",
    ],
    tech: ["Excel", "Data Analysis", "Dashboarding", "Data Visualization", "Customer Segmentation"],
    outcome: "Strengthened business analytics, data quality assessment, and executive communication skills.",
    learned: "A useful analysis starts before modeling: first decide whether the data deserves trust.",
    signal: "Customer data -> targeting recommendations",
    links: [{ label: "Forage", href: "https://www.theforage.com/", type: "external" }],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const findProject = (slug: string | undefined) => projects.find((project) => project.slug === slug);
