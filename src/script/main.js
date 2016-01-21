'use strict';
import * as ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import objectAssign from 'object-assign';
import App from './components/app.jsx';
import PartsModel from './models/parts';
import {INDEX_URL} from './data/const';

// TOPから注意事項に同意してきた人にだけ見せたいので、
// そうじゃないものは一旦返す
if (
  location.hostname !== 'localhost' &&
  document.referrer !== INDEX_URL
) {
  location.replace(INDEX_URL);

} else {

injectTapEventPlugin();

const app = new App({
  renderer: (el) => {
    ReactDOM.render(el, document.getElementById('jsApp'));
  },

  initialState: {
    settings: {},
    showFixModal: false,
    fixImgSrc: ''
  }
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

}
