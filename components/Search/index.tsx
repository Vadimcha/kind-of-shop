'use client';
import styles from './search.module.scss';
import { bebas } from '@/pages/fonts';

import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: values => {
      router.push(`${process.env.NEXT_PUBLIC_URL}/search/q=${values.search.toLowerCase()}`);
      // alert(JSON.stringify(values));
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <button className={styles.btn} type="button">All</button>
      <input
        className={`${styles.input} ${bebas.className}`}
        type='text'
        placeholder={'I’m shopping for...'}
        onChange={formik.handleChange}
        value={formik.values.search}
        name={'search'}
      />
      <button className={styles.btn} type="submit"><BiSearch /></button>
    </form>
  );
};

export default Search;