import React from 'react';
import WebLayoutCmp from '../web_layout_cmp/WebLayoutCmp';
import styles from './WebFooter.module.scss';
import { SOCIAL_MEDIAS } from '@/const/web_layout';
import SocialMedias from '@/components/social_links/SocialMedias';

type Props = {};

function WebFooter({}: Props) {
  return (
    <WebLayoutCmp>
      <div className={`web_layout_comp_block ${styles.container}`}>
        <span className={styles.copyright}>
          © 2025 by Neo. All rights reserved. Powered and secured by Neo.
        </span>
        <SocialMedias SocialMedias={SOCIAL_MEDIAS} />
      </div>
    </WebLayoutCmp>
  );
}

export default WebFooter;
