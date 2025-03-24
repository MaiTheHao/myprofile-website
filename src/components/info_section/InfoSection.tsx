import React from 'react';
import styles from './InfoSection.module.scss';

type InfoSectionProps = {
  title: string;
  items: string[];
};

function InfoSection({ title, items }: InfoSectionProps) {
  return (
    <div className={styles.info_section}>
      <div className={styles.section_title}>{title}</div>
      <ul className={styles.section_content}>
        {items.map((item, index) => (
          <li key={`${title}-item-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default InfoSection;
