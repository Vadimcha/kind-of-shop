'use client';
import styles from './card.module.scss';

import React from 'react';
import { IProduct } from '@/models/IProduct';
import Image from 'next/image';
import Link from 'next/link';

function sliceTitle(title: string) {
  const length = 20;
  return (
    title.length >= length ?
      `${title.slice(0, length)}..` :
      title
  );
}

const ProductCard = (product: IProduct) => {
  return (
    <Link href={`product/${product.id}`} className={styles.card}>
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