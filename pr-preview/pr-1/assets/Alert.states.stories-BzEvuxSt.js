import{S as c}from"./StatesMatrix-D3f51K9o.js";import{R as t}from"./iframe-81MZLAwA.js";import{A as r}from"./Alert-CoZP_t-S.js";import"./i18n-CTpCV-em.js";import"./preload-helper-Dp1pzeXC.js";const y={title:"Screenshot Tests/Alert",component:r,tags:["!autodocs"]},i=[{key:"default",label:"Default"},{key:"actions",label:"With actions",actions:!0},{key:"closable",label:"Closable",closable:!0},{key:"full",label:"Actions + close",actions:!0,closable:!0}],m=[{key:"info",label:"Info",mode:"info"},{key:"success",label:"Success",mode:"success"},{key:"warning",label:"Warning",mode:"warning"},{key:"error",label:"Error",mode:"error"}],d={FIRST_ACTION:{text:"Action",onClick:()=>{}},SECOND_ACTION:{text:"Action",onClick:()=>{}}},u=(o,n)=>t.createElement("div",{style:{width:320}},t.createElement(r,{mode:n.mode,closable:o.closable,actions:o.actions?d:void 0,onClose:()=>{}},"Text value")),e={name:"States",parameters:{controls:{include:[]},layout:"fullscreen"},render:()=>t.createElement(c,{labelWidth:120,rows:i,columns:m,renderCell:u})};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    controls: {
      include: []
    },
    layout: 'fullscreen'
  },
  render: () => <StatesMatrix labelWidth={120} rows={stateRows} columns={variantColumns} renderCell={renderStateCell} />
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const k=["States"];export{e as States,k as __namedExportsOrder,y as default};
