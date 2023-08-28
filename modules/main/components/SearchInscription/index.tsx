import React from 'react';
import styles from '@/modules/main/main.module.scss';

const SearchInscription = ({ params }: {
  params: {
    search: string,
    filters: string[],
    amount: number,
  }
}) => {
  const {search, filters, amount} = params;
  if(search !== '' && filters.length) {
    if(filters.length == 4) {
      return <p className={styles.searchP}>Results for query {`'${search}'`} - {amount}</p>;
    } else{
      return<p className={styles.searchP}>Results for query {`'${search}'`} in categories [{filters.map(item => `'${item}' `)}] - {amount}</p>;
    }
  } else if(search !== '') {
    return <p className={styles.searchP}>Results for query {`'${search}'`} - {amount}</p>;
  } else if(filters.length == 4) {
    return <></>;
  } else if(filters.length) {
    return <p className={styles.searchP}>Results in categories [{filters.map(item => `'${item}' `)}] - {amount}</p>;
  } else {
    return <></>;
  }
};

export default SearchInscription;