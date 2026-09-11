export interface Project {
  id: string;
  title: string;
  category: 'Web Apps' | 'Management Systems';
  description: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  features: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  iconName: string; // identifier for icon renderer
}

export interface SkillCategory {
  title: string;
  categoryKey: 'backend' | 'database' | 'tools' | 'general';
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  note?: string;
  degree: string;
  date: string;
}

export interface ExperienceItem {
  position: string;
  company: string;
  date: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'Messenger';
  url: string;
  label: string;
  username?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
}
