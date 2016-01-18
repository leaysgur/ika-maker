'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  render() {
    let {target, parts} = this.props;

    return (
      <div>
        <h3 className="parts-selector-header ft-ika">タイプをえらぶ</h3>
        <ul className="parts-selector">
        {parts.items.map((item, idx) => {
          let typeId = item.id;

          return (
            <li className="parts-selector--item" key={idx}>
              <div
                onClick={() => this.dispatch('set:type', {target, typeId})}
                className={`
                  type-selector
                  type-selector--type-${target}
                `}
              >
                <img width="40" height="40" src={item.path} />
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
};
