'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

export default class extends Component {
  onClickSave() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 600;

    let imgs = document.getElementsByClassName('jsIkaImg');
    [].forEach.call(imgs, function(img) {
      ctx.drawImage(img, 0, 0, 600, 600);
    });

    let img = document.createElement('img');
    img.src = canvas.toDataURL();
    img.width = img.height = 300;

    document.body.appendChild(img);
  }

  render() {
    return (
      <div className="header">
        <a className="button button--negative ft-ika" href="./index.html">モドル</a>
        <h1 className="header__title title ft-ika">スーパーイカメーカー</h1>
        <a className="button ft-ika" onClick={this.onClickSave}>カンセイ</a>
      </div>
    );
  }
};
