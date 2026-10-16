import{w as B}from"./withDesignControls-DTwO-e1q.js";import{r as E}from"./StoryComponents-BvaH4X64.js";import{a as p,R as e,T as n,V as R}from"./iframe-DZ6CNdmR.js";import{s as b}from"./SectionMessage.stories-D3GzZwwR.js";import"./FormLabel-WpK8CiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jEOS0vhO.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./omit-DXgDXInf.js";import"./type-CxXYYU3T.js";import"./colors-uxJ92uqJ.js";import"./wave-DyggUTsD.js";import"./Group-dqpsK0g-.js";import"./Divider-CeH8hLX2.js";import"./propPresentation-DQRIYBrB.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";import"./withMeta-b3qPVvuK.js";import"./DocPageLayout--9QtG6bt.js";import"./SubComponents-C8gYiU3N.js";import"./TextWithTruncation-Oqju7yY8.js";import"./ArrowDownSolid-eeOjxQzr.js";import"./ArrowRightSolid-74XVFpn5.js";import"./Badge-MyBI9tsY.js";import"./Indicator-x62EYK4r.js";import"./StatusOkOutline-9gbc7hr8.js";import"./Grid-D0SzO1ht.js";import"./Markdown-AzZ1dVDo.js";import"./index-DR4iiykL.js";import"./shouldForwardProp-Cdy-RLhZ.js";const A={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},se={title:"Hexa UI Components/SectionMessage/Stories",component:p,tags:["!autodocs"],...B({meta:b})},o={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1}}},s={args:{title:"Title",children:e.createElement(n,{type:"BTR3"},"Текст сообщения с заголовком")}},a={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r,actions:A},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1},actions:{control:!1}}},i={args:{expandable:!0,defaultExpanded:!0,title:"Title",children:e.createElement(n,{type:"BTR3"},"Разворачиваемое содержимое")}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
