import { createContext, useState } from 'react';

export const CounterContext = createContext();

function CounterProvider(props) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
