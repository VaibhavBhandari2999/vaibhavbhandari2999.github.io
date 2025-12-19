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
    slug: "bug-repair-pipeline",
    title: "SmartPatch: Intelligent Bug Repair",
    summary: "A pipeline for localizing and fixing bugs in software repositories using the SWEBench dataset. ",
    descriptionLong: "The pipeline combines semantic search, docstring generation, and bug fixing to automatically generate patches for bugs, and issues.",
    bullets: [
      "Created an end-to-end LLM powered APR system capable of localizing and fixing bugs across large Python codebases.",
      "Designed a scalable pipeline using hybrid search, enriched with LLM-generated summaries, boosting Top-1 localization by 68%.",
      "Devised a multi-patch generation and ranking strategy, achieving a patch success rate within 5% of SOTA SLM systems."
    ],
    stack: ["Python", "PyTorch", "Transformers", "vLLM", "Qwen2.5-7B", "DeepSeekCoder-V2-Instruct", "BM25", "Multiprocessing", "Git"],
    links: { repo: "https://github.com/VaibhavBhandari2999/SLM-Debugger" },
  },

  {
    slug: "persistent-llm-chat-rag-caching",
    title: "ConverSync: Persistent LLM Chat with RAG + Caching",
    summary: "RAG powered chatbot with Response Time Optimizations",
    descriptionLong: "Designed a backend system for persistent, real-time LLM chat with an emphasis on low latency, durable session state, and scalable caching. Implemented WebSocket-based session management, REST APIs for asynchronous updates, and distributed caching to reduce redundant computation and retrieval. Integrated RAG as a modular data access layer, enabling accurate responses while meeting performance and reliability requirements.",
    bullets: [
        "Designed an LLM-powered chatbot, providing accurate responses to queries leveraging Retrieval Augmented Generation.",
        "Achieved a 70% reduction in response time by implementing distributed caching for chat history and chat session data.",
        "Integrated WebSocket communication for persistent chat sessions, and RESTful API for asynchronous chat history updates."
    ],
    stack: ["Python", "GenAI", "RAG", "FAISS", "AWS", "Flask", "Redis", "DynamoDB"],
    links: { repo: "https://github.com/VaibhavBhandari2999/KnowledgeBot" },
  },

  {
    slug: "academically",
    title: "AcademicAlly: Learning Enhancement Hub",
    summary: "AcademicAlly is a comprehensive web-based solution aimed at providing insightful feedback to students to improve their academic performances and aid faculties by giving them valuable inferences and pointers to review their teaching methods.",
    descriptionLong: "It offers a customized user experience for students, enabling them to submit assignments, showing them an interactive dashboard containing their performance and percentile in each subtopic of a subject and allowing them to provide feedback to teachers. The application also reflects the academic standing of the student relative to their peers and provides additional resources to the student on topics requiring improvement. The solution also helps teachers grade assignments, send feedback to students and showing them an interactive dashboard containing grade details, class averages and in depth statistics of all students. It also contains an autograder system which grades Multiple Choice Questions instantaneously and provides a plagiarism checker to protect against students copying subjective answers from each other.",
    bullets: [
          "Built a full-stack academic platform with personalized feedback, real-time analytics, performance insights for students and faculty.",
          "Integrated an auto-grader and plagiarism checker to streamline assignment workflows and support scalable assessment.",
          "Enhanced visualization of topic-wise marks distribution and student performance trends using ChartJS."
    ],
    stack: ["ReactJS", "MySQL", "Flask", "Google Cloud Platform", "HTML", "CSS"],
    links: { repo: "https://github.com/VaibhavBhandari2999/AcademicAlly" },
  },

  {
    slug: "keystroke-auth",
    title: "TypeLock: Intelligent Keystroke-Based Security",
    summary: "Behavioral authentication system using keystroke dynamics and machine learning to verify user identity.",
    descriptionLong: "Built an end-to-end behavioral authentication system that verifies user identity based on keystroke dynamics rather than static credentials. The system captures fine-grained typing signals such as key-hold duration and inter-key latency, extracts statistical features, and applies supervised machine learning to distinguish legitimate users from impostors. \n\nImplemented the full pipeline from real-time data collection in the browser to backend feature extraction, model inference, and authentication decisions. This project demonstrates applied machine learning in a security-sensitive context, along with full-stack integration to support real-time user interaction and model-backed access control.",
    bullets: [
          "Built a keystroke-dynamics authentication system that verifies users based on how they type, analyzing timing patterns like key-hold duration and transition speed, achieving 91% identity prediction accuracy.",
          "Designed a full-stack Flask + JavaScript application for real-time capture and classification of typing behavior, enabling seamless behavioral biometrics–based login."
    ],
    stack: ["Python", "Flask", "JavaScript", "SVM (scikit-learn)", "MongoDB", "HTML/CSS"],
    links: { repo: "https://github.com/VaibhavBhandari2999/Banking-System-with-Keystroke-Authentication" },
  },

  {
    slug: "partselect-rag",
    title: "PartSelectRAG: Appliance Parts Retrieval System",
    summary: "End-to-end retrieval-augmented system combining database queries with vector search for structured and unstructured product data.",
    descriptionLong: "Built a full retrieval-augmented generation (RAG) system that serves structured JSON responses for appliance parts questions, using intent classification, relational queries, and RAG over product documentation.",
    bullets: [
      "Designed backend service to classify user intent and hybridize Postgres queries with vector search over product documentation.",
      "Implemented FastAPI backend integrating PostgreSQL (RDS), Pinecone vector search, RAG, and structured response composition for UI consumption.",
      "Built React front end with Vite for a conversational interface that displays product fields, images, and contextual answers.",
      "Developed data scraping pipelines with Selenium to ingest product and blog data into the RDS and vector index.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL (RDS)", "Pinecone", "React", "Vite", "Selenium", "LLMs"],
    links: { repo: "https://github.com/VaibhavBhandari2999/PartSelect_RAG" },
  },

  {
    slug: "mcp-sql-agent",
    title: "MCP SQL Executor: Constrained LLM Database Agent",
    summary: "Backend service enabling safe, schema-aware SQL execution from LLM prompts using the Model Context Protocol (MCP).",
    descriptionLong: "Built a backend system that allows large language models to generate and execute constrained SQL queries against relational databases with schema awareness, safety controls, and auditable execution. This project demonstrates robust LLM tool integration in backend systems with real data access boundaries.",
    bullets: [
      "Designed and implemented an MCP-compliant backend that interprets LLM intent and generates schema-aware SQL queries.",
      "Built safety layers to constrain generated SQL and prevent unsafe or harmful database operations.",
      "Integrated with PostgreSQL (RDS) and formalized execution logs for auditability and traceability.",
      "Developed API endpoints to serve LLM-driven query results as structured JSON for downstream consumption.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL (RDS)", "MCP", "LLMs", "Git"],
    links: { repo: "https://github.com/VaibhavBhandari2999/mcp-sql-executor" },
  }




];
