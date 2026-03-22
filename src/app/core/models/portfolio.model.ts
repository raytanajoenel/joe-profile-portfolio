export interface Portfolio {
  profile: Profile;
  skills: Skills;
  experience: ExperienceItem[];
  projects: Project[];
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  photo: string;
  highlights: { label: string; value: string }[];
  links: { email: string; linkedin: string; github: string };
}

export interface Skills {
  frontend: string[];
  backend: string[];
  databases: string[];
  cloud: string[];
  mobile: string[];
}

export interface ExperienceItem {
  company: string;
  project: string;
  role: string;
  overview: string;
  technology: string[];
  period: string;
}

export interface Project {
  name: string;
  org: string;
  description: string;
  tags: string[];
  highlights: string[];
}
