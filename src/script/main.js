// @flow
'use strict';
const ReactDOM = require('react-dom');
const injectTapEventPlugin = require('react-tap-event-plugin');
const objectAssign = require('object-assign');
const App = require('./components/app.jsx');
const PartsModel = require('./models/parts');
const { INDEX_URL } = require('./data/const');

// TOPから注意事項に同意してきた人にだけ見せたいので、
// そうじゃないものは一旦返す
if (
  location.hostname !== 'localhost' &&
  document.referrer !== INDEX_URL
) {
  location.replace(INDEX_URL);
}

// okなら処理開始
injectTapEventPlugin();

global.addEventListener('error', () => {
  location.href = '/sorry.html';
}, false);

const appEl: HTMLElement = document.getElementById('jsApp');
const appType: string = appEl.getAttribute('data-app-type');

if (appType !== 'boy' && appType !== 'girl') {
  throw new Error(`Undefined appType: ${appType}`);
}

const app: App = new App({
  renderer: (el): void => {
    ReactDOM.render(el, appEl);
  }
});

global.addEventListener('load', (): void => {
  PartsModel
    .init(appType)
    .fetchAll()
    .then(() => {
      app.update((state: AppState): AppState => {
        state.settings  = PartsModel.getDefaultSettings();
        state.showFixModal = false;
        state.fixImgSrc = PartsModel.getFixImgSrcBySettings(state.settings);
        return objectAssign({}, state);
      });
    });
}, false);
