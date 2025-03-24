import React from 'react';
import styles from './NotFound.module.scss';
import HighlightButton from '@/components/buttons/HighlightButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

type Props = {};

function NotFound({}: Props) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.icon}`}>
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </div>
      <div className={`${styles.detail}`}>
        <span className={styles.title}>Oops! This Page Can’t Be Found</span>
        <span className={styles.description}>
          The page you’re looking for might have been moved, deleted, or doesn’t
          exist.
        </span>
      </div>
      <HighlightButton title="Return To Home Page" href="/" />
    </div>
  );
}

export default NotFound;
