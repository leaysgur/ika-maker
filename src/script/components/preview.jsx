// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars

class Preview extends React.Component {
  props: {
    fixImgSrc: string,
  };
  handleTouchMove: () => void;

  handleTouchMove(ev: Event) {
    ev.preventDefault();
  }

  render() {
    const { fixImgSrc } = this.props;

    return (
      <div className="ika" onTouchMove={this.handleTouchMove}>
        <img width="95%" height="auto" className="ika--img" src={fixImgSrc} />
      </div>
    );
  }
};

module.exports = Preview;
