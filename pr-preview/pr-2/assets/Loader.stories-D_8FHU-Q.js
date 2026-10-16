import{U as e,M as t,R as m}from"./iframe-DXVY_al-.js";import{e as g,g as u,c as S}from"./propPresentation-DzyQPo2A.js";import{L as i}from"./Loader-BxJLuQsn.js";import{s as y}from"./resolveDesignControls-CFhBuB_d.js";const P="",f={pixsoView:P},b=["default","inverted"],x=[e.ExtraSmall,e.Small,e.Medium,e.Large,e.ExtraLarge],n=(r,p={})=>g(y[r],p),L={mode:"default",size:e.Small,spinning:!0,centered:!1,delay:0,tip:""},l={mode:n("mode",{options:[...b],description:"Цветовой режим индикатора загрузки"}),size:n("size",{options:[...x],description:"Размер индикатора и подписи"}),spinning:{control:"boolean",description:"Показывать индикатор загрузки"},centered:{control:"boolean",description:"Центрировать индикатор внутри родительского контейнера"},delay:{control:"number",description:"Задержка перед показом индикатора, мс"},tip:{control:"text",description:"Текстовая подпись рядом с индикатором"}},c={argTypes:S(l),args:{...L,testId:"loader-test-id",klId:"loader-kl-id"},parameters:{badges:[t.stable,t.reviewedByDesign],design:f.pixsoView}},z={title:"Hexa UI Components/Loader",component:i,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["loaderStorySettings"],...c},o={name:"Playground",parameters:{controls:{include:u(l),sort:"none"}},render:r=>m.createElement(i,{...r})};var s,a,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(loaderPropPresentation),
      sort: 'none'
    }
  },
  render: (args: LoaderProps) => <Loader {...args} />
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const _=["loaderStorySettings","Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:_,default:z,loaderStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{v as L,c as l};
