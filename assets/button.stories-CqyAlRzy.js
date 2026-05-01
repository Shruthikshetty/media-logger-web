import{B as c}from"./button-COc3hSJE.js";import"./iframe-C90DYGFN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlYFGBPj.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";const{expect:i,fn:u}=__STORYBOOK_MODULE_TEST__,B={title:"Ui/Button",component:c,tags:["autodocs"],parameters:{layout:"centered"},args:{"aria-label":"story button"}},t={args:{children:"Button"}},e={args:{children:"Custom Button"}},n={args:{children:"Click me",onClick:u()},play:async({args:a,canvas:o,userEvent:r})=>{const s=o.getByRole("button");await r.click(s),await i(a.onClick).toHaveBeenCalled()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Custom Button'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    onClick: fn()
  },
  // this is a custom play function
  // used to test user interactions
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button');
    // simulate user click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...n.parameters?.docs?.source}}};const k=["Default","CustomText","WithOnClick"];export{e as CustomText,t as Default,n as WithOnClick,k as __namedExportsOrder,B as default};
