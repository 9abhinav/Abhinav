import type { ExperienceItem, CertificationItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  // Extensible structure: user can add industry roles and internships here
];

export const certificationsData: CertificationItem[] = [
  // Extensible structure: user can add verified certifications here
];

export const educationData = {
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  status: 'In Progress / Final Year Candidate',
  focusAreas: [
    'Artificial Intelligence & Machine Learning',
    'Design and Analysis of Algorithms',
    'Database Management Systems',
    'Operating Systems & Distributed Networks',
    'Computer Architecture & Software Engineering',
  ],
};

export const targetOpportunities = [
  {
    role: 'AI / ML Engineer',
    types: ['Full-Time', 'Internship'],
    description: 'Developing computer vision pipelines, fine-tuning deep learning models, building RAG / Generative AI workflows, and optimizing inference latencies.',
  },
  {
    role: 'Software Engineer / Backend Developer',
    types: ['Full-Time', 'Internship'],
    description: 'Engineering asynchronous Python & FastAPI microservices, designing reliable relational database architectures, and building production-ready REST APIs.',
  },
  {
    role: 'Full-Stack Developer',
    types: ['Full-Time', 'Internship'],
    description: 'Bridging high-performance backend AI engines to responsive, state-of-the-art React and TypeScript user interfaces.',
  },
];
