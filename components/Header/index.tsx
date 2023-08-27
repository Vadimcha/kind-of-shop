import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { INavLink, navLinks } from '@/components/Header/links';

import styles from './header.module.scss';
import { bebas } from '@/pages/fonts';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}img/logo.svg`}
          width={100}
          height={35}
          alt='Logo'
          style={{ pointerEvents: 'none' }}
        />
      </Link>
      <ul className={styles.nav}>
        { navLinks.map((link: INavLink, id) =>
          <li key={id}>
            <Link href={link.href} className={bebas.className}>{link.title}</Link>
          </li>
        ) }
      </ul>
      <div>
        <BiShoppingBag className={styles.icon} />
        <CgProfile className={styles.icon} />
      </div>
    </header>
  );
};

export default Header;