'use strict';
import * as ReactDOM from 'react-dom';
import App from './components/app.jsx';
import Parts from './models/parts';

// Setup renderer
const app = new App({
  renderer: el => {
    ReactDOM.render(el, document.getElementById('jsApp'));
  },
  initialState: {
    count: 0
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
    return state;
  });
});
