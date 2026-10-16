import{w as M}from"./withDesignControls-DTwO-e1q.js";import{r as d}from"./StoryComponents-oT406532.js";import{R as e,T as a,S as T}from"./iframe-81MZLAwA.js";import{T as I}from"./Tag-F-RHo_zh.js";import{A as s,a as u}from"./Alert-CoZP_t-S.js";import{a as O}from"./Alert.stories-CnCHfSqm.js";import"./FormLabel-DA9R7IzT.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-BRbYwtji.js";import"./TextReducer-DAQahvzG.js";import"./index-BxcIeMF-.js";import"./omit-DXgDXInf.js";import"./type-CGSjHdi-.js";import"./colors-Czl4z4ke.js";import"./wave-YGWrPKVL.js";import"./Group-CFZXzKY0.js";import"./propPresentation--qHUuHxi.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";import"./withMeta-CZpsweCu.js";import"./DocPageLayout-D1x5goyM.js";import"./SubComponents-COJkahQr.js";import"./TextWithTruncation-MTYpUBSq.js";import"./ArrowDownSolid-BNg_rdCk.js";import"./ArrowRightSolid-CIsLKAs9.js";import"./Badge-Bt5y04C0.js";import"./Indicator-DMhQJtUF.js";import"./StatusOkOutline-C0orjNqV.js";import"./Grid-oItbGHay.js";import"./Markdown-EvwJV-Av.js";import"./index-BAR_5hUd.js";import"./shouldForwardProp-Cdy-RLhZ.js";const p={FIRST_ACTION:{text:"Action 1",onClick:()=>console.log("Action1")},SECOND_ACTION:{text:"Action 2",onClick:()=>console.log("Action2")}},ce={title:"Hexa UI Components/Alert/Stories",component:s,tags:["!autodocs"],...M({meta:O})},l={render:({children:t,actions:n,...o})=>d(u.map(r=>({label:r,content:e.createElement(s,{...o,mode:r,actions:n?p:void 0},e.createElement(a,{type:"BTR3"},t))}))),argTypes:{mode:{control:!1}}},c={render:({children:t,...n})=>d(u.map(o=>({label:o,content:e.createElement(s,{...n,mode:o,actions:p},e.createElement(a,{type:"BTR3"},t))}))),argTypes:{mode:{control:!1},actions:{control:!1}}},i={render:({children:t,actions:n,...o})=>d(u.map(r=>({label:r,content:e.createElement(s,{...o,mode:r,actions:n?p:void 0,closable:!0},e.createElement(a,{type:"BTR3"},t))}))),argTypes:{mode:{control:!1},closable:{control:!1}}},m={render:({actions:t,...n})=>e.createElement(s,{...n,actions:t?p:void 0}),args:{children:e.createElement(T,{gap:8},e.createElement(T,null,e.createElement(I,{outlined:!0},"Tag"),e.createElement(a,{type:"H6"},"Custom title")),e.createElement(a,null,"With multiple lines"))}};var g,A,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) => renderVariants(alertModes.map(mode => ({
    label: mode,
    content: <AlertComponent {...rest} mode={mode} actions={actions ? actionsButtons : undefined}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(f=(A=l.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var C,y,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }: StoryAlertProps) => renderVariants(alertModes.map(mode => ({
    label: mode,
    content: <AlertComponent {...rest} mode={mode} actions={actionsButtons}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    },
    actions: {
      control: false
    }
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,E,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) => renderVariants(alertModes.map(mode => ({
    label: mode,
    content: <AlertComponent {...rest} mode={mode} actions={actions ? actionsButtons : undefined} closable>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    },
    closable: {
      control: false
    }
  }
}`,...(h=(E=i.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var b,B,R;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    actions,
    ...rest
  }: StoryAlertProps) => <AlertComponent {...rest} actions={actions ? actionsButtons : undefined} />,
  args: {
    children: <Space gap={8}>
        <Space>
          <Tag outlined>Tag</Tag>
          <Text type="H6">Custom title</Text>
        </Space>
        <Text>With multiple lines</Text>
      </Space>
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const ie=["Mode","Action","Closable","Children"];export{c as Action,m as Children,i as Closable,l as Mode,ie as __namedExportsOrder,ce as default};
