import { ProjectCard as ProjectCardInterface } from '@/interfaces';
import { PORTFOLIO_INFO } from '../user';

export const PORTFOLIO_PAGE_CONTENT = PORTFOLIO_INFO.pageContent;
export const PORTFOLIO_FILTERS = PORTFOLIO_INFO.categories;
export const PORTFOLIO_ITEMS: ProjectCardInterface[] = PORTFOLIO_INFO.projects;