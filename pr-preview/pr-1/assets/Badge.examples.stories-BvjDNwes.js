import{w as P}from"./withDesignControls-DTwO-e1q.js";import{S as s,T as W}from"./Warnings-PG2VbqfS.js";import{r as C}from"./StoryComponents-CK7kJD3s.js";import{R as e,a as k,P as d,S as O,I as V}from"./iframe-CuxZtUxP.js";import{B as a,b as M,a as F,c as I}from"./Badge-ZSNeDhrE.js";import{b as R}from"./Badge.stories-DPCAbBbg.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-FNnXL9Gj.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./withMeta-BqFg98vY.js";import"./DocPageLayout-laC5MAc2.js";import"./SubComponents-DjSVH-Ma.js";import"./TextWithTruncation-DGkObJqj.js";import"./ArrowDownSolid-DT8risoU.js";import"./ArrowRightSolid-BD1ZcQ2R.js";import"./Indicator-BDm4vtnD.js";import"./StatusOkOutline-MSqmg68d.js";import"./Grid-9ETswfwf.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const ye={title:"Hexa UI Components/Badge/Stories",component:a,tags:["!autodocs"],...P({meta:R})},n={render:t=>C(M.map(o=>({label:o,content:e.createElement(a,{...t,size:"medium",mode:o})})),!0,"medium"),argTypes:{mode:{control:!1},size:{control:!1}}},m={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(k,{closable:!1,mode:"info",style:{marginBottom:16}},e.createElement(d,null,"The large size is only available for the following two modes: ",e.createElement(s,null,"neutralTransparent"),",",e.createElement(s,null,"criticalTransparent"),". For all other modes, use medium."),e.createElement(d,null,"Размер large доступен только для двух модов: ",e.createElement(s,null,"neutralTransparent"),",",e.createElement(s,null,"criticalTransparent"),". Для всех остальных модов используйте medium.")),C(F.map(o=>({label:o,content:e.createElement(O,{gap:16},o==="medium"?M.map(r=>e.createElement(a,{...t,key:r,text:t.text||r,size:"medium",mode:r})):I.map(r=>e.createElement(a,{...t,key:r,text:t.text||r,size:"large",mode:r})))})))),argTypes:{mode:{control:!1},size:{control:!1}}},i={args:{text:"Badge text"}},l={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(W,null),e.createElement(V,{text:t.tooltip},e.createElement("span",null,e.createElement(a,{...t})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:/(title)/}}},p={args:{count:10,overflowCount:9}};var c,g,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: BadgeProps) => renderVariants(badgeModes.map(mode => ({
    label: mode,
    content: <BadgeComponent {...args} size="medium" mode={mode} />
  })), true, 'medium'),
  argTypes: {
    mode: {
      control: false
    },
    size: {
      control: false
    }
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,S,y;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: BadgeProps) => <div style={{
    width: '100%'
  }}>
      <SectionMessage closable={false} mode="info" style={{
      marginBottom: 16
    }}>
        <P>
          The large size is only available for the following two modes: <StyledTag>neutralTransparent</StyledTag>,
          <StyledTag>criticalTransparent</StyledTag>. For all other modes, use medium.
        </P>
        <P>
          Размер large доступен только для двух модов: <StyledTag>neutralTransparent</StyledTag>,
          <StyledTag>criticalTransparent</StyledTag>. Для всех остальных модов используйте medium.
        </P>
      </SectionMessage>
      {renderVariants(badgeSizes.map(size => ({
      label: size,
      content: <Space gap={16}>
              {size === 'medium' ? badgeModes.map(mode => <BadgeComponent {...args} key={mode} text={args.text || mode} size="medium" mode={mode} />) : badgeTransparentModes.map(mode => <BadgeComponent {...args} key={mode} text={args.text || mode} size="large" mode={mode} />)}
            </Space>
    })), true)}
    </div>,
  argTypes: {
    mode: {
      control: false
    },
    size: {
      control: false
    }
  }
}`,...(y=(S=m.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,x,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Badge text'
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var z,E,h;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: BadgeStoryProps) => <div style={{
    width: '100%'
  }}>
      <TooltipCompositionWarning />
      <Tooltip text={args.tooltip}>
        <span><BadgeComponent {...args} /></span>
      </Tooltip>
    </div>,
  argTypes: {
    tooltip: {
      control: 'text'
    }
  },
  args: {
    tooltip: 'Tooltip'
  },
  parameters: {
    controls: {
      exclude: /(title)/
    }
  }
}`,...(h=(E=l.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var w,B,v;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    count: 10,
    overflowCount: 9
  }
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const fe=["Mode","Size","WithText","WithTooltip","WithOverflow"];export{n as Mode,m as Size,p as WithOverflow,i as WithText,l as WithTooltip,fe as __namedExportsOrder,ye as default};
