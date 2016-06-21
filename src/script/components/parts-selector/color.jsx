'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');

class ColorSelector extends Component {
  render() {
    let {target, COLORS, items, onSelect, selectedColorId} = this.props;

    return (
      <div>
        <h3 className="parts-selector-header ft-ika">イロをえらぶ</h3>
        <ul className="parts-selector-items">
        {items.map((item, idx) => {
          let style = { backgroundColor: `#${COLORS[item.id]}`};
          let colorId = item.id;
          let isSelected = colorId === selectedColorId;
          return (
            <li className="parts-selector-items--item" key={idx}>
              <div
                onTouchTap={() => { onSelect({target, colorId}); }}
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

ColorSelector.propTypes = {
  target:          React.PropTypes.string.isRequired,
  COLORS:          React.PropTypes.object.isRequired,
  items:           React.PropTypes.array.isRequired,
  onSelect:        React.PropTypes.func.isRequired,
  selectedColorId: React.PropTypes.number.isRequired
};

module.exports = ColorSelector;
