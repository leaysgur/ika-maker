'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class FixImage extends Component {
  handleTouchMove(ev) {
    ev.preventDefault();
  }

  shouldComponentUpdate(nextProps) {
    // Modalの表示のタイミングでだけ描画
    return nextProps.isShow;
  }

  render() {
    let {fixImgSrc} = this.props;
    return (
      <img width="300" height="300" src={fixImgSrc} onTouchMove={this.handleTouchMove} />
    );
  }
};

FixImage.propTypes = {
  isShow:    React.PropTypes.bool.isRequired,
  fixImgSrc: React.PropTypes.string.isRequired
};

export default FixImage;
