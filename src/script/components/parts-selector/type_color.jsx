'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import TypeSelector from './type.jsx';
import ColorSelector from './color.jsx';

class TypeColorSelector extends Component {
  constructor() {
    super();
    this.state = {
      selectedTypeId: 1
    };
    this.setPartsType = this.setPartsType.bind(this);
  }

  getColorItemsBySelectedTypeId(typeId) {
    let parts = this.props.parts;

    return parts.items.filter((item) => {
      return item.id === typeId;
    })[0].items;
  }

  setPartsType({ target, typeId }) {
    let {_setPartsType} = this.props;
    this.setState({ selectedTypeId: typeId });
    _setPartsType({target, typeId});
  }

  render() {
    let {target, parts, _setPartsColor, selectedTypeId, selectedColorId} = this.props;
    let colorItems = this.getColorItemsBySelectedTypeId(this.state.selectedTypeId);

    return (
      <div>
        <TypeSelector
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
  target:          React.PropTypes.string.isRequired,
  parts:           React.PropTypes.object.isRequired,
  _setPartsType:   React.PropTypes.func.isRequired,
  _setPartsColor:  React.PropTypes.func.isRequired,
  selectedTypeId:  React.PropTypes.number.isRequired,
  selectedColorId: React.PropTypes.number.isRequired
};

export default TypeColorSelector;
