import React, { HTMLAttributes, useReducer, Context } from "react";
import { TreeStateMap } from "./TreeReducer";

export const TreeContext = React.createContext<TreeStateMap>({});
