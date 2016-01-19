'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  render() {
    let {target, items, onSelect} = this.props;

    return (
      <div>
        <h3 className="parts-selector-header ft-ika">タイプをえらぶ</h3>
        <ul className="parts-selector">
        {items.map((item, idx) => {
          let typeId = item.id;

          return (
            <li className="parts-selector--item" key={idx}>
              <div
                onClick={() => { onSelect({target, typeId}); }}
                className={`
                  type-selector
                  type-selector--type-${target}
                `}
              >
                <img width="40" height="40" src={item.path || item.items[0].path} />
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
};
