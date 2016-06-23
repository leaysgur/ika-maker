// @flow
'use strict';
const objectAssign = require('object-assign');
const ES6Promise = require('es6-promise').Promise;
const PartsScheme = require('../data/parts');
const {
  DEFAULT_PARTS_SETTINGS,
  IMG_SIZE,
  TEXT_STYLES
} = require('../data/const');

/**
 * 最初に初期化され、後はスキーマデータを抱える役
 *
 * stateをもらって何か返すとかはあるが、ただの関数。
 */
class PartsModel {
  cache:   {
    [path: string]: ?HTMLImageElement
  };
  scheme:  Object;
  appType: string;

  constructor() {
    this.cache   = {};
    this.scheme  = {};
    this.appType = '';
  }

  init(type: string): PartsModel {
    this.appType = type;
    this.scheme = objectAssign({}, PartsScheme[type]);
    return this;
  }

  getAppType(): string {
    return this.appType;
  }

  getDefaultSettings(): Parts {
    return objectAssign({}, DEFAULT_PARTS_SETTINGS[this.appType]);
  }

  getParts(partsName: PartsName) {
    return objectAssign({}, this.scheme[partsName]);
  }

  _getImgRef(partsName: PartsName, type: number, color: ?number): ?HTMLImageElement {
    const parts: Object = this.scheme[partsName];

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
    if (partsName === 'item' && type === 0) {
      return null;
    }

    return this.cache[path];
  }

  getFixImgSrcBySettings(settings: Parts): string {
    const imgRefArr: Array<?HTMLImageElement> = [
      this._getImgRef('bg', settings.bgType, settings.bgColor),

      this._getImgRef('body', settings.bodyColor),

      this._getImgRef('mouth', settings.mouthType),
      this._getImgRef('brows', settings.browsType, settings.browsColor),
      this._getImgRef('eyes', settings.eyesType, settings.eyesColor),

      this._getImgRef('clothes', settings.clothesType),

      this._getImgRef('hair', settings.hairType, settings.hairColor),

      this._getImgRef('hat', settings.hatType),
      this._getImgRef('item', settings.itemType),
    ];

    let canvas: ?HTMLCanvasElement = document.createElement('canvas');
    // flow-disable-line
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    canvas && (canvas.width = canvas.height = IMG_SIZE);

    imgRefArr.forEach((img: ?HTMLImageElement) => {
      // new Imageして呼ぶと、たまに間に合わないやつが出る
      // なのでキャッシュから確実に取る
      img && ctx.drawImage(img, 0, 0, IMG_SIZE, IMG_SIZE);
    });

    // 文字は別途書き込む
    const text: string = settings.text;
    if (text.trim().length > 0) {
      ctx.font = TEXT_STYLES.font;
      ctx.textAlign = TEXT_STYLES.textAlign;

      // 白いフクに白い文字だと見えないので、
      ctx.fillStyle = TEXT_STYLES.COLORS[0];
      ctx.fillText(
        text,
        IMG_SIZE - TEXT_STYLES.GAP + 2,  // x
        IMG_SIZE - TEXT_STYLES.GAP + 2,  // y
        IMG_SIZE - TEXT_STYLES.GAP * 2   // maxWidth
      );
      // 2重に書いて影をつける
      ctx.fillStyle = TEXT_STYLES.COLORS[1];
      ctx.fillText(
        text,
        IMG_SIZE - TEXT_STYLES.GAP,  // x
        IMG_SIZE - TEXT_STYLES.GAP,  // y
        IMG_SIZE - TEXT_STYLES.GAP*2 // maxWidth
      );
    }

    const src: string = canvas ? canvas.toDataURL() : '';
    canvas = null;

    return src;
  }

  getTabItems(): TabItems {
    const tabItems = Object.keys(this.scheme).map((partsName) => {
      const parts = this.scheme[partsName];
      return {
        id:    partsName,
        order: parts.tabOrder,
        group: parts.tabGroup,
        name:  parts.tabName
      };
    }).sort((a, b) => {
      return a.order > b.order ? 1 : -1;
    });

    // これは画像がないので個別にいれる
    tabItems.push({
      id:    'text',
      order: 99,
      group: 'OTHERS',
      name:  'テキスト'
    });

    return tabItems;
  }

  getAllImgPath(): string[] {
    const imgPathArr: string[] = [];

    Object.keys(this.scheme).forEach((parts) => {
      this.scheme[parts].items.forEach((item) => {
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

  fetchAll(): Promise {
    let cache = this.cache;

    return ES6Promise.all(this.getAllImgPath().map((path): Promise => {
      cache[path] = null;
      return new ES6Promise((resolve): void => {
        const img = new Image();
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

module.exports = (new PartsModel());
