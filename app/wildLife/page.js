import Image from 'next/image';
import Link from 'next/link';
import { getWildLifeAnimals } from '../../database/wildLife';
import styles from './wildLifePage.module.css';

export const metadata = {
  title: 'Wild Life',
};

export default async function WildLife() {
  const wildLifeAnimals = await getWildLifeAnimals();
  console.log('data', wildLifeAnimals[0].size[0].small);
  return (
    <>
      <h1 className={styles.header}>Wild life</h1>
      <main className={styles.wildLifePaintings}>
        {wildLifeAnimals.map((animal) => {
          return (
            <div
              className={styles.picsContainer}
              key={`animal-div-${animal.id}`}
            >
              <Image
                src={`/images/${animal.name}.jpg`}
                width={200}
                height={300}
                alt={animal.name}
              />
              <div className={styles.titlePainting}>
                <Link
                  data-test-id={`product-${animal.id}`}
                  href={`/wildLife/${animal.id}`}
                >
                  {animal.name}
                </Link>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
