'use strict';
import objectAssign from 'object-assign';
import PartsScheme from '../data/parts';
import DefaultPartsSettings from '../data/default-parts';
import {Promise} from 'es6-promise';

const TRANSPARENT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

export default {
  cache: {},

  getDefaultSettings() {
    return objectAssign({}, DefaultPartsSettings);
  },

  _getImgPath(partsName, type, color) {
    let parts = PartsScheme[partsName];
    let path = '';

    if (type && color) {
      path = parts.items.filter((item) => {
        return item.id === type;
      })[0].items.filter((item) => {
        return item.id === color;
      })[0].path;
    }
    else {
      path = parts.items.filter((item) => {
        return item.id === type;
      })[0].path;
    }

    if (partsName === 'hat' && type === 0) {
      path = TRANSPARENT;
    }

    return path;
  },

  getFixImgSrcBySettings(settings) {
    let cache = this.cache;
    let imgPathArr = [
      this._getImgPath('bg', settings.bgType, settings.bgColor),

      this._getImgPath('body', settings.bodyColor),

      this._getImgPath('mouth', settings.mouthType),
      this._getImgPath('brows', settings.browsType, settings.browsColor),
      this._getImgPath('eyes', settings.eyesType, settings.eyesColor),

      this._getImgPath('clothes', settings.clothesType),

      this._getImgPath('hair', settings.hairColor),

      this._getImgPath('hat', settings.hatType),
    ];

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 600;

    imgPathArr.forEach((path) => {
      // new Imageして呼ぶと、たまに間に合わないやつが出る
      // なのでキャッシュから確実に取る
      ctx.drawImage(cache[path], 0, 0, 600, 600);
    });

    let src = canvas.toDataURL();
    canvas = null;
    return src;
  },

  getTabItems() {
    let tabItems = Object.keys(PartsScheme).map((partsName) => {
      let parts = PartsScheme[partsName];
      return {
        id:    partsName,
        order: parts.tabOrder,
        group: parts.tabGroup,
        name:  parts.tabName
      };
    }).sort((a, b) => {
      return a.order > b.order ? 1 : -1;
    });

    return tabItems;
  },

  getAllImgPath() {
    let imgPathArr = [];
    Object.keys(PartsScheme).forEach((parts) => {
      PartsScheme[parts].items.forEach((item) => {
        if ('path' in item) {
          imgPathArr.push(item.path);
        } else {
          item.items.forEach((item) => {
            imgPathArr.push(item.path);
          });
        }
      });
    });

    return imgPathArr;
  },

  fetchAll() {
    let cache = this.cache;
    return Promise.all(this.getAllImgPath().map((path) => {
      return new Promise((resolve) => {
        let img = new Image();
        img.src = path;
        img.onload = () => {
          cache[path] = img;
          resolve();
        }
      });
    }));
  }
};
