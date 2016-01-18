'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsModel from '../models/parts';

export default class extends Component {
  render() {
    let settings = this.props.settings;
    // この重なり順が重要
    let imgPathArr = [
      PartsModel.getImgPath('bg', settings.bgType, settings.bgColor),

      PartsModel.getImgPath('body', settings.bodyColor),

      PartsModel.getImgPath('mouth', settings.mouthType),
      PartsModel.getImgPath('brows', settings.browsType, settings.browsColor),
      PartsModel.getImgPath('eyes', settings.eyesType, settings.eyesColor),

      PartsModel.getImgPath('clothes', settings.clothesType),

      PartsModel.getImgPath('hair', settings.hairColor),

      PartsModel.getImgPath('hat', settings.hatType),
    ];

    return (
      <div className="ika">
        {imgPathArr.map((src, idx) => {
          return (<img width="95%" height="auto" className="jsIkaImg" src={src} key={idx} />);
        })}
      </div>
    );
  }
};
