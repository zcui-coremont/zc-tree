var x=Object.defineProperty,I=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var g=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&g(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&g(e,t,r[t]);return e},d=(e,r)=>I(e,E(r));var f=(e,r)=>{var t={};for(var o in e)u.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&c)for(var o of c(e))r.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t};import{j as i,c as h,a as _,b as v,d as O,e as j,f as S,l as C,g as z,h as A,i as D,k as L,m as M,n as P,o as N,p as w,q as H,r as U,s as $}from"./vendor.fd301c01.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}};k();const q={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:q});const R="_treeItem_1g1fu_1",F="_treeItemHighlighted_1g1fu_5";var y={treeItem:R,treeItemHighlighted:F};const J=ee=>{var m=ee,{className:e,data:r,highlighted:t,selected:o,expanded:a,hasChild:s}=m,n=f(m,["className","data","highlighted","selected","expanded","hasChild"]);return i("div",d(l({className:h(e,y.treeItem,{[y.treeItemHighlighted]:t}),role:"treeitem"},n),{children:r.label}))},K="_tree_1b6a4_1";var Z={tree:K};const T=o=>{var a=o,{className:e,data:r}=a,t=f(a,["className","data"]);return i("div",d(l({className:h(e,Z.tree),role:"tree"},t),{children:r.map(s=>i(J,{data:s}))}))};var G={parameters:{storySource:{source:`import React from "react";

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
`,locationsMap:{example:{startLoc:{col:52,line:18},endLoc:{col:1,line:20},startBody:{col:52,line:18},endBody:{col:1,line:20}}}}},title:"Tree",component:T};const Q=[{label:"Item A",children:[{label:"Child 1"},{label:"Child 2"}]},{label:"Item A"}],V=()=>i(T,{data:Q}),W=["Example"];var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G,Example:V,__namedExportsOrder:W});const Y=[A,D,L,M,P,N,w,H,U,$,B];Y.forEach(e=>{Object.keys(e).forEach(r=>{const t=e[r];switch(r){case"args":case"argTypes":return C.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(o=>S(o,!1));case"loaders":return t.forEach(o=>j(o,!1));case"parameters":return _(l({},t),!1);case"argTypesEnhancers":return t.forEach(o=>O(o));case"argsEnhancers":return t.forEach(o=>v(o));case"globals":case"globalTypes":{const o={};return o[r]=t,_(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(r+" was not supported :( !")}})});function b(e){return{"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":X}[e]}Object.assign(b,{keys:()=>["/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx"],resolve:e=>({"/Users/zhihaocui/Projects/zc-tree/src/Tree.stories.tsx":"./src/Tree.stories.tsx"})[e]});z(b,{hot:!1},!1);
//# sourceMappingURL=iframe.67f51b3d.js.map
