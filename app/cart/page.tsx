import Image from 'next/image';
import Link from 'next/link';
import { getWildLifeAnimals } from '../../database/wildLife';
import { WildLifeAnimals } from '../../migrations/00000-createTableWildLife';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import RemoveWildLifeButton from './RemoveWildLifeButton';

export const metadata = {
  title: 'Shopping cart',
};

export default async function Cart() {
  const wildLifeCookie = getCookie('cart');
  console.log('wildlifecookie', wildLifeCookie);
  const wildLifeAnimals = await getWildLifeAnimals();

  const wildLifeQuantities = !wildLifeCookie ? [] : parseJson(wildLifeCookie);
  console.log(wildLifeQuantities);

  console.log('wildLifequantitieees', wildLifeQuantities);

  const wildLifeWithQuantities = wildLifeAnimals

    .map((wildLifeAnimal) => {
      const matchingWithQuantityFromCookie = wildLifeQuantities.find(
        (wildLifeQuantity: WildLifeAnimals) =>
          wildLifeAnimal.id === wildLifeQuantity.id,
      );
      return {
        ...wildLifeAnimal,
        quantity: matchingWithQuantityFromCookie?.quantity,
      };
    })
    .filter(
      (wildLifeWithQuantity) => wildLifeWithQuantity.quantity !== undefined,
    );

  const totalPrice = wildLifeWithQuantities.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    },
    0,
  );

  const subTotal = (quantity: number, price: number) => {
    return quantity * price;
  };
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
              {subTotal(
                wildLifeWithQuantity.quantity,
                wildLifeWithQuantity.price,
              )}
            </div>
            <RemoveWildLifeButton
              wildLifeWithQuantityId={wildLifeWithQuantity.id}
            />
            <button data-test-id="cart-checkout">
              <Link href="/checkout"> Check out button</Link>
            </button>
          </div>
        );
      })}
      {totalPrice ? (
        <div data-test-id="cart-total">Total price :{totalPrice}</div>
      ) : (
        <div>No painting in the shopping cart</div>
      )}
    </>
  );
}
