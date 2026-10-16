import{M as n,A as o,R as e,aB as g}from"./iframe-CS_lS3JQ.js";import{g as f,b as h}from"./propPresentation-VPDZOrCH.js";import{w as A}from"./withMeta-BVZrRcOQ.js";import{t as b}from"./ArrowRight-DMancYzQ.js";import{o as B}from"./CrossM-BB1MYOz9.js";import{o as y}from"./Delete-Cf3ftsdF.js";import{o as S}from"./Heart-D3ppbkAN.js";import{o as I}from"./Placeholder-Q-SCb9Hd.js";import{r as w}from"./SettingsGear-wtQfYMtB.js";const E=["small","medium","large"],T=["ghost","ghostInverted","filled","filledInverted","onLight"],v=["heart","placeholder","settingsGear","crossM","delete","none"],k=["arrowRight","crossM","none"],l={mode:{control:"select",description:"Стиль кнопки",options:T},size:{control:"select",description:"Размер кнопки",options:E},children:{control:"text",description:"Текст кнопки"},interactive:{control:"boolean",deprecated:!0,description:"Use icon instead of a non-interactive ActionButton"},disabled:{control:"boolean",description:"Отключенное состояние"},noIcon:{control:"boolean",description:"Скрывает иконку"},icon:{control:"select",description:"Иконка или ReactNode перед текстом",options:[...v]},elementAfter:{control:"select",description:"Иконка или ReactNode после текста",options:[...k]}},x={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},M="ActionButton",P="",R="",z="",O="",r={dod:x,component:M,description:P,usage:R,designLink:z,pixsoView:O},C=f(l),s={placeholder:e.createElement(I,null),close:e.createElement(g,null),crossM:e.createElement(B,null),heart:e.createElement(S,null),settingsGear:e.createElement(w,null),delete:e.createElement(y,null),arrowRight:e.createElement(b,null),none:void 0},d={args:{mode:"ghost",size:"medium",children:"Action",interactive:!0,disabled:!1,noIcon:!1,testId:"action-button-test-id",klId:"action-button-kl-id"},parameters:{badges:[n.stable,n.reviewedByDesign],docs:{page:A(r)},design:r.pixsoView}},V={title:"Hexa UI Components/ActionButton",component:o,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["actionButtonStorySettings"],...d,argTypes:h(o,l),args:{mode:"ghost",size:"medium",children:"Action",interactive:!0,disabled:!1,noIcon:!1,testId:"action-button-test-id",klId:"action-button-kl-id",icon:"placeholder",elementAfter:"none"}},t={args:{mode:"filled",size:"large",icon:"settingsGear",elementAfter:"arrowRight",children:"This is ActionButton"},name:"Playground",render:({icon:m,elementAfter:u,...p})=>e.createElement(o,{...p,elementAfter:s[u],icon:s[m]}),parameters:{controls:{include:C,sort:"none"}}};var i,a,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'filled',
    size: 'large',
    icon: 'settingsGear',
    elementAfter: 'arrowRight',
    children: 'This is ActionButton'
  },
  name: 'Playground',
  render: ({
    icon,
    elementAfter,
    ...rest
  }) => <ActionButtonComponent {...rest} elementAfter={iconVariants[elementAfter]} icon={iconVariants[icon]} />,
  parameters: {
    controls: {
      include: actionButtonControlsOrder,
      sort: 'none'
    }
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const _=["actionButtonStorySettings","Playground"],q=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:_,actionButtonStorySettings:d,default:V},Symbol.toStringTag,{value:"Module"}));export{q as A,d as a,l as b};
