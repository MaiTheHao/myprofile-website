'use client'
import React from 'react';
import styles from './RootLoadingPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

type Props = {};

function RootLoadingPage({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}>
          <FontAwesomeIcon icon={faSpinner} />
        </div>
        <h2 className={styles.text}>Loading...</h2>
      </div>
    </div>
  );
}

export default RootLoadingPage;
