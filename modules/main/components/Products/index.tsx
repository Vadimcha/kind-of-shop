'use client';
import styles from './products.module.scss';

import React from 'react';
import { IProduct } from '@/models/IProduct';
import { ProductCard } from '@/modules/main/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { queryTypes, useQueryStates } from 'next-usequerystate';
import SearchInscription from '@/modules/main/components/SearchInscription';

const Products = () => {
  const [query, useQuery] = useQueryStates({
    search: queryTypes.string.withDefault(''),
    filters: queryTypes.array(queryTypes.string).withDefault([]),
  });
  const { data: products, isLoading, isSuccess, error } = useProducts({
    search: query.search,
    filters: query.filters,
  });
  return (
    <>
      { isLoading ?
        <p>Loading data...</p> :
        isSuccess ?
          <>
            <SearchInscription params={{
              search: query.search,
              filters: query.filters,
              amount: (products ? products.length : 0),
            }}/>
            <div className={styles.products_grid}>
              { products?.map((product: IProduct, index) => (
                <ProductCard key={index} {...product}/>
              )) }
            </div>
          </> :
          <p>{String(error)}</p>
      }
    </>
  );
};

export { Products };