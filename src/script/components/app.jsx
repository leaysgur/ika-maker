'use strict';
import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Flux} from 'flumpt';
import Header from './header.jsx';
import Preview from './preview.jsx';
import ToolPanel from './tool-panel.jsx';

export default class extends Flux {
  subscribe() {
    this.on('set:color', ({target, colorId}) => {
      this.update((state) => {
        state.settings[`${target}Color`] = colorId;
        return state;
      });
    });

    this.on('set:type', ({target, typeId}) => {
      this.update((state) => {
        state.settings[`${target}Type`] = typeId;
        return state;
      });
    });

    this.on('set:type_color', ({target, typeId, colorId}) => {
      this.update((state) => {
        state.settings[`${target}Type`] = typeId;
        state.settings[`${target}Color`] = colorId;
        return state;
      });
    });

  }

  render(state) {
    return (
      <div>
        <Header />
        <Preview {...state}/>
        <ToolPanel {...state}/>
      </div>
    );
  }
};
