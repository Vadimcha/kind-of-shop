'use client';
import styles from './products.module.scss';

import React from 'react';
import { IProduct } from '@/models/IProduct';
import { ProductCard } from '@/modules/main/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const Products = () => {
  const { data, isLoading, isSuccess, error } = useProducts();
  return (
    <>
      { isLoading ?
        <p>Loading data...</p> :
        isSuccess ?
          <div className={styles.products_grid}>
            { data.map((product : IProduct, index) => (
              <ProductCard key={index} {...product}/>
            )) }
          </div> :
          <p>{String(error)}</p>
      }

    </>
  );
};

export { Products };