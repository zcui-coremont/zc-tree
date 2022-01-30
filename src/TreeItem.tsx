import cn from "classnames";
import React, {
  useState,
  HTMLAttributes,
  useEffect,
  MouseEvent,
  useCallback,
  useContext,
  useRef,
} from "react";
import { TreeContext } from "./TreeContext";

import styles from "./TreeItem.module.css";
import { useControlled } from "./utils/useControlled";

export interface TreeItemData {
  label: string;
  id: string;
  children?: this[];
}

/** Computed states */
export interface TreeItemState {
  highlighted?: boolean;
  selected?: boolean;
  expanded?: boolean;
  hasChild?: boolean;
  depth?: number;
}

export interface TreeItemProps<T extends TreeItemData> // TreeItemState,
  extends HTMLAttributes<HTMLDivElement> {
  // expose `classes` to make styles customizable. Or not use css module
  data: T; // Generics to make sure custom TreeItem can use more data
  // itemComponent? ...
  path: string;
}

export const TreeItem = <T extends TreeItemData>({
  data,
  onClick: onClickProp,
  onKeyDown: onKeyDownProp,
  path,
  ...restProps
}: TreeItemProps<T>) => {
  const treeState = useContext(TreeContext);
  // console.log(path, treeState[path]);
  const itemState = treeState[path];
  const {
    expanded,
    hasChild,
    selected,
    depth = 0,
    highlighted,
  } = itemState || {}; // {} when data is empty

  const leafNode = !data.children?.length;
  const icon = !leafNode ? (expanded ? "▼" : "▶") : null;
  const itemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (highlighted && itemRef.current) {
      console.log("focus item", path);
      itemRef.current.focus();
    }
  }, [highlighted, path]);

  // const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
  //   setIsExpanded((x) => !x);
  //   onClickProp?.(e);
  // }, []);
  if (itemState === undefined) {
    return null;
  }
  return (
    <div role="group" {...restProps}>
      <div
        className={cn(styles.treeItem, {
          [styles.treeItemHighlighted]: highlighted,
          [styles.treeItemSelected]: selected,
          [styles.treeItemLeaf]: leafNode,
        })}
        role="treeitem"
        // Used in Tree callback to determine item
        data-treeitem-path={path}
        // Used in CSS to indent
        data-treeitem-depth={depth}
        data-treeitem-id={data.id}
        // onClick={handleClick}
        // Implement roving tabindex
        tabIndex={highlighted ? 0 : -1}
        ref={itemRef}
      >
        {icon}
        {data.label}
      </div>
      {expanded && data.children
        ? data.children.map((d, i) => (
            <TreeItem
              key={`${d.label}-${i}`}
              data={d}
              // depth={depth + 1}
              path={`${path}-${i}`}
            />
          ))
        : null}
    </div>
  );
};
