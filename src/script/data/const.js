// @flow
'use strict';

const INDEX_URL: string = 'http://ikasu.lealog.net/';

const IMG_SIZE: number = 600;

const TEXT_STYLES: {
  font:      string;
  textAlign: string;
  GAP:       number;
  COLORS:    string[];
} = {
  font:      '80px ikamodoki',
  textAlign: 'right',
  GAP:       16,
  COLORS:    ['#000', '#fff']
};

const DEFAULT_PARTS_SETTINGS: {
  girl: Parts;
  boy:  Parts;
} = {
  girl: {
    bgType:      2,
    bgColor:     2,
    bodyColor:   2,
    mouthType:   1,
    browsType:   1,
    browsColor:  1,
    eyesType:    1,
    eyesColor:   2,
    clothesType: 6,
    hairType:    1,
    hairColor:   10,
    hatType:     21,
    itemType:    0,
    text:        ''
  },
  boy: {
    bgType:      2,
    bgColor:     1,
    bodyColor:   3,
    mouthType:   5,
    browsType:   1,
    browsColor:  2,
    eyesType:    3,
    eyesColor:   7,
    clothesType: 1,
    hairType:    1,
    hairColor:   2,
    hatType:     0,
    itemType:    0,
    text:        ''
  }
};

const SHARE_URL: string = 'https://twitter.com/intent/tweet?text=';
const SHARE_TEXT: string = `みんなもマイイカのアイコンつくらなイカ？\n${INDEX_URL} #スーパーイカメーカー`;

module.exports = {
  INDEX_URL,
  IMG_SIZE,
  TEXT_STYLES,
  DEFAULT_PARTS_SETTINGS,
  SHARE_URL,
  SHARE_TEXT,
};
