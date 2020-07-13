import React, { useState, useEffect } from 'react';

const readFromLocalStorage = (key, init) => {
  const data = localStorage.getItem(key);
  return data ? parseInt(data) : init;
};

const writeToLocalStorage = (key, value) => {
  if (value === undefined) return;
  localStorage.setItem(key, value);
};
const Counter = ({ max, min, step }) => {
  const [counter, setCounter] = useState(readFromLocalStorage('counter', 0));

  const increment = () =>
    setCounter((counter) => (counter >= max ? counter : counter + step));
  const decrement = () =>
    setCounter((counter) => (counter <= min ? counter : counter - step));
  const reset = () => setCounter(() => 0);

  useEffect(() => {
    writeToLocalStorage('counter', counter);
    document.title = 'Counter : ' + counter;
  }, [counter]);
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
