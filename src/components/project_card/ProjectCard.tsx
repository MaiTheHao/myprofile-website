import React from 'react';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { ProjectCard as ProjectCardInterface } from '@/interfaces';

export type ProjectCardProps = ProjectCardInterface;

function ProjectCard({
  title,
  category,
  imageUrl,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className={styles.portfolio_item}>
      <div className={styles.item_image}>
        <div className={styles.image_placeholder}>
          {imageUrl && (
            <Image alt={title} src={imageUrl} layout="fill" objectFit="cover" />
          )}
        </div>
      </div>
      <div className={styles.item_content}>
        <h3 className={styles.item_title}>{title}</h3>
        <p className={styles.item_category}>{category}</p>
        <p className={styles.item_description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech_tag}>
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.view_project}
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
