import cn from "classnames";
import React, {
  HTMLAttributes,
  useReducer,
  Context,
  useCallback,
  MouseEvent,
} from "react";
import { TreeItem, TreeItemData, TreeItemState } from "./TreeItem";

import styles from "./Tree.module.css";
import { initState, reducer } from "./TreeReducer";
import { TreeContext } from "./TreeContext";
export interface TreeProps<T extends TreeItemData = TreeItemData>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  data: T[];
  defaultExpanded?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>, itemId?: string) => void;
}

export const Tree = <T extends TreeItemData = TreeItemData>({
  className,
  data,
  defaultExpanded,
  onClick: onClickProp,
  ...restProps
}: TreeProps<T>) => {
  const [{ stateMap }, dispatch] = useReducer(
    reducer,
    initState(data, defaultExpanded)
  );
  console.log({ stateMap });
  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    console.log((e.target as HTMLDivElement).dataset);
    const treeitemPath = (e.target as HTMLDivElement).dataset.treeitemPath;
    if (treeitemPath) {
      dispatch({ type: "click", path: treeitemPath });
    }
    onClickProp?.(e, (e.target as HTMLDivElement).dataset.treeitemId);
  }, []);
  return (
    <div
      className={cn(className, styles.tree)}
      role="tree"
      onClick={handleClick}
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
