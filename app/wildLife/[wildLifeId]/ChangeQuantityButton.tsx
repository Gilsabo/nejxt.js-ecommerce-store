'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { changeQuantityButtonFunction } from './actions';

type Props = {
  wildLifeId: number;
};

export default function ChangeQuantityButton(props: Props) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  console.log('props', props);

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
        data-test-id="product-quantity"
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.currentTarget.value));
        }}
      />
      <button
        type="button"
        data-test-id="product-add-to-cart"
        onClick={() => {
          setQuantity(Number(quantity + 1));

          router.refresh();
        }}
      >
        +
      </button>
      <button
        data-test-id="product-add-to-cart"
        formAction={
          async () =>
            await changeQuantityButtonFunction(props.wildLifeId, quantity) // props.wildLife is the id taken from
        }
      >
        Add
      </button>
    </form>
  );
}
