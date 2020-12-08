import {
  DEFAULT_PARTS_SETTINGS,
  IMG_SIZE,
  TEXT_STYLES,
} from "../data/const.js";

export const getTabItems = (scheme) => {
  const tabItems = [];

  for (const [partsId, parts] of Object.entries(scheme)) {
    tabItems.push({
      id: partsId,
      order: parts.tabOrder,
      group: parts.tabGroup,
      name: parts.tabName
    });
  }

  // これは画像がないので個別にいれる
  tabItems.push({
    id: "text",
    order: 99,
    group: "OTHERS",
    name:  "テキスト"
  });

  tabItems.sort((a, b) => a.order > b.order ? 1 : -1);

  return tabItems;
};

export const getDefaultSettings = (appType) => {
  return DEFAULT_PARTS_SETTINGS[appType];
};

const getImgPath = (scheme, partsId, type, color) => {
  const parts = scheme[partsId];

  let path = "";
  let types = [], colors = [];

  if (type && color) {
    types = parts.items.filter((item) => item.id === type)[0].items;
    colors = types.filter((item) => item.id === color);

    // その色は、他のタイプには存在しない場合がある
    // その時は、先頭のものに戻す
    if (colors.length !== 0) {
      path = colors[0].path;
    } else {
      path = types[0].path;
    }
  }
  else {
    path = parts.items.filter((item) => item.id === type)[0].path;
  }

  if (partsId === "hat" && type === 0)
    return null;
  if (partsId === "item" && type === 0)
    return null;

  return path;
}

const $canvas = document.createElement("canvas");
$canvas.width = $canvas.height = IMG_SIZE;
const ctx = $canvas.getContext("2d");

export const generateFixImgSrcBySettings = async (scheme, settings) => {
  const imgPathArr = [
    getImgPath(scheme, "bg", settings.bgType, settings.bgColor),

    getImgPath(scheme, "body", settings.bodyColor),

    getImgPath(scheme, "mouth", settings.mouthType),
    getImgPath(scheme, "brows", settings.browsType, settings.browsColor),
    getImgPath(scheme, "eyes", settings.eyesType, settings.eyesColor),

    getImgPath(scheme, "clothes", settings.clothesType),

    getImgPath(scheme, "hair", settings.hairType, settings.hairColor),

    getImgPath(scheme, "hat", settings.hatType),
    getImgPath(scheme, "item", settings.itemType),
  ].filter(Boolean);

  const imgRefArr = await Promise.all(imgPathArr.map((path) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;
      img.onload = () => resolve(img);
      img.onerror = img.onabort = reject;
    });
  }));

  // まず消して
  ctx.clearRect(0, 0, IMG_SIZE, IMG_SIZE);

  // 順番に書き込む
  for (const img of imgRefArr) {
    ctx.drawImage(img, 0, 0, IMG_SIZE, IMG_SIZE);
  }

  // 文字は別途書き込む
  const text = settings.text;
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

  return $canvas.toDataURL();
}
