import { expect, test } from '@jest/globals';

type QuantityCookie = {
  id: number;
  quantity: number;
};

const quantity = 3;
const wildLifeId = 4;

const updateQuantity = (
  quantityCookie: QuantityCookie[],
  id: number,
  quant: number,
): QuantityCookie[] => {
  const existingCookie = quantityCookie.find((cookie) => cookie.id === id);

  if (existingCookie) {
    // Case B: cookie is defined and fruit id already exists
    existingCookie.quantity += quant;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist
    quantityCookie.push({
      id: wildLifeId,
      quantity: quantity,
    });
  }

  return quantityCookie;
};

test('subtotal function should calculate total price correctly', () => {
  const wildLifeQuantities: QuantityCookie[] = [{ id: 4, quantity: 5 }];
  const updatedQuantities = updateQuantity(
    wildLifeQuantities,
    wildLifeId,
    quantity,
  );

  // Assertion: updatedQuantities should be [{ id: 4, quantity: 8 }]
  expect(updatedQuantities).toEqual([{ id: 4, quantity: 8 }]);
});
