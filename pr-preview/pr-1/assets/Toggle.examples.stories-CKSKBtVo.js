import{T as K}from"./Palette-iFbb-9f5.js";import{T as M}from"./Warnings-gW3ywD-P.js";import{a as u}from"./StoryComponents-DgMyNenL.js";import{T as Q}from"./Textbox-Bh1_eJmX.js";import{c as V,R as e,b,T as X,I as Y}from"./iframe-CE3A2i_R.js";import{T as r}from"./Toggle-Bx9catjq.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./FormLabel-BTPnuYAd.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-BfYsgfay.js";import"./useGlobalStyles-DemgArYT.js";import"./InputMasked-DJRwMJxo.js";import"./input-CXZYXpvP.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DFiuUy0S.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Ceydhy0X.js";import"./InputNumber-pm1MHzRq.js";import"./index-Bma-jNZr.js";import"./SearchOutlined-C5ND5PMp.js";import"./button-BXfcPuzR.js";import"./useMergedState-CJ57ru4s.js";import"./InputPassword-DTGy24rF.js";import"./Button-DWAe4sGj.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BHaQF9M1.js";import"./useTranslation-Df249MGx.js";import"./IconResolver-D-DLfVil.js";import"./Placeholder-Cww9fqa_.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";const ze={title:"Hexa UI Components/Toggle/Stories",component:r,tags:["!autodocs"],args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",children:"Label"}},a={},s={args:{children:void 0}},l={render:o=>e.createElement(u,null,e.createElement(r,{...o,disabled:!0},"Label"),e.createElement(r,{...o,disabled:!0,checked:!0},"Label"))},i={render:o=>e.createElement(u,null,e.createElement(r,{...o,readonly:!0},"Label"),e.createElement(r,{...o,readonly:!0,checked:!0},"Label"))},c={render:o=>e.createElement(u,null,e.createElement(r,{...o,loading:!0},"Label"),e.createElement(r,{...o,loading:!0,checked:!0},"Label"))},m={render:o=>{const[n,z]=b.useState(!0),[G,J]=b.useState(!0),T=t=>t?"On":"Off";return e.createElement(u,null,e.createElement(r,{...o,checked:n,onChange:t=>{alert(`first: ${t}`),z(t)}},T(n)),!n&&e.createElement(X,null,"second onChange does not work"),e.createElement(r,{...o,checked:G,onChange:t=>{n&&(alert(`second: ${t}`),J(t))}},T(n)))}},p={args:{description:"Some description",dependentElement:e.createElement(Q,{placeholder:"dependentElement"})}},d={render:o=>e.createElement("div",null,e.createElement(M,{propName:"compositionTooltip"}),e.createElement("div",{style:{width:"min-content"}},e.createElement(Y,{text:o.compositionTooltip},e.createElement("span",null,e.createElement(r,{...o}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toggle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},g={args:{source:V.toggle},render:o=>e.createElement(K,{...o})};var h,S,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var E,C,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: undefined
  }
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var L,x,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} disabled>Label</Toggle>
      <Toggle {...args} disabled checked>Label</Toggle>
    </StoryColumn>
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var v,W,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} readonly>Label</Toggle>
      <Toggle {...args} readonly checked>Label</Toggle>
    </StoryColumn>
}`,...(P=(W=i.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var O,w,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} loading>Label</Toggle>
      <Toggle {...args} loading checked>Label</Toggle>
    </StoryColumn>
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var $,F,A;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: ToggleProps) => {
    const [first, setFirst] = useState<boolean>(true);
    const [second, setSecond] = useState<boolean>(true);
    const getLabel = (value: boolean) => value ? 'On' : 'Off';
    return <StoryColumn>
        <Toggle {...args} checked={first} onChange={value => {
        alert(\`first: \${value}\`);
        setFirst(value);
      }}>
          {getLabel(first)}
        </Toggle>
        {!first && <Text>second onChange does not work</Text>}
        <Toggle {...args} checked={second} onChange={value => {
        if (!first) return;
        alert(\`second: \${value}\`);
        setSecond(value);
      }}>
          {getLabel(first)}
        </Toggle>
      </StoryColumn>;
  }
}`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var B,D,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    description: 'Some description',
    dependentElement: <Textbox placeholder="dependentElement" />
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,_,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => <div>
      <TooltipCompositionWarning propName="compositionTooltip" />
      <div style={{
      width: 'min-content'
    }}>
        <Tooltip text={args.compositionTooltip}>
          <span><Toggle {...args} /></span>
        </Tooltip>
      </div>
    </div>,
  argTypes: {
    compositionTooltip: {
      control: 'text'
    }
  },
  args: {
    compositionTooltip: 'Toggle tooltip'
  } as any,
  parameters: {
    controls: {
      exclude: /(tooltip|componentType)/
    }
  }
}`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var U,j,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    source: componentColors.toggle
  },
  render: args => <ThemedPalette {...args} />
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Ge=["Basic","WithoutLabel","Disabled","Readonly","Loading","Control","WithAdditionalContent","WithTooltip","ColorTokens"];export{a as Basic,g as ColorTokens,m as Control,l as Disabled,c as Loading,i as Readonly,p as WithAdditionalContent,d as WithTooltip,s as WithoutLabel,Ge as __namedExportsOrder,ze as default};
