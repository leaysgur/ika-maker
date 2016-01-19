'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsScheme from '../data/parts';
import TypeSelector from './parts-selector/type.jsx';
import ColorSelector from './parts-selector/color.jsx';
import TypeColorSelector from './parts-selector/type_color.jsx';

export default class extends Component {
  setPartsType({ target, typeId }) {
    this.dispatch('set:type', {target, typeId});
  }

  setPartsColor({ target, colorId }) {
    this.dispatch('set:color', {target, colorId});
  }

  render() {
    let partsName = this.props.partsName;
    let parts = PartsScheme[partsName];

    return (
      <div>
        {parts.selectType === 'TYPE'       ? <TypeSelector
                                               onSelect={this.setPartsType.bind(this)}
                                               target={partsName}
                                               items={parts.items}
                                             /> : null}
        {parts.selectType === 'COLOR'      ? <ColorSelector
                                               onSelect={this.setPartsColor.bind(this)}
                                               target={partsName}
                                               COLORS={parts.COLORS}
                                               items={parts.items}
                                             /> : null}
        {parts.selectType === 'TYPE_COLOR' ? <TypeColorSelector
                                               target={partsName}
                                               parts={parts}
                                               _setPartsType={this.setPartsType.bind(this)}
                                               _setPartsColor={this.setPartsColor.bind(this)}
                                             /> : null}
      </div>
    );
  }
};
