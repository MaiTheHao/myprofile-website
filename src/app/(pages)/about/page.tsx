import React from 'react';
import styles from './About.module.scss';
import SocialMedias from '@/components/social_links/SocialMedias';
import { SOCIAL_MEDIAS } from '@/const/web_layout';
import { ABOUT_SECTIONS } from '@/const/pages/about';
import Image from 'next/image';
import InfoSection from '@/components/info_section/InfoSection';

async function page() {
  const { personalInfo, columns } = ABOUT_SECTIONS;

  return (
    <div className={styles.container}>
      <div className={styles.sumary_info}>
        <div className={styles.main_picture}>
          <Image
            alt="User Hightlight Picture"
            src="/imgs/About/Top_Section.png"
            width={600}
            height={350}
            priority
          />
        </div>
        <div className={styles.about_me}>
          <span className={styles.about_me_title}>About Me</span>
          <SocialMedias SocialMedias={SOCIAL_MEDIAS} />
          {personalInfo.map((item, index) => (
            <section key={`personal-info-${index}`}>
              <p>
                <span>{item.title}</span>
                {item.content}
              </p>
            </section>
          ))}
        </div>
      </div>

      <div className={styles.detail_info}>
        <div className={styles.left_column}>
          {columns.left.map((section, index) => (
            <InfoSection
              key={`left-section-${index}`}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <div className={styles.right_column}>
          {columns.right.map((section, index) => (
            <InfoSection
              key={`right-section-${index}`}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
