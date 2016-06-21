'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Flux } = require('flumpt');
const objectAssign = require('object-assign');
const Header = require('./header.jsx');
const Preview = require('./preview.jsx');
const ToolPanel = require('./tool-panel.jsx');
const FixModal = require('./fix-modal.jsx');
const PartsModel = require('../models/parts');

module.exports =  class extends Flux {
  subscribe() {
    this.on('set:color', ({target, colorId}) => {
      this.update((state) => {
        state.settings[`${target}Color`] = colorId;
        state.fixImgSrc = PartsModel.getFixImgSrcBySettings(state.settings);
        return objectAssign({}, state);
      });
    });

    this.on('set:type', ({target, typeId}) => {
      this.update((state) => {
        state.settings[`${target}Type`] = typeId;
        state.fixImgSrc = PartsModel.getFixImgSrcBySettings(state.settings);
        return objectAssign({}, state);
      });
    });

    this.on('set:text', ({target, text}) => {
      this.update((state) => {
        state.settings[`${target}`] = text;
        state.fixImgSrc = PartsModel.getFixImgSrcBySettings(state.settings);
        return objectAssign({}, state);
      });
    });

    this.on('show:fixModal', () => {
      this.update((state) => {
        state.showFixModal = true;
        return objectAssign({}, state);
      });
    });

    this.on('hide:fixModal', () => {
      this.update((state) => {
        state.showFixModal = false;
        return objectAssign({}, state);
      });
    });
  }

  render(state) {
    return (
      <div>
        <Header />
        <Preview fixImgSrc={state.fixImgSrc} />
        <ToolPanel settings={state.settings} />
        <FixModal fixImgSrc={state.fixImgSrc} isShow={state.showFixModal} />
      </div>
    );
  }
};
