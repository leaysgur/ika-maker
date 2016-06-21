'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const {Component} = require('flumpt');

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
        <h1 className="header__title ft-ika">スーパーイカメーカー</h1>
        <a className="button ft-ika" onTouchTap={this.onClickSave}>カンセイ</a>
      </div>
    );
  }
};

module.exports = Header;
