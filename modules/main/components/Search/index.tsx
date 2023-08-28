'use client';
import styles from './search.module.scss';
import { bebas } from '@/pages/fonts';

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { queryTypes, useQueryStates } from 'next-usequerystate';
import SelectCategory from '@/modules/main/components/SelectCategory';

const Search = () => {
  const [query, setQuery] = useQueryStates({
    search: queryTypes.string.withDefault(''),
    filters: queryTypes.array(queryTypes.string).withDefault([]),
  });
  const [input, setInput] = useState<string>(query.search);

  return (
    <div className={styles.form}>
      <SelectCategory />
      <input
        className={`${styles.input} ${bebas.className}`}
        type='text'
        placeholder={'I’m shopping for...'}
        onChange={e => setInput(e.target.value)}
        value={input}
        name={'search'}
      />
      <button
        className={styles.btn}
        onClick={() => setQuery({ search: input })}>
        <BiSearch />
      </button>
    </div>
  );
};

export default Search;