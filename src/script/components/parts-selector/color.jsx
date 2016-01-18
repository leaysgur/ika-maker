'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  render() {
    let {target, parts} = this.props;

    return (
      <div>
        <h3 className="parts-selector-header ft-ika">イロをえらぶ</h3>
        <ul className="parts-selector">
        {parts.items.map((item, idx) => {
          let style = { backgroundColor: `#${parts.COLORS[item.id]}`};
          let colorId = item.id;
          return (
            <li className="parts-selector--item" key={idx}>
              <div
                onClick={() => this.dispatch('set:color', {target, colorId})}
                className="color-selector" style={style}
              ></div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
};
