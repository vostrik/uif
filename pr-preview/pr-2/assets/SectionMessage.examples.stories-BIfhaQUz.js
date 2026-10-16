import{w as B}from"./withDesignControls-DTwO-e1q.js";import{r as E}from"./StoryComponents-B_SbX1GS.js";import{a as p,R as e,T as n,V as R}from"./iframe-kzbRZKTh.js";import{s as b}from"./SectionMessage.stories-DvGJVWLj.js";import"./FormLabel-Bk6eWrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B5Krc590.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./Divider-DtbUpKWs.js";import"./propPresentation-zJAskzS2.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./withMeta-D4lXFYrc.js";import"./DocPageLayout-jHKysIA0.js";import"./SubComponents-We9aHDLB.js";import"./TextWithTruncation-BjF1kgAQ.js";import"./ArrowDownSolid-CwAn2KlV.js";import"./ArrowRightSolid-WWnzh9Fl.js";import"./Badge-mOFGdbE6.js";import"./Indicator-BqqK5Xic.js";import"./StatusOkOutline-BqQBBn0Z.js";import"./Grid-Cf1iTfsZ.js";import"./Markdown-COgEAH6_.js";import"./index-Dqpnzz1w.js";import"./shouldForwardProp-Cdy-RLhZ.js";const A={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},se={title:"Hexa UI Components/SectionMessage/Stories",component:p,tags:["!autodocs"],...B({meta:b})},o={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1}}},s={args:{title:"Title",children:e.createElement(n,{type:"BTR3"},"Текст сообщения с заголовком")}},a={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r,actions:A},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1},actions:{control:!1}}},i={args:{expandable:!0,defaultExpanded:!0,title:"Title",children:e.createElement(n,{type:"BTR3"},"Разворачиваемое содержимое")}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
