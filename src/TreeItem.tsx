import cn from "classnames";
import React, {
  useState,
  HTMLAttributes,
  useEffect,
  MouseEvent,
  useCallback,
  useContext,
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
  defaultExpanded?: boolean;
  // itemComponent? ...
  path: string;
}

export const TreeItem = <T extends TreeItemData>({
  data,
  defaultExpanded,
  onClick: onClickProp,
  onKeyDown: onKeyDownProp,
  path,
  ...restProps
}: TreeItemProps<T>) => {
  const treeState = useContext(TreeContext);
  console.log(path, treeState[path]);
  const {
    expanded: expandedProp,
    hasChild,
    selected,
    depth = 0,
    highlighted,
  } = treeState[path];
  const [expanded, setIsExpanded] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "TreeItem",
    state: "expanded",
  });
  const leafNode = !data.children?.length;
  const icon = !leafNode ? (expanded ? "▼" : "▶") : null;

  // const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
  //   setIsExpanded((x) => !x);
  //   onClickProp?.(e);
  // }, []);
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
        tabIndex={highlighted ? 1 : 0}
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
              defaultExpanded={defaultExpanded}
            />
          ))
        : null}
    </div>
  );
};
