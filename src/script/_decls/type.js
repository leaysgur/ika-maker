type AppState = {
  settings:     Object,
  showFixModal: boolean,
  fixImgSrc:    string,
};

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

type TabItem = {
  id:    string,
  order: number,
  group: string,
  name:  string,
};

type TabItems = TabItem[];

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
