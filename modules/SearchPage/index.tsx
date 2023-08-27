'use client';
import React from 'react';
import { router } from 'next/client';
import Head from 'next/head';
import Header from '@/components/Header';
import styles from '@/modules/main/main.module.scss';
import Search from '@/components/Search';
import { Products } from '@/components/Products';

function getParams(str: string) {
  const splited = str.split('&');
  let params: {
    [key: string]: string,
  } = {};
  for(let i = 0; i < splited.length; i++) {
    let param = splited[i];
    params[param.split('=')[0]] = param.split('=')[1];
  }
  return params;
}

const SearchPage = () => {
  const search = router.query.query as string;
  const Params = getParams(search);
  return (
    <div>
      <Head>
        <title>Kind of shop | Search Page</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <Search />
        { Params['q'] ? <p className={styles.searchP}>Results for: {`${Params['q']}`}</p> : <></>}
        <Products params={Params} />
      </div>
    </div>
  );
};

export default SearchPage;