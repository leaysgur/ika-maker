'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  render() {
    let {target, COLORS, items, onSelect, selectedColorId} = this.props;

    return (
      <div>
        <h3 className="parts-selector-header ft-ika">イロをえらぶ</h3>
        <ul className="parts-selector">
        {items.map((item, idx) => {
          let style = { backgroundColor: `#${COLORS[item.id]}`};
          let colorId = item.id;
          let isSelected = colorId === selectedColorId;
          return (
            <li className="parts-selector--item" key={idx}>
              <div
                onClick={() => { onSelect({target, colorId}); }}
                className={`
                  color-selector
                  ${isSelected ? 'is-selected' : ''}
                `}
                style={style}
              ></div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
};