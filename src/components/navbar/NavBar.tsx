'use client';
import { NavBarElement } from '@interfaces';
import styles from './NavBar.module.scss';
import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  pages: NavBarElement[];
};

function NavBar({ pages }: Props) {
  const currentPath = usePathname();
  return (
    <div className={`${styles.container}`}>
      {pages.map(({ title, path }, index) => (
        <Link
          href={path}
          key={index}
          className={clsx(styles.element, {
            [styles.element_activated]: path === currentPath,
            [styles.element_normal]: path !== currentPath,
          })}
        >
          <span>{title}</span>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
