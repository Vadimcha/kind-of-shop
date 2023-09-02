import styles from './layout.module.scss';
import Image from 'next/image';
import { figtree } from '@/pages/fonts';
import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.wrapper} ${figtree.className}`}>
      <Link href={`${process.env.NEXT_PUBLIC_URL}`} className={styles.back}>
        <BsFillArrowLeftCircleFill className={styles.back_icon} />
        <p className={styles.back_text}>Back to main</p>
      </Link>
      <div className={styles.form}>
        {children}
      </div>
      <div className={styles.imgBlock} style={{
        background: '#000000 url(/img/AuthImg.png) center center/cover no-repeat',
      }}>
        <p className={styles.title}>We`re here to optimised your workflow</p>
        <p className={styles.dscr}>Your docs, projects, notes and reminders. Together.</p>
      </div>
    </div>
  );
};

export default AuthLayout;