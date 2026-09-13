export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  isExternal?: boolean;
}

export interface ProfileMetadata {
  role: string;
  focus: string;
  education: string;
  competitive: string;
  location: string;
  availability: string;
}

export interface ProfileData {
  name: string;
  headlineTitle: string;
  editorialAccent: string;
  headlineRest: string;
  roles: string[];
  bio: string;
  subIntro: string;
  metadata: ProfileMetadata;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    leetcode?: string;
  };
}

export interface ProjectArchitectureStep {
  title: string;
  description: string;
  tech: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architectureSteps: ProjectArchitectureStep[];
  keyFeatures: string[];
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  tags?: string[];
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Achievement {
  id: string;
  stat: string;
  metricLabel: string;
  platform: string;
  description: string;
  topics: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  companyOrOrg: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  topics: string[];
}
