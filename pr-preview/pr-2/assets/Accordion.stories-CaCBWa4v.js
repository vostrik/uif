import{M as d,R as e,S as v}from"./iframe-D5i9Ygdo.js";import{g as h,b as C}from"./propPresentation-B03l1IYW.js";import{w as O}from"./withMeta-DvsF1LmS.js";import{T as w}from"./Tag-C8lIf1tQ.js";import{A as i,a as f,t as V}from"./AccordionPanel-CsDhbP6d.js";import{o as A}from"./StatusOkSolid-BK2TPeG4.js";import{o as M}from"./UserAccount-CmI4IVAa.js";import{b as y,d as _}from"./Accordion.controls-B7oqmt5L.js";import{I as D}from"./Indicator-gZ8T3Y3p.js";const z={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},I="Accordion",j=`Компонент аккордеона. В качестве основы используется Collapse из библиотеки rc-collapse.

В заголовке аккордеона можно включать дополнительные элементы: tagBefore, indicator, tagAfter, additionalText. Каждый из них включается независимо, можно включить один или сразу несколько.`,L="Компонент Accordion используется для группировки связанного контента, который можно разворачивать и сворачивать. В тело аккордеона можно помещать любой контент (текст / форму и т. д.).",N="",R="",m={dod:z,component:I,description:j,usage:L,designLink:N,pixsoView:R},H={none:void 0,statusOkSolid:e.createElement(A,null),star:e.createElement(V,null),indicator:e.createElement(D,null)},K={none:void 0,statusOkSolid:e.createElement(A,null),userAccount:e.createElement(v,{gap:4},e.createElement(M,null),"10/10")},F={none:void 0,default:[{value:"Action 1",onClick:t=>t.domEvent.stopPropagation()},{value:"Action 2",onClick:t=>t.domEvent.stopPropagation()}]},U=(t,r)=>{const s=Object.keys(r).filter(o=>!t.includes(o)),a={};for(const o of[...t,...s])a[o]=r[o];return a},b=h(y),S={args:U(b,_),argTypes:C([i,f],y),parameters:{actions:{argTypesRegex:"^on.*"},badges:[d.stable,d.reviewedByDesign],docs:{page:O(m)},design:m.pixsoView}},$={component:i,title:"Hexa UI Components/Accordion",tags:["!autodocs"],includeStories:["Playground"],excludeStories:["accordionStorySettings"],...S},n={name:"Playground",parameters:{controls:{include:b,sort:"none"}},render:({actions:t,additionalText:r,className:s,disabled:a,elementAfter:o,elementBefore:T,shouldDisableActions:P,title:k,titleSize:x,tagAfterLabel:c,tagAfterMode:B,withBorder:l,...E})=>e.createElement(i,{...E,withBorder:l},e.createElement(f,{key:1,actions:F[t],additionalText:r,className:s,disabled:a,elementBefore:H[T],elementAfter:l?K[o]:void 0,shouldDisableActions:P,tagAfter:c?e.createElement(w,{label:c,mode:B}):void 0,title:k,titleSize:x},"Accordion content"))};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: accordionControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    actions,
    additionalText,
    className,
    disabled,
    elementAfter,
    elementBefore,
    shouldDisableActions,
    title,
    titleSize,
    tagAfterLabel,
    tagAfterMode,
    withBorder,
    ...rest
  }: StoryAccordionProps) => <AccordionComponent {...rest} withBorder={withBorder}>
      <AccordionPanel key={1} actions={actionsVariants[actions]} additionalText={additionalText} className={className} disabled={disabled} elementBefore={elementBeforeVariants[elementBefore]} elementAfter={withBorder ? elementAfterVariants[elementAfter] : undefined} shouldDisableActions={shouldDisableActions} tagAfter={tagAfterLabel ? <Tag label={tagAfterLabel} mode={tagAfterMode} /> : undefined} title={title} titleSize={titleSize}>
        Accordion content
      </AccordionPanel>
    </AccordionComponent>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const q=["accordionStorySettings","Playground"],oe=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:q,accordionStorySettings:S,default:$},Symbol.toStringTag,{value:"Module"}));export{oe as A};
