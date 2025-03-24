import React from 'react';
import WebLayoutCmp from '../web_layout_cmp/WebLayoutCmp';
import styles from './WebHeader.module.scss';
import NavBar from '@/components/navbar/NavBar';
import { PAGES } from '@/const/web_layout';

type Props = {};

function WebHeader({}: Props) {
  return (
    <WebLayoutCmp>
      <div className={`web_layout_comp_block ${styles.container}`}>
        <div className={styles.logo}>
          <span className={styles.logo_category}>Software Engineering</span>
          <span className={styles.logo_name}>MAI THE HAO - NEO</span>
          <span className={styles.logo_location}>
            Tan Uyen city, Binh Duong province
          </span>
        </div>
        <NavBar
          pages={PAGES}
        />
      </div>
    </WebLayoutCmp>
  );
}

export default WebHeader;
