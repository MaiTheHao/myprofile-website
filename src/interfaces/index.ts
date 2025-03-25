export interface NavBarElement {
  readonly title: string;
  readonly path: string;
}

export interface SocialMedia {
  title: string;
  url: string;
  Icon: React.ComponentType<any>;
}

export interface SvgIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export interface ProjectCard {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface NavPage {
  title: string;
  path: string;
}

export interface PersonalInfoItem {
  title: string;
  content: string;
}

export interface Location {
  town: string | null;
  city: string;
  province: string;
  country: string;
}

export interface UserInfo {
  name: string;
  nickname: string;
  birth: Date;
  occupation: string;
  location: Location;
  personalInfo: PersonalInfoItem[];
}

export interface SocialMediaLinks {
  facebook: string;
  github: string;
  google: string;
  twitter: string;
  linkedin: string;
}

export interface CareerRole {
  title: string;
  detail: string;
}

export interface CareerInfo {
  currentRole: CareerRole;
  goal: CareerRole;
  experience: string[];
  goals: string[];
  skills: string[];
  hobbies: string[];
}

export interface PortfolioInfo {
  projects: ProjectCard[];
  categories: string[];
  pageContent: {
    title: string;
    description: string;
  };
}
