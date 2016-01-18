'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsModel from '../models/parts';

export default class PreviewComponent extends Component {
  render() {
    let settings = this.props.settings;

    return (
      <div className="ika">
        <img src={PartsModel.getImgPath('bg', settings.bgType, settings.bgColor)} width="95%" height="auto" />

        <img src={PartsModel.getImgPath('body', settings.bodyColor)} width="95%" height="auto" />

        <img src={PartsModel.getImgPath('mouth', settings.mouthType)} width="95%" height="auto" />
        <img src={PartsModel.getImgPath('brows', settings.browsType, settings.browsColor)} width="95%" height="auto" />
        <img src={PartsModel.getImgPath('eyes', settings.eyesType, settings.eyesColor)} width="95%" height="auto" />

        <img src={PartsModel.getImgPath('clothes', settings.clothesType)}  width="95%" height="auto" />

        <img src={PartsModel.getImgPath('hair', settings.hairColor)} width="95%" height="auto" />

        <img src={PartsModel.getImgPath('hat', settings.hatType)} width="95%" height="auto" />
      </div>
    );
  }
};
