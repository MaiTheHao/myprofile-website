'use client'
import React, { useState } from 'react';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { ProjectCard as ProjectCardInterface } from '@/interfaces';
import Link from 'next/link';

export type ProjectCardProps = ProjectCardInterface;

function ProjectCard({
  title,
  category,
  imageUrl,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.portfolio_item}>
      <div className={styles.item_image}>
        <div className={styles.image_placeholder}>
          {imageUrl && (
            <>
              {!imageLoaded && <div className={styles.image_skeleton}></div>}
              <Image
                alt={title}
                src={imageUrl}
                layout="fill"
                style={{ objectFit: 'cover' }}
                onLoad={() => setImageLoaded(true)}
                className={
                  imageLoaded ? styles.image_loaded : styles.image_loading
                }
              />
            </>
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
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.view_project}
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
