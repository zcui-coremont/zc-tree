var H=Object.defineProperty,U=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var N=(n,e,t)=>e in n?H(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,i=(n,e)=>{for(var t in e||(e={}))v.call(e,t)&&N(n,t,e[t]);if(y)for(var t of y(e))A.call(e,t)&&N(n,t,e[t]);return n},d=(n,e)=>U(n,q(e));var M=(n,e)=>{var t={};for(var a in n)v.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&y)for(var a of y(n))e.indexOf(a)<0&&A.call(n,a)&&(t[a]=n[a]);return t};import{e as Q,r as b,j as S,c as E,a as g,b as O,d as J,f as K,g as Z,h as W,l as X,i as Y,k as ee,m as te,n as ne,o as ae,p as le,q as re,s as ie,t as se,u as oe,v as de}from"./vendor.97c26244.js";const ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};ce();const he={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:he});const L=Q.createContext({}),be="_treeItem_ryne9_23",pe="_treeItemHighlighted_ryne9_28",ge="_treeItemSelected_ryne9_32",fe="_treeItemLeaf_ryne9_37";var I={treeItem:be,treeItemHighlighted:pe,treeItemSelected:ge,treeItemLeaf:fe};const B=l=>{var s=l,{data:n,onClick:e,onKeyDown:t,path:a}=s,r=M(s,["data","onClick","onKeyDown","path"]);var w;const p=b.exports.useContext(L)[a],{expanded:u,hasChild:f,selected:m,depth:o=0,highlighted:c}=p||{},x=!((w=n.children)==null?void 0:w.length),T=x?null:u?"\u25BC":"\u25B6",k=b.exports.useRef(null);return b.exports.useEffect(()=>{c&&k.current&&(console.log("focus item",a),k.current.focus())},[c,a]),p===void 0?null:S("div",d(i({role:"group"},r),{children:[S("div",{className:E(I.treeItem,{[I.treeItemHighlighted]:c,[I.treeItemSelected]:m,[I.treeItemLeaf]:x}),role:"treeitem","data-treeitem-path":a,"data-treeitem-depth":o,"data-treeitem-id":n.id,tabIndex:c?0:-1,ref:k,children:[T,n.label]}),u&&n.children?n.children.map((_,D)=>g(B,{data:_,path:`${a}-${D}`},`${_.label}-${D}`)):null]}))},me="_tree_1b6a4_1";var Se={tree:me};function j(n,e){const t={},a=(l,s,h,p)=>{var o,c;const u=p+"-"+s.toString(),f=h+1,m=!!((o=l.children)==null?void 0:o.length);t[u]={highlighted:!1,selected:!1,expanded:m&&e,hasChild:m,depth:f},(c=l.children)==null||c.forEach((x,T)=>a(x,T,f,u))},r=(l,s)=>{var u,f;const h=s.toString(),p=!!((u=l.children)==null?void 0:u.length);t[h]={highlighted:!1,selected:!1,expanded:p&&e,hasChild:p,depth:0},(f=l.children)==null||f.forEach((m,o)=>a(m,o,0,s.toString()))};return n.forEach(r),{stateMap:t}}const P=(n,e)=>{const t={};return Object.keys(n).forEach(a=>{if(a===e){const r=n[a],l=i({},r);l.hasChild&&(l.expanded=!l.expanded),l.selected=!0,l.highlighted=!0,t[a]=l}else{const r=n[a],l=d(i({},r),{selected:!1,highlighted:!1});t[a]=l}}),t},xe=(n,e)=>{if(n[e].expanded)return e+"-0";{const t=e.split("-").map(a=>Number.parseInt(a));for(;t.length>0;){const a=t.splice(t.length-1,1)[0],r=[...t,a+1].join("-");if(n[r])return r}}return e},ye=(n,e)=>{const t=i({},n),a=Object.keys(n).sort();if(e===a[a.length-1])return n;if(a.indexOf(e)<0)return console.error(e,"cannot be found in",a),t;const l=xe(n,e);return t[e]=d(i({},t[e]),{highlighted:!1}),t[l]=d(i({},t[l]),{highlighted:!0}),t},Ie=(n,e,t)=>{if(t==="0")return"0";const a=e.indexOf(t);if(a<0)return t;const r=e[a-1],l=r.split("-").map(h=>Number.parseInt(h));let s=l[0].toString();for(let h=0;h<l.length-1;h++){if(!n[s].expanded)return s;s=`${s}-${l[h+1]}`}return r},Ce=(n,e)=>{const t=i({},n),a=Object.keys(n).sort();if(e===a[0])return n;if(a.indexOf(e)<0)return console.error(e,"cannot be found in",a),t;const l=Ie(n,a,e);return t[e]=d(i({},t[e]),{highlighted:!1}),t[l]=d(i({},t[l]),{highlighted:!0}),t},Te=(n,e)=>{const t=i({},n);return t[e]=d(i({},t[e]),{expanded:!1}),t},ke=(n,e)=>{const t=i({},n);return t[e]=d(i({},t[e]),{expanded:!0}),t},Me=n=>{const e=n.split("-").map(t=>Number.parseInt(t));return e.length===1?n:(e.splice(e.length-1,1)[0],[...e].join("-"))},we=(n,e)=>{const t=i({},n),a=Me(e);return t[e]=d(i({},t[e]),{highlighted:!1}),t[a]=d(i({},t[a]),{highlighted:!0}),t},_e=(n,e)=>{const t=i({},n),a=e+"-0";return t[a]!==void 0&&(t[e]=d(i({},t[e]),{highlighted:!1}),t[a]=d(i({},t[a]),{highlighted:!0})),t};function De(n,e){switch(e.type){case"click":{const t=P(n.stateMap,e.path);return console.log("click reducer",{newStateMap:t}),{stateMap:t}}case"keydown":return e.key==="Enter"||e.key===" "?{stateMap:P(n.stateMap,e.path)}:e.key==="ArrowDown"?{stateMap:ye(n.stateMap,e.path)}:e.key==="ArrowUp"?{stateMap:Ce(n.stateMap,e.path)}:e.key==="ArrowLeft"?n.stateMap[e.path].expanded?{stateMap:Te(n.stateMap,e.path)}:{stateMap:we(n.stateMap,e.path)}:e.key==="ArrowRight"&&n.stateMap[e.path].hasChild?n.stateMap[e.path].expanded?{stateMap:_e(n.stateMap,e.path)}:{stateMap:ke(n.stateMap,e.path)}:n;case"initState":return console.log("new initState"),j(e.data,e.defaultExpanded)}}const C=s=>{var h=s,{className:n,data:e,defaultExpanded:t,onClick:a,onKeyDown:r}=h,l=M(h,["className","data","defaultExpanded","onClick","onKeyDown"]);const[{stateMap:p},u]=b.exports.useReducer(De,j(e,t));b.exports.useEffect(()=>{u({type:"initState",data:e,defaultExpanded:t})},[e,t]);const f=b.exports.useCallback(o=>{console.log("click",o.target.dataset);const c=o.target.dataset.treeitemPath;c&&u({type:"click",path:c}),a==null||a(o,o.target.dataset.treeitemId)},[a]),m=b.exports.useCallback(o=>{o.key!=="Tab"&&o.preventDefault();const c=o.target.dataset;console.log("keydown",c),c.treeitemPath&&u({type:"keydown",path:c.treeitemPath,key:o.key}),r==null||r(o,o.target.dataset.treeitemId)},[r]);return g("div",d(i({className:E(n,Se.tree),role:"tree",onClick:f,onKeyDown:m},l),{children:g(L.Provider,{value:p,children:e.map((o,c)=>g(B,{data:o,path:c.toString()},`${o.label}-${c}`))})}))};var ve={parameters:{storySource:{source:`import React, { useMemo, useState } from "react";

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
  const handleClick = (_: any, itemId?: string) => {
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
      <Tree {...args} data={filteredData} onClick={handleClick} />
    </div>
  );
};

FilterData.args = {
  defaultExpanded: true,
};
`,locationsMap:{example:{startLoc:{col:52,line:152},endLoc:{col:1,line:158},startBody:{col:52,line:152},endBody:{col:1,line:158}},"toggle-data":{startLoc:{col:55,line:164},endLoc:{col:1,line:184},startBody:{col:55,line:164},endBody:{col:1,line:184}},"filter-data":{startLoc:{col:55,line:212},endLoc:{col:1,line:233},startBody:{col:55,line:212},endBody:{col:1,line:233}}}}},title:"Tree",component:C};const F=[{label:"Item A",id:"a",children:[{label:"Child A1",id:"a1",children:[{label:"Child A11",id:"a11"},{label:"Child A12",id:"a12"}]},{label:"Child A2",id:"a2"}]},{label:"Item B",id:"b"},{label:"Item C",id:"c",children:[{label:"Child C1",id:"c1"},{label:"Child C2",id:"c2"}]}],R=[{label:"Fruits",id:"a",children:[{label:"Orange",id:"a1"},{label:"Pineapple",id:"a2"},{label:"Apples",id:"a3",children:[{label:"Macintosh",id:"a31"},{label:"Granny Smith",id:"a32"},{label:"Fuji",id:"a33"}]},{label:"Bananas",id:"a4"},{label:"Pears",id:"a5",children:[{label:"Anjou",id:"a51"},{label:"Bartlett",id:"a52"},{label:"Bosc",id:"a53"},{label:"Concorde",id:"a54"},{label:"Seckel",id:"a55"},{label:"Starkrimson",id:"a56"}]}]},{label:"Vegetables",id:"b",children:[{label:"Podded Vegetables",id:"b1",children:[{label:"Lentil",id:"b11"},{label:"Pea",id:"b12"},{label:"Peanut",id:"b13"}]},{label:"Bulb and Stem Vegetables",id:"b2",children:[{label:"Asparagus",id:"b21"},{label:"Celery",id:"b22"},{label:"Leek",id:"b23"},{label:"Onion",id:"b24"}]},{label:"Root and Tuberous Vegetables",id:"b3",children:[{label:"Carrot",id:"b31"},{label:"Ginger",id:"b32"},{label:"Parsnip",id:"b33"},{label:"Potato",id:"b34"}]}]},{label:"Grains",id:"c",children:[{label:"Cereal Grains",id:"c1",children:[{label:"Barley",id:"c11"},{label:"Oats",id:"c12"},{label:"Rice",id:"c13"}]},{label:"Pseudocereal Grains",id:"c2",children:[{label:"Amaranth",id:"c21"},{label:"Bucketwheat",id:"c22"},{label:"Chia",id:"c23"},{label:"Quinoa",id:"c24"}]},{label:"Oliseeds",id:"c3",children:[{label:"India Mustard",id:"c31"},{label:"Safflower",id:"c32"},{label:"Flax Seed",id:"c33"},{label:"Poppy Seed",id:"c34"}]}]}],$=n=>{const e=(t,a)=>{console.log("Item clicked Id",a)};return console.log({args:n}),g(C,d(i({},n),{data:F,onClick:e}))};$.args={defaultExpanded:!0};const G=n=>{const[e,t]=b.exports.useState(1),a=b.exports.useMemo(()=>e===1?F:R,[e]),r=(l,s)=>{console.log("Item clicked Id",s)};return S("div",{children:[g("button",{onClick:()=>t(l=>l===1?2:1),children:"toggle data"}),g(C,d(i({},n),{data:a,onClick:r}))]})};G.args={defaultExpanded:!0};const Ae=(n,e)=>new RegExp(e,"ig").test(n),Ne=(n,e)=>{const t=(a,r)=>{if(Ae(r.label,e))return a.push(r),a;if(Array.isArray(r.children)){const l=r.children.reduce(t,[]);l.length&&a.push(d(i({},r),{children:l}))}return a};return n.reduce(t,[])},V=n=>{const[e,t]=b.exports.useState(""),a=(l,s)=>{console.log("Item clicked Id",s)},r=b.exports.useMemo(()=>Ne(R,e),[e]);return S("div",{children:[S("label",{children:["Filter"," ",g("input",{value:e,onChange:l=>t(l.currentTarget.value)})]}),g(C,d(i({},n),{data:r,onClick:a}))]})};V.args={defaultExpanded:!0};const Ee=["Example","ToggleData","FilterData"];var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve,Example:$,ToggleData:G,FilterData:V,__namedExportsOrder:Ee});const Le=[ee,te,ne,ae,le,re,ie,se,oe,de,ue];Le.forEach(n=>{Object.keys(n).forEach(e=>{const t=n[e];switch(e){case"args":case"argTypes":return X.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(a=>W(a,!1));case"loaders":return t.forEach(a=>Z(a,!1));case"parameters":return O(i({},t),!1);case"argTypesEnhancers":return t.forEach(a=>K(a));case"argsEnhancers":return t.forEach(a=>J(a));case"globals":case"globalTypes":{const a={};return a[e]=t,O(a,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function z(n){return{"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":Oe}[n]}Object.assign(z,{keys:()=>["/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx"],resolve:n=>({"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":"./src/Tree.stories.tsx"})[n]});Y(z,{hot:!1},!1);
//# sourceMappingURL=iframe.152b61a4.js.map
