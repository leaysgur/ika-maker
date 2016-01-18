'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsScheme from '../data/parts';
import TypeSelector from './parts-selector/type.jsx';
import ColorSelector from './parts-selector/color.jsx';
import TypeColorSelector from './parts-selector/type_color.jsx';

export default class extends Component {
  render() {
    let partsName = this.props.partsName;
    let parts = PartsScheme[partsName];

    return (
      <div>
        {parts.selectType === 'TYPE'       ? <TypeSelector target={partsName} parts={parts} />      : null}
        {parts.selectType === 'COLOR'      ? <ColorSelector target={partsName} parts={parts} />     : null}
        {parts.selectType === 'TYPE_COLOR' ? <TypeColorSelector target={partsName} parts={parts} /> : null}
      </div>
    );
  }
};
