import{w as _}from"./withDesignControls-DTwO-e1q.js";import{T as H}from"./Warnings-DZmjH_lo.js";import{S as u,r as R}from"./StoryComponents-CEeqpkjr.js";import{R as o,I as O}from"./iframe-D5i9Ygdo.js";import{B as r,b as U}from"./Button-CXL83VB_.js";import{b as n,a as j}from"./Button.stories-ClGAV07R.js";import"./Tag-C8lIf1tQ.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./omit-DXgDXInf.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./wave-CAHKjKs-.js";import"./Group-m0-YpTU1.js";import"./FormLabel-c2Q2BrM3.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-BeaQgGYc.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./useMergedState-BRnWrkwv.js";import"./focus-BNJDX2dF.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./button-D-Oiy998.js";import"./propPresentation-B03l1IYW.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./withMeta-DvsF1LmS.js";import"./DocPageLayout-D9kX8XlS.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Badge-DvZDnB4g.js";import"./Indicator-gZ8T3Y3p.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./ArrowRightSmall-DbgxllLz.js";import"./Placeholder-DkijJV4P.js";import"./Plus-DXYz8piw.js";import"./Settings-TXqp_GLI.js";import"./meta-Bk7O3Zx5.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const k=["small","medium","large","extraLarge"],ke={title:"Hexa UI Components/Button/Stories",component:r,tags:["!autodocs"],..._({meta:j})},c={render:({iconBefore:e,iconAfter:t,...a})=>o.createElement(r,{...a,iconAfter:n[t??"none"],iconBefore:n[e??"none"]}),argTypes:{text:{control:!1},iconAfter:{control:!1}},args:{iconBefore:"placeholder",text:void 0}},s={render:({text:e,iconBefore:t,iconAfter:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,text:e,iconBefore:n[t??"none"]}),o.createElement(r,{...i,text:e,iconAfter:n[a??"none"]})),args:{iconBefore:"placeholder",iconAfter:"placeholder"},name:"Icon Before / After"},p={render:e=>R(U.map(t=>({label:t,content:o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"],mode:t})}))),argTypes:{mode:{control:!1}}},m={render:e=>R(k.map(t=>({label:t,content:o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"],size:t})}))),argTypes:{size:{control:!1}}},l={render:({text:e,iconAfter:t,iconBefore:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,iconAfter:n[t??"none"],text:e}),o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"]})),args:{loading:!0,iconBefore:"placeholder"}},f={render:({text:e,iconAfter:t,iconBefore:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"],text:e}),o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"]})),args:{disabled:!0,iconBefore:"placeholder"}},d={render:e=>o.createElement("div",{style:{width:"100%"}},o.createElement(H,null),o.createElement(O,{text:e.tooltip},o.createElement("span",null,o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"]})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:""}}};var B,g,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
