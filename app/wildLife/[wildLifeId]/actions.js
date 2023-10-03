'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function changeQuantityButtonFunction(wildLifeId, quantity) {
  // 1. get the current cookie
  const wildLifeQuantityCookie = getCookie('cart');
  // 2. parse the cookie value

  // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined
  const wildLifeQuantities = !wildLifeQuantityCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(wildLifeQuantityCookie);

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const wildLifeQuantityToUpdate = wildLifeQuantities.find(
    (wildLifeQuantity) => {
      return wildLifeQuantity.id === wildLifeId;
    },
  );
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (wildLifeQuantityToUpdate) {
    wildLifeQuantityToUpdate.quantity += quantity;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    wildLifeQuantities.push({
      id: wildLifeId,
      quantity: quantity,
    });
  }

  // 4. we override the cookie
  await cookies().set('cart', JSON.stringify(wildLifeQuantities));
}
