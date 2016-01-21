'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import {SHARE_URL, SHARE_TEXT} from '../data/const';

class ShareButton extends Component {
  render() {
    let shareUrl = SHARE_URL + encodeURIComponent(SHARE_TEXT);

    return (
      <a className="button button--tweet ft-ika" target="_blank" href={shareUrl}>ツイートする</a>
    );
  }
};

export default ShareButton;
