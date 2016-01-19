'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import TypeSelector from './type.jsx';
import ColorSelector from './color.jsx';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedTypeId: 1
    };
  }

  getColorItemsBySelectedTypeId(typeId) {
    let parts = this.props.parts;

    return parts.items.filter((item) => {
      return item.id === typeId;
    })[0].items;
  }

  setPartsType({ target, typeId }) {
    let {_setPartsType, _setPartsColor} = this.props;
    this.setState({ selectedTypeId: typeId });
    _setPartsType({target, typeId});

    // XXX: typeが変わると色が無い場合があるので先頭に戻す
    // 気になる場合は、無い場合だけ戻す処理を追加
    let colorId = this.getColorItemsBySelectedTypeId(typeId)[0].id;
    _setPartsColor({target, colorId});
  }

  render() {
    let {target, parts, _setPartsColor} = this.props;
    let colorItems = this.getColorItemsBySelectedTypeId(this.state.selectedTypeId);

    return (
      <div>
        <TypeSelector
          onSelect={this.setPartsType.bind(this)}
          target={target}
          items={parts.items}
        />
        <ColorSelector
          onSelect={_setPartsColor}
          target={target}
          COLORS={parts.COLORS}
          items={colorItems}
        />
      </div>
    );
  }
};
