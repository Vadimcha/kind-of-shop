import type { AppProps } from 'next/app';
import './reset.css';
import './global.scss';
import { poppins } from '@/pages/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return <div className={poppins.className}>
    <Component {...pageProps} />
  </div>;
}
