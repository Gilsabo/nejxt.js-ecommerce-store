import { expect, test } from '@jest/globals';

test('subtotal function should calculate total price correctly', () => {
  // Sample wildLifeWithQuantities array
  const quantityPaintings = 4;
  const pricePainting = 60;

  const subTotal = (quantity: number, price: number) => {
    return quantity * price;
  };
  // Call the function to calculate total price

  // Assertion: totalPrice should be (2 * 50) + (3 * 30) = 190
  expect(subTotal(quantityPaintings, pricePainting)).toBe(240);
});
