import React from 'react';
import styles from './Portfolio.module.scss';
import ProjectCard from '@/components/project_card/ProjectCard';
import {
  PORTFOLIO_PAGE_CONTENT,
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
} from '@/const/pages/portfolio';

type Props = {};

function Portfolio({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.portfolio_header}>
        <h1 className={styles.portfolio_title}>
          {PORTFOLIO_PAGE_CONTENT.title}
        </h1>
        <p className={styles.portfolio_description}>
          {PORTFOLIO_PAGE_CONTENT.description}
        </p>
      </div>

      <div className={styles.filter_section}>
        {PORTFOLIO_FILTERS.map((filter) => (
          <button key={filter} className={styles.filter_button}>
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.portfolio_items}>
        {PORTFOLIO_ITEMS.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
