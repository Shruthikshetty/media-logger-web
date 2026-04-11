import{j as r}from"./iframe-dcUv9G_n.js";import{c as d}from"./utils-BQHNewu7.js";import{S as i}from"./skeleton-Dv3glVuR.js";import"./preload-helper-PPVm8Dsz.js";const o=({noOfItems:t=20,className:a})=>r.jsx("div",{className:d("grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7",a),children:Array.from({length:t}).map((m,n)=>r.jsx(i,{className:"aspect-2/3 h-64 w-45 rounded-2xl"},n))});o.__docgenInfo={description:`renders the skeleton for the media grid\r
@prop noOfItems number of skeleton cards to render`,methods:[],displayName:"MediaGridSkeleton",props:{noOfItems:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Components/MediaGridSkeleton",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{className:"p-6"}},e={args:{noOfItems:20}},s={args:{noOfItems:5}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    noOfItems: 20
  }
}`,...e.parameters?.docs?.source},description:{story:"Default media grid skeleton with 20 items",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    noOfItems: 5
  }
}`,...s.parameters?.docs?.source},description:{story:"Media grid skeleton with few items",...s.parameters?.docs?.description}}};const g=["Default","FewItems"];export{e as Default,s as FewItems,g as __namedExportsOrder,f as default};
