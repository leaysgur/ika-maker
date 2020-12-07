// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars

const TypeSelector: Function = ({
  appType,
  target,
  items,
  onSelect,
  selectedTypeId,
}: {
  appType:        string,
  target:         PartsName,
  items:          Object[],
  onSelect:       Function,
  selectedTypeId: number,
}): React$Element => {
  return (
    <div className={`parts-selector parts-selector--app-${appType}`}>
      <h3 className="parts-selector-header ft-ika">タイプをえらぶ</h3>
      <ul className="parts-selector-items">
      {items.map((item, idx): React$Element => {
        const typeId: number = item.id;
        // TypeColorの場合、Typeの階層ではパスがない
        const imgSrc: string = item.path || item.items[0].path;
        const isSelected: boolean = typeId === selectedTypeId;

        return (
          <li className="parts-selector-items--item" key={idx}>
            <div
              onClick={(): void => { onSelect({ target, typeId }); }}
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
};

module.exports = TypeSelector;
