import{j as e}from"./iframe-C90DYGFN.js";import{C as M,d as D,e as S}from"./card-BTKKYbIN.js";import{n as j}from"./image-DfOUpOLs.js";import{B as y}from"./button-COc3hSJE.js";import{C as N}from"./collapsable-badge-list-DauF0NpW.js";import{M as C}from"./screen.constants-bV3SZeaq.js";import{c as _}from"./utils-BQHNewu7.js";import{S as A}from"./status-badge-R9QOV9Xm.js";import{S as k}from"./star-BsvgdFfY.js";import{T as q}from"./trash-2-meR0990h.js";import{P}from"./plus-CQvTdXpG.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-BFXnmYm4.js";import"./index-BlYFGBPj.js";import"./index-LHNt3CwB.js";import"./badge-bUYFVylf.js";import"./createLucideIcon-BZnvhNpQ.js";import"./gamepad-2-B8_DtuQ-.js";const m=({mediaType:d,imageUrl:c,rating:p,genres:g,mediaEntry:f,title:h,onAddTo:x=()=>{},onCardClick:v=()=>{},onDelete:w=()=>{},disableAdd:b=!1,disableDelete:T=!1})=>{const s=C[d];return e.jsxs(M,{className:"border-border hover:shadow-primary/15 w-45 gap-0 p-0 transition-[transform,box-shadow] duration-300 will-change-transform hover:scale-103 hover:shadow-xl",children:[e.jsx(D,{className:"m-0 cursor-pointer overflow-hidden rounded-lg p-0",onClick:v,role:"button",tabIndex:0,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),v())},children:e.jsxs("div",{className:"relative aspect-2/3 w-full",children:[e.jsxs("div",{className:"absolute z-10 flex w-full flex-row justify-between p-2",children:[e.jsx("div",{className:"bg-background/70 flex flex-row items-center gap-1 rounded-sm p-1 text-sm",children:s&&e.jsx(s.icon,{className:_("size-4",s.color)})}),p?e.jsxs("p",{className:"bg-background/70 flex flex-row items-center gap-1 rounded-xl px-2 text-sm",children:[e.jsx(k,{className:"size-3 text-yellow-500",fill:"currentColor"}),p]}):null]}),c&&e.jsx(j,{src:c,alt:h??"media-image",fill:!0,className:"object-cover",sizes:"(max-width: 768px) 50vw, 20vw",priority:!1}),!c&&e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:s?e.jsx(s.icon,{className:"text-muted-foreground size-10"}):e.jsx("p",{className:"text-muted-foreground",children:"No image"})})]})}),e.jsxs(S,{className:"flex flex-col items-baseline gap-1 px-1.5",children:[e.jsx("p",{className:"line-clamp-2 text-base font-semibold",children:h}),e.jsx("div",{children:g?e.jsx(N,{list:g,maxDisplayed:3,isDisabled:!0}):null}),f?e.jsxs("div",{className:"flex w-full flex-row items-center justify-between gap-1",children:[e.jsx(A,{status:f?.status}),e.jsx(y,{variant:"ghost",className:"hover:text-destructive hover:bg-transparent!","aria-label":"Delete media",onClick:w,disabled:T,children:e.jsx(q,{"aria-hidden":!0})})]}):e.jsxs(y,{variant:"ghost",className:"hover:bg-primary/5! text-primary hover:text-primary w-full","aria-label":"Add to list",onClick:x,disabled:b,children:["Add to List",e.jsx(P,{})]})]})]})};m.__docgenInfo={description:`A component that displays media (Movie, Game, or TV Show) information in a card format.\r
Includes poster image, rating, and status controls.`,methods:[],displayName:"MediaCard",props:{mediaType:{required:!0,tsType:{name:"union",raw:"'Movie' | 'TvShow' | 'Game'",elements:[{name:"literal",value:"'Movie'"},{name:"literal",value:"'TvShow'"},{name:"literal",value:"'Game'"}]},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},rating:{required:!1,tsType:{name:"number"},description:""},title:{required:!1,tsType:{name:"string"},description:""},genres:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},mediaEntry:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  _id: string;\r
  user: string;\r
  onModel: OnModelType;\r
  status: MediaStatus;\r
  rating?: number;\r
}`,signature:{properties:[{key:"_id",value:{name:"string",required:!0}},{key:"user",value:{name:"string",required:!0}},{key:"onModel",value:{name:"union",raw:"'Movie' | 'TVShow' | 'Game'",elements:[{name:"literal",value:"'Movie'"},{name:"literal",value:"'TVShow'"},{name:"literal",value:"'Game'"}],required:!0}},{key:"status",value:{name:"union",raw:`| 'Planning'\r
| 'Playing'\r
| 'Watching'\r
| 'Completed'\r
| 'Dropped'`,elements:[{name:"literal",value:"'Planning'"},{name:"literal",value:"'Playing'"},{name:"literal",value:"'Watching'"},{name:"literal",value:"'Completed'"},{name:"literal",value:"'Dropped'"}],required:!0}},{key:"rating",value:{name:"number",required:!1}}]}},description:""},onAddTo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onCardClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},disableAdd:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Z={title:"Components/MediaCard",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onAddTo:{action:"added to list"},onCardClick:{action:"card clicked"},onDelete:{action:"deleted"},disableAdd:{control:"boolean"},disableDelete:{control:"boolean"}}},a={args:{title:"The Neural Nexus",mediaType:"Movie",rating:8.9,imageUrl:"/stories/movie-poster.png",genres:["Sci-Fi","Thriller","Mystery"]}},t={args:{title:"Dragon Quest: Final Flight",mediaType:"Game",rating:9.5,imageUrl:"/stories/game-cover.png",genres:["RPG","Open World","Action"]}},r={args:{title:"Shadows of the Pines",mediaType:"TvShow",rating:8.2,imageUrl:"/stories/tv-show-poster.png",genres:["Drama","Supernatural"]}},i={args:{...a.args,mediaEntry:{_id:"entry_123",user:"user_1",onModel:"Movie",status:"Watching",rating:9}}},n={args:{...r.args,mediaEntry:{_id:"entry_456",user:"user_1",onModel:"TVShow",status:"Watching"}}},o={args:{title:"Undocumented Media",mediaType:"Movie",rating:0,genres:["Unknown"]}},l={render:d=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(m,{...d,title:"Disabled Add",disableAdd:!0}),e.jsx(m,{...d,title:"Disabled Delete",disableDelete:!0,mediaEntry:{_id:"1",user:"1",onModel:"Movie",status:"Watching"}})]}),args:{...a.args}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'The Neural Nexus',
    mediaType: 'Movie',
    rating: 8.9,
    imageUrl: '/stories/movie-poster.png',
    genres: ['Sci-Fi', 'Thriller', 'Mystery']
  }
}`,...a.parameters?.docs?.source},description:{story:"Movie variation with a high rating and multiple genres.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dragon Quest: Final Flight',
    mediaType: 'Game',
    rating: 9.5,
    imageUrl: '/stories/game-cover.png',
    genres: ['RPG', 'Open World', 'Action']
  }
}`,...t.parameters?.docs?.source},description:{story:"Game variation showcasing the different icon and styling.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Shadows of the Pines',
    mediaType: 'TvShow',
    rating: 8.2,
    imageUrl: '/stories/tv-show-poster.png',
    genres: ['Drama', 'Supernatural']
  }
}`,...r.parameters?.docs?.source},description:{story:"TV Show variation with a moody poster.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...MovieDefault.args,
    mediaEntry: {
      _id: 'entry_123',
      user: 'user_1',
      onModel: 'Movie',
      status: 'Watching',
      rating: 9
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`Media card showing a "Status" badge instead of an "Add to List" button.\r
This represents a media item that is already in the user's collection.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...TvShowDefault.args,
    mediaEntry: {
      _id: 'entry_456',
      user: 'user_1',
      onModel: 'TVShow',
      status: 'Watching'
    }
  }
}`,...n.parameters?.docs?.source},description:{story:'Media card currently in progress (e.g., "Watching").',...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Undocumented Media',
    mediaType: 'Movie',
    rating: 0,
    genres: ['Unknown']
  }
}`,...o.parameters?.docs?.source},description:{story:"Variation for when an image is missing, showing the placeholder icon.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">\r
      <MediaCard {...args} title="Disabled Add" disableAdd={true} />\r
      <MediaCard {...args} title="Disabled Delete" disableDelete={true} mediaEntry={{
      _id: '1',
      user: '1',
      onModel: 'Movie',
      status: 'Watching'
    }} />\r
    </div>,
  args: {
    ...MovieDefault.args
  }
}`,...l.parameters?.docs?.source},description:{story:'Story showcasing the disabled states for both "Add to List" and "Delete" buttons.',...l.parameters?.docs?.description}}};const $=["MovieDefault","GameDefault","TvShowDefault","InCollection","InProgress","NoImage","DisabledStates"];export{l as DisabledStates,t as GameDefault,i as InCollection,n as InProgress,a as MovieDefault,o as NoImage,r as TvShowDefault,$ as __namedExportsOrder,Z as default};
