'use client';
import { NavBarElement } from '@interfaces';
import styles from './NavBar.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScreenSizeContext from '@/contexts/ScreenSizeContext/useScreenSizeContext';

type Props = {
  pages: NavBarElement[];
};

function NavBar({ pages }: Props) {
  const WrapperItemRef = useRef<HTMLUListElement>(null);
  const [isMinimize, setIsMinimize] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useScreenSizeContext();
  const currentPath = usePathname();

  useEffect(() => {
    if (width <= 900) setIsMinimize(true);
    else {
      setOpenMenu(false);
      setIsMinimize(false);
    }
  }, [width]);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        WrapperItemRef.current &&
        !WrapperItemRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`${styles.container}`}>
      {!isMinimize ? (
        pages.map(({ title, path }, index) => (
          <Link
            href={path}
            key={`${title}-index`}
            className={clsx(styles.element, {
              [styles.element_activated]: path === currentPath,
              [styles.element_normal]: path !== currentPath,
            })}
          >
            <span>{title}</span>
          </Link>
        ))
      ) : (
        <div className={styles.wrapper}>
          <FontAwesomeIcon icon={faBars} onClick={() => handleOpenMenu()} />
          <ul
            ref={WrapperItemRef}
            className={clsx(styles.wrapper_items, {
              [styles.wrapper_items_show]: openMenu,
            })}
          >
            {pages.map(({ title, path }, index) => (
              <li
                key={`minimize-${title}-${index}`}
                className={clsx({
                  [styles.wrapper_item_activated]: path === currentPath,
                })}
              >
                <Link
                  href={path}
                  key={`minimize-${title}-index`}
                  className={clsx(styles.wrapper_item, {})}
                >
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
          {openMenu && <div className={'blur_background'}></div>}
        </div>
      )}
    </div>
  );
}

export default NavBar;
