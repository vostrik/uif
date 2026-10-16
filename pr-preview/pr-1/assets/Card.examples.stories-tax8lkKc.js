import{T as ce}from"./Palette-CuBWkKVo.js";import{s as i}from"./helpers-BytZKRkB.js";import{c as le,R as r,S as E}from"./iframe-CMq2KAbH.js";import{C as t}from"./Card-CsBcBFIj.js";import{d as h,l as f,a as s,c as de,b as a,e as pe}from"./Card.stories-B_KOGAWo.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./type-D3DD6-1D.js";import"./wave-3WO31ZRq.js";import"./FormLabel-lYRdE9pS.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./colors-CLR_yiO4.js";import"./Group-BToCNK5g.js";import"./Divider-C_lHVbvw.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./Delete-5MYexBjj.js";import"./Menu2-BxwN2Mzc.js";import"./useThemedScrollbar-YSLD-mVy.js";import"./scrollbarCss-B1gEaI87.js";import"./IconResolver-Cpezmei0.js";import"./Placeholder-DvpzdgNV.js";import"./Radio-DDgC4Wqw.js";import"./useId-Cff2kRyv.js";import"./generateId-BXJELych.js";import"./index-DIlSoNEk.js";import"./index-4_wyJ-_O.js";import"./Checkbox-ngQLk1ON.js";import"./index-DnBmp9Qy.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./withMeta-Dv8G7Dbj.js";import"./DocPageLayout-CwgI-MzD.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Badge-DZq-1HSe.js";import"./Indicator-PCazPGCQ.js";import"./StatusOkOutline-WlwXIENv.js";import"./Grid-BaI88Kn5.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const Sr={title:"Hexa UI Components/Card/Stories",component:t,tags:["!autodocs"],argTypes:{titleSize:{control:{type:"radio"},options:["small","medium"]}},args:{children:a,draggable:!1,closable:!1,interactive:!1,testId:"card-test-id",klId:"card-kl-id",titleSize:"small"},...de},n={},c={args:{draggable:!0}},l={args:{interactive:!0}},d={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}}),args:{title:s}},p={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...f,size:e}}),args:{title:f}},m={args:{closable:!0,size:"large",actions:h},argTypes:{...i(["closable","size"])}},g={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}}),args:{closable:!0,title:s,actions:h},argTypes:{...i(["closable"])}},u={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...f,size:e}}),args:{closable:!0,title:f,actions:h},argTypes:{...i(["closable"])}},C={render:e=>r.createElement(E,{direction:"vertical",gap:"grouped"},r.createElement(t,{mode:"base",...e},a),r.createElement(t,{mode:"filled",...e},a),r.createElement(t,{mode:"selected",...e},a)),argTypes:{...i(["mode"])}},T={render:e=>r.createElement(E,{direction:"vertical",gap:"grouped"},r.createElement(t,{size:"small",...e},a),r.createElement(t,{size:"medium",...e},a),r.createElement(t,{size:"large",...e},a)),argTypes:{...i(["size"])}},S={render:e=>r.createElement(t,{title:s,closable:!0},r.createElement(E,{direction:"vertical",gap:"grouped",style:{paddingTop:"16px"}},r.createElement(t,{...e},a),r.createElement(t,{...e},a),r.createElement(t,{...e},a))),args:{draggable:!0,mode:"filled",interactive:!0}},z={render:({titleSize:e,...o})=>r.createElement(t,{...o,title:{...s,size:e}},pe.repeat(10)),args:{maxHeight:"200px"}},b={args:{source:le.card},render:e=>r.createElement(ce,{...e})};var y,A,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var W,x,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
