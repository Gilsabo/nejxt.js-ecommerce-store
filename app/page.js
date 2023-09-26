import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return <h1 className={styles.title}>home</h1>;
}
