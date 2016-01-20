'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class Header extends Component {
  constructor() {
    super();
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    this.dispatch('show:fixModal');
  }

  render() {
    return (
      <div className="header">
        <a className="button button--negative ft-ika" href="./index.html">モドル</a>
        <h1 className="header__title title ft-ika">スーパーイカメーカー</h1>
        <a className="button ft-ika" onClick={this.onClickSave}>カンセイ</a>
      </div>
    );
  }
};

export default Header;
