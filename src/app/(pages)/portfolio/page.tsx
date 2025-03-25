'use client';
import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import ProjectCard from '@/components/project_card/ProjectCard';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '@/const/pages/portfolio';
import { isEqualStr, notEqualStr } from '@/utils';

type Props = {};

function Portfolio({}: Props) {
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);

  const handleFilterClick = (filter: string) => {
    if (isEqualStr(filter, 'All')) {
      setActiveFilters(['All']);
    } else {
      setActiveFilters((prevFilters) => {
        const filtersWithoutAll = prevFilters.filter((f) =>
          notEqualStr(f, 'All'),
        );
        if (filtersWithoutAll.includes(filter)) {
          const result = filtersWithoutAll.filter((f) =>
            notEqualStr(f, filter),
          );
          return result.length ? result : ['All'];
        } else {
          const newFilters = [...filtersWithoutAll, filter];
          return newFilters.length === PORTFOLIO_CATEGORIES.length - 1
            ? ['All']
            : newFilters;
        }
      });
    }
  };

  const filteredItems = activeFilters.includes('All')
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => activeFilters.includes(item.category));

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
        {PORTFOLIO_CATEGORIES.map((filter) => (
          <button
            key={filter}
            className={`${styles.filter_button} ${
              activeFilters.includes(filter) ? styles.active : ''
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.portfolio_items}>
        {filteredItems.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
