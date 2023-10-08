'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function RemoveButtonFunction(
  wildLifeWithQuantityId: number,
) {
  // 1. get the current cookie

  type WildLifeAnimalsInCart = {
    id: number;
    quantity: number;
  };
  const wildLifeCookie = getCookie('cart');
  console.log('id', wildLifeWithQuantityId);
  console.log('cookie', wildLifeCookie);

  const wildLifeAnimalsInCart = !wildLifeCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(wildLifeCookie);

  const wildLifeItemsRemoved = wildLifeAnimalsInCart.filter(
    // this is not really removing, is taking the one you do not click
    (wildLifeAnimalInCart: WildLifeAnimalsInCart) =>
      wildLifeAnimalInCart.id !== wildLifeWithQuantityId,
  );

  console.log('stays', wildLifeItemsRemoved);

  await cookies().set('cart', JSON.stringify(wildLifeItemsRemoved));
}
