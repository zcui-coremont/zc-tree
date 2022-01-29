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
    children: [
      {
        label: "Child A1",
        children: [{ label: "Child A11" }, { label: "Child A12" }],
      },
      { label: "Child A2" },
    ],
  },
  { label: "Item B" },
  { label: "Item C", children: [{ label: "Child C1" }, { label: "Child C2" }] },
];

export const Example: ComponentStory<typeof Tree> = () => (
  <Tree data={exampleData} defaultExpanded />
);
