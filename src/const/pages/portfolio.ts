import { ProjectCard as ProjectCardInterface } from '@/interfaces';

// Projects
export const PORTFOLIO_ITEMS: ProjectCardInterface[] = [
	{
		id: 1,
		title: 'Neo-Profile Website',
		category: 'Web Development',
		imageUrl: '/imgs/Portfolio/My_Profile.jpg',
		description: 'A personal website designed to showcase my skills, projects, and career journey while connecting with professionals in the tech industry.',
		technologies: ['Next.js', 'Figma', 'Vercel'],
		link: 'https://neo-profile.vercel.app/home',
	},
	{
		id: 4,
		title: 'Huni E-Commerce Website',
		category: 'Web Development',
		imageUrl: '/imgs/Portfolio/Huni_E_Commerce.png',
		description:
			'An e-commerce website for Huni Keyboards, featuring product listings, shopping cart, and responsive design. Built to enhance the online shopping experience for mechanical keyboard enthusiasts.',
		technologies: ['Next.js', 'TypeScript', 'Vercel'],
		link: 'https://huni-e-commerce.vercel.app',
	},
	{
		id: 2,
		title: 'Van Nang Mechanical Ltd. Landing Page',
		category: 'Web Development',
		imageUrl: '/imgs/Portfolio/Van_Nang.jpg',
		description: 'A marketing landing page designed to attract investors and enhance brand awareness for Van Nang Mechanical Ltd. I was responsible for both design and development.',
		technologies: ['Next.js', 'Figma', 'MongoDB', 'Vercel'],
		link: 'https://vannang.vercel.app',
	},
	{
		id: 3,
		title: 'Portfolio Website',
		category: 'Web Design',
		imageUrl: '/imgs/Default/Project.jpg',
		description: 'Responsive portfolio website with modern design',
		technologies: ['Next.js', 'SCSS', 'Framer Motion'],
		link: 'https://example.com/project3',
	},
];

// Generate categories array
export const PORTFOLIO_CATEGORIES: string[] = ['All'];
PORTFOLIO_ITEMS.map(({ category }, _index) => {
	if (PORTFOLIO_CATEGORIES.indexOf(category) === -1) {
		PORTFOLIO_CATEGORIES.push(category);
	}
});
