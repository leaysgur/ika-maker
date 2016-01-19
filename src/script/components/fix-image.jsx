'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  getImgSrc() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 600;

    // TODO: これはありなのか
    let imgs = document.getElementsByClassName('jsIkaImg');
    [].forEach.call(imgs, function(img) {
      ctx.drawImage(img, 0, 0, 600, 600);
    });

    let src = canvas.toDataURL();
    canvas = null;
    return src;
  }

  shouldComponentUpdate(nextProps) {
    // Modalの表示のタイミングでだけ描画
    return nextProps.isShow;
  }

  render() {
    return (
      <img width="300" height="300" src={this.getImgSrc()} />
    );
  }
};
