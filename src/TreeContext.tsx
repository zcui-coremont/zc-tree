import React, { ForwardRefExoticComponent } from "react";
import { TreeStateMap } from "./TreeReducer";

export const TreeContext = React.createContext<{
  stateMap: TreeStateMap;
  focused: boolean;
  TreeItemNode?: ForwardRefExoticComponent<any>;
}>({ stateMap: {}, focused: false });
