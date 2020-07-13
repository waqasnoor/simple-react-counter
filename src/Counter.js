import React, { Component } from 'react';

const increment = (state, props) => {
  const { max, step } = props;
  const { counter } = state;
  if (counter >= max) return;
  return { ...state, counter: counter + step };
};
const decrement = (state, props) => {
  const { min, step } = props;
  const { counter } = state;
  if (counter <= min) return;
  return { ...state, counter: counter - step };
};
const reset = (state) => {
  return { ...state, counter: 0 };
};

const readFromLocalStorage = (key, init) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return init;
};

const writeToLocalStorage = (key, value) => {
  if (!value) return;
  localStorage.setItem(key, JSON.stringify(value));
};
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = readFromLocalStorage('state', { counter: 0 });
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter(type) {
    const updateLocalStorage = () => {
      writeToLocalStorage('state', this.state);
    };
    switch (type) {
      case 'increment':
        return this.setState(increment, updateLocalStorage);
      case 'decrement':
        return this.setState(decrement, updateLocalStorage);
      case 'reset':
        return this.setState(reset, updateLocalStorage);

      default:
        return;
    }
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="Counter">
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={() => this.updateCounter('increment')}>
            Increment
          </button>
          <button onClick={() => this.updateCounter('decrement')}>
            Decrement
          </button>
          <button onClick={() => this.updateCounter('reset')}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
