'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  constructor() {
    super();
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  onClickCancel(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    this.dispatch('hide:fixModal');
  }

  render() {
    let isShow = this.props.isShow;

    return (
      <div className={`
        fix-modal
        ${isShow ? 'is-show' : ''}
      `}>
        ここに完成したやつがでるよ！
        <div id="fix-img"></div>
        <a className="button button--negative ft-ika" onClick={this.onClickCancel}>キャンセル</a>

      </div>
    );
  }
};
