import { Inter } from '@next/font/google';
import styles from '@/assets/scss/base.scss';
import HomeTemplate from '@/components/template/home/HomeTemplate';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeTemplate />
    </main>
  );
}
