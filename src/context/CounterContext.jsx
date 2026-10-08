import { createContext } from 'react';

export const CounterContext = createContext();

function CounterProvider(props) {
  return (
    <CounterContext.Provider
      value={{
        count: 0,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
