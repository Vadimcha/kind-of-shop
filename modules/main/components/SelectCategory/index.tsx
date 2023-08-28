'use client';
import { useCategories } from '@/hooks/useCategories';
import styles from './selectCategory.module.scss'
import React, { useState } from 'react';
import { queryTypes, useQueryStates } from 'next-usequerystate';

function ucFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function addEl(el: string, arr: string[]) {
  let Arr = arr;
  if(arr.includes(el)) {
    Arr = Arr.filter(item => item !== el);
  } else {
    Arr.push(el);
  }
  return Arr;
}

const SelectCategory = () => {
  const { data, isLoading, isSuccess, error } = useCategories();
  const [query, setQuery] = useQueryStates({
    search: queryTypes.string.withDefault(''),
    filters: queryTypes.array(queryTypes.string).withDefault([]),
  });
  const [activeContainer, setActiveContainer] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => setActiveContainer(!activeContainer)}
      >{ query.filters.length === 0 || query.filters.length === data?.length ? 'All' : query.filters.length }</button>
      <div className={`${styles.container} ${activeContainer ? styles.container__active : ''}`}>
        { isLoading ?
          <p>Loading data...</p> :
          isSuccess ?
            <>
              { data.map((category, index) =>
                <div key={index} className={styles.option}>
                  <input
                    type="checkbox"
                    name={category}
                    id={category}
                    className={styles.option_checkbox}
                    checked={query.filters.includes(category)}
                    onChange={(e) => setQuery({ filters: addEl(e.target.name, query.filters) })}
                  />
                  <label htmlFor={category} className={styles.option_label}>{ucFirst(category)}</label>
                </div>
              )}
            </> :
            String(error) }
      </div>
    </div>
  );
};

export default SelectCategory;