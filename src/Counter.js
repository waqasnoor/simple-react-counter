import React, { useState, useEffect } from 'react';

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const data = localStorage.getItem(key);
    return data ? parseInt(data) : initialState;
  };
  const [value, setValue] = useState(get());
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
};

const Counter = ({ max, min, step }) => {
  const [counter, setCounter] = useLocalStorage(0, 'counter');

  const increment = () =>
    setCounter((counter) => (counter >= max ? counter : counter + step));
  const decrement = () =>
    setCounter((counter) => (counter <= min ? counter : counter - step));
  const reset = () => setCounter(() => 0);

  return (
    <div className="Counter">
      <p className="count">{counter}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
