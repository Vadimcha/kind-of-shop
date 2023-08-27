import React from 'react';
import { IProduct } from '@/models/IProduct';
import styles from './meta.module.scss';
import { bebas } from '@/pages/fonts';
import Link from 'next/link';

const Meta = ({ product }: {product: IProduct}) => {
  return (
    <div className={styles.meta}>
      <p className={`${bebas.className} ${styles.category}`}>
        <Link href={''}>
          {product.category}
        </Link>
      </p>
      <h3 className={`${bebas.className} ${styles.title}`}>
        {product.title?.length >= 35 ? `${product.title.slice(0, 35)}...` : product.title}
      </h3>
      <p className={styles.description}>
        {product.description?.length >= 70 ? `${product.description.slice(0, 200)}...` : product.description}
      </p>
    </div>
  );
};

export default Meta;