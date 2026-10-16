import{w as M}from"./withDesignControls-DTwO-e1q.js";import{r as d}from"./StoryComponents-CbjM3Idf.js";import{R as e,T as a,S as T}from"./iframe-DIzBSOsa.js";import{T as I}from"./Tag-UnCHTvWf.js";import{A as s,a as u}from"./Alert-BogAQi8e.js";import{a as O}from"./Alert.stories-Q1oBvt_L.js";import"./FormLabel-pcEEqmjq.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-B7r6BzqD.js";import"./TextReducer-B8LAxaee.js";import"./index-DmRlaPE6.js";import"./omit-DXgDXInf.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./wave-CZhb61AN.js";import"./Group-DZSM1WME.js";import"./propPresentation-B5tDD9vt.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./withMeta-CymzVPc2.js";import"./DocPageLayout-ycYJCuGf.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Badge-BnYETXMc.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";const p={FIRST_ACTION:{text:"Action 1",onClick:()=>console.log("Action1")},SECOND_ACTION:{text:"Action 2",onClick:()=>console.log("Action2")}},ce={title:"Hexa UI Components/Alert/Stories",component:s,tags:["!autodocs"],...M({meta:O})},l={render:({children:t,actions:n,...o})=>d(u.map(r=>({label:r,content:e.createElement(s,{...o,mode:r,actions:n?p:void 0},e.createElement(a,{type:"BTR3"},t))}))),argTypes:{mode:{control:!1}}},c={render:({children:t,...n})=>d(u.map(o=>({label:o,content:e.createElement(s,{...n,mode:o,actions:p},e.createElement(a,{type:"BTR3"},t))}))),argTypes:{mode:{control:!1},actions:{control:!1}}},i={render:({children:t,actions:n,...o})=>d(u.map(r=>({label:r,content:e.createElement(s,{...o,mode:r,actions:n?p:void 0,closable:!0},e.createElement(a,{type:"BTR3"},t))}))),argTypes:{mode:{control:!1},closable:{control:!1}}},m={render:({actions:t,...n})=>e.createElement(s,{...n,actions:t?p:void 0}),args:{children:e.createElement(T,{gap:8},e.createElement(T,null,e.createElement(I,{outlined:!0},"Tag"),e.createElement(a,{type:"H6"},"Custom title")),e.createElement(a,null,"With multiple lines"))}};var g,A,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
