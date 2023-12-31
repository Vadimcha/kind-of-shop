'use client';
import styles from './bottom.module.scss';
import { bebas } from '@/pages/fonts';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';

const Bottom = ({ productId, price }: { productId: number, price: number }) => {
  const router = useRouter();
  const { addToCart, inCart } = useUserStore();
  return (
    <div className={styles.wrapper}>
      <div className={styles.socialLinks}>
        <Link href={''} style={{width: 'fit-content'}}>
          <AiFillInstagram className={styles.icon} />
        </Link>
        <Link href={''} style={{width: 'fit-content'}}>
          <AiOutlineTwitter className={styles.icon} />
        </Link>
        <Link href={''} style={{width: 'fit-content'}}>
          <AiFillFacebook className={styles.icon} />
        </Link>
      </div>

      <div className={`${styles.container} ${bebas.className}`}>
        <div className={styles.arrows}>
          <Link
            href={`${process.env.NEXT_PUBLIC_URL}/product/${productId - 1}`}
            className={styles.arrows_block}
            onClick={() => router.push(`${process.env.NEXT_PUBLIC_URL}/product/${productId - 1}`)}
          >
            <p>Prev</p>
            <Image
              src={'/img/leftArrow.svg'}
              width={60}
              height={12}
              alt={'Left Arrow'}
            />
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_URL}/product/${productId + 1}`}
            className={styles.arrows_block}
            onClick={() => router.push(`${process.env.NEXT_PUBLIC_URL}/product/${productId + 1}`)}
          >
            <p>Next</p>
            <Image
              src={'/img/rightArrow.svg'}
              width={60}
              height={12}
              alt={'Right Arrow'}
            />
          </Link>
        </div>
        { inCart(productId) ?
          <button onClick={() => addToCart(productId)}>Remove from cart</button> :
          <button onClick={() => addToCart(productId)}>Add to cart — ${price}</button> }
      </div>
    </div>
  );
};

export default Bottom;