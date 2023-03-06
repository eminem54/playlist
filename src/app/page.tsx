import { Inter } from '@next/font/google';
import HomeTemplate from '@/components/template/Home/HomeTemplate';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <HomeTemplate />;
}
