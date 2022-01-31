var H=Object.defineProperty,U=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var A=(n,e,t)=>e in n?H(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,s=(n,e)=>{for(var t in e||(e={}))v.call(e,t)&&A(n,t,e[t]);if(M)for(var t of M(e))E.call(e,t)&&A(n,t,e[t]);return n},o=(n,e)=>U(n,q(e));var D=(n,e)=>{var t={};for(var a in n)v.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&M)for(var a of M(n))e.indexOf(a)<0&&E.call(n,a)&&(t[a]=n[a]);return t};import{e as Q,r as h,j as I,c as N,a as m,b as O,d as J,f as Z,g as W,h as X,l as Y,i as K,k as ee,m as te,n as ne,o as ae,p as le,q as re,s as ie,t as se,u as de,v as oe}from"./vendor.97c26244.js";const ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}};ce();const he={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:he});const L=Q.createContext({stateMap:{},focused:!1}),be="_treeItem_ryne9_23",ge="_treeItemHighlighted_ryne9_28",pe="_treeItemSelected_ryne9_32",fe="_treeItemLeaf_ryne9_37";var w={treeItem:be,treeItemHighlighted:ge,treeItemSelected:pe,treeItemLeaf:fe};const B=a=>{var r=a,{data:n,path:e}=r,t=D(r,["data","path"]);var C;const{stateMap:l,focused:i}=h.exports.useContext(L),c=l[e],{expanded:S,selected:b,depth:p=0,highlighted:u}=c||{},g=!((C=n.children)==null?void 0:C.length),x=g?null:S?"\u25BC":"\u25B6",y=h.exports.useRef(null);return h.exports.useEffect(()=>{i&&u&&y.current&&(console.log("focus item",e),y.current.focus())},[u,e,i]),c===void 0?null:I("div",o(s({role:"group"},t),{children:[I("div",{className:N(w.treeItem,{[w.treeItemHighlighted]:i&&u,[w.treeItemSelected]:b,[w.treeItemLeaf]:g}),role:"treeitem","data-treeitem-path":e,"data-treeitem-depth":p,"data-treeitem-id":n.id,tabIndex:u?0:-1,ref:y,children:[x,n.label]}),S&&n.children?n.children.map((k,T)=>m(B,{data:k,path:`${e}-${T}`},`${k.label}-${T}`)):null]}))},me="_tree_1b6a4_1";var Se={tree:me};function j(n,e){const t={},a=(l,i,c,S)=>{var g;const b=S+"-"+i.toString(),p=c+1,u=Array.isArray(l.children)&&l.children.length>0;t[b]={highlighted:!1,selected:!1,expanded:u&&e,hasChild:u,depth:p},(g=l.children)==null||g.forEach((x,y)=>a(x,y,p,b))},r=(l,i)=>{var b,p;const c=i.toString(),S=!!((b=l.children)==null?void 0:b.length);t[c]={highlighted:i===0,selected:!1,expanded:S&&e,hasChild:S,depth:0},(p=l.children)==null||p.forEach((u,g)=>a(u,g,0,i.toString()))};return n.forEach(r),{stateMap:t}}const F=(n,e)=>{const t={};return Object.keys(n).forEach(a=>{if(a===e){const r=n[a],l=s({},r);l.hasChild&&(l.expanded=!l.expanded),l.selected=!0,l.highlighted=!0,t[a]=l}else{const r=n[a],l=o(s({},r),{selected:!1,highlighted:!1});t[a]=l}}),t},xe=(n,e)=>{if(n[e].expanded)return e+"-0";{const t=e.split("-").map(a=>Number.parseInt(a));for(;t.length>0;){const a=t.splice(t.length-1,1)[0],r=[...t,a+1].join("-");if(n[r])return r}}return e},ye=(n,e)=>{const t=s({},n),a=Object.keys(n).sort();if(e===a[a.length-1])return n;if(a.indexOf(e)<0)return console.error(e,"cannot be found in",a),t;const l=xe(n,e);return t[e]=o(s({},t[e]),{highlighted:!1}),t[l]=o(s({},t[l]),{highlighted:!0}),t},Ie=(n,e,t)=>{if(t==="0")return"0";const a=e.indexOf(t);if(a<0)return t;const r=e[a-1],l=r.split("-").map(c=>Number.parseInt(c));let i=l[0].toString();for(let c=0;c<l.length-1;c++){if(!n[i].expanded)return i;i=`${i}-${l[c+1]}`}return r},Ce=(n,e)=>{const t=s({},n),a=Object.keys(n).sort();if(e===a[0])return n;if(a.indexOf(e)<0)return console.error(e,"cannot be found in",a),t;const l=Ie(n,a,e);return t[e]=o(s({},t[e]),{highlighted:!1}),t[l]=o(s({},t[l]),{highlighted:!0}),t},ke=(n,e)=>{const t=s({},n);return t[e]=o(s({},t[e]),{expanded:!1}),t},Te=(n,e)=>{const t=s({},n);return t[e]=o(s({},t[e]),{expanded:!0}),t},Me=n=>{const e=n.split("-").map(t=>Number.parseInt(t));return e.length===1?n:(e.splice(e.length-1,1)[0],[...e].join("-"))},we=(n,e)=>{const t=s({},n),a=Me(e);return t[e]=o(s({},t[e]),{highlighted:!1}),t[a]=o(s({},t[a]),{highlighted:!0}),t},_e=(n,e)=>{const t=s({},n),a=e+"-0";return t[a]!==void 0&&(t[e]=o(s({},t[e]),{highlighted:!1}),t[a]=o(s({},t[a]),{highlighted:!0})),t};function De(n,e){switch(e.type){case"click":{const t=F(n.stateMap,e.path);return console.log("click reducer",{newStateMap:t}),{stateMap:t}}case"keydown":return e.key==="Enter"||e.key===" "?{stateMap:F(n.stateMap,e.path)}:e.key==="ArrowDown"?{stateMap:ye(n.stateMap,e.path)}:e.key==="ArrowUp"?{stateMap:Ce(n.stateMap,e.path)}:e.key==="ArrowLeft"?n.stateMap[e.path].expanded?{stateMap:ke(n.stateMap,e.path)}:{stateMap:we(n.stateMap,e.path)}:e.key==="ArrowRight"&&n.stateMap[e.path].hasChild?n.stateMap[e.path].expanded?{stateMap:_e(n.stateMap,e.path)}:{stateMap:Te(n.stateMap,e.path)}:n;case"initState":return console.log("new initState"),j(e.data,e.defaultExpanded)}}const _=S=>{var b=S,{className:n,data:e,defaultExpanded:t,onClick:a,onKeyDown:r,onFocus:l,onBlur:i}=b,c=D(b,["className","data","defaultExpanded","onClick","onKeyDown","onFocus","onBlur"]);const[p,u]=h.exports.useState(!1),[{stateMap:g},x]=h.exports.useReducer(De,j(e,t));h.exports.useEffect(()=>{x({type:"initState",data:e,defaultExpanded:t})},[e,t]);const y=h.exports.useCallback(d=>{console.log("click",d.target.dataset);const f=d.target.dataset.treeitemPath;f&&x({type:"click",path:f}),a==null||a(d,d.target.dataset.treeitemId)},[a]),C=h.exports.useCallback(d=>{d.key!=="Tab"&&d.preventDefault();const f=d.target.dataset;console.log("keydown",f),f.treeitemPath&&x({type:"keydown",path:f.treeitemPath,key:d.key}),r==null||r(d,d.target.dataset.treeitemId)},[r]),k=h.exports.useCallback(d=>{u(!0),l==null||l(d)},[l]),T=h.exports.useCallback(d=>{u(!1),i==null||i(d)},[i]);return console.log({stateMap:g}),m("div",o(s({className:N(n,Se.tree),role:"tree",onClick:y,onKeyDown:C,onFocus:k,onBlur:T},c),{children:m(L.Provider,{value:{stateMap:g,focused:p},children:e.map((d,f)=>m(B,{data:d,path:f.toString()},`${d.label}-${f}`))})}))};var ve={parameters:{storySource:{source:`import React, { useMemo, useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tree } from "./Tree";
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
`,locationsMap:{example:{startLoc:{col:52,line:152},endLoc:{col:1,line:157},startBody:{col:52,line:152},endBody:{col:1,line:157}},"toggle-data":{startLoc:{col:55,line:163},endLoc:{col:1,line:183},startBody:{col:55,line:163},endBody:{col:1,line:183}},"filter-data":{startLoc:{col:55,line:211},endLoc:{col:1,line:237},startBody:{col:55,line:211},endBody:{col:1,line:237}}}}},title:"Tree",component:_};const R=[{label:"Item A",id:"a",children:[{label:"Child A1",id:"a1",children:[{label:"Child A11",id:"a11"},{label:"Child A12",id:"a12"}]},{label:"Child A2",id:"a2"}]},{label:"Item B",id:"b"},{label:"Item C",id:"c",children:[{label:"Child C1",id:"c1"},{label:"Child C2",id:"c2"}]}],$=[{label:"Fruits",id:"a",children:[{label:"Orange",id:"a1"},{label:"Pineapple",id:"a2"},{label:"Apples",id:"a3",children:[{label:"Macintosh",id:"a31"},{label:"Granny Smith",id:"a32"},{label:"Fuji",id:"a33"}]},{label:"Bananas",id:"a4"},{label:"Pears",id:"a5",children:[{label:"Anjou",id:"a51"},{label:"Bartlett",id:"a52"},{label:"Bosc",id:"a53"},{label:"Concorde",id:"a54"},{label:"Seckel",id:"a55"},{label:"Starkrimson",id:"a56"}]}]},{label:"Vegetables",id:"b",children:[{label:"Podded Vegetables",id:"b1",children:[{label:"Lentil",id:"b11"},{label:"Pea",id:"b12"},{label:"Peanut",id:"b13"}]},{label:"Bulb and Stem Vegetables",id:"b2",children:[{label:"Asparagus",id:"b21"},{label:"Celery",id:"b22"},{label:"Leek",id:"b23"},{label:"Onion",id:"b24"}]},{label:"Root and Tuberous Vegetables",id:"b3",children:[{label:"Carrot",id:"b31"},{label:"Ginger",id:"b32"},{label:"Parsnip",id:"b33"},{label:"Potato",id:"b34"}]}]},{label:"Grains",id:"c",children:[{label:"Cereal Grains",id:"c1",children:[{label:"Barley",id:"c11"},{label:"Oats",id:"c12"},{label:"Rice",id:"c13"}]},{label:"Pseudocereal Grains",id:"c2",children:[{label:"Amaranth",id:"c21"},{label:"Bucketwheat",id:"c22"},{label:"Chia",id:"c23"},{label:"Quinoa",id:"c24"}]},{label:"Oliseeds",id:"c3",children:[{label:"India Mustard",id:"c31"},{label:"Safflower",id:"c32"},{label:"Flax Seed",id:"c33"},{label:"Poppy Seed",id:"c34"}]}]}],G=n=>{const e=(t,a)=>{console.log("Item clicked Id",a)};return m(_,o(s({},n),{data:R,onClick:e}))};G.args={defaultExpanded:!0};const V=n=>{const[e,t]=h.exports.useState(1),a=h.exports.useMemo(()=>e===1?R:$,[e]),r=(l,i)=>{console.log("Item clicked Id",i)};return I("div",{children:[m("button",{onClick:()=>t(l=>l===1?2:1),children:"toggle data"}),m(_,o(s({},n),{data:a,onClick:r}))]})};V.args={defaultExpanded:!0};const Ee=(n,e)=>new RegExp(e,"ig").test(n),Ae=(n,e)=>{const t=(a,r)=>{if(Ee(r.label,e))return a.push(r),a;if(Array.isArray(r.children)){const l=r.children.reduce(t,[]);l.length&&a.push(o(s({},r),{children:l}))}return a};return n.reduce(t,[])},z=n=>{const[e,t]=h.exports.useState(""),a=(l,i)=>{console.log("Item clicked Id",i)},r=h.exports.useMemo(()=>Ae($,e),[e]);return I("div",{children:[I("label",{children:["Filter"," ",m("input",{value:e,onChange:l=>t(l.currentTarget.value)})]}),m(_,o(s({},n),{defaultExpanded:e?!0:n.defaultExpanded,data:r,onClick:a}))]})};z.args={defaultExpanded:!1};const Ne=["Example","ToggleData","FilterData"];var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve,Example:G,ToggleData:V,FilterData:z,__namedExportsOrder:Ne});const Le=[ee,te,ne,ae,le,re,ie,se,de,oe,ue];Le.forEach(n=>{Object.keys(n).forEach(e=>{const t=n[e];switch(e){case"args":case"argTypes":return Y.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(a=>X(a,!1));case"loaders":return t.forEach(a=>W(a,!1));case"parameters":return O(s({},t),!1);case"argTypesEnhancers":return t.forEach(a=>Z(a));case"argsEnhancers":return t.forEach(a=>J(a));case"globals":case"globalTypes":{const a={};return a[e]=t,O(a,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function P(n){return{"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":Oe}[n]}Object.assign(P,{keys:()=>["/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx"],resolve:n=>({"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":"./src/Tree.stories.tsx"})[n]});K(P,{hot:!1},!1);
//# sourceMappingURL=iframe.6c2ea108.js.map
