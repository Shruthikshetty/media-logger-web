import{j as e}from"./iframe-dcUv9G_n.js";import{S as o}from"./skeleton-Dv3glVuR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";const p={title:"Ui/Skeleton",component:o,tags:["autodocs"],parameters:{layout:"centered"}},s={args:{className:"h-4 w-[250px]"}},r={args:{className:"h-12 w-12 rounded-full"}},a={render:()=>e.jsxs("div",{className:"flex flex-col space-y-3",children:[e.jsx(o,{className:"h-[125px] w-[250px] rounded-xl"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{className:"h-4 w-[250px]"}),e.jsx(o,{className:"h-4 w-[200px]"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'h-4 w-[250px]'
  }
}`,...s.parameters?.docs?.source},description:{story:"Default skeleton this is by passing height and width",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'h-12 w-12 rounded-full'
  }
}`,...r.parameters?.docs?.source},description:{story:"Circle skeleton this is by passing proper styles",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-3">\r
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />\r
      <div className="space-y-2">\r
        <Skeleton className="h-4 w-[250px]" />\r
        <Skeleton className="h-4 w-[200px]" />\r
      </div>\r
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Card skeleton this is by nesting skeleton component",...a.parameters?.docs?.description}}};const i=["Default","Circle","Card"];export{a as Card,r as Circle,s as Default,i as __namedExportsOrder,p as default};
