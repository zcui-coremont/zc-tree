import cn from "classnames";
import React, { HTMLAttributes } from "react";
import { TreeItem, TreeItemData } from "./TreeItem";

import styles from "./Tree.module.css";

export interface TreeProps<T extends TreeItemData = TreeItemData>
  extends HTMLAttributes<HTMLDivElement> {
  data: T[];
  defaultExpanded?: boolean;
}

export const Tree = <T extends TreeItemData = TreeItemData>({
  className,
  data,
  defaultExpanded,
  ...restProps
}: TreeProps<T>) => {
  return (
    <div className={cn(className, styles.tree)} role="tree" {...restProps}>
      {data.map((x, i) => (
        <TreeItem
          key={`${x.label}-${i}`}
          data={x}
          defaultExpanded={defaultExpanded}
          path={i.toString()}
        />
      ))}
    </div>
  );
};
