import{r as u,j as e}from"./iframe-C90DYGFN.js";import{n as p}from"./image-DfOUpOLs.js";import{C as g,a as x,b as h,d as b}from"./card-BTKKYbIN.js";import{B as f}from"./button-COc3hSJE.js";import{Y as y}from"./youtube-player-B-6vBv5V.js";import{c as w}from"./utils-BQHNewu7.js";import{P as o}from"./play-DclCDQ3-.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-BFXnmYm4.js";import"./index-BlYFGBPj.js";import"./index-LHNt3CwB.js";import"./createLucideIcon-BZnvhNpQ.js";const m=({videoId:t,title:i="Trailer",className:d})=>{const[l,n]=u.useState(!1);if(!t)return null;const c=`https://img.youtube.com/vi/${t}/maxresdefault.jpg`;return e.jsxs(g,{className:w("border-border gap-0 overflow-hidden",d),children:[e.jsxs(x,{className:"flex flex-row items-center justify-between px-4 py-3",children:[e.jsxs(h,{className:"flex items-center gap-2 text-xl font-semibold",children:[e.jsx(o,{className:"text-primary stroke-primary h-4.5 w-4.5"}),i]}),!l&&e.jsxs(f,{size:"sm",variant:"outline",className:"border-primary text-primary! hover:bg-primary/10 flex items-center gap-1.5","aria-label":"Play trailer",onClick:()=>n(!0),children:[e.jsx(o,{className:"stroke-primary h-3.5 w-3.5"}),"Play"]})]}),e.jsx(b,{className:"p-0",children:l?e.jsx(y,{videoId:t,autoplay:1}):e.jsxs("button",{className:"group relative block w-full cursor-pointer",onClick:()=>n(!0),"aria-label":"Play trailer",children:[e.jsx("div",{className:"relative aspect-video w-full",children:e.jsx(p,{src:c,alt:`${i} thumbnail`,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, 50vw"})}),e.jsx("div",{className:"absolute inset-0 bg-black/20 transition-colors duration-200 group-hover:bg-black/40"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"bg-primary/80 group-hover:bg-primary flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all duration-200 group-hover:scale-110",children:e.jsx(o,{className:"h-7 w-7 translate-x-0.5 stroke-white text-white"})})})]})})]})};m.__docgenInfo={description:`YoutubePlayerCard wraps the YoutubePlayer in a card with a thumbnail\r
preview. Clicking the thumbnail or the "Play" button reveals the\r
embedded player.\r
\r
@param {string}  videoId   - YouTube video ID\r
@param {string}  [title]   - Card header label (defaults to "Trailer")\r
@param {string}  [className] - Extra classes for the outer Card`,methods:[],displayName:"YoutubePlayerCard",props:{videoId:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Trailer'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/YoutubePlayerCard",component:m,parameters:{layout:"padded"},tags:["autodocs"]},r={args:{videoId:"dQw4w9WgXcQ"}},a={args:{videoId:"dQw4w9WgXcQ",title:"Custom Trailer Title"}},s={args:{videoId:"dQw4w9WgXcQ",className:"max-w-md"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    videoId: 'dQw4w9WgXcQ'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    videoId: 'dQw4w9WgXcQ',
    title: 'Custom Trailer Title'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    videoId: 'dQw4w9WgXcQ',
    className: 'max-w-md'
  }
}`,...s.parameters?.docs?.source}}};const B=["Basic","CustomTitle","CustomWidth"];export{r as Basic,a as CustomTitle,s as CustomWidth,B as __namedExportsOrder,_ as default};
