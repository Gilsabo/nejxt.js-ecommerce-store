import Image from 'next/image';
import Link from 'next/link';
import { getWildLifeAnimals } from '../../database/wildLife';

export const metadata = {
  title: 'Wild Life',
};

export default async function WildLife() {
  const wildLifeAnimals = await getWildLifeAnimals();
  console.log('data', wildLifeAnimals[0].size[0].small);
  return (
    <>
      <h1>Wild life</h1>
      <main>
        {wildLifeAnimals.map((animal) => {
          return (
            <div key={`animal-div-${animal.id}`}>
              <Image
                src={`/images/${animal.name}.jpg`}
                width={200}
                height={300}
                alt={animal.name}
              />
              <div>
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
