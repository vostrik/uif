import{T as ce}from"./Palette-BlbcEcWI.js";import{s as i}from"./helpers-BytZKRkB.js";import{c as le,R as r,S as E}from"./iframe-DNVAFsND.js";import{C as t}from"./Card-B2d2VHQb.js";import{d as h,l as f,a as s,c as de,b as a,e as pe}from"./Card.stories-CpQvGict.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./useMergedState-ynS__ke0.js";import"./focus-DFzoFYVL.js";import"./omit-DXgDXInf.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";import"./type-0ivux5bP.js";import"./wave-BJ1hX2v5.js";import"./FormLabel-DZAlZE9m.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./colors-C_cfvQV4.js";import"./Group-DazgOZHb.js";import"./Divider-AC6gIdGc.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./v4-BoP187Zn.js";import"./Delete-DvN4CmC2.js";import"./Menu2-HU7Yq2j9.js";import"./useThemedScrollbar-smW43qi4.js";import"./scrollbarCss-BhICQcX1.js";import"./IconResolver-COitkxCH.js";import"./Placeholder-CTw9X4Hx.js";import"./Radio-Bh4SAWeM.js";import"./useId-CIwCpVbf.js";import"./generateId-BXJELych.js";import"./index-U8wWdTj8.js";import"./index-DO6FZTZA.js";import"./Checkbox-BqJnHVm-.js";import"./index-BPy9NEbV.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./withMeta-1ILsmPN4.js";import"./DocPageLayout-DHJjSlsJ.js";import"./SubComponents-DZ7xv99p.js";import"./TextWithTruncation-D7TECrLB.js";import"./ArrowDownSolid-DNNTg_Oj.js";import"./ArrowRightSolid-Bihw6Oc3.js";import"./Badge-DVgh10Ht.js";import"./Indicator-TFz7xCUL.js";import"./StatusOkOutline-C3AeAZ8Y.js";import"./Grid-DLzObExD.js";import"./Markdown-kDLujRI3.js";import"./index-uXb6Xqmd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const Sr={title:"Hexa UI Components/Card/Stories",component:t,tags:["!autodocs"],argTypes:{titleSize:{control:{type:"radio"},options:["small","medium"]}},args:{children:a,draggable:!1,closable:!1,interactive:!1,testId:"card-test-id",klId:"card-kl-id",titleSize:"small"},...de},n={},c={args:{draggable:!0}},l={args:{interactive:!0}},d={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}}),args:{title:s}},p={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...f,size:e}}),args:{title:f}},m={args:{closable:!0,size:"large",actions:h},argTypes:{...i(["closable","size"])}},g={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}}),args:{closable:!0,title:s,actions:h},argTypes:{...i(["closable"])}},u={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...f,size:e}}),args:{closable:!0,title:f,actions:h},argTypes:{...i(["closable"])}},C={render:e=>r.createElement(E,{direction:"vertical",gap:"grouped"},r.createElement(t,{mode:"base",...e},a),r.createElement(t,{mode:"filled",...e},a),r.createElement(t,{mode:"selected",...e},a)),argTypes:{...i(["mode"])}},T={render:e=>r.createElement(E,{direction:"vertical",gap:"grouped"},r.createElement(t,{size:"small",...e},a),r.createElement(t,{size:"medium",...e},a),r.createElement(t,{size:"large",...e},a)),argTypes:{...i(["size"])}},S={render:e=>r.createElement(t,{title:s,closable:!0},r.createElement(E,{direction:"vertical",gap:"grouped",style:{paddingTop:"16px"}},r.createElement(t,{...e},a),r.createElement(t,{...e},a),r.createElement(t,{...e},a))),args:{draggable:!0,mode:"filled",interactive:!0}},z={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}},pe.repeat(10)),args:{maxHeight:"200px"}},b={args:{source:le.card},render:e=>r.createElement(ce,{...e})};var y,A,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var W,x,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    draggable: true
  }
}`,...(H=(x=c.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var I,P,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    interactive: true
  }
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var L,B,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    titleSize,
    ...props
  }) => <Card {...props} title={{
    ...defaultTitle,
    size: titleSize
  } as CardTitleProps} />,
  args: {
    title: defaultTitle
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var M,R,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ({
    titleSize,
    ...props
  }) => <Card {...props} title={{
    ...longTitle,
    size: titleSize
  } as CardTitleProps} />,
  args: {
    title: longTitle
  }
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,U,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    closable: true,
    size: 'large',
    actions: defaultCardActions
  },
  argTypes: {
    ...sbHideControls(['closable', 'size'])
  }
}`,...(j=(U=m.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var q,w,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ({
    titleSize,
    ...props
  }) => <Card {...props} title={{
    ...defaultTitle,
    size: titleSize
  } as CardTitleProps} />,
  args: {
    closable: true,
    title: defaultTitle,
    actions: defaultCardActions
  },
  argTypes: {
    ...sbHideControls(['closable'])
  }
}`,...(F=(w=g.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: ({
    titleSize,
    ...props
  }) => <Card {...props} title={{
    ...longTitle,
    size: titleSize
  } as CardTitleProps} />,
  args: {
    closable: true,
    title: longTitle,
    actions: defaultCardActions
  },
  argTypes: {
    ...sbHideControls(['closable'])
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,V;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Space direction="vertical" gap="grouped">
      <Card mode="base" {...args}>
        {cardContent}
      </Card>
      <Card mode="filled" {...args}>
        {cardContent}
      </Card>
      <Card mode="selected" {...args}>
        {cardContent}
      </Card>
    </Space>,
  argTypes: {
    ...sbHideControls(['mode'])
  }
}`,...(V=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <Space direction="vertical" gap="grouped">
      <Card size="small" {...args}>
        {cardContent}
      </Card>
      <Card size="medium" {...args}>
        {cardContent}
      </Card>
      <Card size="large" {...args}>
        {cardContent}
      </Card>
    </Space>,
  argTypes: {
    ...sbHideControls(['size'])
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Card title={defaultTitle} closable>
      <Space direction="vertical" gap="grouped" style={{
      paddingTop: '16px'
    }}>
        <Card {...args}>
          {cardContent}
        </Card>
        <Card {...args}>
          {cardContent}
        </Card>
        <Card {...args}>
          {cardContent}
        </Card>
      </Space>
    </Card>,
  args: {
    draggable: true,
    mode: 'filled',
    interactive: true
  }
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: ({
    titleSize,
    ...props
  }) => <Card {...props} title={{
    ...defaultTitle,
    size: titleSize
  } as CardTitleProps}>
      {cardContentInner.repeat(10)}
    </Card>,
  args: {
    maxHeight: '200px'
  }
}`,...(oe=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,ne;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    source: componentColors.card
  },
  render: args => <ThemedPalette {...args} />
}`,...(ne=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const zr=["Basic","Draggable","Interactive","WithTitle","WithLongTitle","WithActions","WithTitleAndActions","WithLongTitleAndActions","Mode","Size","CardsInsideCard","Scrollable","ColorTokens"];export{n as Basic,S as CardsInsideCard,b as ColorTokens,c as Draggable,l as Interactive,C as Mode,z as Scrollable,T as Size,m as WithActions,p as WithLongTitle,u as WithLongTitleAndActions,d as WithTitle,g as WithTitleAndActions,zr as __namedExportsOrder,Sr as default};
