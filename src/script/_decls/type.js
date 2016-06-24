// アプリの核となるstate
type AppState = {
  settings:     Parts,
  showFixModal: boolean,
  fixImgSrc:    string,
};

// 現在セットされてるパーツ
type Parts = {
  bgType:      number,
  bgColor:     number,
  bodyColor:   number,
  mouthType:   number,
  browsType:   number,
  browsColor:  number,
  eyesType:    number,
  eyesColor:   number,
  clothesType: number,
  hairType:    number,
  hairColor:   number,
  hatType:     number,
  itemType:    number,
  text:        string,
};

// パーツの種類
type PartsName = | 'body'
                 | 'hair'
                 | 'brows'
                 | 'eyes'
                 | 'mouth'
                 | 'hat'
                 | 'clothes'
                 | 'item'
                 | 'bg'
                 | 'text';

// パーツの分類となるタブ
type TabItem = {
  id:    string,
  order: number,
  group: string,
  name:  string,
};

type TabItems = TabItem[];

// Fluxで使うAction
type SetColorAction = {
  target:  PartsName,
  colorId: number,
};

type SetTypeAction = {
  target: PartsName,
  typeId: number,
};

type SetTextAction = {
  target: PartsName,
  text:   string,
};
