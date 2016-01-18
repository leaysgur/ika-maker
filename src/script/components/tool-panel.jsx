'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsScheme from '../data/parts';
import PartsModel from '../models/parts';

console.log(PartsScheme);

export default class extends Component {
  constructor() {
    super();

    this.state = {
      selectedTabIdx: 0
    };
  }

  onClickTab(idx) {
    this.setState({ selectedTabIdx: idx });
  }

  render() {
    let tabItems = PartsModel.getTabItems();
    console.log(tabItems);
    let {selectedTabIdx} = this.state;

    return (
      <div className="tool-panel">
        <ul className="tab-header ft-ika">
          {tabItems.map((item, idx) => {
            return (
              <li className={`tab-header__item tab-header__item--type-${item.group}`} onClick={() => { this.onClickTab(idx); }} key={item.order}>
                {item.name}
              </li>
            );
          })}
        </ul>
        <ul className="tab-body">
          {tabItems.map((item, idx) => {
            let isHidden = idx !== selectedTabIdx;
            return (
              <li className={`tab-body__item--type-${item.group} ${isHidden ? 'is-hidden' : ''}`} key={item.order}>
                {item.id}コンポーネント
                <button onClick={() => this.dispatch('increment')}>increment</button>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
};
