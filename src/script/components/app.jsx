'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Flux} from 'flumpt';
import MyComponent from './my.jsx';
import Header from './header.jsx';
import Preview from './preview.jsx';

export default class extends Flux {
  subscribe() {
    this.on('increment', () => {
      this.update((state) => {
        state.settings.hatType = Math.random()*20|0;
        return state;
      });
    });
  }

  render(state) {
    return (
      <div>
        <Header />
        <Preview {...state}/>
        <MyComponent {...state}/>
      </div>
    );
  }
};
