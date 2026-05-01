import{j as t}from"./iframe-C90DYGFN.js";import{c as n}from"./utils-BQHNewu7.js";import{S as d}from"./skeleton-C_SIp0jw.js";import"./preload-helper-PPVm8Dsz.js";const l=({noOfItems:a=20,className:i,layout:m})=>m==="list"?t.jsx("div",{className:n("flex flex-col gap-2",i),children:Array.from({length:a}).map((c,o)=>t.jsx(d,{className:"h-24 w-full rounded-lg"},o))}):t.jsx("div",{className:n("grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7",i),children:Array.from({length:a}).map((c,o)=>t.jsx(d,{className:"aspect-2/3 h-64 w-45 rounded-2xl"},o))});l.__docgenInfo={description:`renders the skeleton for the media grid\r
@prop noOfItems number of skeleton cards to render`,methods:[],displayName:"MediaGridSkeleton",props:{noOfItems:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},layout:{required:!0,tsType:{name:"union",raw:"'grid' | 'list'",elements:[{name:"literal",value:"'grid'"},{name:"literal",value:"'list'"}]},description:""}}};const y={title:"Components/MediaGridSkeleton",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{className:"p-6",layout:"grid"}},e={args:{layout:"grid",noOfItems:20}},r={args:{layout:"list",noOfItems:10}},s={args:{layout:"grid",noOfItems:5}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    noOfItems: 20
  }
}`,...e.parameters?.docs?.source},description:{story:"Grid layout skeleton (default)",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'list',
    noOfItems: 10
  }
}`,...r.parameters?.docs?.source},description:{story:"List layout skeleton",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    noOfItems: 5
  }
}`,...s.parameters?.docs?.source},description:{story:"Media grid skeleton with few items",...s.parameters?.docs?.description}}};const x=["Grid","List","FewItems"];export{s as FewItems,e as Grid,r as List,x as __namedExportsOrder,y as default};
