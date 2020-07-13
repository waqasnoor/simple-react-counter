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

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter(type) {
    switch (type) {
      case 'increment':
        return this.setState(increment);
      case 'decrement':
        return this.setState(decrement);
      case 'reset':
        return this.setState(reset);
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
