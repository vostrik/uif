import{aE as d,M as t,R as o}from"./iframe-B2l-dmA0.js";import{g as p,c as f}from"./propPresentation-DxdzNHPO.js";import{T as x}from"./TextDiff-DzqHFhvz.js";const g="",m={pixsoView:g},u={newText:"Новая версия текста",oldText:"Предыдущая версия текста",textType:"BTR3"},a={newText:{description:"Добавленный текст",control:"text"},oldText:{description:"Удалённый текст",control:"text"},textType:{description:"Типографический стиль текста",control:"select",options:Object.keys(d)}},i={argTypes:f(a),args:u,parameters:{badges:[t.stable,t.reviewedByDesign],design:m.pixsoView},decorators:[(c,l)=>o.createElement("div",{style:{width:200}},o.createElement(c,{...l}))]},y={title:"Hexa UI Components/TextDiff",component:x,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["textDiffStorySettings"],...i},e={parameters:{controls:{include:p(a),sort:"none"}}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: getControlsInclude(textDiffPropPresentation),
      sort: 'none'
    }
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const T=["textDiffStorySettings","Playground"],P=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:T,default:y,textDiffStorySettings:i},Symbol.toStringTag,{value:"Module"}));export{P as T,i as t};
