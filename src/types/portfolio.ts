export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  category: 'Corporate Training' | 'MIS & Analytics' | 'Logistics & Billing' | 'Automotive & Retail';
  highlights: string[];
  skills: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  level: string; // e.g. "Mastery", "Specialist", "Auditing", etc.
  skills: string[];
  tags: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  code: string;
  duration: string;
  audience: string;
  level: 'Intermediate' | 'Advanced' | 'Executive';
  overview: string;
  curriculum: string[];
  keyOutcomes: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  domain: string;
  period: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    metric: string;
    label: string;
  }[];
  toolsUsed: string[];
}

export interface ColorThemeOption {
  id: string;
  name: string;
  lucky?: boolean;
  swatchHex: string;
  dark: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    text: string;
  };
  light: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    text: string;
  };
}
