import{C as o}from"./collapsable-badge-list-DauF0NpW.js";import"./iframe-C90DYGFN.js";import"./preload-helper-PPVm8Dsz.js";import"./badge-bUYFVylf.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-BlYFGBPj.js";import"./plus-CQvTdXpG.js";import"./createLucideIcon-BZnvhNpQ.js";const g={title:"Components/CollapsableBadgeList",component:o,parameters:{layout:"centered",docs:{description:{component:`A list of badges that automatically collapses when it exceeds a certain count.\r
Useful for displaying tags, genres, or categories in limited space.`}}},tags:["autodocs"],argTypes:{maxDisplayed:{control:{type:"number",min:1,max:10},description:"Maximum number of items to show before collapsing"},isDisabled:{control:"boolean",description:"If true, the expand/collapse button is non-interactive"}}},r={args:{list:["Action","Adventure","RPG"]}},e={args:{list:["Sci-Fi","Cyberpunk","Dystopian","Thriller","Mystery","Philosophical"],maxDisplayed:3}},s={args:{list:["React","Next.js","TypeScript","Tailwind","Zustand","Storybook"],maxDisplayed:1}},t={args:{...e.args,isDisabled:!0}},a={args:{list:["Primary","Secondary","Accent","Ghost"],maxDisplayed:2,style:{root:"bg-slate-100 p-4 rounded-xl border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800",itemBadge:"bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-3 py-1",buttonBadge:"bg-amber-500 text-amber-950 hover:bg-amber-400 font-bold"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    list: ['Action', 'Adventure', 'RPG']
  }
}`,...r.parameters?.docs?.source},description:{story:"A standard list with fewer items than the default max (3).",...r.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    list: ['Sci-Fi', 'Cyberpunk', 'Dystopian', 'Thriller', 'Mystery', 'Philosophical'],
    maxDisplayed: 3
  }
}`,...e.parameters?.docs?.source},description:{story:"A longer list that demonstrates the collapse functionality.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    list: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'Storybook'],
    maxDisplayed: 1
  }
}`,...s.parameters?.docs?.source},description:{story:'Customizing the number of visible items before the "+N" badge appears.',...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Collapsed.args,
    isDisabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:'When disabled, the badges can be seen but the "+N" button cannot be clicked.',...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    list: ['Primary', 'Secondary', 'Accent', 'Ghost'],
    maxDisplayed: 2,
    style: {
      root: 'bg-slate-100 p-4 rounded-xl border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-800',
      itemBadge: 'bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-3 py-1',
      buttonBadge: 'bg-amber-500 text-amber-950 hover:bg-amber-400 font-bold'
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Demonstrating the use of custom styles via the `style` prop.",...a.parameters?.docs?.description}}};const y=["Default","Collapsed","CustomMaxDisplay","Disabled","CustomStyling"];export{e as Collapsed,s as CustomMaxDisplay,a as CustomStyling,r as Default,t as Disabled,y as __namedExportsOrder,g as default};
