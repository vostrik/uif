import{R as e,a7 as s,S as c,aA as r,M as l}from"./iframe-CMq2KAbH.js";import{w as E}from"./withMeta-Dv8G7Dbj.js";import{a as T,s as O}from"./helpers-BytZKRkB.js";import{S as n}from"./Severity-BKquMxoa.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CwgI-MzD.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./TextReducer-Dpv34lw7.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Divider-C_lHVbvw.js";import"./Badge-DZq-1HSe.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./Indicator-PCazPGCQ.js";import"./StatusOkOutline-WlwXIENv.js";import"./Grid-BaI88Kn5.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Tag-jK9gdpxg.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./useTranslation-DM_UuMFJ.js";const j={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},_="Severity",x="Компонент для установки статуса.",D="Его можно использовать для установления статуса сущностям внутри приложения.",z={dod:j,component:_,description:x,usage:D},m=()=>e.createElement(e.Fragment,null,e.createElement(s,{type:"H4"},"Examples"),e.createElement(s,{type:"H5"},"Базовый"),e.createElement(c,{gap:8,direction:"vertical",align:"flex-start"},e.createElement(s,null,"Medium"),e.createElement(c,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(t=>e.createElement(n,{key:t,mode:t,size:"medium"},t))),e.createElement(s,null,"Small"),e.createElement(c,{gap:4,direction:"horizontal",align:"flex-start"},Object.keys(r.criticalitystatuses).map(t=>e.createElement(n,{key:t,mode:t,size:"small"},t)))));try{m.displayName="SeverityDocs",m.__docgenInfo={description:"",displayName:"SeverityDocs",props:{}}}catch{}const ae={title:"Other/Severity",component:n,argTypes:{...O(["theme","icon"])},args:{testId:"severity-test-id",klId:"severity-kl-id"},parameters:{badges:[l.stable,l.missingDesign],docs:{page:E(z,m)}}},o={render:t=>e.createElement(c,{gap:4,direction:"horizontal"},Object.keys(r.criticalitystatuses).map((p,f)=>e.createElement(n,{...t,key:f,icon:t.icon,mode:p},p))),argTypes:{mode:{options:Object.keys(r.criticalitystatuses),control:!1}}},a={argTypes:{mode:{options:Object.keys(r.criticalitystatuses),...T("positive")}}},i={args:{children:"Severity"},argTypes:{mode:{options:Object.keys(r.criticalitystatuses)}}};var d,y,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
