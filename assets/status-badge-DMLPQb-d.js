import{j as r}from"./iframe-dcUv9G_n.js";import{c as t}from"./utils-BQHNewu7.js";import{B as a}from"./badge-CCPmaoVV.js";const n={Planning:"bg-purple-500/20 text-purple-400 border-purple-500",Watching:"bg-blue-500/20 text-blue-400 border-blue-500",Playing:"bg-blue-500/20 text-blue-400 border-blue-500",Completed:"bg-green-500/20 text-green-600 border-green-600",Dropped:"bg-red-500/20 text-red-400 border-red-400"},l=({status:e})=>e?r.jsx(a,{variant:"outline",className:t("cursor-default px-1.5 py-0.5",n?.[e]??"bg-secondary/50 border-border border"),children:e}):null;l.__docgenInfo={description:`@description this component is used to display the status of the media\r
@param status - the status of the media\r
@returns`,methods:[],displayName:"StatusBadge",props:{status:{required:!1,tsType:{name:"union",raw:`| 'Planning'\r
| 'Playing'\r
| 'Watching'\r
| 'Completed'\r
| 'Dropped'`,elements:[{name:"literal",value:"'Planning'"},{name:"literal",value:"'Playing'"},{name:"literal",value:"'Watching'"},{name:"literal",value:"'Completed'"},{name:"literal",value:"'Dropped'"}]},description:""}}};export{l as S};
