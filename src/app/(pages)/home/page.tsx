import React from 'react';
import styles from './Home.module.scss';
import Image from 'next/image';
import HighlightButton from '@/components/buttons/HighlightButton';
import { RECENT_ROLE, CAREER_GOAL, CTA_BUTTON } from '@/const/pages/home';

type Props = {};

function Home({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={'/imgs/HomePage/User_Avatar.png'}
          alt="User Avatar"
          quality={100}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className={styles.right}>
        <div className={styles.right_contents}>
          <section className={styles.content}>
            <span className={styles.content_title}>{RECENT_ROLE.title}</span>
            <p className={styles.content_detail}>{RECENT_ROLE.detail}</p>
          </section>
          <section className={styles.content}>
            <span className={styles.content_title}>{CAREER_GOAL.title}</span>
            <p className={styles.content_detail}>{CAREER_GOAL.detail}</p>
          </section>
        </div>
        <HighlightButton title={CTA_BUTTON.title} href={CTA_BUTTON.href} />
      </div>
    </div>
  );
}

export default Home;
