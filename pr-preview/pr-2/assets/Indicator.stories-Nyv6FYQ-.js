import{M as e}from"./iframe-BfQ7ApZt.js";import{e as l,g as p,c as m}from"./propPresentation-BC79pgx_.js";import{w as u}from"./withMeta-DokDzFm5.js";import{a as g,I as f}from"./Indicator-B08Z_iCO.js";import{s as y}from"./resolveDesignControls-CFhBuB_d.js";const b={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},P="Indicator",S="Компонент для цветовой индикации.",I="",x="",T="",t={dod:b,component:P,description:S,usage:I,designLink:x,pixsoView:T},k=(d,c={})=>l(y[d],c),w={mode:"accent",border:!1},a={mode:k("mode",{options:[...g]}),border:{description:"Показывать границу вокруг индикатора.",control:"boolean"},borderBackground:{description:"Цвет границы индикатора при border={true}. По умолчанию используется цвет из палитры режима.",control:"color"}},i={argTypes:m(a),args:{...w,testId:"indicator-test-id",klId:"indicator-kl-id"},parameters:{badges:[e.stable,e.reviewedByDesign],docs:{page:u(t)},design:t.pixsoView}},_={title:"Hexa UI Components/Indicator",component:f,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["indicatorStorySettings"],...i},o={name:"Playground",parameters:{controls:{include:p(a),sort:"none"}}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(indicatorPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const h=["indicatorStorySettings","Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:h,default:_,indicatorStorySettings:i},Symbol.toStringTag,{value:"Module"}));export{v as I,i};
