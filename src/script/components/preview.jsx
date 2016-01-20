'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';
import PartsModel from '../models/parts';

class Preview extends Component {
  handleTouchMove(ev) {
    ev.preventDefault();
  }

  render() {
    let {settings} = this.props;
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
      <div className="ika" onTouchMove={this.handleTouchMove}>
        {imgPathArr.map((src, idx) => {
          return (<img width="95%" height="auto" className="ika--parts jsIkaImg" src={src} key={idx} />);
        })}
      </div>
    );
  }
};

Preview.propTypes = {
  settings: React.PropTypes.object.isRequired
};

export default Preview;
