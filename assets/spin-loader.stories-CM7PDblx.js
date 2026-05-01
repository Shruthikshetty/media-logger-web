import{j as t}from"./iframe-C90DYGFN.js";import{c as l}from"./utils-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";function c({className:n,...i}){return t.jsx("svg",{role:"status","aria-label":"Loading",viewBox:"0 0 100 100",className:l("size-15 animate-spin",n),...i,children:Array.from({length:12}).map((d,r)=>{const o=(-90+r*30)*(Math.PI/180),p=50+35*Math.cos(o),m=50+35*Math.sin(o);return t.jsx("circle",{cx:p,cy:m,r:6-r*.15,className:"fill-primary",opacity:1-r*.05},r)})})}c.__docgenInfo={description:"creates a spinner",methods:[],displayName:"SpinLoader"};const S={title:"Components/SpinLoader",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional CSS classes"}}},s={args:{}},e={args:{className:"size-8"}},a={args:{className:"size-24"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source},description:{story:`Default spin loader\r
will use the primary color`,...s.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'size-8'
  }
}`,...e.parameters?.docs?.source},description:{story:"Small spin loader updated using className prop",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'size-24'
  }
}`,...a.parameters?.docs?.source},description:{story:"Large spin loader updated using className prop",...a.parameters?.docs?.description}}};const f=["Default","Small","Large"];export{s as Default,a as Large,e as Small,f as __namedExportsOrder,S as default};
