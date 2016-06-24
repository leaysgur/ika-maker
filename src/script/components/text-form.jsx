// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');

class TextForm extends Component {
  props: {
    partsName: 'text',
    settings:  Parts,
  };
  onChangeInput: () => void;

  constructor() {
    super();

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(ev: Event) {
    if (ev.target instanceof HTMLInputElement) {
      const action: SetTextAction = {
        target: this.props.partsName,
        text:   ev.target.value
      };
      this.dispatch('set:text', action);
    }
  }

  render() {
    const {
      partsName,
      settings
    } = this.props;

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

module.exports = TextForm;
