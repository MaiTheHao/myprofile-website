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
