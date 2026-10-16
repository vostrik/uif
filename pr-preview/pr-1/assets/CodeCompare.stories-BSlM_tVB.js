import{M as f,R as w,b as e}from"./iframe-BC0sauTx.js";import{e as h,g as A,c as H}from"./propPresentation-DqHLXn9o.js";import{w as R}from"./withMeta-BRvA4BlU.js";import{C as v}from"./CodeCompare-Noq1ZqJs.js";import{s as I}from"./resolveDesignControls-CFhBuB_d.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},j="Code compare",D="В качестве основы используется библиотека react-diff-view.",z="Code compare — компонент для визуального сравнения двух версий кода, конфигурационных файлов или данных.",B="",L="",y={dod:N,component:j,description:D,usage:z,designLink:B,pixsoView:L},U=(o,n={})=>h(I[o],n),q=["split","unified"],l=[{label:"Code 2024-06-05 16:50:54",description:"author.one",value:"base"},{label:"Changed Code 2024-06-05 16:50:54",description:"author.two",value:"changed"}],u=`import React from 'react'

export const App = () => {
  return <div>Hello</div>
}`,p=`import React from 'react'

export const App = () => {
  return <div>Hello, world</div>
}`,F={options:l,oldVersion:l[0],newVersion:l[1],oldValue:u,newValue:p,compareMode:"split",loading:!1},x={compareMode:{control:"select",description:"Начальный режим отображения diff: split — две колонки, unified — одна.",options:[...q]},loading:U("loading",{description:"Состояние загрузки области сравнения. При отсутствии текстов показывается подсказка ожидания данных."}),oldValue:{control:"text",description:"Текст левой (базовой) версии для сравнения."},newValue:{control:"text",description:"Текст правой (сравниваемой) версии."}},G=({oldValue:o,newValue:n,oldVersion:r,newVersion:d,compareMode:m,...P})=>{const[T,g]=e.useState(r),[M,C]=e.useState(d),[O,c]=e.useState(o),[_,i]=e.useState(n);e.useEffect(()=>{g(r)},[r]),e.useEffect(()=>{C(d)},[d]),e.useEffect(()=>{c(o)},[o]),e.useEffect(()=>{i(n)},[n]);const k=(s,t)=>{g(s),C(t),(s==null?void 0:s.value)==="base"&&c(u),(t==null?void 0:t.value)==="changed"&&i(p),(s==null?void 0:s.value)==="changed"&&c(p),(t==null?void 0:t.value)==="base"&&i(u)};return w.createElement(v,{...P,key:m,compareMode:m,oldVersion:T,newVersion:M,oldValue:O,newValue:_,onVersionChange:k})},E={argTypes:H(x),args:F,parameters:{badges:[f.stable,f.reviewedByDesign],docs:{page:R(y)},design:y.pixsoView}},J={title:"Hexa UI Components/CodeCompare",component:v,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["codeCompareStorySettings"],...E},a={name:"Playground",render:o=>w.createElement(G,{...o}),parameters:{controls:{include:A(x),sort:"none"}}};var S,V,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <CodeComparePlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(codeComparePlaygroundPresentation),
      sort: 'none'
    }
  }
}`,...(b=(V=a.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};const K=["codeCompareStorySettings","Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:K,codeCompareStorySettings:E,default:J},Symbol.toStringTag,{value:"Module"}));export{$ as C,E as c};
