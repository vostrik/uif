import{R as x,T as m,M as o}from"./iframe-BfQ7ApZt.js";import{g,b as _}from"./propPresentation-BC79pgx_.js";import{w as T}from"./withMeta-DokDzFm5.js";import{E as i}from"./Expand-D4iDjJaC.js";const y={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},E="Expand",f="Интерфейсный элемент, который позволяет пользователю развернуть или свернуть скрытый контент.",P="В свернутом состоянии отображается часть контента, а при нажатии на интерактивный элемент контентная область раскрывается, показывая содержимое полностью.",C="",b="",n={dod:y,component:E,description:f,usage:P,designLink:C,pixsoView:b},S=`Lorem ipsum dolor sit amet.
    Phasellus rutrum felis non ligula feugiat finibus.
    Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.`,t=Array(8).fill(S).join(`
    `),p=x.createElement(m,null,t),s=`const expandLongText = (
  <Text>{${JSON.stringify(t)}}</Text>
)`;try{t.displayName="EXPAND_MOCK_TEXT_BODY",t.__docgenInfo={description:"Длинный текст для Playground, Examples и документации",displayName:"EXPAND_MOCK_TEXT_BODY",props:{}}}catch{}try{s.displayName="expandLongTextExampleCode",s.__docgenInfo={description:"setupCode для react-live в Expand.documentation.mdx",displayName:"expandLongTextExampleCode",props:{}}}catch{}const A={collapsedHeight:64,textToExpand:"Развернуть",textToCollapse:"Свернуть"},l={collapsedHeight:{control:"number",description:"Максимальная высота контейнера в свёрнутом состоянии (px)"},textToExpand:{control:"text",description:"Подпись кнопки в свёрнутом состоянии"},textToCollapse:{control:"text",description:"Подпись кнопки в развёрнутом состоянии"}},u={argTypes:_(i,l),args:{...A,children:p,testId:"expand-test-id",klId:"expand-kl-id"},parameters:{badges:[o.stable,o.reviewedByDesign],docs:{page:T(n)},design:n.pixsoView}},D={title:"Hexa UI Components/Expand",component:i,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["expandStorySettings","expandMockText"],...u},e={name:"Playground",parameters:{controls:{include:g(l),sort:"none"}}};var a,r,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(expandPropPresentation),
      sort: 'none'
    }
  }
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const M=["expandMockText","expandStorySettings","Playground"],B=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:M,default:D,expandMockText:p,expandStorySettings:u},Symbol.toStringTag,{value:"Module"}));export{B as E,u as a,s as b,p as e};
