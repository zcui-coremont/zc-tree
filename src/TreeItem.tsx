import cn from "classnames";
import React, {
  useState,
  HTMLAttributes,
  useEffect,
  MouseEvent,
  useCallback,
} from "react";

import styles from "./TreeItem.module.css";
import { useControlled } from "./utils/useControlled";

export interface TreeItemData {
  label: string;
  children?: TreeItemData[];
}

export interface TreeItemState {
  highlighted?: boolean;
  selected?: boolean;
  expanded?: boolean;
  // hasChild?: boolean;
}

export interface TreeItemProps<T extends TreeItemData>
  extends TreeItemState,
    HTMLAttributes<HTMLDivElement> {
  // expose `classes` to make styles customizable. Or not use css module
  data: T; // Generics to make sure custom TreeItem can use more data
  defaultExpanded?: boolean;
  // itemComponent? ...
  depth?: number;
  path?: string;
}

export const TreeItem = <T extends TreeItemData>({
  data,
  defaultExpanded,
  expanded: expandedProp,
  highlighted,
  depth = 0,
  onClick: onClickProp,
  onKeyDown: onKeyDownProp,
  path = "0",
  selected,
  ...restProps
}: TreeItemProps<T>) => {
  const [expanded, setIsExpanded] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "TreeItem",
    state: "expanded",
  });
  const leafNode = !data.children?.length;
  const icon = !leafNode ? (expanded ? "▼" : "▶") : null;

  const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsExpanded((x) => !x);
    onClickProp?.(e);
  }, []);
  return (
    <div role="group" {...restProps}>
      <div
        className={cn(styles.treeItem, {
          [styles.treeItemHighlighted]: highlighted,
          [styles.treeItemLeaf]: leafNode,
        })}
        role="treeitem"
        // Used in Tree callback to determine item
        data-treeitem-path={path}
        // Used in CSS to indent
        data-treeitem-depth={depth}
        onClick={handleClick}
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
              depth={depth + 1}
              path={`${path}-${depth + 1}`}
              defaultExpanded={defaultExpanded}
            />
          ))
        : null}
    </div>
  );
};
