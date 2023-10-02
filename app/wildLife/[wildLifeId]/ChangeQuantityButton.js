'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { changeQuantityButtonFunction } from './actions';

export default function ChangeQuantityButton(props) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  console.log('props', props);
  console.log(props.wildLife);
  return (
    <form>
      <button
        type="button"
        data-test-id="product-add-to-cart"
        onClick={() => {
          if (quantity === 0) {
            return;
          }
          setQuantity(quantity - 1);
          router.refresh();
        }}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.currentTarget.value);
        }}
      />
      <button
        type="button"
        data-test-id="product-add-to-cart"
        onClick={() => {
          setQuantity(quantity + 1);

          router.refresh();
        }}
      >
        +
      </button>
      <button
        formAction={
          async () =>
            await changeQuantityButtonFunction(props.wildLifeId, quantity) // props.wildLife is the id taken from
        }
      >
        Add
      </button>

      <div>{quantity}</div>
    </form>
  );
}
