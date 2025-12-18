export type Project = {
  slug: string;
  title: string;
  summary: string;
  descriptionLong?: string;
  bullets: string[];
  stack: string[];
  links: { repo?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot (Placeholder)",
    summary: "Retrieval-augmented Q&A system with structured + unstructured sources.",
    descriptionLong: "Built an end-to-end RAG pipeline with ingestion, retrieval, reranking, caching, and evaluations for structured + unstructured sources.",
    bullets: [
      "Designed ingestion + chunking pipeline for documents and metadata.",
      "Implemented retrieval + reranking and response caching for latency improvements.",
    ],
    stack: ["Python", "Vector DB", "AWS", "LLM APIs"],
    links: { repo: "https://github.com/<your-username>/<repo>" },
  },
  {
    slug: "mcp-sql-agent",
    title: "MCP SQL Agent (Placeholder)",
    summary: "Tool-using LLM agent that safely answers questions over SQL databases.",
    descriptionLong: "Join-aware, tool-using SQL agent with guardrails, packaged as a reusable library and demo app.",
    bullets: [
      "Implemented join-aware schema reasoning and query validation guardrails.",
      "Packaged tooling as a reusable library with a simple developer workflow.",
    ],
    stack: ["TypeScript", "Node", "Postgres/MySQL", "LLM APIs"],
    links: { repo: "https://github.com/<your-username>/<repo>" },
  },
  {
    slug: "mcp-sql-agent",
    title: "MCP SQL Agent (Placeholder)",
    summary: "Tool-using LLM agent that safely answers questions over SQL databases.",
    descriptionLong: "Join-aware, tool-using SQL agent with guardrails, packaged as a reusable library and demo app.",
    bullets: [
      "Implemented join-aware schema reasoning and query validation guardrails.",
      "Packaged tooling as a reusable library with a simple developer workflow.",
    ],
    stack: ["TypeScript", "Node", "Postgres/MySQL", "LLM APIs"],
    links: { repo: "https://github.com/<your-username>/<repo>" },
  },
];
