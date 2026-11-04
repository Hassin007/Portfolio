export interface Metric {
  label: string;
  value: string;
  iconName?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
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
  emoji: string;
  skills: string[];
  primarySkills?: string[]; // skills colored as high confidence
}
