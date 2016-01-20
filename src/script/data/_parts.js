'use strict';
const TRANSPARENT = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

/**
 * node sh/make-parts-list.js すると、
 * この内容をベースに存在する画像ファイルでitemsを補完。
 *
 * そして、models/parts.js ができる！
 *
 */
module.exports = {
  body: {
    tabName: 'カラダ',
    tabOrder: 1,
    tabGroup: 'BASE',
    selectType: 'COLOR',
    items: [/* { id: 1, path: './path' } */],
    COLORS: {
      1: 'FEECE4',
      2: 'FED8C1',
      3: 'FEC49F',
      4: '9D6B48',
      5: '79491F',
      6: '4E2C07',
      7: '41230F'
    }
  },

  hair: {
    tabName: 'カミ',
    tabOrder: 2,
    tabGroup: 'BASE',
    selectType: 'COLOR',
    items: [],
    COLORS: {
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
    }
  },

  brows: {
    tabName: 'マユ',
    tabOrder: 3,
    tabGroup: 'FACE',
    selectType: 'TYPE_COLOR',
    items: [/* { id: 1, items: [ { id: 1, path: './path' } ] } */],
    COLORS: {
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
    }
  },

  eyes: {
    tabName: 'メ',
    tabOrder: 5,
    tabGroup: 'FACE',
    selectType: 'TYPE_COLOR',
    items: [],
    COLORS: {
      1: '383834',
      2: '5D3C36',
      3: 'C01594',
      4: 'F09925',
      5: 'E2D22E',
      6: '159167',
      7: '081EDC'
    }
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
    items: [ { id: 0, path: TRANSPARENT } ]
  },

  clothes: {
    tabName: 'フク',
    tabOrder: 8,
    tabGroup: 'GEAR',
    selectType: 'TYPE',
    items: [ { id: 0, path: TRANSPARENT } ]
  },

  bg: {
    tabName: 'ハイケイ',
    tabOrder: 9,
    tabGroup: 'OTHERS',
    selectType: 'TYPE_COLOR',
    items: [],
    COLORS: {
      1:  'ffffff',
      2:  '000000',
      3:  '0C1CB0',
      4:  '0091FF',
      5:  '2CFEED',
      6:  '42E62A',
      7:  'FEF035',
      8:  'FD9126',
      9:  'FD89C1',
      10: 'CD0814'
    }
  }
};
