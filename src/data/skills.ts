import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    subtitle: 'Neural Architectures, Vision & Intelligent Systems',
    skills: [
      {
        name: 'Python',
        description: 'Core language for AI algorithms, model pipelines, and high-performance processing.',
        tags: ['Core', 'NumPy', 'Pandas'],
      },
      {
        name: 'Machine Learning',
        description: 'Supervised & unsupervised algorithms, feature engineering, and predictive modeling.',
        tags: ['Scikit-Learn', 'Statistical Modeling'],
      },
      {
        name: 'Computer Vision',
        description: 'Object detection, spatial tracking, feature extraction, and perspective transformation.',
        tags: ['OpenCV', 'Object Tracking', 'Image Processing'],
      },
      {
        name: 'Generative AI',
        description: 'LLM integrations, prompt engineering, RAG pipelines, and automated intelligence.',
        tags: ['LLMs', 'Embeddings', 'AI Workflows'],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'High-Concurrency Services, Asynchronous Pipelines & Clean APIs',
    skills: [
      {
        name: 'FastAPI',
        description: 'High-performance asynchronous RESTful microservices with automated OpenAPI validation.',
        tags: ['AsyncIO', 'Pydantic', 'REST'],
      },
      {
        name: 'Python Backend',
        description: 'Architecting robust server-side systems, multithreading, and worker workflows.',
        tags: ['Clean Architecture', 'Microservices'],
      },
      {
        name: 'APIs & Integration',
        description: 'Designing deterministic, type-safe API contracts and third-party webhook integrations.',
        tags: ['RESTful', 'Webhooks', 'JSON/Protobuf'],
      },
      {
        name: 'Backend Architecture',
        description: 'Data ingestion engines, background job scheduling, and event handling.',
        tags: ['Event-Driven', 'Modular Design'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern Component Systems & Interactive Web Applications',
    skills: [
      {
        name: 'React',
        description: 'Declarative component architecture, custom hooks, and state management.',
        tags: ['Hooks', 'SPA', 'Component Systems'],
      },
      {
        name: 'TypeScript',
        description: 'Type safety, strict interfaces, and scalable enterprise frontend codebase design.',
        tags: ['Strict Mode', 'Generics', 'Type Safety'],
      },
      {
        name: 'JavaScript (ES6+)',
        description: 'Modern asynchronous programming, DOM manipulation, and performance profiling.',
        tags: ['Async/Await', 'Event Loop', 'V8'],
      },
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud, Data & Automation Tools',
    subtitle: 'Infrastructure, Distributed Workflows & Database Systems',
    skills: [
      {
        name: 'SQL',
        description: 'Relational database schema modeling, query optimization, indexing, and joins.',
        tags: ['PostgreSQL', 'MySQL', 'Relational DB'],
      },
      {
        name: 'AWS',
        description: 'Cloud infrastructure deployment, storage buckets, compute instances, and serverless.',
        tags: ['Cloud Compute', 'S3', 'IAM'],
      },
      {
        name: 'Git & GitHub',
        description: 'Version control workflows, branching strategies, CI/CD actions, and code review.',
        tags: ['Version Control', 'Pull Requests', 'CI/CD'],
      },
      {
        name: 'n8n',
        description: 'Workflow automation, multi-service webhook routing, and autonomous agent orchestration.',
        tags: ['Automation', 'Low-Code Pipelines', 'Webhooks'],
      },
    ],
  },
];
