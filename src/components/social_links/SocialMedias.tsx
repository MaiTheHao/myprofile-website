import React from 'react';
import styles from './SocialMedias.module.scss';
import { SocialMedia } from '@/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  SocialMedias: SocialMedia[];
};

const chooseSocialMediaStyleClass = (title: string) => {
  title = title.toLowerCase();
  title = title.trim();

  console.log(title);

  switch (title) {
    case 'facebook':
      return styles.facebook;
    case 'linkedin':
      return styles.linkedin;
    case 'github':
      return styles.github;
    case 'google':
      return styles.google;
    case 'twitter':
      return styles.twitter;
    default:
      return '';
  }
};

function SocialMedias({ SocialMedias }: Props) {
  return (
    <div className={styles.list}>
      {SocialMedias.map(({ title, Icon, url }, index) =>
        Icon ? (
          <Link
            href={url}
            className={`${styles.media} ${chooseSocialMediaStyleClass(title)}`}
            key={`social-link-${btoa(url)}`}
          >
            <Icon 
              width={16}
              height={16}
            />
          </Link>
        ) : null,
      )}
    </div>
  );
}

export default SocialMedias;
