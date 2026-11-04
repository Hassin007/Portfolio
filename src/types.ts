export interface Metric {
  label: string;
  value: string;
  iconName?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "AI" | "ML" | "Full-stack";
  description: string;
  longDescription: string;
  challenges: string;
  architecture: string; // ASCII or SVG diagram code
  tech: string[];
  watermark: string;
  isFeatured: boolean;
  metrics?: Metric[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  bulletPoints: string[];
  tech: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl: string;
  verifyUrl?: string;
  image: string;
  badge?: string;
  skills?: string[];
}
