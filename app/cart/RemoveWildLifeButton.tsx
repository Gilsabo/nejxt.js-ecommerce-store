'use client';

import { useState } from 'react';
import RemoveButtonFunction from './actions';
import styles from './removeWildLifeButton.module.css';

type Props = {
  wildLifeWithQuantityId: number;
};

export default function RemoveWildLifeButton(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <button
      className={styles.button}
      data-test-id={`cart-product-remove-${props.wildLifeWithQuantityId}`}
      onClick={async () => {
        console.log('1');
        setCount(count + 1);
        await RemoveButtonFunction(props.wildLifeWithQuantityId);
      }}
    >
      <span className={styles.remove}>Remove</span>
    </button>
  );
}
