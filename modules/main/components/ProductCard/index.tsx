'use client';
import styles from './card.module.scss';

import React from 'react';
import { IProduct } from '@/models/IProduct';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBag, BsBagDashFill } from 'react-icons/bs';
import { useUserStore } from '@/store/userStore';

function sliceTitle(title: string) {
  const length = 20;
  return (
    title.length >= length ?
      `${title.slice(0, length)}..` :
      title
  );
}

const ProductCard = (product: IProduct) => {
  const { addToFavourites, addToCart, inFavourites, inCart } = useUserStore();
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => addToFavourites(product.id)}
        className={`${styles.iconWrapper} ${styles.iconWrapper__favourites}`}
      >
        { inFavourites(product.id) ?
          <AiFillHeart className={`${styles.icon} ${styles.icon_like}`} /> :
          <AiOutlineHeart className={`${styles.icon} ${styles.icon_like}`} /> }
      </button>
      <button
        onClick={() => addToCart(product.id)}
        className={`${styles.iconWrapper} ${styles.iconWrapper__shopCart}`}
      >
        { inCart(product.id) ?
          <BsBagDashFill className={`${styles.icon} ${styles.icon_cart}`} /> :
          <BsBag className={`${styles.icon} ${styles.icon_cart}`} /> }
      </button>
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
    </div>
  );
};

export { ProductCard };