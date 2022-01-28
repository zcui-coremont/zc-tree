import cn from "classnames";
import React, { HTMLAttributes } from "react";

import styles from "./TreeItem.module.css";

export interface TreeItemData {
  label: string;
  children?: TreeItemData[];
}

export interface TreeItemState {
  highlighted?: boolean;
  selected?: boolean;
  expanded?: boolean;
  hasChild?: boolean;
}

export interface TreeItemProps<T extends TreeItemData>
  extends TreeItemState,
    HTMLAttributes<HTMLDivElement> {
  data: T; // Generics to make sure custom TreeItem can use more data
  // itemComponent? ...
}

export const TreeItem = <T extends TreeItemData>({
  className,
  data,
  highlighted,
  selected,
  expanded,
  hasChild,
  ...restProps
}: TreeItemProps<T>) => {
  return (
    <div
      className={cn(className, styles.treeItem, {
        [styles.treeItemHighlighted]: highlighted,
      })}
      role="treeitem"
      {...restProps}
    >
      {data.label}
    </div>
  );
};
