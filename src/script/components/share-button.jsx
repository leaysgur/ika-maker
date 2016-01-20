'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class ShareButton extends Component {
  render() {
    // XXX: locationってココでさわっていいのか
    let shareText = 'うちのコかわいいでしょ？\n\n' + location.origin + ' #スーパーイカメーカー';
    let shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText);

    return (
      <a className="button button--tweet ft-ika" target="_blank" href={shareUrl}>ツイートする</a>
    );
  }
};

export default ShareButton;
