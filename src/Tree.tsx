import cn from "classnames";
import React, {
  HTMLAttributes,
  useReducer,
  Context,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { TreeItem, TreeItemData, TreeItemState } from "./TreeItem";

import styles from "./Tree.module.css";
import { initState, reducer } from "./TreeReducer";
import { TreeContext } from "./TreeContext";
export interface TreeProps<T extends TreeItemData = TreeItemData>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "onKeyDown"> {
  data: T[];
  defaultExpanded?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>, itemId?: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>, itemId?: string) => void;
}

export const Tree = <T extends TreeItemData = TreeItemData>({
  className,
  data,
  defaultExpanded,
  onClick: onClickProp,
  onKeyDown: onKeyDownProp,
  ...restProps
}: TreeProps<T>) => {
  const [{ stateMap }, dispatch] = useReducer(
    reducer,
    initState(data, defaultExpanded)
  );
  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      console.log("click", (e.target as HTMLDivElement).dataset);
      const treeitemPath = (e.target as HTMLDivElement).dataset.treeitemPath;
      if (treeitemPath) {
        dispatch({ type: "click", path: treeitemPath });
      }
      onClickProp?.(e, (e.target as HTMLDivElement).dataset.treeitemId);
    },
    [onClickProp]
  );
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "Tab") {
        e.preventDefault(); // so page won't scroll on arrow up and down
      }
      const dataset = (e.target as HTMLDivElement).dataset;
      console.log("keydown", dataset);
      if (dataset.treeitemPath) {
        dispatch({ type: "keydown", path: dataset.treeitemPath, key: e.key });
      }
      onKeyDownProp?.(e, (e.target as HTMLDivElement).dataset.treeitemId);
    },
    [onKeyDownProp]
  );

  return (
    <div
      className={cn(className, styles.tree)}
      role="tree"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...restProps}
    >
      <TreeContext.Provider value={stateMap}>
        {data.map((x, i) => (
          <TreeItem
            key={`${x.label}-${i}`}
            data={x}
            defaultExpanded={defaultExpanded}
            path={i.toString()}
          />
        ))}
      </TreeContext.Provider>
    </div>
  );
};
