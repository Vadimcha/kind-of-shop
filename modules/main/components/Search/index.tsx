import styles from './search.module.scss';
import { bebas } from '@/pages/fonts';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <form className={styles.form}>
      <button className={styles.btn} type="button">All</button>
      <input className={`${styles.input} ${bebas.className}`} type='text' placeholder={'I’m shopping for...'} />
      <button className={styles.btn} type="submit"><BiSearch /></button>
    </form>
  );
};

export default Search;