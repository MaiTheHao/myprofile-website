import React from 'react';
import styles from './Button.module.scss';

export type ButtonBaseProps = {
  title: string;
  customClass?: string;
  onClick?: () => void;
  href?: string;
};

function BaseButton({ title, customClass, onClick, href = '#' }: ButtonBaseProps) {
  return href !== '#' ? (
    <a href={href} className={`${styles.container} ${customClass}`} onClick={onClick}>
      <span>{title}</span>
    </a>
  ) : (
    <button className={`${styles.container} ${customClass}`} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
}

export default BaseButton;
