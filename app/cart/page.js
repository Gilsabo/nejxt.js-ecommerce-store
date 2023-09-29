import Image from 'next/image';
import { getWildLifeAnimals } from '../../database/wildLife';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function Cart() {
  const wildLifeCookie = getCookie('wildLifePaintings');
  console.log('wildlifecookie', wildLifeCookie);
  const wildLifeAnimals = getWildLifeAnimals();

  const wildLifeQuantities = !wildLifeCookie ? [] : parseJson(wildLifeCookie);

  console.log('wildLifequantitieees', wildLifeQuantities);

  const wildLifeWithQuantities = wildLifeAnimals
    .map((wildLifeAnimal) => {
      const matchingWithQuantityFromCookie = wildLifeQuantities.find(
        (wildLifeQuantity) => wildLifeAnimal.id === wildLifeQuantity.id,
      );
      return {
        ...wildLifeAnimal,
        quantity: matchingWithQuantityFromCookie?.quantity,
      };
    })
    .filter(
      (wildLifeWithQuantity) => wildLifeWithQuantity.quantity !== undefined,
    );
  console.log('asdfasdfasfddasfa', wildLifeWithQuantities);
  return (
    <>
      <div>Cart</div>
      {wildLifeWithQuantities.map((wildLifeWithQuantity) => {
        return (
          <div key={`div-${wildLifeWithQuantity}`}>
            <div>{wildLifeWithQuantity.name}</div>
            <Image
              src={`/images/${wildLifeWithQuantity.name}.jpg`}
              alt={wildLifeWithQuantity.name}
              width={350}
              height={400}
            />
          </div>
        );
      })}
    </>
  );
}
