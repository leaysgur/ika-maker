'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  render() {
    return (
      <div className="tool-panel">
        <button onClick={() => this.dispatch('increment')}>increment</button>
      </div>
    );
  }
};
