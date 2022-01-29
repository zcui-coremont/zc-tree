import { TreeItemData, TreeItemState } from "./TreeItem";


/** item path map to each state */
export type TreeStateMap = {
  [path: string]: TreeItemState;
};

type State = {
  stateMap: TreeStateMap;
};

type Action = { type: "click"; path: string; } | { type: "keydown"; path: string; key: string; };

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

const selectNode = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = {};

  Object.keys(stateMap).forEach(key => {
    if (key === nodePath) {
      const prevItemState = stateMap[key];
      const newItemState = { ...prevItemState };
      if (newItemState.hasChild) {
        newItemState.expanded = !newItemState.expanded;
      }
      newItemState.selected = true
      newItemState.highlighted = true
      newStateMap[key] = newItemState
    } else {
      // Reset states for all other nodes
      const prevItemState = stateMap[key];
      const newItemState: TreeItemState = { ...prevItemState, selected: false, highlighted: false };
      newStateMap[key] = newItemState
    }
  })

  return newStateMap;
}

const hightlightNext = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = { ...stateMap };
  const allPaths = Object.keys(stateMap).sort();
  // console.log("hightlightNext", allPaths)
  if (nodePath === allPaths[allPaths.length - 1]) {
    // do nothing at last item
    return stateMap
  }
  const pathIndex = allPaths.indexOf(nodePath);
  if (pathIndex < 0) {
    console.error(nodePath, 'cannot be found in', allPaths);
  }
  // FIXME: over simplify here, only works when all nodes are expanded
  const nextPath = allPaths[pathIndex + 1];

  newStateMap[nodePath] = { ...newStateMap[nodePath], highlighted: false }
  newStateMap[nextPath] = { ...newStateMap[nextPath], highlighted: true }

  return newStateMap;
}

const hightlightPrev = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = { ...stateMap };
  const allPaths = Object.keys(stateMap).sort();
  // console.log("hightlightPrev", allPaths)
  if (nodePath === allPaths[0]) {
    // do nothing at first item
    return stateMap
  }
  const pathIndex = allPaths.indexOf(nodePath);
  if (pathIndex < 0) {
    console.error(nodePath, 'cannot be found in', allPaths);
  }
  // FIXME: over simplify here, only works when all nodes are expanded
  const prevPath = allPaths[pathIndex - 1];

  newStateMap[nodePath] = { ...newStateMap[nodePath], highlighted: false }
  newStateMap[prevPath] = { ...newStateMap[prevPath], highlighted: true }

  return newStateMap;
}


export function reducer(state: State, action: Action): State {
  // console.log(action);
  switch (action.type) {
    case "click": {
      const newStateMap = selectNode(state.stateMap, action.path);

      console.log('click reducer', { newStateMap });

      return { stateMap: newStateMap };
    }
    case "keydown": {
      if (action.key === 'Enter' || action.key === ' ') {
        const newStateMap = selectNode(state.stateMap, action.path);
        return { stateMap: newStateMap };
      } else if (action.key === 'ArrowDown') {
        const newStateMap = hightlightNext(state.stateMap, action.path);
        return { stateMap: newStateMap };
      } else if (action.key === 'ArrowUp') {
        const newStateMap = hightlightPrev(state.stateMap, action.path);
        return { stateMap: newStateMap };
      }

      return state;
    }
  }
}

