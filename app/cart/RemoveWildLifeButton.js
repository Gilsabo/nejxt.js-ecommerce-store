'use client';

import { useState } from 'react';
import RemoveButtonFunction from './actions';

export default function RemoveWildLifeButton(props) {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={async () => {
        console.log('1');
        setCount(count + 1);
        await RemoveButtonFunction(props.wildLifeWithQuantityId);
      }}
    >
      Remove
    </button>
  );
}
