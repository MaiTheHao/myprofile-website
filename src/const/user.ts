import {
  UserInfo,
  SocialMediaLinks,
  CareerInfo,
  PortfolioInfo,
} from '@/interfaces';

// User information
export const USER_INFO: UserInfo = {
  name: 'Mai The Hao',
  nickname: 'Neo',
  birth: new Date(2006, 12, 5),
  occupation: 'Software Engineer',
  location: {
    town: null,
    city: 'Tan Uyen',
    province: 'Binh Duong',
    country: 'Viet Nam',
  },
  personalInfo: [
    {
      title: 'Tech Aficionado:',
      content:
        "I'm a passionate tech enthusiast who loves exploring and diving deep into IT. My passion drives me forward with relentless curiosity and dedication.",
    },
    {
      title: 'Beyond tech:',
      content:
        "I'm also a sociable person and amateur pianist who enjoys collaborating and connecting with others.",
    },
    {
      title: 'Location:',
      content: `Tan Uyen city, Binh Duong province, Viet Nam`,
    },
  ],
};

// Social media links
export const SOCIAL_MEDIA: SocialMediaLinks = {
  facebook: 'https://www.facebook.com/obistack.bilo',
  github: 'https://github.com/MaiTheHao',
  google: 'anhchangnhanma167@gmail.com',
  twitter: 'https://x.com/FrogCodeFunX',
  linkedin: 'https://www.linkedin.com',
};

// Career information
export const CAREER_INFO: CareerInfo = {
  currentRole: {
    title: 'Recent Role',
    detail:
      'Software Engineering student at IUH, focused on programming and design. I build user-centric, innovative solutions.',
  },
  goal: {
    title: 'Career Goal',
    detail:
      'Become a versatile software engineer with expertise in front-end, back-end, database management, DevOps, and system design and analysis.',
  },
  experience: [
    'Started programming in high school with a school website project.',
    'Enhance skills via personal projects & competitions.',
  ],
  goals: [
    'Strive to become a well-rounded software engineer.',
    'Focus on building strong foundational knowledge.',
    'Learn and grow through personal projects and software design competitions.',
  ],
  skills: [
    'Proficient in JavaScript (React, Next, Nest, Express) and Python.',
    'Frontend development with React, Next.js, and UI/UX design principles.',
    'Software analysis & design using Notion, Draw.io, and Figma.',
    'Ability to work under pressure and meet tight deadlines.',
    'Quick learning and adaptability to new technologies.',
  ],
  hobbies: [
    'Enjoy exploring tech, reading docs, and gaming.',
    'Passionate about software design competitions & web monetization.',
    'Love music, play the piano, and enjoy drawing.',
    'Lead pianist in performing arts events.',
  ],
};

// Portfolio information
export const PORTFOLIO_INFO: PortfolioInfo = {
  projects: [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'Web Development',
      imageUrl: '/imgs/Default/Project.jpg',
      description:
        'A full-featured e-commerce platform with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com/project1',
    },
  {
      id: 2,
      title: 'Mobile Banking App',
      category: 'App Development',
      imageUrl: '/imgs/Default/Project.jpg',
      description: 'Secure banking application with biometric authentication',
      technologies: ['Flutter', 'Firebase', 'REST API'],
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
  ],
  categories: ['All', 'Web Development', 'App Development', 'Design'],
  pageContent: {
    title: 'My Portfolio',
    description:
      'Showcasing my recent projects and works. Each project represents my skills, problem-solving abilities, and passion for creating impactful solutions.',
  },
};
