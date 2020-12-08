import { DEFAULT_PARTS_SETTINGS } from "../data/const.js";

export const getTabItems = (scheme) => {
  const tabItems = [];

  for (const [partsName, parts] of Object.entries(scheme)) {
    tabItems.push({
      id: partsName,
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
