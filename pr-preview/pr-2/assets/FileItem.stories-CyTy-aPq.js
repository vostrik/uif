import{w as u}from"./withDesignControls-DTwO-e1q.js";import{r as p}from"./StoryComponents-B_SbX1GS.js";import{R as t,H as b}from"./iframe-kzbRZKTh.js";import{M as g}from"./meta-DPA9fCsy.js";import{F as m}from"./FileItem-fwPnnD3v.js";import"./FormLabel-Bk6eWrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B5Krc590.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./Divider-DtbUpKWs.js";import"./Download2-DtkZAvuV.js";import"./Reload-BDMgaTOJ.js";import"./useTranslation-BiFIvaSU.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";const U={title:"Hexa UI Components/Uploader/Stories",component:m,tags:["!autodocs"],...u({meta:{argTypes:{error:{control:"text"},status:{control:{type:"radio"},options:["done","uploading","success","error"]}},args:{error:"Something goes wrong",name:"The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png",size:1e6,status:"done",truncateName:!0},parameters:{actions:{argTypesRegex:"^(on.*)"},design:g.pixsoView}}})},r=b(m)`
  max-width: 540px;
`,s={render:e=>t.createElement(r,{...e}),name:"File Item"},o={render:e=>p([{label:"selected",content:t.createElement(r,{...e,status:void 0})},{label:"uploading",content:t.createElement(r,{...e,percent:50,status:"uploading"})},{label:"done",content:t.createElement(r,{...e,status:"done"})},{label:"success",content:t.createElement(r,{...e,status:"success"})},{label:"error",content:t.createElement(r,{...e,status:"error"})},{label:"downloadable",content:t.createElement(r,{...e,onDownload:()=>{},status:"done"})},{label:"disabled",content:t.createElement(r,{...e,disabled:!0,status:"done"})},{label:"disabled success",content:t.createElement(r,{...e,disabled:!0,status:"success"})},{label:"disabled error",content:t.createElement(r,{...e,disabled:!0,status:"error"})}])};var a,n,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <StyledFileItem {...args} />,
  name: 'File Item'
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,i,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'selected',
    content: <StyledFileItem {...args} status={undefined} />
  }, {
    label: 'uploading',
    content: <StyledFileItem {...args} percent={50} status="uploading" />
  }, {
    label: 'done',
    content: <StyledFileItem {...args} status="done" />
  }, {
    label: 'success',
    content: <StyledFileItem {...args} status="success" />
  }, {
    label: 'error',
    content: <StyledFileItem {...args} status="error" />
  }, {
    label: 'downloadable',
    content: <StyledFileItem {...args} onDownload={() => undefined} status="done" />
  }, {
    label: 'disabled',
    content: <StyledFileItem {...args} disabled status="done" />
  }, {
    label: 'disabled success',
    content: <StyledFileItem {...args} disabled status="success" />
  }, {
    label: 'disabled error',
    content: <StyledFileItem {...args} disabled status="error" />
  }], true)
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const _=["FileItemStory","Status"];export{s as FileItemStory,o as Status,_ as __namedExportsOrder,U as default};
