export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
  icon: string;
}
