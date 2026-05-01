import{j as e}from"./iframe-C90DYGFN.js";import{B as w}from"./button-COc3hSJE.js";import{b as u,S as p}from"./screen.constants-bV3SZeaq.js";import{c as S}from"./utils-BQHNewu7.js";import{P as v}from"./plus-CQvTdXpG.js";import{c as d}from"./createLucideIcon-BZnvhNpQ.js";import{C as T}from"./clock-HmU6pUgA.js";import{P as N}from"./play-DclCDQ3-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlYFGBPj.js";import"./index-LHNt3CwB.js";import"./gamepad-2-B8_DtuQ-.js";const j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$=d("circle-check",j);const A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],k=d("circle-x",A);const C=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],G=d("compass",C),y=({status:g,mediaType:r,handleAction:h=()=>{},className:f})=>{const{plural:t,icon:b}=u[r],a=(()=>{switch(g){case"Watching":case"Playing":return{icon:N,title:`Not ${r==="Game"?"playing":"watching"} anything right now`,subtitle:`Your current ${t} list is empty. Time to discover something new!`,action:`Browse ${t}`,color:"from-primary/20 to-primary/10"};case"Completed":return{icon:$,title:"Nothing completed yet",subtitle:`You haven't finished any ${t} yet. Keep going!`,action:`Find ${t} to complete`,color:"from-success/20 to-success/10"};case"Planning":return{icon:T,title:`Your ${r==="Game"?"backlog":"watch list"} is empty`,subtitle:`No ${t} planned for later. Start building your list!`,action:`Add ${t} to plan`,color:"from-warning/20 to-warning/10"};case"Dropped":return{icon:k,title:"Nothing dropped",subtitle:`You haven't dropped any ${t}. That's actually great!`,action:`Browse ${t}`,color:"from-destructive/20 to-destructive/10"};case"All":return{icon:b,title:`No ${t} in your library`,subtitle:`Start adding ${t} to track your ${r==="Game"?"gaming":"watching"} journey!`,action:`Discover ${t}`,color:"from-primary/20 to-primary/10"};default:return{icon:G,title:`Discover new ${t}`,subtitle:`Start exploring and find your next favorite ${u[r].singular}!`,action:`Browse ${t}`,color:"from-primary/20 to-primary/10"}}})(),x=a.icon;return e.jsxs("div",{className:S("bg-card/50 to-card/30 border-border/30 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border bg-linear-to-b px-8 py-16 backdrop-blur-sm",f),children:[e.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden rounded-3xl",children:[e.jsx("div",{className:`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-linear-to-br ${a.color} opacity-60 blur-3xl`}),e.jsx("div",{className:`absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-linear-to-br ${a.color} opacity-60 blur-3xl`})]}),e.jsxs("div",{className:"relative mb-8",children:[e.jsx("div",{className:`bg-linear-to-br ${a.color} border-primary/20 flex h-32 w-32 items-center justify-center rounded-3xl border shadow-lg`,children:e.jsx(x,{className:"text-primary/70 h-16 w-16",strokeWidth:1.5})}),e.jsx(p,{className:"text-primary/40 absolute -top-2 -right-2 h-6 w-6 animate-pulse"}),e.jsx("div",{className:"bg-primary/30 absolute -bottom-1 -left-1 h-4 w-4 animate-bounce rounded-full",style:{animationDelay:"0.2s"}}),e.jsx("div",{className:"bg-primary/20 absolute top-1/2 -right-4 h-3 w-3 animate-bounce rounded-full",style:{animationDelay:"0.4s"}})]}),e.jsx("h3",{className:"text-foreground mb-2 text-center text-xl font-bold",children:a.title}),e.jsx("p",{className:"text-muted-foreground mb-6 max-w-sm text-center",children:a.subtitle}),e.jsxs(w,{onClick:h,className:"active:scale-95",children:[e.jsx(v,{className:"size-4"}),a.action]}),e.jsxs("p",{className:"text-muted-foreground/60 mt-8 flex items-center gap-2 text-xs",children:[e.jsx(p,{className:"h-3 w-3"}),"Start building your collection",e.jsx(p,{className:"h-3 w-3"})]})]})};y.__docgenInfo={description:`EmptyStatusState component to display a placeholder instead of an empty list\r
@param status - The status of the media type\r
@param mediaType - The type of media (Movie, TVShow, Game)\r
@param handleAction - Optional callback function to handle the action button click\r
@returns EmptyStatusState component`,methods:[],displayName:"EmptyStatusState",props:{status:{required:!0,tsType:{name:"union",raw:"MediaStatus | 'All'",elements:[{name:"MediaStatus"},{name:"literal",value:"'All'"}]},description:""},mediaType:{required:!0,tsType:{name:"OnModelType"},description:""},handleAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/EmptyStatusState",component:y,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{status:{control:"select",options:["Planning","Playing","Watching","Completed","Dropped","All"]},mediaType:{control:"select",options:["Movie","TVShow","Game"]}}},o={args:{status:"Planning",mediaType:"Movie"}},s={args:{status:"Playing",mediaType:"Game"}},n={args:{status:"Completed",mediaType:"TVShow"}},i={args:{status:"All",mediaType:"Movie"}},l={args:{status:"All",mediaType:"Game"}},c={args:{status:"All",mediaType:"TVShow"}},m={args:{status:"Dropped",mediaType:"Game"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Planning',
    mediaType: 'Movie'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Playing',
    mediaType: 'Game'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Completed',
    mediaType: 'TVShow'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'All',
    mediaType: 'Movie'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'All',
    mediaType: 'Game'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'All',
    mediaType: 'TVShow'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Dropped',
    mediaType: 'Game'
  }
}`,...m.parameters?.docs?.source}}};const F=["MoviePlanning","GamePlaying","TVShowCompleted","AllMovies","AllGames","AllTVShows","DroppedGame"];export{l as AllGames,i as AllMovies,c as AllTVShows,m as DroppedGame,s as GamePlaying,o as MoviePlanning,n as TVShowCompleted,F as __namedExportsOrder,W as default};
