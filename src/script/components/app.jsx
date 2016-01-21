'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Flux} from 'flumpt';
import objectAssign from 'object-assign';
import Header from './header.jsx';
import Preview from './preview.jsx';
import ToolPanel from './tool-panel.jsx';
import FixModal from './fix-modal.jsx';
import PartsModel from '../models/parts';

export default class extends Flux {
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
