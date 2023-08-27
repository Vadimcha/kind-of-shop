'use client';
import React from 'react';
import { useRouter } from 'next/router';
import { useProduct } from '@/hooks/useProducts';
import Meta from '@/modules/ProductPage/components/Meta';
import Settings from '@/modules/ProductPage/components/Settings';
import Header from '@/components/Header';
import styles from './productPage.module.scss';
import Image from 'next/image';
import Bottom from '@/modules/ProductPage/components/Bottom';
import Head from 'next/head';

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.id as string;
  const { data: product, isLoading, isSuccess, error } = useProduct(productId);
  return (
    <>
      <Head>
        <title>Kind of shop | Product Page</title>
      </Head>
      <Header />
      { isLoading ?
        <p>Loading data...</p> :
        isSuccess ?
          <div>
            <div className={styles.container}>
              <Meta product={product} />
              <Image
                src={product?.image}
                width={600}
                height={750}
                alt={'Product Image'}
                className={styles.image}
              />
              <Settings product={product} />
            </div>
            <Bottom productId={Number(productId)} price={Number(product?.price)} />
          </div>:
          <p>{String(error)}</p>
      }
    </>
  );
};

export default ProductPage;