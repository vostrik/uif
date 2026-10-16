import{M as i,R as o}from"./iframe-C5ywg3yF.js";import{e as g,g as h,b}from"./propPresentation-BBbAkRBO.js";import{w as f}from"./withMeta-bWUFpinF.js";import{o as y}from"./Placeholder-DD0S7nvg.js";import{o as S}from"./Plus-D6-lfc85.js";import{o as P}from"./Settings-Dp5CumZj.js";import{C as r}from"./Chip-Dwpxmz6N.js";import{s as C}from"./resolveDesignControls-CFhBuB_d.js";const k={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},x="Chip",I="В качестве основы используется AntdTag из библиотеки Antd.",T="",z="",w="",a={dod:k,component:x,description:I,usage:T,designLink:z,pixsoView:w},_=["medium","large"],A=["none","placeholder","plus","settings"],c=(n,s={})=>g(C[n],s),t={size:"medium",disabled:!1,label:"Label",icon:"none"},m={size:c("size",{options:[..._]}),disabled:c("disabled"),label:{control:"text",description:"Текстовая метка chip"},icon:{control:"select",description:"Иконка перед лейблом. Если не передана, иконка отображаться не будет.",options:[...A]},counter:{control:"number",description:"Числовой счётчик справа от лейбла. Отображается через Badge."},truncationWidth:{control:"number",description:"Максимальная ширина лейбла в пикселях. При превышении текст обрезается с многоточием."}},E={none:void 0,placeholder:o.createElement(y,{klId:"chip-icon"}),plus:o.createElement(S,{klId:"chip-icon"}),settings:o.createElement(P,{klId:"chip-icon"})},u={argTypes:b(r,m),args:{size:t.size,disabled:t.disabled,label:t.label,testId:"chip-test-id",klId:"chip-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:f(a)},design:a.pixsoView}},V={title:"Hexa UI Components/Chip",component:r,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["chipStorySettings"],...u},e={name:"Playground",args:t,render:({icon:n="none",...s})=>o.createElement(r,{...s,icon:E[n]}),parameters:{controls:{include:h(m),sort:"none"}}};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  args: defaultArgs,
  render: ({
    icon = 'none',
    ...rest
  }) => <ChipComponent {...rest} icon={iconVariants[icon]} />,
  parameters: {
    controls: {
      include: getControlsInclude(chipPropPresentation),
      sort: 'none'
    }
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const M=["chipStorySettings","Playground"],$=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:M,chipStorySettings:u,default:V},Symbol.toStringTag,{value:"Module"}));export{$ as C,u as c};
