import{V as p,M as o,a as d,R as n,T as u}from"./iframe-D64doaOG.js";import{g as m,c as M}from"./propPresentation-Bd1LfInE.js";import{w as S}from"./withMeta-BASmJkxv.js";const y={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},b="Section Message",f="Section Message используется как статичное уведомление для акцента на информации вутри контента, требующего внимания или действий.",x="Используется для инлайн уведомлений. Размещается в теле страницы, Section Message не пропадает с течением времени.",T="",P="",r={dod:y,component:b,description:f,usage:x,designLink:T,pixsoView:P},h={mode:"info",title:"Title",children:"Текст сообщения",closable:!0,expandable:!1,defaultExpanded:!0},t={mode:{control:"select",description:"Семантический стиль компонента",options:[...p]},title:{control:"text",description:"Заголовок сообщения"},children:{control:"text",description:"Текст сообщения"},closable:{control:"boolean",description:"Показывать кнопку закрытия"},expandable:{control:"boolean",description:"Показывать кнопку сворачивания содержимого"},defaultExpanded:{control:"boolean",description:"Начальное состояние — развёрнуто (true) или свёрнуто (false). Применяется только вместе с expandable"}},k=m(t),l={args:{...h,testId:"section-message-test-id",klId:"section-message-kl-id"},argTypes:M(t),parameters:{badges:[o.stable,o.reviewedByDesign],docs:{page:S(r)},design:r.pixsoView}},_={title:"Hexa UI Components/SectionMessage",component:d,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["sectionMessagePropPresentation","sectionMessageStorySettings"],...l},e={name:"Playground",parameters:{controls:{include:k,sort:"none"}},render:({children:s,...g})=>n.createElement(d,{...g},typeof s=="string"?n.createElement(u,{type:"BTR3"},s):s)};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: sectionMessageControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    children,
    ...rest
  }: SectionMessageProps) => <SectionMessage {...rest}>
      {typeof children === 'string' ? <Text type="BTR3">{children}</Text> : children}
    </SectionMessage>
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const w=["sectionMessagePropPresentation","sectionMessageStorySettings","Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:w,default:_,sectionMessagePropPresentation:t,sectionMessageStorySettings:l},Symbol.toStringTag,{value:"Module"}));export{I as S,l as s};
