import Image from 'next/image';
import Link from 'next/link';
import { getWildLifeAnimals } from '../../database/wildLife';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveWildLifeButton from './RemoveWildLifeButton';

export default function Cart() {
  const wildLifeCookie = getCookie('wildLifePaintings');
  console.log('wildlifecookie', wildLifeCookie);
  const wildLifeAnimals = getWildLifeAnimals();

  const wildLifeQuantities = !wildLifeCookie ? [] : parseJson(wildLifeCookie);
  console.log(wildLifeQuantities);

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
          <div
            key={`div-${wildLifeWithQuantity}`}
            data-test-id={`cart-product-${wildLifeWithQuantity}`}
          >
            <div>{wildLifeWithQuantity.name}</div>
            <Image
              src={`/images/${wildLifeWithQuantity.name}.jpg`}
              alt={wildLifeWithQuantity.name}
              width={350}
              height={400}
            />
            <div
              className="quanityt"
              data-test-id={`cart-product-quantity-${wildLifeWithQuantity.id}`}
            >
              Quantity: {wildLifeWithQuantity.quantity}
            </div>
            <div>{wildLifeWithQuantity.price}</div>
            <div className="subtotal">
              subtotal:
              {wildLifeWithQuantity.quantity * wildLifeWithQuantity.price}
            </div>
            <RemoveWildLifeButton
              wildLifeWithQuantityId={wildLifeWithQuantity.id}
            />
            <div data-test-id="cart-total">Total price : {}</div>
            <button data-test-id="cart-checkout">
              <Link href="/checkout"> Check out button</Link>
            </button>
          </div>
        );
      })}
    </>
  );
}
