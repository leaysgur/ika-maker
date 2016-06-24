//@ flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars

const ColorSelector: Function = ({
  target,
  COLORS,
  items,
  onSelect,
  selectedColorId,
}: {
  target:          PartsName,
  COLORS:          Object,
  items:           Object[],
  onSelect:        Function,
  selectedColorId: number,
}): React$Element => {
  return (
    <div>
      <h3 className="parts-selector-header ft-ika">イロをえらぶ</h3>
      <ul className="parts-selector-items">
      {items.map((item, idx): React$Element => {
        const style: CSSStyleDeclaration = { backgroundColor: `#${COLORS[item.id]}`};
        const colorId: number = item.id;
        const isSelected: boolean = colorId === selectedColorId;

        return (
          <li className="parts-selector-items--item" key={idx}>
            <div
              onTouchTap={(): void => { onSelect({ target, colorId }); }}
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
};

module.exports = ColorSelector;
