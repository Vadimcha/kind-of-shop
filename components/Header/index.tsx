import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';
import { INavLink, navLinks } from '@/components/Header/links';

import styles from './header.module.scss';
import { bebas } from '@/pages/fonts';
import { CgProfile } from 'react-icons/cg';
import { useUserStore } from '@/store/userStore';

const Header = () => {
  const { auth } = useUserStore();
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}img/logo.svg`}
          height={20}
          width={100}
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
      { auth ?
        <div>
          <button><CgProfile className={styles.icon} /></button>
          <button><BiShoppingBag className={styles.icon} /></button>
        </div> :
        <div>
          <Link href={`${process.env.NEXT_PUBLIC_URL}logIn`} className={styles.auth_btn}>Login</Link>
          <Link href={`${process.env.NEXT_PUBLIC_URL}signIn`} className={styles.auth_btn}>Register</Link>
        </div>
      }

    </header>
  );
};

export default Header;