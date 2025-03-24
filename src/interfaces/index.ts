export interface NavBarElement {
  readonly title: string;
  readonly path: string;
}

export interface SocialMedia {
  readonly title: string;
  readonly Icon?: any;
  readonly url: string;
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
