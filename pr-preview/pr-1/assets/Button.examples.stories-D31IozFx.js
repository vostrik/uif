import{w as _}from"./withDesignControls-DTwO-e1q.js";import{T as H}from"./Warnings-Bdp0tCNC.js";import{S as u,r as R}from"./StoryComponents-tHbdltRK.js";import{R as o,I as O}from"./iframe-B2l-dmA0.js";import{B as r,b as U}from"./Button-CojEiSsh.js";import{b as n,a as j}from"./Button.stories-D0cBcaCL.js";import"./Tag-Bdw-yt0a.js";import"./TextReducer-DpL_UgVZ.js";import"./index-BOo2ub6M.js";import"./omit-DXgDXInf.js";import"./type-BpHiafRd.js";import"./colors-CYe0s51z.js";import"./wave-BK90i1zI.js";import"./Group-DR6kYA3m.js";import"./FormLabel-B4tLdVC9.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Cp3b7YUD.js";import"./Dropdown-S_MRfeG_.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CRR70Q8q.js";import"./useMergedState-B2rUqGYB.js";import"./focus-BPcTVHQR.js";import"./ArrowRight-Bx66-T-K.js";import"./Toggle-5naXiYrs.js";import"./AdditionalContent-MJG4L1hb.js";import"./HelpMessage-DIz5r9vB.js";import"./Loader-CZ44NMWY.js";import"./index-a79vEa0Q.js";import"./v4-BoP187Zn.js";import"./button-DQ_ypKND.js";import"./propPresentation-DxdzNHPO.js";import"./blocks-DJzvhAc1.js";import"./index-CabRH6Z3.js";import"./withMeta-CjL9OWCI.js";import"./DocPageLayout-UzXGnAOi.js";import"./SubComponents-EI3g0EZ8.js";import"./TextWithTruncation-CDCo7Y_H.js";import"./ArrowDownSolid-Crf9Tjxd.js";import"./ArrowRightSolid-D6hHiNpP.js";import"./Badge-sQ1WxikW.js";import"./Indicator-6We_UnkV.js";import"./StatusOkOutline-C91EBLeD.js";import"./Grid-lspeiN_1.js";import"./Markdown-CjdEfNRZ.js";import"./index-CVJDPu1G.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./ArrowRightSmall-CLB635Wg.js";import"./Placeholder-BMiAOLu8.js";import"./Plus-CL2k2OQP.js";import"./Settings-t9676zAG.js";import"./meta-Bk7O3Zx5.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const k=["small","medium","large","extraLarge"],ke={title:"Hexa UI Components/Button/Stories",component:r,tags:["!autodocs"],..._({meta:j})},c={render:({iconBefore:e,iconAfter:t,...a})=>o.createElement(r,{...a,iconAfter:n[t??"none"],iconBefore:n[e??"none"]}),argTypes:{text:{control:!1},iconAfter:{control:!1}},args:{iconBefore:"placeholder",text:void 0}},s={render:({text:e,iconBefore:t,iconAfter:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,text:e,iconBefore:n[t??"none"]}),o.createElement(r,{...i,text:e,iconAfter:n[a??"none"]})),args:{iconBefore:"placeholder",iconAfter:"placeholder"},name:"Icon Before / After"},p={render:e=>R(U.map(t=>({label:t,content:o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"],mode:t})}))),argTypes:{mode:{control:!1}}},m={render:e=>R(k.map(t=>({label:t,content:o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"],size:t})}))),argTypes:{size:{control:!1}}},l={render:({text:e,iconAfter:t,iconBefore:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,iconAfter:n[t??"none"],text:e}),o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"]})),args:{loading:!0,iconBefore:"placeholder"}},f={render:({text:e,iconAfter:t,iconBefore:a,...i})=>o.createElement(u,null,o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"],text:e}),o.createElement(r,{...i,iconAfter:n[t??"none"],iconBefore:n[a??"none"]})),args:{disabled:!0,iconBefore:"placeholder"}},d={render:e=>o.createElement("div",{style:{width:"100%"}},o.createElement(H,null),o.createElement(O,{text:e.tooltip},o.createElement("span",null,o.createElement(r,{...e,iconAfter:n[e.iconAfter??"none"],iconBefore:n[e.iconBefore??"none"]})))),argTypes:{tooltip:{control:"text"}},args:{tooltip:"Tooltip"},parameters:{controls:{exclude:""}}};var B,g,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
