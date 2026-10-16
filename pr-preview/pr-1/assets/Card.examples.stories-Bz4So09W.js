import{T as ce}from"./Palette-JYTl6zH7.js";import{s as i}from"./helpers-BytZKRkB.js";import{c as le,R as r,S as E}from"./iframe-CWTW431d.js";import{C as t}from"./Card-CzXDF7tH.js";import{d as h,l as f,a as s,c as de,b as a,e as pe}from"./Card.stories-C3IGX3_-.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-CpY4_2yP.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C6z_ExK5.js";import"./useMergedState-DIWBApoD.js";import"./focus-bRTu4OQx.js";import"./omit-DXgDXInf.js";import"./ArrowRight-MEBjPGWY.js";import"./Toggle-COf30Rrf.js";import"./AdditionalContent-eqvFhAFS.js";import"./HelpMessage-Bq5rlA1f.js";import"./type-DnwzfU9Y.js";import"./wave-DKblzsMF.js";import"./FormLabel-CGcobH17.js";import"./Tag-a0Ju7I2Y.js";import"./TextReducer-BKSOrAn7.js";import"./index-D-MPt99R.js";import"./colors-CDrajaLR.js";import"./Group-BXfAcZfu.js";import"./Divider-BNE7kxRe.js";import"./Loader-Dwsr2p9J.js";import"./index-Cg7pBzQK.js";import"./v4-BoP187Zn.js";import"./Delete-Bfyb0MfQ.js";import"./Menu2-XfxjJBJd.js";import"./useThemedScrollbar-MITxsV6n.js";import"./scrollbarCss-D8lRDg-s.js";import"./IconResolver-Bigm6rDE.js";import"./Placeholder-Bw0WR4Xn.js";import"./Radio-u3MiVqz8.js";import"./useId-CUQWhris.js";import"./generateId-BXJELych.js";import"./index-B2Tt38Ir.js";import"./index-CECn3iMu.js";import"./Checkbox-Lx72eYm4.js";import"./index-BYd2HsKx.js";import"./propPresentation-DC_pTLa9.js";import"./blocks-5hWq9pxN.js";import"./index-Cifl6OSo.js";import"./withMeta-B80vBHhP.js";import"./DocPageLayout-BZwqqSX5.js";import"./SubComponents-DV3S-e9U.js";import"./TextWithTruncation-4wYl1Y4Q.js";import"./ArrowDownSolid-Dxbmwou1.js";import"./ArrowRightSolid-PYHen0lO.js";import"./Badge-BxavHYM7.js";import"./Indicator-D27-HXk4.js";import"./StatusOkOutline-wl-jmqUJ.js";import"./Grid-BYWukwlc.js";import"./Markdown-BS7aYAEA.js";import"./index-C-seFtJV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const Sr={title:"Hexa UI Components/Card/Stories",component:t,tags:["!autodocs"],argTypes:{titleSize:{control:{type:"radio"},options:["small","medium"]}},args:{children:a,draggable:!1,closable:!1,interactive:!1,testId:"card-test-id",klId:"card-kl-id",titleSize:"small"},...de},n={},c={args:{draggable:!0}},l={args:{interactive:!0}},d={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}}),args:{title:s}},p={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...f,size:e}}),args:{title:f}},m={args:{closable:!0,size:"large",actions:h},argTypes:{...i(["closable","size"])}},g={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}}),args:{closable:!0,title:s,actions:h},argTypes:{...i(["closable"])}},u={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...f,size:e}}),args:{closable:!0,title:f,actions:h},argTypes:{...i(["closable"])}},C={render:e=>r.createElement(E,{direction:"vertical",gap:"grouped"},r.createElement(t,{mode:"base",...e},a),r.createElement(t,{mode:"filled",...e},a),r.createElement(t,{mode:"selected",...e},a)),argTypes:{...i(["mode"])}},T={render:e=>r.createElement(E,{direction:"vertical",gap:"grouped"},r.createElement(t,{size:"small",...e},a),r.createElement(t,{size:"medium",...e},a),r.createElement(t,{size:"large",...e},a)),argTypes:{...i(["size"])}},S={render:e=>r.createElement(t,{title:s,closable:!0},r.createElement(E,{direction:"vertical",gap:"grouped",style:{paddingTop:"16px"}},r.createElement(t,{...e},a),r.createElement(t,{...e},a),r.createElement(t,{...e},a))),args:{draggable:!0,mode:"filled",interactive:!0}},z={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}},pe.repeat(10)),args:{maxHeight:"200px"}},b={args:{source:le.card},render:e=>r.createElement(ce,{...e})};var y,A,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var W,x,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
