import { TreeItemData, TreeItemState } from "./TreeItem";


/** item path map to each state */
export type TreeStateMap = {
  [path: string]: TreeItemState;
};

type State = {
  stateMap: TreeStateMap;
};

type Action = { type: "click"; path: string; } | { type: "keydown"; key: string; };

export function initState<T extends TreeItemData>(
  data: T[],
  defaultExpanded?: boolean
): State {
  const stateMap: TreeStateMap = {};
  const innerLoopData = (x: T, i: number, depth: number, path: string) => {
    const newPath = path + "-" + i.toString();
    const newDepth = depth + 1;
    stateMap[newPath] = {
      highlighted: false,
      selected: false,
      expanded: defaultExpanded,
      hasChild: !!x.children?.length,
      depth: newDepth,
    };
    x.children?.forEach((child, index) => innerLoopData(child, index, newDepth, newPath));
  };
  const firstLoopData = (x: T, i: number) => {
    const path = i.toString();
    stateMap[path] = {
      highlighted: false,
      selected: false,
      expanded: defaultExpanded,
      hasChild: !!x.children?.length,
      depth: 0,
    };
    x.children?.forEach((child, index) => innerLoopData(child, index, 0, i.toString()));
  };
  data.forEach(firstLoopData);

  return { stateMap };
}

export function reducer(state: State, action: Action): State {
  console.log(action);
  switch (action.type) {
    case "click":
      const newStateMap: TreeStateMap = {};
      const pathClicked = action.path;

      Object.keys(state.stateMap).forEach(key => {
        if (key === pathClicked) {
          const prevItemState = state.stateMap[key];
          console.log({ prevItemState });
          const newItemState = { ...prevItemState };
          if (newItemState.hasChild) {
            newItemState.expanded = !newItemState.expanded;
          }
          newItemState.selected = true
          newStateMap[key] = newItemState
        } else {
          const prevItemState = state.stateMap[key];
          console.log({ prevItemState });
          const newItemState: TreeItemState = { ...prevItemState, selected: false };
          newStateMap[key] = newItemState
        }
      })


      console.log({ newStateMap });

      return { stateMap: newStateMap };
    case "keydown":
      return state;
  }
}

