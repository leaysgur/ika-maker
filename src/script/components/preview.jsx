'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class Preview extends Component {
  handleTouchMove(ev) {
    ev.preventDefault();
  }

  render() {
    let {fixImgSrc} = this.props;

    return (
      <div className="ika" onTouchMove={this.handleTouchMove}>
        <img width="95%" height="auto" className="ika--parts" src={fixImgSrc} />
      </div>
    );
  }
};

Preview.propTypes = {
  fixImgSrc: React.PropTypes.string.isRequired
};

export default Preview;
