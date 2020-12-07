declare module 'object-assign' {
  declare var exports: Object$Assign;
}

declare module 'flumpt' {
  declare class Component extends React$Component {
    dispatch: (eventName: string, ...args: any[]) => boolean;
  }
  declare var Flux: any;
}
