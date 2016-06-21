'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');

class Preview extends Component {
  handleTouchMove(ev) {
    ev.preventDefault();
  }

  render() {
    let {fixImgSrc} = this.props;

    return (
      <div className="ika" onTouchMove={this.handleTouchMove}>
        <img width="95%" height="auto" className="ika--img" src={fixImgSrc} />
      </div>
    );
  }
};

Preview.propTypes = {
  fixImgSrc: React.PropTypes.string.isRequired
};

module.exports = Preview;
