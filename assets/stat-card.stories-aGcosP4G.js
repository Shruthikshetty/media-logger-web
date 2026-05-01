import{j as e}from"./iframe-C90DYGFN.js";import{C as d,a as c,b as p,d as m}from"./card-BTKKYbIN.js";import{c as l}from"./utils-BQHNewu7.js";import{G as h}from"./gamepad-2-B8_DtuQ-.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BZnvhNpQ.js";const n=({title:r,description:a,Icon:s,iconStyles:i,statNumber:o})=>e.jsxs(d,{className:"h-full gap-2 rounded-lg border-white/20 bg-white/10 text-left backdrop-blur-sm transition-colors hover:bg-white/15",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(p,{className:"text-gray-300",children:r}),s&&e.jsx("div",{children:e.jsx(s,{className:l("size-5",i)})})]})}),e.jsxs(m,{children:[e.jsx("p",{className:"text-2xl font-bold",children:o}),e.jsx("p",{className:"text-sm text-gray-400",children:a})]})]});n.__docgenInfo={description:`A component that displays a statistic with a title, description, icon, and number.\r
It is a card with a header and content section.\r
The header section contains the title and the icon.\r
The content section contains the statistic number and the description.\r
@param {StatCardProps} props - The props for the component.\r
@returns {JSX.Element} - The JSX element for the component.`,methods:[],displayName:"StatCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},Icon:{required:!1,tsType:{name:"LucideIcon"},description:""},iconStyles:{required:!1,tsType:{name:"string"},description:""},statNumber:{required:!0,tsType:{name:"number"},description:""}}};const j={title:"Components/StatCard",component:n,tags:["autodocs"],parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{style:{minWidth:"300px",maxWidth:"100%"},children:e.jsx(r,{})})]},t={args:{title:"Games played",description:"+3 since last week",Icon:h,iconStyles:"text-green-300",statNumber:123}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Games played',
    description: '+3 since last week',
    Icon: Gamepad2,
    iconStyles: 'text-green-300',
    statNumber: 123
  }
}`,...t.parameters?.docs?.source}}};const S=["SimpleExample"];export{t as SimpleExample,S as __namedExportsOrder,j as default};
