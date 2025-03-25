import { SocialMedia, NavPage } from '@/interfaces';
import { SOCIAL_MEDIA } from './user';
import { Facebook, Github, Google, LinkedIn, Twitter } from '@components/icons';

export const PAGES: NavPage[] = [
  { title: 'Home', path: '/home' },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
  },
];

export const SOCIAL_MEDIAS: SocialMedia[] = [
  {
    title: 'Facebook',
    url: SOCIAL_MEDIA.facebook,
    Icon: Facebook,
  },
  {
    title: 'Github',
    url: SOCIAL_MEDIA.github,
    Icon: Github,
  },
  {
    title: 'Google',
    url: SOCIAL_MEDIA.google,
    Icon: Google,
  },
  {
    title: 'Twitter',
    url: SOCIAL_MEDIA.twitter,
    Icon: Twitter,
  },
  {
    title: 'LinkedIn',
    url: SOCIAL_MEDIA.linkedin,
    Icon: LinkedIn,
  },
];
