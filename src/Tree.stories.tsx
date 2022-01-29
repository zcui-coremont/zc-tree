import React from "react";

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

export const Example: ComponentStory<typeof Tree> = (args) => {
  const handleClick = (_: any, itemId?: string) => {
    console.log("Item clicked Id", itemId);
  };
  return (
    <Tree {...args} data={exampleData} defaultExpanded onClick={handleClick} />
  );
};
