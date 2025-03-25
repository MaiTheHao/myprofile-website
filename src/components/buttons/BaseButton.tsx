import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

export type ButtonBaseProps = {
  title: string;
  customClass?: string;
  onClick?: () => void;
  href?: string;
};

function BaseButton({ title, customClass, onClick, href = '#' }: ButtonBaseProps) {
  return href !== '#' ? (
    <Link href={href} className={`${styles.container} ${customClass}`} onClick={onClick}>
      <span>{title}</span>
    </Link>
  ) : (
    <button className={`${styles.container} ${customClass}`} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
}

export default BaseButton;
