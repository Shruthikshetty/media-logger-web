import{r as s,i as x,j as g}from"./iframe-BpzKIOUW.js";import{c as C}from"./index-Cua7R4oS.js";import{c as _}from"./index-B_jtOnfb.js";import{c as k}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";var E=Symbol.for("react.lazy"),m=x[" use ".trim().toString()];function S(e){return typeof e=="object"&&e!==null&&"then"in e}function y(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===E&&"_payload"in e&&S(e._payload)}function B(e){const t=O(e),n=s.forwardRef((o,r)=>{let{children:a,...l}=o;y(a)&&typeof m=="function"&&(a=m(a._payload));const i=s.Children.toArray(a),c=i.find(w);if(c){const u=c.props.children,h=i.map(v=>v===c?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:v);return g.jsx(t,{...l,ref:r,children:s.isValidElement(u)?s.cloneElement(u,void 0,h):null})}return g.jsx(t,{...l,ref:r,children:a})});return n.displayName=`${e}.Slot`,n}var R=B("Slot");function O(e){const t=s.forwardRef((n,o)=>{let{children:r,...a}=n;if(y(r)&&typeof m=="function"&&(r=m(r._payload)),s.isValidElement(r)){const l=V(r),i=T(a,r.props);return r.type!==s.Fragment&&(i.ref=o?C(o,l):l),s.cloneElement(r,i)}return s.Children.count(r)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var j=Symbol("radix.slottable");function w(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===j}function T(e,t){const n={...t};for(const o in t){const r=e[o],a=t[o];/^on[A-Z]/.test(o)?r&&a?n[o]=(...i)=>{const c=a(...i);return r(...i),c}:r&&(n[o]=r):o==="style"?n[o]={...r,...a}:o==="className"&&(n[o]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function V(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const z=_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function b({className:e,variant:t="default",size:n="default",asChild:o=!1,...r}){const a=o?R:"button";return g.jsx(a,{"data-slot":"button","data-variant":t,"data-size":n,className:k(z({variant:t,size:n,className:e})),...r})}b.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const{expect:P,fn:W}=__STORYBOOK_MODULE_TEST__,$={title:"Ui/Button",component:b,tags:["autodocs"],parameters:{layout:"centered"},args:{"aria-label":"story button"}},d={args:{children:"Button"}},p={args:{children:"Custom Button"}},f={args:{children:"Click me",onClick:W()},play:async({args:e,canvas:t,userEvent:n})=>{const o=t.getByRole("button");await n.click(o),await P(e.onClick).toHaveBeenCalled()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Custom Button'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const H=["Default","CustomText","WithOnClick"];export{p as CustomText,d as Default,f as WithOnClick,H as __namedExportsOrder,$ as default};
