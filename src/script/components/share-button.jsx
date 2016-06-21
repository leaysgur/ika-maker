'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');
const { SHARE_URL, SHARE_TEXT } = require('../data/const');

class ShareButton extends Component {
  render() {
    let shareUrl = SHARE_URL + encodeURIComponent(SHARE_TEXT);

    return (
      <a className="button button--tweet ft-ika" target="_blank" href={shareUrl}>ツイートする</a>
    );
  }
};

module.exports = ShareButton;
