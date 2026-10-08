import { createContext } from 'react';

const CounterContext = createContext();

function CounterProvider() {
  return (
    <CounterContext.Provider
      value={{
        count: 0,
      }}
    ></CounterContext.Provider>
  );
}

export default CounterProvider;
