import React from 'react';
import styles from './Portfolio.module.scss';
import ProjectCard from '@/components/project_card/ProjectCard';
import { ProjectCard as ProjectCardInterface } from '@/interfaces';

type Props = {};

function Portfolio({}: Props) {
  // Sample portfolio data - replace with actual data
  const portfolioItems: ProjectCardInterface[] = [
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
  ];

  return (
    <div className={styles.container}>
      <div className={styles.portfolio_header}>
        <h1 className={styles.portfolio_title}>My Portfolio</h1>
        <p className={styles.portfolio_description}>
          Showcasing my recent projects and works. Each project represents my
          skills, problem-solving abilities, and passion for creating impactful
          solutions.
        </p>
      </div>

      <div className={styles.filter_section}>
        <button className={styles.filter_button}>All</button>
        <button className={styles.filter_button}>Web Development</button>
        <button className={styles.filter_button}>App Development</button>
        <button className={styles.filter_button}>Design</button>
      </div>

      <div className={styles.portfolio_items}>
        {portfolioItems.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
