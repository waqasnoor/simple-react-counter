import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  updateCounter = (counter) => {
    this.setState((state) => {
      return { ...state, counter };
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="Counter">
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={() => this.updateCounter(counter + 1)}>
            Increment
          </button>
          <button onClick={() => this.updateCounter(counter - 1)}>
            Decrement
          </button>
          <button onClick={() => this.updateCounter(0)}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
