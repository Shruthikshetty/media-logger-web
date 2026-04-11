import{r as j,j as a}from"./iframe-dcUv9G_n.js";import{P as y,a as b,b as u,c as D,e as _,d as C,f as R}from"./pagination-D2jHbtgq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./button-HKlxKO5V.js";import"./index-BIutByxv.js";import"./index-LHNt3CwB.js";import"./createLucideIcon-kc8CSzY0.js";const l=(t,r)=>{const s=r-t+1;return Array.from({length:s},(n,p)=>p+t)},M=({pagination:t,page:r,setPage:s,siblingCount:n=1})=>{const p=j.useMemo(()=>{if(!t)return[];const e=t.totalPages,m=n*2+5;if(e<=m)return l(1,e);const h=Math.max(r-n,1),f=Math.min(r+n,e),d=h>2,P=f<e-1,x=1,v=e,w=3+n*2;if(d&&!P){const S=Math.max(e-w+1,1);return[x,"Dot",...l(S,e)]}return!d&&P?[...l(1,w),"Dot",v]:d&&P?[x,"Dot",...l(h,f),"Dot",v]:[]},[r,t,n]);return a.jsx(y,{className:"text-base-white mt-2",children:a.jsxs(b,{children:[a.jsx(u,{children:a.jsx(D,{className:t?.hasPrevious?"cursor-pointer":"hover:bg-ui-600 hover:text-base-white cursor-not-allowed",onClick:()=>{t?.hasPrevious&&s(e=>e-1)},children:"Previous"})}),p?.map((e,m)=>e==="Dot"?a.jsx(u,{children:a.jsx(_,{})},`ellipsis-${m}`):a.jsx(u,{children:a.jsx(C,{isActive:r===e,onClick:()=>{s(e)},children:e})},e)),a.jsx(u,{children:a.jsx(R,{className:t?.hasMore?"cursor-pointer":"hover:bg-ui-600 hover:text-base-white cursor-not-allowed",onClick:()=>{t?.hasMore&&s(e=>e+1)},children:"Next"})})]})})};M.__docgenInfo={description:`Custom pagination component used for the specific pagination object received from api\r
@param pagination - Pagination object\r
@param page - Current page\r
@param setPage - Function to set the current page\r
@param siblingCount - Number of pages to show on each side of the current page\r
@returns Pagination component`,methods:[],displayName:"CustomPagination",props:{pagination:{required:!1,tsType:{name:"PaginationType"},description:""},page:{required:!0,tsType:{name:"number"},description:""},setPage:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number>",elements:[{name:"number"}]}]},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,F={title:"Components/CustomPagination",component:M,tags:["autodocs"],parameters:{layout:"centered"},args:{setPage:T()}},o={args:{page:1,pagination:{total:100,start:0,limit:10,currentPage:1,totalPages:10,hasMore:!0,hasPrevious:!1,nextPage:2,previousPage:null}}},i={args:{page:5,pagination:{total:100,start:40,limit:10,currentPage:5,totalPages:10,hasMore:!0,hasPrevious:!0,nextPage:6,previousPage:4}}},c={args:{page:10,pagination:{total:100,start:90,limit:10,currentPage:10,totalPages:10,hasMore:!1,hasPrevious:!0,nextPage:null,previousPage:9}}},g={args:{page:1,pagination:{total:30,start:0,limit:10,currentPage:1,totalPages:3,hasMore:!0,hasPrevious:!1,nextPage:2,previousPage:null}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    pagination: {
      total: 100,
      start: 0,
      limit: 10,
      currentPage: 1,
      totalPages: 10,
      hasMore: true,
      hasPrevious: false,
      nextPage: 2,
      previousPage: null
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Default pagination starting at page 1",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pagination: {
      total: 100,
      start: 40,
      limit: 10,
      currentPage: 5,
      totalPages: 10,
      hasMore: true,
      hasPrevious: true,
      nextPage: 6,
      previousPage: 4
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Pagination in the middle of the range, showing both next/prev and ellipses",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pagination: {
      total: 100,
      start: 90,
      limit: 10,
      currentPage: 10,
      totalPages: 10,
      hasMore: false,
      hasPrevious: true,
      nextPage: null,
      previousPage: 9
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Pagination at the end of the range",...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    pagination: {
      total: 30,
      start: 0,
      limit: 10,
      currentPage: 1,
      totalPages: 3,
      hasMore: true,
      hasPrevious: false,
      nextPage: 2,
      previousPage: null
    }
  }
}`,...g.parameters?.docs?.source},description:{story:"Pagination with few pages, fitting entirely without ellipses",...g.parameters?.docs?.description}}};const B=["Default","MiddlePage","LastPage","FewPages"];export{o as Default,g as FewPages,c as LastPage,i as MiddlePage,B as __namedExportsOrder,F as default};
