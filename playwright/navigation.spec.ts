import test, { expect } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  expect(page).toHaveTitle(/Home/);
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/.*about/);

  await page.getByRole('link', { name: 'Events' }).click();
  await expect(page).toHaveURL(/.*events/);

  await page.getByRole('link', { name: 'Family' }).click();
  await expect(page).toHaveURL(/.*family/);

  await page.getByRole('link', { name: 'Landscapes' }).click();
  await expect(page).toHaveURL(/.*landscapes/);

  await page.getByRole('link', { name: 'Illustrations' }).click();
  await expect(page).toHaveURL(/.*illustrations/);

  await page.getByRole('link', { name: 'Pets' }).click();
  await expect(page).toHaveURL(/.*pets/);

  await page.getByRole('link', { name: 'Wild life' }).click();
  await expect(page).toHaveURL(/.*wildLife/);
});

test('Cart Test', async ({ page }) => {
  await page.goto('http://localhost:3000/wildLife/');
  await page.getByTestId('product-1').click();
  await page.getByTestId('product-quantity').click();
  await page.getByTestId('product-quantity').fill('3');
  await page.getByTestId('product-quantity').press('Enter');
});

// PLAYWRIGHT E2E: Checkout flow, payment page, thank you page
test('Checkout flow test', async ({ page }) => {
  await page.goto('http://localhost:3000/checkout');
  await page.getByTestId('checkout-first-name').click();
  await page.getByTestId('checkout-first-name').fill('Gil');
  await page.getByTestId('checkout-first-name').press('Tab');
  await page.getByTestId('checkout-last-name').fill('Sala');
  await page.getByTestId('checkout-last-name').press('Tab');
  await page.getByTestId('checkout-email').fill('gili@mail.com');
  await page.getByTestId('checkout-email').press('Tab');
  await page.getByTestId('checkout-address').fill('Karl Platz');
  await page.getByTestId('checkout-address').press('Tab');
  await page.getByTestId('checkout-city').fill('Wien');
  await page.getByTestId('checkout-city').press('Tab');
  await page.getByTestId('checkout-postal-code').fill('1090');
  await page.getByTestId('checkout-postal-code').press('Tab');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByTestId('checkout-country').press('Tab');
  await page.getByTestId('checkout-credit-card').fill('13423452345245');
  await page.getByTestId('checkout-credit-card').press('Tab');
  await page.getByTestId('checkout-expiration-date').fill('22/24');
  await page.getByTestId('checkout-expiration-date').press('Tab');
  await page.getByTestId('checkout-security-code').fill('754');
  await page.getByTestId('checkout-confirm-order').click();
});
