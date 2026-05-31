// ============= Shared Portfolio Types =============
export interface LinkItem {
  label: string;
  url: string;
}

export interface HeroSection {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  primaryAction: LinkItem;
  secondaryAction?: LinkItem;
}

export interface AboutSection {
  title: string;
  paragraphs: string[];
  focusAreas: string[];
}

// ============= Skills Types =============
export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SkillsSection {
  summary: string;
  categories: SkillCategory[];
}

// ============= Project Types =============
export type ProjectStatus = "completed" | "in-progress";

export interface ProjectLinks {
  repositoryUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface ProjectItem {
  name: string;
  status: ProjectStatus;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links?: ProjectLinks;
}

// ============= Timeline Types =============
export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  qualification: string;
  location: string;
  period: string;
  details: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  link?: string;
}

// ============= Contact Types =============
export interface ContactSection {
  email: string;
  location: string;
  availability: string;
  links: LinkItem[];
}

// ============= Root Portfolio Data =============
export interface PortfolioData {
  hero: HeroSection;
  about: AboutSection;
  skills: SkillsSection;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  contact: ContactSection;
}

