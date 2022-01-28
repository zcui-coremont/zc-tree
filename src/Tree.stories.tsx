import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tree, TreeProps } from "./Tree";
import { TreeItemData } from "./TreeItem";

export default {
  title: "Tree",
  component: Tree,
} as ComponentMeta<typeof Tree>;

const exampleData: TreeItemData[] = [
  { label: "Item A", children: [{ label: "Child 1" }, { label: "Child 2" }] },
  { label: "Item A" },
];

export const Example: ComponentStory<typeof Tree> = () => (
  <Tree data={exampleData} />
);
