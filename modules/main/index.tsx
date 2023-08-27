import styles from './main.module.scss';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Head from 'next/head';
import Search from '@/components/Search';
import { Products } from '@/components/Products';
import Image from 'next/image';

const Main = () => {
  return (
    <div>
      <Head>
        <title>Kind of shop | Main Page</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <Search />
        <Products />
      </div>
    </div>
  );
};

export { Main };