'use strict';

export const INDEX_URL = 'http://ikasu.lealog.net/';

export const IMG_SIZE = 600;

export const TEXT_STYLES = {
  GAP:       16,
  font:      '80px ikamodoki',
  textAlign: 'right',
  COLORS: ['#000', '#fff']
};

export const DEFAULT_PARTS_SETTINGS = {
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
    text:        ''
  },
  boy: {
    bgType:      2,
    bgColor:     1,
    bodyColor:   3,
    mouthType:   5,
    browsType:   1,
    browsColor:  2,
    eyesType:    1,
    eyesColor:   1,
    clothesType: 1,
    hairType:    1,
    hairColor:   2,
    hatType:     0,
    text:        ''
  }
};

export const SHARE_URL = 'https://twitter.com/intent/tweet?text=';
export const SHARE_TEXT = `みんなもマイイカのアイコンつくらなイカ？\n${INDEX_URL} #スーパーイカメーカー`;
