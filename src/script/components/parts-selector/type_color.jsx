// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const TypeSelector = require('./type.jsx');
const ColorSelector = require('./color.jsx');

class TypeColorSelector extends React.Component {
  props: {
    appType:         string,
    target:          PartsName,
    parts:           Object,
    _setPartsType:   Function,
    _setPartsColor:  Function,
    selectedTypeId:  number,
    selectedColorId: number,
  };
  _setPartsType: () => void;
  _getColorItemsBySelectedTypeId: () => void;

  constructor() {
    super();

    this._setPartsType = this._setPartsType.bind(this);
  }

  render() {
    const {
      appType,
      target,
      parts,
      _setPartsColor,
      selectedTypeId, selectedColorId,
    } = this.props;
    const colorItems = this._getColorItemsBySelectedTypeId(selectedTypeId);

    return (
      <div>
        <TypeSelector
          appType={appType}
          onSelect={this._setPartsType}
          target={target}
          items={parts.items}
          selectedTypeId={selectedTypeId}
        />
        <ColorSelector
          onSelect={_setPartsColor}
          target={target}
          COLORS={parts.COLORS}
          items={colorItems}
          selectedColorId={selectedColorId}
        />
      </div>
    );
  }

  _setPartsType({ target, typeId }: SetTypeAction) {
    const { _setPartsType } = this.props;
    _setPartsType({ target, typeId });
  }

  _getColorItemsBySelectedTypeId(typeId: number) {
    const { parts } = this.props;

    return parts.items.filter((item) => {
      return item.id === typeId;
    })[0].items;
  }
};

module.exports = TypeColorSelector;
