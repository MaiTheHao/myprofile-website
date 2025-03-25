'use client';
import React from 'react';
import styles from './RootLoadingPage.module.scss';

type Props = {};

function RootLoadingPage({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}>
          <div className={styles.spinnerCircle}></div>
        </div>
        <h2 className={styles.text}>Loading...</h2>
      </div>
    </div>
  );
}

export default RootLoadingPage;
