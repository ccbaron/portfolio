// Portfolio types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
}

export type ProjectCategory =
  | "web"
  | "mobile"
  | "fullstack"
  | "design"
  | "other";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "soft-skills";

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme types
export type Theme = "light" | "dark";

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}
