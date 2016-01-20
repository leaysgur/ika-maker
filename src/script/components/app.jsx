'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Flux} from 'flumpt';
import objectAssign from 'object-assign';
import Header from './header.jsx';
import Preview from './preview.jsx';
import ToolPanel from './tool-panel.jsx';
import FixModal from './fix-modal.jsx';

export default class extends Flux {
  subscribe() {
    this.on('set:color', ({target, colorId}) => {
      this.update((state) => {
        state.settings[`${target}Color`] = colorId;
        return objectAssign({}, state);
      });
    });

    this.on('set:type', ({target, typeId}) => {
      this.update((state) => {
        state.settings[`${target}Type`] = typeId;
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
        <Preview settings={state.settings} />
        <ToolPanel {...state} />
        <FixModal isShow={state.showFixModal} />
      </div>
    );
  }
};
