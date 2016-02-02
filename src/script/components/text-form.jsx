'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class TextForm extends Component {
  constructor() {
    super();

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(ev) {
    let text = ev.target.value;
    let target = this.props.partsName;
    this.dispatch('set:text', {target, text});
  }

  render() {
    let {partsName, settings} = this.props;

    return (
      <div className="parts-selector">
        <h3 className="parts-selector-header ft-ika">テキストをにゅうりょく</h3>
        <div className="parts-selector-items">
          <input
            className="parts-selector-items--text"
            type="text" maxLength="10"
            value={settings[partsName]}
            onChange={this.onChangeInput}
            placeholder="入力は10文字まで"
          />
        </div>
        <p className="memo">
          ※一部の文字種にはイカしたフォントが当たりません
        </p>
      </div>
    );
  }
};

TextForm.propTypes = {
  settings:  React.PropTypes.object.isRequired,
  partsName: React.PropTypes.string.isRequired
};

export default TextForm;
