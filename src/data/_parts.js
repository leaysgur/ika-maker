'use strict';

/**
 * node sh/make-parts-list.js すると、
 * この内容をベースに存在する画像ファイルでitemsを補完。
 *
 * そして、parts.js ができる！
 *
 */
const BODY_COLORS = {
  1: 'FEECE4',
  2: 'FED8C1',
  3: 'FEC49F',
  4: '9D6B48',
  5: '79491F',
  6: '4E2C07',
  7: '41230F',
};

const HAIR_COLORS = {
  1:  'FD8424',
  2:  '0F4DFB',
  3:  'FC1999',
  4:  '3DEB2B',
  5:  'FED430',
  6:  '9D1FD8',
  7:  'FFF2C4',
  8:  '222124',
  9:  'DB0A16',
  10: 'FD97B8',
  11: 'D699FC',
  12: 'A4F7FE',
  13: '95FEE5',
  14: 'C5FEB8',
  15: 'FFFDA1',
  16: '53A3FC',
  17: 'FFFFFF',
  18: 'D4D4D4',
  19: 'DBEDF2',
  20: 'F9DFEA'
};

const EYE_COLORS = {
  1: '383834',
  2: '5D3C36',
  3: 'C01594',
  4: 'F09925',
  5: 'E2D22E',
  6: '159167',
  7: '081EDC'
};

const BG_COLORS = {
  1:  '000000',
  2:  '00212F',
  3:  '0C1CB0',
  4:  '0091FF',
  5:  '2CFEED',
  6:  '42E62A',
  7:  'FEF035',
  8:  'FD9126',
  9:  'FD89C1',
  10: 'CD0814',
  11: 'ffffff',
  12: 'F82287'
};

module.exports = {
  body: {
    tabName: 'カラダ',
    tabOrder: 1,
    tabGroup: 'BASE',
    selectType: 'COLOR',
    items: [/* { id: 1, path: './path' } */],
    COLORS: BODY_COLORS
  },

  hair: {
    tabName: 'カミ',
    tabOrder: 2,
    tabGroup: 'BASE',
    selectType: 'TYPE_COLOR',
    items: [],
    COLORS: HAIR_COLORS
  },

  brows: {
    tabName: 'マユ',
    tabOrder: 3,
    tabGroup: 'FACE',
    selectType: 'TYPE_COLOR',
    items: [/* { id: 1, items: [ { id: 1, path: './path' } ] } */],
    COLORS: HAIR_COLORS
  },

  eyes: {
    tabName: 'メ',
    tabOrder: 5,
    tabGroup: 'FACE',
    selectType: 'TYPE_COLOR',
    items: [],
    COLORS: EYE_COLORS
  },

  mouth: {
    tabName: 'クチ',
    tabOrder: 6,
    tabGroup: 'FACE',
    selectType: 'TYPE',
    items: [],
  },

  hat: {
    tabName: 'アタマ',
    tabOrder: 7,
    tabGroup: 'GEAR',
    selectType: 'TYPE',
    items: []
  },

  clothes: {
    tabName: 'フク',
    tabOrder: 8,
    tabGroup: 'GEAR',
    selectType: 'TYPE',
    items: []
  },

  item: {
    tabName: 'アイテム',
    tabOrder: 9,
    tabGroup: 'GEAR',
    selectType: 'TYPE',
    items: []
  },

  bg: {
    tabName: 'ハイケイ',
    tabOrder: 10,
    tabGroup: 'OTHERS',
    selectType: 'TYPE_COLOR',
    items: [],
    COLORS: BG_COLORS
  }
};
