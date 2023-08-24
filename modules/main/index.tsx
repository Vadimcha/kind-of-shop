import styles from './main.module.scss';

import React from 'react';
import Header from '@/components/Header';
import Head from 'next/head';
import Search from '@/modules/main/components/Search';
import Products from '@/modules/main/components/Products';

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