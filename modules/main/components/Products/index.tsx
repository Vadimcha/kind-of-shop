import styles from './products.module.scss';

import React from 'react';
import { DataProducts } from '@/fake-data/DataProducts';
import { IProduct } from '@/models/IProduct';
import ProductCard from '@/modules/main/components/ProductCard';

const Products = () => {
  return (
    <div className={styles.products_grid}>
      { DataProducts.map((product : IProduct, index) => (
        <ProductCard key={index} {...product}/>
      )) }
    </div>
  );
};

export default Products;