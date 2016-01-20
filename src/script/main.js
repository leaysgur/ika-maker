'use strict';
import * as ReactDOM from 'react-dom';
import objectAssign from 'object-assign';
import App from './components/app.jsx';
import PartsModel from './models/parts';

const app = new App({
  renderer: (el) => {
    ReactDOM.render(el, document.getElementById('jsApp'));
  },

  initialState: {
    settings: {},
    showFixModal: false
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
      state.settings = PartsModel.getDefaultSettings();
      return objectAssign({}, state);
    });
  });
}, false);
