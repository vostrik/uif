import{w as B}from"./withDesignControls-DTwO-e1q.js";import{r as E}from"./StoryComponents-D51pRFFv.js";import{a as p,R as e,T as n,V as R}from"./iframe-DXVY_al-.js";import{s as b}from"./SectionMessage.stories-CsO-vpFE.js";import"./FormLabel-g5DQo_wL.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./Divider-Hc8qqOlX.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./withMeta-CBaPUhSC.js";import"./DocPageLayout-CyCyvv-O.js";import"./SubComponents-BmDm24jU.js";import"./TextWithTruncation-Bi2HiZvn.js";import"./ArrowDownSolid-CLCLXTUz.js";import"./ArrowRightSolid-BSWeQvzk.js";import"./Badge-Cj1zsPT9.js";import"./Indicator-B4cq0q5a.js";import"./StatusOkOutline-Dbo4WwyZ.js";import"./Grid-D1T_Hu63.js";import"./Markdown-DlRQLHKn.js";import"./index-BAYulqpX.js";import"./shouldForwardProp-Cdy-RLhZ.js";const A={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},se={title:"Hexa UI Components/SectionMessage/Stories",component:p,tags:["!autodocs"],...B({meta:b})},o={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1}}},s={args:{title:"Title",children:e.createElement(n,{type:"BTR3"},"Текст сообщения с заголовком")}},a={render:({children:t,...c})=>E(R.map(r=>({label:r,content:e.createElement(p,{...c,mode:r,actions:A},e.createElement(n,{type:"BTR3"},typeof t=="string"?t:"Текст сообщения"))}))),argTypes:{mode:{control:!1},actions:{control:!1}}},i={args:{expandable:!0,defaultExpanded:!0,title:"Title",children:e.createElement(n,{type:"BTR3"},"Разворачиваемое содержимое")}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
