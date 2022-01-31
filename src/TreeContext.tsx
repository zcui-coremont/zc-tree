import React from "react";
import { TreeStateMap } from "./TreeReducer";

export const TreeContext = React.createContext<{
  stateMap: TreeStateMap;
  focused: boolean;
}>({ stateMap: {}, focused: false });
