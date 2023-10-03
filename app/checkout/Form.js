'use client';
import Link from 'next/link';

export default function Form() {
  return (
    <fom>
      <label type="text">
        First name <input data-test-id="checkout-first-name" required />
      </label>
      <label type="text">
        Last name <input data-test-id="checkout-last-name" required />
      </label>
      <label type="email">
        E-mail <input data-test-id="checkout-email" required />
      </label>
      <label type="adress">
        Adress <input data-test-id="checkout-address" required />
      </label>
      <label type="text">
        Adress <input data-test-id="checkout-address" required />
      </label>
      <label type="text">
        City <input data-test-id="checkout-city" required />
      </label>
      <label type="text">
        Postal code <input data-test-id="checkout-postal-code" required />
      </label>
      <label type="number">
        Postal code <input data-test-id="checkout-country" required />
      </label>
      <label type="number">
        Credit card <input data-test-id="checkout-credit-card" />
      </label>
      <label type="number">
        Expiration date <input data-test-id="checkout-credit-card" required />
      </label>
      <label type="number">
        Security code <input data-test-id="checkout-security-code" required />
      </label>
      <button data-test-id="checkout-confirm-order">
        <Link href="/thankyou">Confirm order</Link>
      </button>
    </fom>
  );
}
