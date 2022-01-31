import { TreeItemData, TreeItemState } from "./TreeItem";


/** item path map to each state */
export type TreeStateMap = {
  [path: string]: TreeItemState;
};

type State = {
  stateMap: TreeStateMap;
};

type Action = { type: "click"; path: string; } |
{ type: "keydown"; path: string; key: string; } |
{ type: 'initState'; data: TreeItemData[]; defaultExpanded?: boolean };

export function initState<T extends TreeItemData>(
  data: T[],
  defaultExpanded?: boolean
): State {
  const stateMap: TreeStateMap = {};
  const innerLoopData = (x: T, i: number, depth: number, path: string) => {
    const newPath = path + "-" + i.toString();
    const newDepth = depth + 1;
    const hasChild = Array.isArray(x.children) && x.children.length > 0;
    stateMap[newPath] = {
      highlighted: false,
      selected: false,
      expanded: hasChild && defaultExpanded,
      hasChild,
      depth: newDepth,
    };
    x.children?.forEach((child, index) => innerLoopData(child, index, newDepth, newPath));
  };
  const firstLoopData = (x: T, i: number) => {
    const path = i.toString();
    const hasChild = !!x.children?.length;
    stateMap[path] = {
      highlighted: i === 0,
      selected: false,
      expanded: hasChild && defaultExpanded,
      hasChild,
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

const findNextVisibleNodePath = (stateMap: TreeStateMap, fromPath: string) => {
  if (stateMap[fromPath].expanded) {
    return fromPath + '-0';
  } else {
    // Example for the following, start with `fromPath` "2-3-1" -> [2, 3, 1]
    const fromPathArray = fromPath.split('-').map(p => Number.parseInt(p));
    while (fromPathArray.length > 0) {
      // Remove the last index, i.e. 1, return it
      const fromPathLastIndex = fromPathArray.splice(fromPathArray.length - 1, 1)[0];
      // Compute next one at the same level, i.e. "2-3-2"
      const nextPathInSameLevel = [...fromPathArray, (fromPathLastIndex + 1)].join('-')
      // Check whether next one in the same level exist
      if (stateMap[nextPathInSameLevel]) {
        return nextPathInSameLevel;
      }
      // Doesn't exist, move up one level, continue loop
    }
  }
  // return the current one if at the end
  return fromPath;
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
    return newStateMap;
  }
  const nextPath = findNextVisibleNodePath(stateMap, nodePath);

  newStateMap[nodePath] = { ...newStateMap[nodePath], highlighted: false }
  newStateMap[nextPath] = { ...newStateMap[nextPath], highlighted: true }

  return newStateMap;
}

const findPreviousVisibleNodePath = (stateMap: TreeStateMap, sortedAllPaths: string[], fromPath: string) => {
  if (fromPath === '0') {
    return '0';
  }
  const pathIndex = sortedAllPaths.indexOf(fromPath);
  if (pathIndex < 0) {
    return fromPath;
  }
  // This node might be hidden by its ancester 
  const potentialPreviousPath = sortedAllPaths[pathIndex - 1];
  // Example "2-3-1" -> [2, 3, 1]
  const potentialPathArray = potentialPreviousPath.split('-').map(p => Number.parseInt(p));

  // start with '2'
  let parentToCheck = potentialPathArray[0].toString();
  // check all ancesters (hence -1 in for loop) whether expanded
  for (let i = 0; i < potentialPathArray.length - 1; i++) {
    if (!stateMap[parentToCheck].expanded) {
      return parentToCheck
    }
    parentToCheck = `${parentToCheck}-${potentialPathArray[i + 1]}`
  }
  // if all ancester expanded, than this one is the visible
  return potentialPreviousPath;
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
    return newStateMap;
  }

  const prevPath = findPreviousVisibleNodePath(stateMap, allPaths, nodePath);

  newStateMap[nodePath] = { ...newStateMap[nodePath], highlighted: false }
  newStateMap[prevPath] = { ...newStateMap[prevPath], highlighted: true }

  return newStateMap;
}

const collapseNode = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = { ...stateMap };
  newStateMap[nodePath] = { ...newStateMap[nodePath], expanded: false };
  return newStateMap;
}

const expandNode = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = { ...stateMap };
  newStateMap[nodePath] = { ...newStateMap[nodePath], expanded: true };
  return newStateMap;
}

const findParentNodePath = (nodePath: string) => {
  const fromPathArray = nodePath.split('-').map(p => Number.parseInt(p));
  if (fromPathArray.length === 1) {
    // return self as this is the highest level
    return nodePath;
  } else {
    fromPathArray.splice(fromPathArray.length - 1, 1)[0];
    return [...fromPathArray].join('-');
  }
}

const highlightParentNode = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = { ...stateMap };
  const parentNodePath = findParentNodePath(nodePath);
  newStateMap[nodePath] = { ...newStateMap[nodePath], highlighted: false };
  newStateMap[parentNodePath] = { ...newStateMap[parentNodePath], highlighted: true };
  return newStateMap;
}


const highlightFirstChildNode = (stateMap: TreeStateMap, nodePath: string): TreeStateMap => {
  const newStateMap: TreeStateMap = { ...stateMap };
  const potentialFirstChildPath = nodePath + '-0';
  if (newStateMap[potentialFirstChildPath] !== undefined) {
    newStateMap[nodePath] = { ...newStateMap[nodePath], highlighted: false };
    newStateMap[potentialFirstChildPath] = { ...newStateMap[potentialFirstChildPath], highlighted: true };
  }
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
      } else if (action.key === 'ArrowLeft') {
        if (state.stateMap[action.path].expanded) {
          const newStateMap = collapseNode(state.stateMap, action.path);
          return { stateMap: newStateMap };
        } else {
          // Leaf node or collapsed node
          const newStateMap = highlightParentNode(state.stateMap, action.path);
          return { stateMap: newStateMap };
        }
      } else if (action.key === 'ArrowRight') {
        if (state.stateMap[action.path].hasChild) {
          if (state.stateMap[action.path].expanded) {
            const newStateMap = highlightFirstChildNode(state.stateMap, action.path);
            return { stateMap: newStateMap };
          } else {
            const newStateMap = expandNode(state.stateMap, action.path);
            return { stateMap: newStateMap };
          }
        }
        // Do nothing at a leaf node
      }
      return state;
    }
    case "initState": {
      console.log("new initState")
      return initState(action.data, action.defaultExpanded);
    }
  }
}

