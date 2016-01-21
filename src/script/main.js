'use strict';
import * as ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import objectAssign from 'object-assign';
import App from './components/app.jsx';
import PartsModel from './models/parts';

injectTapEventPlugin();

const app = new App({
  renderer: (el) => {
    ReactDOM.render(el, document.getElementById('jsApp'));
  },

  initialState: {
    settings: {},
    showFixModal: false,
    fixImgSrc: ''
  },

  // TODO: あとでけす
  middlewares: [
    (state) => {
      console.info(state);
      return state
    }
  ]
});

global.addEventListener('load', () => {
  PartsModel.fetchAll().then(() => {
    app.update((state) => {
      state.settings  = PartsModel.getDefaultSettings();
      state.fixImgSrc = PartsModel.getFixImgSrcBySettings(state.settings);
      return objectAssign({}, state);
    });
  });
}, false);
