import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function arttir() {
    setCount(count + 1);
  }

  console.log('component render oldu!');

  function azalt() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={arttir}>Arttır</button>
      <b>{count}</b>
      <button onClick={azalt}>Azalt</button>
    </>
  );
}

export default Counter;
