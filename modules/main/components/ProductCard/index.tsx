import styles from './card.module.scss';

import React from 'react';
import { IProduct } from '@/models/IProduct';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = (product: IProduct) => {
  return (
    <Link href={''} className={styles.card}>
      <div className={styles.image}>
        <Image
          src={product.img}
          width={200}
          height={200}
          alt='Product Image'
        />
      </div>
      <div className={styles.meta}>
        <p className={styles.meta_title}>{product.name}</p>
        <p className={styles.meta_price}>{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;