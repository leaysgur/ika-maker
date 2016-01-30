'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsModel from '../models/parts';
import TypeSelector from './parts-selector/type.jsx';
import ColorSelector from './parts-selector/color.jsx';
import TypeColorSelector from './parts-selector/type_color.jsx';

class PartsSelector extends Component {
  constructor() {
    super();
    this.appType = PartsModel.getAppType();
    this.setPartsType  = this.setPartsType.bind(this);
    this.setPartsColor = this.setPartsColor.bind(this);
  }

  setPartsType({ target, typeId }) {
    this.dispatch('set:type', {target, typeId});
  }

  setPartsColor({ target, colorId }) {
    this.dispatch('set:color', {target, colorId});
  }

  render() {
    let {partsName, settings} = this.props;
    let parts = PartsModel.getParts(partsName);
    let selectedTypeId  = settings[`${partsName}Type`];
    let selectedColorId = settings[`${partsName}Color`];

    if (parts.selectType === 'TYPE') {
      return <TypeSelector
               appType={this.appType}
               onSelect={this.setPartsType}
               target={partsName}
               items={parts.items}
               selectedTypeId={selectedTypeId}
             />;
    }
    if (parts.selectType === 'COLOR') {
      return <ColorSelector
               onSelect={this.setPartsColor}
               target={partsName}
               COLORS={parts.COLORS}
               items={parts.items}
               selectedColorId={selectedColorId}
             />;
    }
    if (parts.selectType === 'TYPE_COLOR') {
      return <TypeColorSelector
               appType={this.appType}
               target={partsName}
               parts={parts}
               selectedTypeId={selectedTypeId}
               selectedColorId={selectedColorId}
               _setPartsType={this.setPartsType}
               _setPartsColor={this.setPartsColor}
             />;
    }
  }
};

PartsSelector.propTypes = {
  partsName: React.PropTypes.string.isRequired,
  settings:  React.PropTypes.object.isRequired
};

export default PartsSelector;
