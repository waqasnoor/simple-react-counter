import React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';

import './styles.scss';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter max={20} min={-20} step={2} />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
