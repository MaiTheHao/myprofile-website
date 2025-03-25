'use client';
import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import ProjectCard from '@/components/project_card/ProjectCard';
import {
  PORTFOLIO_PAGE_CONTENT,
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
} from '@/const/pages/portfolio';

type Props = {};

function Portfolio({}: Props) {
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);

  const handleFilterClick = (filter: string) => {
    if (filter === 'All') {
      // If "All" is clicked, reset to only "All"
      setActiveFilters(['All']);
    } else {
      // If any other filter is clicked
      setActiveFilters((prevFilters) => {
        // If "All" is currently selected, remove it
        const filtersWithoutAll = prevFilters.filter((f) => f !== 'All');

        // Check if the filter is already selected
        if (filtersWithoutAll.includes(filter)) {
          // Remove the filter if it's already selected
          const result = filtersWithoutAll.filter((f) => f !== filter);
          // If no filters left, default to "All"
          return result.length ? result : ['All'];
        } else {
          // Add the new filter
          return [...filtersWithoutAll, filter];
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
        <h1 className={styles.portfolio_title}>
          {PORTFOLIO_PAGE_CONTENT.title}
        </h1>
        <p className={styles.portfolio_description}>
          {PORTFOLIO_PAGE_CONTENT.description}
        </p>
      </div>

      <div className={styles.filter_section}>
        {PORTFOLIO_FILTERS.map((filter) => (
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
