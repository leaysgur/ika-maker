'use strict';

const fs   = require('fs');
const path = require('path');

const BASE_DIR  = process.cwd();
const PARTS_DIR = './img/ika';
const SCHEME_SRC_DIR  = './src/script/data/_parts';
const SCHEME_DIST_DIR = './src/script/data/parts';

if (path.basename(BASE_DIR) !== 'ika-maker') {
  console.log('Execute from project root!');
  process.exit(1);
}

console.log(`Generate ${SCHEME_DIST_DIR}.js`);

/**
 * このオブジェクトを、存在する画像ファイルから補完する
 *
 */
const PARTS_SCHEME = require(path.resolve(BASE_DIR, SCHEME_SRC_DIR));
const cmnItemMap = { bg: 1, eyes: 1 };

let data = {
  girl: _getPartsSchemebyAppType('girl'),
  boy:  _getPartsSchemebyAppType('boy'),
};
data = `export default ${JSON.stringify(data, null, 2)};`;

fs.writeFileSync(`${path.resolve(BASE_DIR, SCHEME_DIST_DIR)}.js`, data);
console.log('Done!');

function _getPartsSchemebyAppType(appType) {
  let partsScheme = JSON.parse(JSON.stringify(PARTS_SCHEME));

  Object.keys(partsScheme).forEach((parts) => {
    let appPartsType = parts in cmnItemMap ? 'cmn' : appType;
    let partsPath = path.resolve(PARTS_DIR, appPartsType, parts);
    let partsList = fs.readdirSync(partsPath);
    let selectType = partsScheme[parts].selectType;

    if (selectType === 'TYPE' || selectType === 'COLOR') {
      partsList
        .sort(_sortByFileNo)
        .forEach((file) => {
          partsScheme[parts].items.push(_getElementByFileName(file, `${PARTS_DIR}/${appPartsType}/${parts}`));
        });
    }

    if (selectType === 'TYPE_COLOR') {
      partsList.forEach((type) => {
        let colorsList = fs.readdirSync(path.resolve(PARTS_DIR, appPartsType, parts, type));
        let colorItems = colorsList
          .sort(_sortByFileNo)
          .map((file) => {
            return _getElementByFileName(file, `${PARTS_DIR}/${appPartsType}/${parts}/${type}`);
          });

        partsScheme[parts].items.push({
          id:    type|0,
          items: colorItems
        });
      });
    }
  });

  return partsScheme;
}

function _getElementByFileName(file, path) {
  return {
    id:   file.split('.')[0]|0,
    path: `${path}/${file}`
  };
}

function _sortByFileNo(a, b) {
  return parseInt(a, 10) > parseInt(b, 10) ? 1 : -1;
}
