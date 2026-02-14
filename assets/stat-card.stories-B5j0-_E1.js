import{j as e}from"./iframe-BpzKIOUW.js";import{C as c,a as d,b as p,d as m}from"./card-GzS3Io9_.js";import{c as l}from"./utils-CDN07tui.js";import{c as x}from"./createLucideIcon-yDZvBcCy.js";import"./preload-helper-PPVm8Dsz.js";const h=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],u=x("gamepad-2",h),r=({title:s,description:a,Icon:n,iconStyles:i,statNumber:o})=>e.jsxs(c,{className:"gap-2 rounded-lg border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/15",children:[e.jsx(d,{children:e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(p,{className:"text-gray-300",children:s}),n&&e.jsx("div",{children:e.jsx(n,{className:l("size-5",i)})})]})}),e.jsxs(m,{children:[e.jsx("p",{className:"text-2xl font-bold",children:o}),e.jsx("p",{className:"text-sm text-gray-400",children:a})]})]});r.__docgenInfo={description:`A component that displays a statistic with a title, description, icon, and number.
It is a card with a header and content section.
The header section contains the title and the icon.
The content section contains the statistic number and the description.
@param {StatCardProps} props - The props for the component.
@returns {JSX.Element} - The JSX element for the component.`,methods:[],displayName:"StatCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},Icon:{required:!1,tsType:{name:"LucideIcon"},description:""},iconStyles:{required:!1,tsType:{name:"string"},description:""},statNumber:{required:!0,tsType:{name:"number"},description:""}}};const C={title:"Components/StatCard",component:r,tags:["autodocs"],parameters:{layout:"centered"},decorators:[s=>e.jsx("div",{style:{minWidth:"300px",maxWidth:"100%"},children:e.jsx(s,{})})]},t={args:{title:"Games played",description:"+3 since last week",Icon:u,iconStyles:"text-green-300",statNumber:123}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Games played',
    description: '+3 since last week',
    Icon: Gamepad2,
    iconStyles: 'text-green-300',
    statNumber: 123
  }
}`,...t.parameters?.docs?.source}}};const S=["SimpleExample"];export{t as SimpleExample,S as __namedExportsOrder,C as default};
