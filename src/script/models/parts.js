'use strict';
import PartsScheme from '../data/parts';
import DefaultPartsSettings from '../data/default-parts';
import {Promise} from 'es6-promise';

export default new class {
  getDefaultSettings() {
    return DefaultPartsSettings;
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
    return Promise.all(this.getAllImgPath().map((path) => {
      return new Promise((resolve) => {
        let img = new Image();
        img.src = path;
        img.onload = resolve;
      });
    }));
  }
};
