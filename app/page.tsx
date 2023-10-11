import Image from 'next/image';
import baby3 from '../public/images/baby-3.jpg';
import cat from '../public/images/cat-black-white.jpg';
import cowSeated from '../public/images/cow-seated.jpg';
import landscapeMoon from '../public/images/landscape-moon.jpg';
import wedding from '../public/images/wedding.jpg';
import styles from './page.module.css';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <a href="/landscapes" data-test-id="product-1">
        <Image src={landscapeMoon} alt="landscape" width={200} height={250} />
        <div>Landscapes</div>
      </a>
      <a href="/wildLife" data-test-id="product-1">
        <Image src={cowSeated} alt="cow" width={200} height={250} />
        <div>Wild Life</div>
      </a>
      <a href="/family" data-test-id="product-1">
        <Image src={baby3} alt="baby" width={200} height={250} />
        <div>Family</div>
      </a>
      <a href="/pets" data-test-id="product-1">
        <Image src={cat} alt="cat" width={200} height={250} />
        <div>Pets</div>
      </a>
      <a href="/events" data-test-id="product-1">
        <Image src={wedding} alt="wedding" width={200} height={250} />
        <div>Events</div>
      </a>
    </div>
  );
}
