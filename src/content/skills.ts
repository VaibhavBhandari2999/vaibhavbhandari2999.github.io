export type SkillCategory = {
  name: string;
  skills: {
    name: string;
    description?: string;
    icon?: string;
  }[];
};

const AWS_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/f/f1/Aws_logo.svg";

const DATABASE_ICON =
  "https://www.svgrepo.com/show/331488/database.svg";


export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "SQL"},
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Perl", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    ],
  },
  {
    name: "Frameworks & APIs",
    skills: [
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Selenium", icon: "https://cdn.simpleicons.org/selenium/43B02A" },
      { name: "REST", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    ],
  },
  {
    name: "DBs & Messaging",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Neo4j", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg" },
      { name: "DynamoDB", icon: AWS_ICON },
      { name: "RDS", icon: AWS_ICON },
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Google Pub/Sub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    ],
  },
  {
    name: "Cloud",
    skills: [
      { name: "AWS", icon: AWS_ICON },
      { name: "EC2", icon: AWS_ICON },
      { name: "Lambda", icon: AWS_ICON },
      { name: "EKS", icon: AWS_ICON },
      { name: "S3", icon: AWS_ICON },
      { name: "SQS", icon: AWS_ICON },
      { name: "CloudWatch", icon: AWS_ICON },
      { name: "IAM", icon: AWS_ICON },
      { name: "CloudFormation", icon: AWS_ICON },
    ],
  },
  {
    name: "DevOps & Platforms",
    skills: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "GitHub Actions", icon:"https://cdn.simpleicons.org/githubactions/2088FF"},
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Unix Systems", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "SonarQube"},
    ],
  },
  {
    name: "Software Practices",
    skills: [
      { name: "TDD", icon: "https://cdn.simpleicons.org/testinglibrary/E33332" },
      { name: "BDD", icon: "https://cdn.simpleicons.org/cucumber/23D96C" },
      { name: "Cucumber", icon: "https://cdn.simpleicons.org/cucumber/23D96C" },
      { name: "Gherkin", icon: "https://cdn.simpleicons.org/cucumber/23D96C" },
      { name: "pytest", icon: "https://cdn.simpleicons.org/pytest/0A9EDC" },
      { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "System Design", icon: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
      { name: "Agile / SAFe", icon: "https://cdn.simpleicons.org/jira/0052CC" },
    ],
  },
  {
    name: "LLM Tooling",
    skills: [
      { name: "RAG", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/3a9f85" },
      { name: "MCP", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "Pinecone", icon: "https://upload.wikimedia.org/wikipedia/commons/8/86/Database-icon.svg" },
      { name: "Vector Databases", icon: "https://upload.wikimedia.org/wikipedia/commons/8/86/Database-icon.svg" },
      { name: "LLM APIs", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "Embeddings", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "Prompt Engineering", icon: "https://cdn.simpleicons.org/openai/412991" },
    ],
  },
  {
    name: "Certifications",
    skills: [
      {
        name: "AWS Certified Developer – Associate",
      },
      {
        name: "AWS Solutions Architect - Associate"
      }
    ],
  },
];
