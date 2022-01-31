import cn from "classnames";
import React, {
  HTMLAttributes,
  useEffect,
  useContext,
  useRef,
  forwardRef,
  ReactNode,
  ForwardedRef,
} from "react";
import { TreeContext } from "./TreeContext";

import styles from "./TreeItem.module.css";

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

export interface BasicTreeItemNodeProps<T extends TreeItemData>
  extends TreeItemState,
    HTMLAttributes<HTMLDivElement> {
  data: T;
  treeFocused?: boolean;
}

const BasicTreeItemNodeBase = <T extends TreeItemData>(
  {
    highlighted,
    selected,
    expanded,
    hasChild,
    depth,
    data,
    treeFocused,
    ...restProps
  }: BasicTreeItemNodeProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const leafNode = !data.children?.length;
  const icon = !leafNode ? (expanded ? "▼" : "▶") : null;

  return (
    <div
      className={cn(styles.treeItem, {
        [styles.treeItemHighlighted]: highlighted && treeFocused,
        [styles.treeItemSelected]: selected,
        [styles.treeItemLeaf]: leafNode,
      })}
      {...restProps}
      ref={ref}
    >
      {icon}
      {data.label}
    </div>
  );
};

export const BasicTreeItemNode = forwardRef(BasicTreeItemNodeBase);
BasicTreeItemNode.displayName = "BasicTreeItemNode";

export interface TreeItemProps<T extends TreeItemData> // TreeItemState,
  extends HTMLAttributes<HTMLDivElement> {
  // expose `classes` to make styles customizable. Or not use css module
  data: T; // Generics to make sure custom TreeItem can use more data
  // itemComponent? ...
  path: string;
}

export const TreeItem = <T extends TreeItemData>({
  data,
  path,
  ...restProps
}: TreeItemProps<T>) => {
  const {
    stateMap,
    focused,
    TreeItemNode = BasicTreeItemNode,
  } = useContext(TreeContext);
  const itemState = stateMap[path];
  const { expanded, selected, depth = 0, highlighted } = itemState || {}; // {} when data is empty

  const itemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (focused && highlighted && itemRef.current) {
      console.log("focus item", path);
      itemRef.current.focus();
    }
  }, [highlighted, path, focused]);

  // const handleClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
  //   setIsExpanded((x) => !x);
  //   onClickProp?.(e);
  // }, []);
  if (itemState === undefined) {
    console.warn("item null", itemState, path);
    return null;
  }
  return (
    <div role="group" {...restProps}>
      <TreeItemNode
        treeFocused={focused}
        data={data}
        {...itemState}
        ref={itemRef}
        role="treeitem"
        // Used in Tree callback to determine item
        data-treeitem-path={path}
        // Used in CSS to indent
        data-treeitem-depth={depth}
        data-treeitem-id={data.id}
        // onClick={handleClick}
        // Implement roving tabindex
        tabIndex={highlighted ? 0 : -1}
      />
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
