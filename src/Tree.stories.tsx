import cn from "classnames";
import React, { ForwardedRef, forwardRef, useMemo, useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tree } from "./Tree";
import { BasicTreeItemNodeProps, TreeItem, TreeItemData } from "./TreeItem";

import styles from "./Tree.stories.module.css";

export default {
  title: "Tree",
  component: Tree,
} as ComponentMeta<typeof Tree>;

const exampleData: TreeItemData[] = [
  {
    label: "Item A",
    id: "a",
    children: [
      {
        label: "Child A1",
        id: "a1",
        children: [
          { label: "Child A11", id: "a11" },
          { label: "Child A12", id: "a12" },
        ],
      },
      { label: "Child A2", id: "a2" },
    ],
  },
  { label: "Item B", id: "b" },
  {
    label: "Item C",
    id: "c",
    children: [
      { label: "Child C1", id: "c1" },
      { label: "Child C2", id: "c2" },
    ],
  },
];

interface CustomTreeItemData extends TreeItemData {
  loading?: boolean;
}

const customTypeData: CustomTreeItemData[] = [
  {
    label: "Item A",
    id: "a",
    loading: true,
    children: [
      {
        label: "Child A1",
        id: "a1",
        loading: false,

        children: [
          { label: "Child A11", id: "a11", loading: true },
          { label: "Child A12", id: "a12", loading: false },
        ],
      },
      { label: "Child A2", id: "a2" },
    ],
  },
  { label: "Item B", id: "b", loading: true },
  {
    label: "Item C",
    id: "c",
    children: [
      { label: "Child C1", id: "c1" },
      { label: "Child C2", id: "c2" },
    ],
  },
];

const exampleData2: TreeItemData[] = [
  {
    label: "Fruits",
    id: "a",
    children: [
      {
        label: "Orange",
        id: "a1",
      },
      {
        label: "Pineapple",
        id: "a2",
      },
      {
        label: "Apples",
        id: "a3",
        children: [
          { label: "Macintosh", id: "a31" },
          { label: "Granny Smith", id: "a32" },
          { label: "Fuji", id: "a33" },
        ],
      },
      {
        label: "Bananas",
        id: "a4",
      },
      {
        label: "Pears",
        id: "a5",
        children: [
          { label: "Anjou", id: "a51" },
          { label: "Bartlett", id: "a52" },
          { label: "Bosc", id: "a53" },
          { label: "Concorde", id: "a54" },
          { label: "Seckel", id: "a55" },
          { label: "Starkrimson", id: "a56" },
        ],
      },
    ],
  },
  {
    label: "Vegetables",
    id: "b",
    children: [
      {
        label: "Podded Vegetables",
        id: "b1",
        children: [
          { label: "Lentil", id: "b11" },
          { label: "Pea", id: "b12" },
          { label: "Peanut", id: "b13" },
        ],
      },
      {
        label: "Bulb and Stem Vegetables",
        id: "b2",
        children: [
          { label: "Asparagus", id: "b21" },
          { label: "Celery", id: "b22" },
          { label: "Leek", id: "b23" },
          { label: "Onion", id: "b24" },
        ],
      },
      {
        label: "Root and Tuberous Vegetables",
        id: "b3",
        children: [
          { label: "Carrot", id: "b31" },
          { label: "Ginger", id: "b32" },
          { label: "Parsnip", id: "b33" },
          { label: "Potato", id: "b34" },
        ],
      },
    ],
  },
  {
    label: "Grains",
    id: "c",
    children: [
      {
        label: "Cereal Grains",
        id: "c1",
        children: [
          { label: "Barley", id: "c11" },
          { label: "Oats", id: "c12" },
          { label: "Rice", id: "c13" },
        ],
      },
      {
        label: "Pseudocereal Grains",
        id: "c2",
        children: [
          { label: "Amaranth", id: "c21" },
          { label: "Bucketwheat", id: "c22" },
          { label: "Chia", id: "c23" },
          { label: "Quinoa", id: "c24" },
        ],
      },
      {
        label: "Oliseeds",
        id: "c3",
        children: [
          { label: "India Mustard", id: "c31" },
          { label: "Safflower", id: "c32" },
          { label: "Flax Seed", id: "c33" },
          { label: "Poppy Seed", id: "c34" },
        ],
      },
    ],
  },
];

export const Example: ComponentStory<typeof Tree> = (args) => {
  const handleClick = (_: unknown, itemId?: string) => {
    console.log("Item clicked Id", itemId);
  };
  return <Tree {...args} data={exampleData} onClick={handleClick} />;
};

Example.args = {
  defaultExpanded: true,
};

export const ToggleData: ComponentStory<typeof Tree> = (args) => {
  const [dataSetNumber, setDataSetNumber] = useState(1);
  const dataSet = useMemo(() => {
    if (dataSetNumber === 1) {
      return exampleData;
    } else {
      return exampleData2;
    }
  }, [dataSetNumber]);
  const handleClick = (_: unknown, itemId?: string) => {
    console.log("Item clicked Id", itemId);
  };
  return (
    <div>
      <button onClick={() => setDataSetNumber((x) => (x === 1 ? 2 : 1))}>
        toggle data
      </button>
      <Tree
        {...args}
        data={dataSet}
        onClick={handleClick}
        key={dataSetNumber} // Use different key to rerender a new instance
      />
    </div>
  );
};

ToggleData.args = {
  defaultExpanded: true,
};

const fileterTest = (label: string, filter: string): boolean => {
  const regex = new RegExp(filter, "ig");
  return regex.test(label);
};

// Based on https://stackoverflow.com/a/45290208/2710486
const filterTreeData = (data: TreeItemData[], text: string): TreeItemData[] => {
  const getNodes = (result: TreeItemData[], item: TreeItemData) => {
    if (fileterTest(item.label, text)) {
      result.push(item);
      return result;
    }
    if (Array.isArray(item.children)) {
      const children = item.children.reduce(getNodes, []);
      if (children.length) result.push({ ...item, children });
    }
    return result;
  };

  return data.reduce(getNodes, []);
};

export const FilterData: ComponentStory<typeof Tree> = (args) => {
  const [filterString, setFilterString] = useState("");
  const handleClick = (_: unknown, itemId?: string) => {
    console.log("Item clicked Id", itemId);
  };
  const filteredData = useMemo(
    () => filterTreeData(exampleData2, filterString),
    [filterString]
  );
  return (
    <div>
      <label>
        Filter{" "}
        <input
          value={filterString}
          onChange={(e) => setFilterString(e.currentTarget.value)}
        />
      </label>
      <Tree
        {...args}
        defaultExpanded={filterString ? true : args.defaultExpanded}
        data={filteredData}
        onClick={handleClick}
      />
    </div>
  );
};

FilterData.args = {
  defaultExpanded: false,
};

const CustomTreeItemNodeBase = (
  {
    highlighted,
    selected,
    expanded,
    hasChild,
    depth,
    data,
    treeFocused,
    ...restProps
  }: BasicTreeItemNodeProps<CustomTreeItemData>,
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
      {data.loading ? "⌛" : null}
    </div>
  );
};

const CustomTreeItem = forwardRef(CustomTreeItemNodeBase);

export const CustomTreeItemNode: ComponentStory<typeof Tree> = (args) => {
  return (
    <div>
      <Tree {...args} data={customTypeData} TreeItemNode={CustomTreeItem} />
    </div>
  );
};

CustomTreeItemNode.args = {
  defaultExpanded: true,
};
