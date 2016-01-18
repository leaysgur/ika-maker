'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  render() {
    return (
      <button onClick={() => this.dispatch('increment')}>type_color</button>
    );
  }
};
