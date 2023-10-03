'use client';
import Link from 'next/link';
import clearCart from './actions';

export default function ClearButton() {
  return (
    <Link href="/thankyou">
      <button onClick={() => clearCart()} data-test-id="checkout-confirm-order">
        Confirm order
      </button>
    </Link>
  );
}
