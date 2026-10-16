import{M as r,R as o,T as u}from"./iframe-D64doaOG.js";import{g,c as y}from"./propPresentation-Bd1LfInE.js";import{w as b}from"./withMeta-BASmJkxv.js";import{a as c,A as i}from"./Alert-DsyIt4Pv.js";const T={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},f="Alert",h="",x="Alert — это компонент, который используется для отображения важных уведомлений или сообщений, относящихся ко всему продукту. Основное назначение компонента — привлечение внимания пользователя к критически важной информации, требующей его действия или осведомлённости. Эти уведомления отображаются на всех экранах продукта, располагаясь вверху контентной области страницы, чтобы быть видимыми независимо от того, на какой странице находится пользователь. Alert не пропадает с течением времени.",S="",A="",s={dod:T,component:f,description:h,usage:x,designLink:S,pixsoView:A},d={mode:{control:"select",description:"Семантический стиль компонента",options:[...c]},children:{control:"text",description:"Текст сообщения"},closable:{control:"boolean",description:"Показывать кнопку закрытия"},width:{control:"text",description:"Ширина компонента в px"}},w=g(d),p={args:{mode:"info",closable:!1,children:"You can swap «children»",testId:"alert-test-id",klId:"alert-kl-id"},argTypes:y(d),parameters:{badges:[r.stable,r.reviewedByDesign],docs:{page:b(s)},design:s.pixsoView}},P={title:"Hexa UI Components/Alert",component:i,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["alertModes","alertStorySettings"],...p},e={args:{mode:"success",closable:!0,children:"Текст сообщения",width:""},name:"Playground",parameters:{controls:{include:w,sort:"none"}},render:({children:t,...m})=>o.createElement(i,{...m},typeof t=="string"?o.createElement(u,{type:"BTR3"},t):t)};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'success',
    closable: true,
    children: 'Текст сообщения',
    width: ''
  },
  name: 'Playground',
  parameters: {
    controls: {
      include: alertControlsOrder,
      sort: 'none'
    }
  },
  render: ({
    children,
    ...rest
  }: AlertProps) => <AlertComponent {...rest}>
      {typeof children === 'string' ? <Text type="BTR3">{children}</Text> : children}
    </AlertComponent>
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const M=["alertModes","alertStorySettings","Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:M,alertModes:c,alertStorySettings:p,default:P},Symbol.toStringTag,{value:"Module"}));export{I as A,p as a};
