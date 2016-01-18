'use strict';
import * as ReactDOM from 'react-dom';
import App from './components/app.jsx';
import Parts from './models/parts';

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

Parts.fetchAll().then(() => {
  app.update((state) => {
    state.settings = Parts.getDefaultSettings();
    return state;
  });
});
