export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Python", "R", "SQL", "JavaScript", "TypeScript"] },
  { title: "AI Systems", items: ["RAG", "LangChain", "OpenAI API", "FAISS", "Hybrid Retrieval", "Prompting"] },
  { title: "Data Science", items: ["NLP", "XGBoost", "Deep Learning", "BiLSTM-CNN", "Statistical Modeling", "Model Evaluation"] },
  { title: "Data Engineering", items: ["FastAPI", "MySQL", "PostgreSQL", "Redis", "RabbitMQ", "Airflow", "ETL Pipelines"] },
  { title: "Cloud & Product", items: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "GCP/GKE", "React"] },
  { title: "Analytics", items: ["Power BI", "Dashboards", "Visualization", "Business Analytics", "Decision Support", "Data Storytelling"] },
  { title: "Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "HuggingFace", "Streamlit"] },
  { title: "Working Style", items: ["Written Communication", "Time Management", "Attention to Detail", "Well-Organized"] },
];
