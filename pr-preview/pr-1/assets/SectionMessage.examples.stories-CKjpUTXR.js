import{w as B}from"./withDesignControls-DTwO-e1q.js";import{r as E}from"./StoryComponents-CK7kJD3s.js";import{a as p,R as e,T as n,V as R}from"./iframe-CuxZtUxP.js";import{s as b}from"./SectionMessage.stories-Bit77G5R.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./Divider-FNnXL9Gj.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./withMeta-BqFg98vY.js";import"./DocPageLayout-laC5MAc2.js";import"./SubComponents-DjSVH-Ma.js";import"./TextWithTruncation-DGkObJqj.js";import"./ArrowDownSolid-DT8risoU.js";import"./ArrowRightSolid-BD1ZcQ2R.js";import"./Badge-ZSNeDhrE.js";import"./Indicator-BDm4vtnD.js";import"./StatusOkOutline-MSqmg68d.js";import"./Grid-9ETswfwf.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";const A={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},se={title:"Hexa UI Components/SectionMessage/Stories",component:p,tags:["!autodocs"],...B({meta:b})},o={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1}}},s={args:{title:"Title",children:e.createElement(n,{type:"BTR3"},"Текст сообщения с заголовком")}},a={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r,actions:A},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1},actions:{control:!1}}},i={args:{expandable:!0,defaultExpanded:!0,title:"Title",children:e.createElement(n,{type:"BTR3"},"Разворачиваемое содержимое")}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }: SectionMessageProps) => renderVariants(sectionMessageModes.map(mode => ({
    label: mode,
    content: <SectionMessage {...rest} mode={mode}>
            <Text type="BTR3">{typeof children === 'string' ? children : 'Текст сообщения'}</Text>
          </SectionMessage>
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,T,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: <Text type="BTR3">Текст сообщения с заголовком</Text>
  }
}`,...(u=(T=s.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var x,f,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }: SectionMessageProps) => renderVariants(sectionMessageModes.map(mode => ({
    label: mode,
    content: <SectionMessage {...rest} mode={mode} actions={actionsButtons}>
            <Text type="BTR3">{typeof children === 'string' ? children : 'Текст сообщения'}</Text>
          </SectionMessage>
  })), true),
  argTypes: {
    mode: {
      control: false
    },
    actions: {
      control: false
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var M,S,h;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    expandable: true,
    defaultExpanded: true,
    title: 'Title',
    children: <Text type="BTR3">Разворачиваемое содержимое</Text>
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const ae=["Mode","WithTitle","WithActions","Expandable"];export{i as Expandable,o as Mode,a as WithActions,s as WithTitle,ae as __namedExportsOrder,se as default};
