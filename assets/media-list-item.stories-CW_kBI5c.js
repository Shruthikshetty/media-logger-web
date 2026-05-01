import{j as e}from"./iframe-C90DYGFN.js";import{C as N,f as j}from"./date.utils-GfYny7A2.js";import{M as S}from"./screen.constants-bV3SZeaq.js";import{c as M}from"./utils-BQHNewu7.js";import{C as k,d as A}from"./card-BTKKYbIN.js";import{n as C}from"./image-DfOUpOLs.js";import{C as I}from"./collapsable-badge-list-DauF0NpW.js";import{S as q}from"./status-badge-R9QOV9Xm.js";import{B as y}from"./button-COc3hSJE.js";import{S as G}from"./star-BsvgdFfY.js";import{C as P}from"./clock-HmU6pUgA.js";import{T as U}from"./trash-2-meR0990h.js";import{P as L}from"./plus-CQvTdXpG.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BZnvhNpQ.js";import"./gamepad-2-B8_DtuQ-.js";import"./use-merged-ref-BFXnmYm4.js";import"./badge-bUYFVylf.js";import"./index-LHNt3CwB.js";import"./index-BlYFGBPj.js";const V=a=>{if(!a||a<=0)return"???";if(a<120)return`${a} min`;const r=a/60;return`${Number(r.toFixed(1))} hrs`},m=({imageUrl:a,title:r,mediaType:p,rating:u,releaseDate:g,length:f,description:v,status:c,genres:h=[],onMediaClick:x=()=>{},onAddTo:b=()=>{},onDelete:w=()=>{},disableAdd:T=!1,disableDelete:D=!1})=>{const s=S[p];return e.jsx(k,{className:"border-border px-2 py-2",children:e.jsxs(A,{className:"flex flex-row gap-2 px-0 py-0",children:[e.jsx("button",{className:"aspect-2/3 h-[135px] w-[90px] shrink-0 overflow-hidden p-0",onClick:x,"aria-label":`open ${r}`,children:a?e.jsx(C,{src:a,alt:r??"media-image",width:90,height:135,className:"aspect-2/3 rounded-sm object-cover",priority:!1}):e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:s&&e.jsx(s.icon,{className:"text-muted-foreground size-10"})})}),e.jsxs("button",{className:"flex h-full grow flex-col items-start gap-2 text-left",onClick:x,"aria-label":`open ${r}`,children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[s&&e.jsx(s.icon,{className:M("size-4",s.color)}),e.jsx("p",{className:"line-clamp-2 text-base font-semibold",children:r}),c?e.jsx(q,{status:c,className:"py-0.4"}):null]}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[u?e.jsxs("p",{className:"flex flex-row items-center gap-1 text-sm sm:text-base",children:[e.jsx(G,{className:"sm:3.5 size-3 text-yellow-500",fill:"currentColor"}),u]}):null,g?e.jsxs("p",{className:"flex flex-row items-center gap-1 text-sm sm:text-base",children:[e.jsx(N,{className:"size-3 sm:size-3.5"}),j(g)]}):null,f?e.jsxs("p",{className:"flex flex-row items-center gap-1 text-sm sm:text-base",children:[e.jsx(P,{className:"size-3 sm:size-3.5"}),V(f)]}):null]}),h.length>0?e.jsx(I,{list:h,maxDisplayed:5}):null,e.jsx("p",{className:"text-muted-foreground line-clamp-2 text-start text-sm",children:v})]}),e.jsx("div",{className:"flex flex-row items-center gap-1",children:c?e.jsx(e.Fragment,{children:e.jsx(y,{variant:"ghost",className:"hover:text-destructive hover:bg-transparent!","aria-label":"Delete media",onClick:w,disabled:D,children:e.jsx(U,{"aria-hidden":!0})})}):e.jsxs(y,{variant:"ghost",className:"hover:bg-primary/5! text-primary hover:text-primary w-full","aria-label":"Add to list",onClick:b,disabled:T,children:[e.jsx(L,{}),e.jsx("span",{className:"hidden sm:block",children:"Add to List"})]})})]})})};m.__docgenInfo={description:`A component that displays media (Movie, Game, or TV Show) information in a list format.\r
this display is used in list display mode\r
\r
@param imageUrl - URL of the media image\r
@param title - Title of the media\r
@param mediaType - Type of the media\r
@param rating - Rating of the media\r
@param releaseDate - Release date of the media\r
@param length - Length of the media in minutes\r
@param description - Description of the media\r
@param status - Status of the media\r
@param genres - Genres of the media`,methods:[],displayName:"MediaListItem",props:{imageUrl:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},mediaType:{required:!0,tsType:{name:"union",raw:"'Movie' | 'TvShow' | 'Game'",elements:[{name:"literal",value:"'Movie'"},{name:"literal",value:"'TvShow'"},{name:"literal",value:"'Game'"}]},description:""},rating:{required:!1,tsType:{name:"number"},description:""},releaseDate:{required:!1,tsType:{name:"string"},description:""},length:{required:!1,tsType:{name:"number"},description:""},description:{required:!0,tsType:{name:"string"},description:""},genres:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},status:{required:!1,tsType:{name:"union",raw:`| 'Planning'\r
| 'Playing'\r
| 'Watching'\r
| 'Completed'\r
| 'Dropped'`,elements:[{name:"literal",value:"'Planning'"},{name:"literal",value:"'Playing'"},{name:"literal",value:"'Watching'"},{name:"literal",value:"'Completed'"},{name:"literal",value:"'Dropped'"}]},description:""},onMediaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onAddTo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},disableAdd:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const se={title:"Components/MediaListItem",component:m,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{onAddTo:{action:"added to list"},onMediaClick:{action:"media clicked"},onDelete:{action:"deleted"},disableAdd:{control:"boolean"},disableDelete:{control:"boolean"}}},t={args:{title:"The Neural Nexus",mediaType:"Movie",rating:8.9,imageUrl:"/stories/movie-poster.png",releaseDate:"2024-05-15",length:124,description:"In a future where memories can be traded like currency, a detective uncovers a conspiracy that threatens the fabric of reality itself.",genres:["Sci-Fi","Thriller","Mystery"]}},i={args:{title:"Dragon Quest: Final Flight",mediaType:"Game",rating:9.5,imageUrl:"/stories/game-cover.png",releaseDate:"2023-11-20",length:3600,description:"An epic open-world RPG where you take flight on the back of legendary dragons to reclaim a lost kingdom from an ancient evil.",genres:["RPG","Open World","Action"]}},n={args:{title:"Shadows of the Pines",mediaType:"TvShow",rating:8.2,imageUrl:"/stories/tv-show-poster.png",releaseDate:"2022-09-10",length:45,description:"A small town is rocked by mysterious disappearances that lead back to a dense forest with a dark past.",genres:["Drama","Supernatural"]}},o={args:{...t.args,status:"Watching"}},l={args:{title:"Undocumented Media",mediaType:"Movie",rating:0,description:"No description available for this mysterious title.",genres:["Unknown"]}},d={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(m,{...a,title:"Disabled Add",disableAdd:!0}),e.jsx(m,{...a,title:"Disabled Delete",disableDelete:!0,status:"Watching"})]}),args:{...t.args}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'The Neural Nexus',
    mediaType: 'Movie',
    rating: 8.9,
    imageUrl: '/stories/movie-poster.png',
    releaseDate: '2024-05-15',
    length: 124,
    description: 'In a future where memories can be traded like currency, a detective uncovers a conspiracy that threatens the fabric of reality itself.',
    genres: ['Sci-Fi', 'Thriller', 'Mystery']
  }
}`,...t.parameters?.docs?.source},description:{story:"Movie variation with release date, length, and description.",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dragon Quest: Final Flight',
    mediaType: 'Game',
    rating: 9.5,
    imageUrl: '/stories/game-cover.png',
    releaseDate: '2023-11-20',
    length: 3600,
    // 60 hours
    description: 'An epic open-world RPG where you take flight on the back of legendary dragons to reclaim a lost kingdom from an ancient evil.',
    genres: ['RPG', 'Open World', 'Action']
  }
}`,...i.parameters?.docs?.source},description:{story:"Game variation showcasing the duration formatting (hours).",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Shadows of the Pines',
    mediaType: 'TvShow',
    rating: 8.2,
    imageUrl: '/stories/tv-show-poster.png',
    releaseDate: '2022-09-10',
    length: 45,
    // episode length
    description: 'A small town is rocked by mysterious disappearances that lead back to a dense forest with a dark past.',
    genres: ['Drama', 'Supernatural']
  }
}`,...n.parameters?.docs?.source},description:{story:"TV Show variation.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...MovieDefault.args,
    status: 'Watching'
  }
}`,...o.parameters?.docs?.source},description:{story:`Media list item showing a "Status" badge instead of an "Add to List" button.\r
This represents a media item that is already in the user's collection.`,...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Undocumented Media',
    mediaType: 'Movie',
    rating: 0,
    description: 'No description available for this mysterious title.',
    genres: ['Unknown']
  }
}`,...l.parameters?.docs?.source},description:{story:"Variation for when an image is missing, showing the placeholder icon.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">\r
      <MediaListItem {...args} title="Disabled Add" disableAdd={true} />\r
      <MediaListItem {...args} title="Disabled Delete" disableDelete={true} status="Watching" />\r
    </div>,
  args: {
    ...MovieDefault.args
  }
}`,...d.parameters?.docs?.source},description:{story:'Story showcasing the disabled states for both "Add to List" and "Delete" buttons.',...d.parameters?.docs?.description}}};const ie=["MovieDefault","GameDefault","TvShowDefault","InCollection","NoImage","DisabledStates"];export{d as DisabledStates,i as GameDefault,o as InCollection,t as MovieDefault,l as NoImage,n as TvShowDefault,ie as __namedExportsOrder,se as default};
