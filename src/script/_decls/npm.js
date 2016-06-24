declare module 'react-tap-event-plugin' {
  declare function exports(): void;
}

declare module 'object-assign' {
  declare var exports: Object$Assign;
}

declare module 'es6-promise' {
  declare var Promise: any;
}

declare module 'flumpt' {
  declare class Component<Props, State, Ctx> extends React$Component<Props, State, Ctx> {
    dispatch: (eventName: string, ...args: any[]) => boolean;
  }
  declare var Flux: any;
}
