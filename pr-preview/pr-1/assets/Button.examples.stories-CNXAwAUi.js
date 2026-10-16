import{w as _}from"./withDesignControls-DTwO-e1q.js";import{T as H}from"./Warnings-PG2VbqfS.js";import{S as u,r as R}from"./StoryComponents-CK7kJD3s.js";import{R as o,I as O}from"./iframe-CuxZtUxP.js";import{B as r,b as U}from"./Button-CL-Qr1l3.js";import{b as n,a as j}from"./Button.stories-eK3WtZeq.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-FNnXL9Gj.js";import"./Dropdown-y0CDWPOg.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BjiJJFtM.js";import"./useMergedState-P4F0ljFz.js";import"./focus-D0ElrM-1.js";import"./Toggle-DNd7EzHq.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./ArrowRight-DuajFAMc.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./button-DiQn-Imx.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./withMeta-BqFg98vY.js";import"./DocPageLayout-laC5MAc2.js";import"./SubComponents-DjSVH-Ma.js";import"./TextWithTruncation-DGkObJqj.js";import"./ArrowDownSolid-DT8risoU.js";import"./ArrowRightSolid-BD1ZcQ2R.js";import"./Badge-ZSNeDhrE.js";import"./Indicator-BDm4vtnD.js";import"./StatusOkOutline-MSqmg68d.js";import"./Grid-9ETswfwf.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./ArrowRightSmall-BQDC8-5_.js";import"./Placeholder-CZpzyuK5.js";import"./Plus-DVH76x0m.js";import"./Settings-axeGZITJ.js";import"./meta-Bk7O3Zx5.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const k=["small","medium","large","extraLarge"],ke={title:"Hexa UI Components/Button/Stories",component:r,tags:["!autodocs"],..._({meta:j})},c={render:({iconBefore:e,iconAfter:t,...a})=>o.createElement(r,{...a,iconAfter:n[t??"none"],iconBefore:n[e??"none"]}),argTypes:{text:{control:!1},iconAfter:{control:!1}},args:{iconBefore:"placeholder",text:void 0}},s={render:({text:e,iconBefore:t,iconAfter:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,text:e,iconBefore:n[t??"none"]}),o.createElement(r,{...i,text:e,iconAfter:n[a??"none"]})),args:{iconBefore:"placeholder",iconAfter:"placeholder"},name:"Icon Before / After"},p={render:e=>R(U.map(t=>({label:t,content:o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"],mode:t})}))),argTypes:{mode:{control:!1}}},m={render:e=>R(k.map(t=>({label:t,content:o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"],size:t})}))),argTypes:{size:{control:!1}}},l={render:({text:e,iconAfter:t,iconBefore:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,iconAfter:n[t??"none"],text:e}),o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"]})),args:{loading:!0,iconBefore:"placeholder"}},f={render:({text:e,iconAfter:t,iconBefore:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"],text:e}),o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"]})),args:{disabled:!0,iconBefore:"placeholder"}},d={render:e=>o.createElement("div",{style:{width:"100%"}},o.createElement(H,null),o.createElement(O,{text:e.tooltip},o.createElement("span",null,o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"]})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:""}}};var B,g,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => <ButtonComponent {...rest} iconAfter={buttonIconVariants[iconAfter ?? 'none']} iconBefore={buttonIconVariants[iconBefore ?? 'none']} />,
  argTypes: {
    text: {
      control: false
    },
    iconAfter: {
      control: false
    }
  },
  args: {
    iconBefore: 'placeholder',
    text: undefined
  }
}`,...(A=(g=c.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var b,C,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    text,
    iconBefore,
    iconAfter,
    ...rest
  }: StoryButtonProps) => <StoryComponentContainer>
      <ButtonComponent {...rest} text={text} iconBefore={buttonIconVariants[iconBefore ?? 'none']} />
      <ButtonComponent {...rest} text={text} iconAfter={buttonIconVariants[iconAfter ?? 'none']} />
    </StoryComponentContainer>,
  args: {
    iconBefore: 'placeholder',
    iconAfter: 'placeholder'
  },
  name: 'Icon Before / After'
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var I,x,y;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => renderVariants(buttonModes.map(mode => ({
    label: mode,
    content: <ButtonComponent {...args} iconAfter={buttonIconVariants[args.iconAfter ?? 'none']} iconBefore={buttonIconVariants[args.iconBefore ?? 'none']} mode={mode} />
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var V,E,T;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => renderVariants(defaultSizes.map(size => ({
    label: size,
    content: <ButtonComponent {...args} iconAfter={buttonIconVariants[args.iconAfter ?? 'none']} iconBefore={buttonIconVariants[args.iconBefore ?? 'none']} size={size as ButtonSize} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var h,z,P;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    text,
    iconAfter,
    iconBefore,
    ...rest
  }: StoryButtonProps) => <StoryComponentContainer>
      <ButtonComponent {...rest} iconAfter={buttonIconVariants[iconAfter ?? 'none']} text={text} />
      <ButtonComponent {...rest} iconAfter={buttonIconVariants[iconAfter ?? 'none']} iconBefore={buttonIconVariants[iconBefore ?? 'none']} />
    </StoryComponentContainer>,
  args: {
    loading: true,
    iconBefore: 'placeholder'
  }
}`,...(P=(z=l.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var v,w,M;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    text,
    iconAfter,
    iconBefore,
    ...rest
  }: StoryButtonProps) => <StoryComponentContainer>
      <ButtonComponent {...rest} iconAfter={buttonIconVariants[iconAfter ?? 'none']} iconBefore={buttonIconVariants[iconBefore ?? 'none']} text={text} />
      <ButtonComponent {...rest} iconAfter={buttonIconVariants[iconAfter ?? 'none']} iconBefore={buttonIconVariants[iconBefore ?? 'none']} />
    </StoryComponentContainer>,
  args: {
    disabled: true,
    iconBefore: 'placeholder'
  }
}`,...(M=(w=f.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var W,D,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: StoryButtonProps) => <div style={{
    width: '100%'
  }}>
      <TooltipCompositionWarning />
      <Tooltip text={args.tooltip}>
        <span>
          <ButtonComponent {...args} iconAfter={buttonIconVariants[args.iconAfter ?? 'none']} iconBefore={buttonIconVariants[args.iconBefore ?? 'none']} />
        </span>
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
      exclude: ''
    }
  }
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const qe=["IconButton","IconBeforeAfter","Mode","Size","Loading","Disabled","WithTooltip"];export{f as Disabled,s as IconBeforeAfter,c as IconButton,l as Loading,p as Mode,m as Size,d as WithTooltip,qe as __namedExportsOrder,ke as default};
