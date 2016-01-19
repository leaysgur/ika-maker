'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import FixImage from './fix-image.jsx';

export default class extends Component {
  constructor() {
    super();
    this.onClickShare  = this.onClickShare.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  onClickShare(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    alert('TODO!');
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
        <h1 className="ft-ika">できあがり！</h1>
        <FixImage isShow={isShow} />
        <div className="button-wrap">
          <a className="button button--tweet ft-ika" onClick={this.onClickShare}>ツイートする</a>
          <a className="button button--negative ft-ika" onClick={this.onClickCancel}>てなおしする</a>
        </div>

      </div>
    );
  }
};
