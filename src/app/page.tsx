import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/assets/scss/base.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <span>1</span>
    </main>
  );
}
