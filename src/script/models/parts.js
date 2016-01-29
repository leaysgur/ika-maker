'use strict';
import objectAssign from 'object-assign';
import {Promise} from 'es6-promise';
import PartsScheme from '../data/parts';
import {DEFAULT_PARTS_SETTINGS, IMG_SIZE} from '../data/const';

class PartsModel {
  constructor() {
    this.cache = {};
  }

  getDefaultSettings() {
    return objectAssign({}, DEFAULT_PARTS_SETTINGS);
  }

  _getImgRef(partsName, type, color) {
    let parts = PartsScheme[partsName];
    let path = '';
    let types = [], colors = [];

    if (type && color) {
      types = parts.items.filter((item) => {
        return item.id === type;
      })[0].items;
      colors = types.filter((item) => {
        return item.id === color;
      });

      // その色は、他のタイプには存在しない場合がある
      // その時は、先頭のものに戻す
      if (colors.length !== 0) {
        path = colors[0].path;
      } else {
        path = types[0].path;
      }
    }
    else {
      path = parts.items.filter((item) => {
        return item.id === type;
      })[0].path;
    }

    if (partsName === 'hat' && type === 0) {
      return null;
    }

    return this.cache[path];
  }

  getFixImgSrcBySettings(settings) {
    let imgRefArr = [
      this._getImgRef('bg', settings.bgType, settings.bgColor),

      this._getImgRef('body', settings.bodyColor),

      this._getImgRef('mouth', settings.mouthType),
      this._getImgRef('brows', settings.browsType, settings.browsColor),
      this._getImgRef('eyes', settings.eyesType, settings.eyesColor),

      this._getImgRef('clothes', settings.clothesType),

      this._getImgRef('hair', settings.hairType, settings.hairColor),

      this._getImgRef('hat', settings.hatType),
    ];

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = canvas.height = IMG_SIZE;

    imgRefArr.forEach((img) => {
      // new Imageして呼ぶと、たまに間に合わないやつが出る
      // なのでキャッシュから確実に取る
      img && ctx.drawImage(img, 0, 0, IMG_SIZE, IMG_SIZE);
    });

    let src = canvas.toDataURL();
    canvas = null;
    return src;
  }

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
  }

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
  }

  fetchAll() {
    let cache = this.cache;
    return Promise.all(this.getAllImgPath().map((path) => {
      cache[path] = null;
      return new Promise((resolve) => {
        let img = new Image();
        img.src = path;
        img.onload = () => {
          cache[path] = img;
          resolve();
        };
        img.onabort = () => {
          resolve();
        };
        img.onerror = () => {
          throw new Error('Cant get image properly..');
        };
      });
    }));
  }
};

export default (new PartsModel());
