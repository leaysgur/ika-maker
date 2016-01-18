'use strict';
import * as ReactDOM from 'react-dom';
import App from './components/app.jsx';
import PartsModel from './models/parts';

const app = new App({
  renderer: (el) => {
    ReactDOM.render(el, document.getElementById('jsApp'));
  },

  middlewares: [
    (state) => {
      console.info(state);
      return state
    }
  ]
});

PartsModel.fetchAll().then(() => {
  app.update((state) => {
    state.settings = PartsModel.getDefaultSettings();
    return state;
  });
});
