import React, { useMemo, useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tree, TreeProps } from "./Tree";
import { TreeItemData } from "./TreeItem";

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

const exampleData2: TreeItemData[] = [
  {
    label: "Root 1",
    id: "a",
    children: [
      {
        label: "1-1",
        id: "a1",
        children: [
          { label: "1-1-1", id: "a11" },
          { label: "1-1-2", id: "a12" },
        ],
      },
    ],
  },
  {
    label: "Root 2",
    id: "b",
    children: [
      {
        label: "2-1",
        id: "b1",
      },
      {
        label: "2-2",
        id: "b2",
      },
    ],
  },
  {
    label: "Root 3",
    id: "c",
    children: [
      { label: "3-1", id: "c1" },
      { label: "3-2", id: "c2" },
    ],
  },
];

export const Example: ComponentStory<typeof Tree> = (args) => {
  const handleClick = (_: any, itemId?: string) => {
    console.log("Item clicked Id", itemId);
  };
  console.log({ args });
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
  const handleClick = (_: any, itemId?: string) => {
    console.log("Item clicked Id", itemId);
  };
  return (
    <div>
      <button onClick={() => setDataSetNumber((x) => (x === 1 ? 2 : 1))}>
        toggle data
      </button>
      <Tree {...args} data={dataSet} onClick={handleClick} />
    </div>
  );
};

ToggleData.args = {
  defaultExpanded: true,
};
