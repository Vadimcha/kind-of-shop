'use client';
import styles from './card.module.scss';

import React from 'react';
import { IProduct } from '@/models/IProduct';
import Image from 'next/image';
import Link from 'next/link';

function sliceTitle(title: string) {
  return (
    title.length > 23 ?
      `${title.slice(0, 24)}...` :
      title
  );
}

const ProductCard = (product: IProduct) => {
  return (
    <Link href={''} className={styles.card}>
      <div className={styles.image_wrap}>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt='Product Image'
          className={styles.image}
        />
      </div>
      <div className={styles.meta}>
        <p className={styles.meta_title}>{sliceTitle(product.title)}</p>
        <p className={styles.meta_price}>{`$${product.price}`}</p>
      </div>
    </Link>
  );
};

export { ProductCard };