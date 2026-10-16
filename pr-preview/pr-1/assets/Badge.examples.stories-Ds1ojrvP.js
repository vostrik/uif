import{w as P}from"./withDesignControls-DTwO-e1q.js";import{S as s,T as W}from"./Warnings-B48ejef0.js";import{r as C}from"./StoryComponents-CJn5qyLn.js";import{R as e,a as k,P as d,S as O,I as V}from"./iframe-CMq2KAbH.js";import{B as a,b as M,a as F,c as I}from"./Badge-DZq-1HSe.js";import{b as R}from"./Badge.stories-dJYrTvoB.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./FormLabel-lYRdE9pS.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-C_lHVbvw.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./withMeta-Dv8G7Dbj.js";import"./DocPageLayout-CwgI-MzD.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Indicator-PCazPGCQ.js";import"./StatusOkOutline-WlwXIENv.js";import"./Grid-BaI88Kn5.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const ye={title:"Hexa UI Components/Badge/Stories",component:a,tags:["!autodocs"],...P({meta:R})},n={render:t=>C(M.map(o=>({label:o,content:e.createElement(a,{...t,size:"medium",mode:o})})),!0,"medium"),argTypes:{mode:{control:!1},size:{control:!1}}},m={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(k,{closable:!1,mode:"info",style:{marginBottom:16}},e.createElement(d,null,"The large size is only available for the following two modes: ",e.createElement(s,null,"neutralTransparent"),",",e.createElement(s,null,"criticalTransparent"),". For all other modes, use medium."),e.createElement(d,null,"Размер large доступен только для двух модов: ",e.createElement(s,null,"neutralTransparent"),",",e.createElement(s,null,"criticalTransparent"),". Для всех остальных модов используйте medium.")),C(F.map(o=>({label:o,content:e.createElement(O,{gap:16},o==="medium"?M.map(r=>e.createElement(a,{...t,key:r,text:t.text||r,size:"medium",mode:r})):I.map(r=>e.createElement(a,{...t,key:r,text:t.text||r,size:"large",mode:r})))})))),argTypes:{mode:{control:!1},size:{control:!1}}},i={args:{text:"Badge text"}},l={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement(W,null),e.createElement(V,{text:t.tooltip},e.createElement("span",null,e.createElement(a,{...t})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:/(title)/}}},p={args:{count:10,overflowCount:9}};var c,g,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
