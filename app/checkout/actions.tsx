'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function clearCart() {
  const cartCookie = getCookie('cart');
  let cartWildLifeAnimals = parseJson(cartCookie);
  cartWildLifeAnimals = [];
  await cookies().set('cart', JSON.stringify(cartWildLifeAnimals));
}
