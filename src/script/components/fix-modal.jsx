'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import FixImage from './fix-image.jsx';
import ShareButton from './share-button.jsx';

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
    let {isShow} = this.props;

    return (
      <div className={`
        fix-modal
        ${isShow ? 'is-show' : ''}
      `}>
        <FixImage isShow={isShow} />
        <div className="button-wrap">
          <ShareButton />
          <a className="button button--negative ft-ika" onClick={this.onClickCancel}>てなおしする</a>
        </div>

      </div>
    );
  }
};
