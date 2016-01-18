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
    Parts,
    count: 0
  },
  middlewares: [
    // logger
    //   it may get state before unwrap promise
    (state) => {
      console.info(state);
      return state
    }
  ]
});

app.update((state) => {
  return state;
});
