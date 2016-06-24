// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');
const PartsModel = require('../models/parts');
const TypeSelector = require('./parts-selector/type.jsx');
const ColorSelector = require('./parts-selector/color.jsx');
const TypeColorSelector = require('./parts-selector/type_color.jsx');

class PartsSelector extends Component {
  props: {
    partsName: PartsName,
    settings:  Parts,
  };
  appType: string;
  setPartsType: () => void;
  setPartsColor: () => void;


  constructor() {
    super();

    this.appType = PartsModel.getAppType();
    this.setPartsType  = this.setPartsType.bind(this);
    this.setPartsColor = this.setPartsColor.bind(this);
  }

  setPartsType({ target, typeId }: SetTypeAction) {
    this.dispatch('set:type', {target, typeId});
  }

  setPartsColor({ target, colorId }: SetColorAction) {
    this.dispatch('set:color', {target, colorId});
  }

  render() {
    const {
      partsName,
      settings,
    } = this.props;
    const parts = PartsModel.getParts(partsName);
    const selectedTypeId: number  = settings[`${partsName}Type`];
    const selectedColorId: number = settings[`${partsName}Color`];

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

    return null;
  }
};

module.exports = PartsSelector;
