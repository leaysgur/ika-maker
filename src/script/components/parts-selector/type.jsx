'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class TypeSelector extends Component {
  render() {
    let {target, items, onSelect, selectedTypeId} = this.props;

    return (
      <div>
        <h3 className="parts-selector-header ft-ika">タイプをえらぶ</h3>
        <ul className="parts-selector">
        {items.map((item, idx) => {
          let typeId = item.id;
          // TypeColorの場合、Typeの階層ではパスがない
          let imgSrc = item.path || item.items[0].path;
          let isSelected = typeId === selectedTypeId;

          return (
            <li className="parts-selector--item" key={idx}>
              <div
                onClick={() => { onSelect({target, typeId}); }}
                className={`
                  type-selector
                  type-selector--type-${target}
                  ${isSelected ? 'is-selected' : ''}
                `}
              >
                <img width="40" height="40" src={imgSrc} />
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
};

TypeSelector.propTypes = {
  target:         React.PropTypes.string.isRequired,
  items:          React.PropTypes.array.isRequired,
  onSelect:       React.PropTypes.func.isRequired,
  selectedTypeId: React.PropTypes.number.isRequired
};

export default TypeSelector;
