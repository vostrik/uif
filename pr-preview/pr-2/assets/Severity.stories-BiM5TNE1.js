import{R as e,a7 as s,S as c,aA as r,M as l}from"./iframe-D5i9Ygdo.js";import{w as E}from"./withMeta-DvsF1LmS.js";import{a as T,s as O}from"./helpers-BytZKRkB.js";import{S as n}from"./Severity-RwEhNQJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-D9kX8XlS.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./TextReducer-Dagp5bHw.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Divider-BeaQgGYc.js";import"./Badge-DvZDnB4g.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./Indicator-gZ8T3Y3p.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-C8lIf1tQ.js";import"./index-CjdVh8OV.js";import"./omit-DXgDXInf.js";import"./wave-CAHKjKs-.js";import"./Group-m0-YpTU1.js";import"./useTranslation-DsfYxNia.js";const j={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},_="Severity",x="Компонент для установки статуса.",D="Его можно использовать для установления статуса сущностям внутри приложения.",z={dod:j,component:_,description:x,usage:D},m=()=>e.createElement(e.Fragment,null,e.createElement(s,{type:"H4"},"Examples"),e.createElement(s,{type:"H5"},"Базовый"),e.createElement(c,{gap:8,direction:"vertical",align:"flex-start"},e.createElement(s,null,"Medium"),e.createElement(c,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(t=>e.createElement(n,{key:t,mode:t,size:"medium"},t))),e.createElement(s,null,"Small"),e.createElement(c,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(t=>e.createElement(n,{key:t,mode:t,size:"small"},t)))));try{m.displayName="SeverityDocs",m.__docgenInfo={description:"",displayName:"SeverityDocs",props:{}}}catch{}const ae={title:"Other/Severity",component:n,argTypes:{...O(["theme","icon"])},args:{testId:"severity-test-id",klId:"severity-kl-id"},parameters:{badges:[l.stable,l.missingDesign],docs:{page:E(z,m)}}},o={render:t=>e.createElement(c,{gap:4,direction:"horizontal"},Object.keys(r.criticalitystatuses).map((p,f)=>e.createElement(n,{...t,key:f,icon:t.icon,mode:p},p))),argTypes:{mode:{options:Object.keys(r.criticalitystatuses),control:!1}}},a={argTypes:{mode:{options:Object.keys(r.criticalitystatuses),...T("positive")}}},i={args:{children:"Severity"},argTypes:{mode:{options:Object.keys(r.criticalitystatuses)}}};var d,y,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: SeverityProps) => <Space gap={4} direction="horizontal">
      {Object.keys(themeColors.criticalitystatuses).map((status, i) => <Severity {...args} key={i} icon={args.icon} mode={status as SeverityProps['mode']}>{status}</Severity>)}
    </Space>,
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      control: false
    }
  }
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,S,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses),
      ...sbSetDefaultValue('positive')
    }
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,b,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Severity'
  },
  argTypes: {
    mode: {
      options: Object.keys(themeColors.criticalitystatuses)
    }
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const ie=["Basic","L18n","Interactive"];export{o as Basic,i as Interactive,a as L18n,ie as __namedExportsOrder,ae as default};
