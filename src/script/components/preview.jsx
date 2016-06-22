// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');

class Preview extends Component {
  props: {
    fixImgSrc: string,
  };

  handleTouchMove(ev: Event): void {
    ev.preventDefault();
  }

  render(): React$Element {
    const { fixImgSrc } = this.props;

    return (
      <div className="ika" onTouchMove={this.handleTouchMove}>
        <img width="95%" height="auto" className="ika--img" src={fixImgSrc} />
      </div>
    );
  }
};

module.exports = Preview;
