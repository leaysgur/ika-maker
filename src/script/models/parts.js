'use strict';
import PartsScheme from '../data/parts';
import DefaultPartsSettings from '../data/default-parts';
import {Promise} from 'es6-promise';

export default {
  getDefaultSettings() {
    return DefaultPartsSettings;
  },

  getImgPath(partsName, type, color) {
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

    return path;
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
    return Promise.all(this.getAllImgPath().map((path) => {
      return new Promise((resolve) => {
        let img = new Image();
        img.src = path;
        img.onload = resolve;
      });
    }));
  }
};
