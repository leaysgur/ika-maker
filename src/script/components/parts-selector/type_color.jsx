'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');
const TypeSelector = require('./type.jsx');
const ColorSelector = require('./color.jsx');

class TypeColorSelector extends Component {
  constructor() {
    super();

    this.setPartsType = this.setPartsType.bind(this);
  }

  getColorItemsBySelectedTypeId(typeId) {
    let {parts} = this.props;

    return parts.items.filter((item) => {
      return item.id === typeId;
    })[0].items;
  }

  setPartsType({ target, typeId }) {
    let {_setPartsType} = this.props;
    _setPartsType({target, typeId});
  }

  render() {
    let {appType, target, parts, _setPartsColor, selectedTypeId, selectedColorId} = this.props;
    let colorItems = this.getColorItemsBySelectedTypeId(selectedTypeId);

    return (
      <div>
        <TypeSelector
          appType={appType}
          onSelect={this.setPartsType}
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
};

TypeColorSelector.propTypes = {
  appType:        React.PropTypes.string.isRequired,
  target:          React.PropTypes.string.isRequired,
  parts:           React.PropTypes.object.isRequired,
  _setPartsType:   React.PropTypes.func.isRequired,
  _setPartsColor:  React.PropTypes.func.isRequired,
  selectedTypeId:  React.PropTypes.number.isRequired,
  selectedColorId: React.PropTypes.number.isRequired
};

module.exports = TypeColorSelector;
