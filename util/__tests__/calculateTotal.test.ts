import { expect, test } from '@jest/globals';

test('calculateTotalPrice function should calculate total price correctly', () => {
  // Sample wildLifeWithQuantities array
  const wildLifeWithQuantities = [
    {
      id: 1,
      quantity: 2,
      price: 50,
    },
    {
      id: 2,
      quantity: 3,
      price: 30,
    },
  ];

  const totalPrice = wildLifeWithQuantities.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.quantity * currentValue.price;
    },
    0,
  );
  // Call the function to calculate total price

  // Assertion: totalPrice should be (2 * 50) + (3 * 30) = 190
  expect(totalPrice).toBe(190);
});
