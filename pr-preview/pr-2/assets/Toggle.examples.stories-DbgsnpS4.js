import{T as K}from"./Palette-B35RaT7h.js";import{T as M}from"./Warnings-DZmjH_lo.js";import{a as u}from"./StoryComponents-CEeqpkjr.js";import{T as Q}from"./Textbox-DmC8mJtS.js";import{c as V,R as e,b,T as X,I as Y}from"./iframe-D5i9Ygdo.js";import{T as r}from"./Toggle-DLx7OJGm.js";import"./Tag-C8lIf1tQ.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./omit-DXgDXInf.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./wave-CAHKjKs-.js";import"./Group-m0-YpTU1.js";import"./FormLabel-c2Q2BrM3.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-BeaQgGYc.js";import"./useGlobalStyles-BDgH4xnZ.js";import"./InputMasked-D5lxln8b.js";import"./input-DSbZT73f.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Dl-Tm7pH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BKLnJg9s.js";import"./InputNumber-RQbuw8Bm.js";import"./index-xCiVKA0M.js";import"./SearchOutlined-DkaJltl-.js";import"./button-D-Oiy998.js";import"./useMergedState-BRnWrkwv.js";import"./InputPassword-BM3g8Pk1.js";import"./Button-CXL83VB_.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./focus-BNJDX2dF.js";import"./ArrowRight-BAmBzp_S.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BK2TPeG4.js";import"./useTranslation-DsfYxNia.js";import"./IconResolver-C8r5gqjC.js";import"./Placeholder-DkijJV4P.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";const ze={title:"Hexa UI Components/Toggle/Stories",component:r,tags:["!autodocs"],args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",children:"Label"}},a={},s={args:{children:void 0}},l={render:o=>e.createElement(u,null,e.createElement(r,{...o,disabled:!0},"Label"),e.createElement(r,{...o,disabled:!0,checked:!0},"Label"))},i={render:o=>e.createElement(u,null,e.createElement(r,{...o,readonly:!0},"Label"),e.createElement(r,{...o,readonly:!0,checked:!0},"Label"))},c={render:o=>e.createElement(u,null,e.createElement(r,{...o,loading:!0},"Label"),e.createElement(r,{...o,loading:!0,checked:!0},"Label"))},m={render:o=>{const[n,z]=b.useState(!0),[G,J]=b.useState(!0),T=t=>t?"On":"Off";return e.createElement(u,null,e.createElement(r,{...o,checked:n,onChange:t=>{alert(`first: ${t}`),z(t)}},T(n)),!n&&e.createElement(X,null,"second onChange does not work"),e.createElement(r,{...o,checked:G,onChange:t=>{n&&(alert(`second: ${t}`),J(t))}},T(n)))}},p={args:{description:"Some description",dependentElement:e.createElement(Q,{placeholder:"dependentElement"})}},d={render:o=>e.createElement("div",null,e.createElement(M,{propName:"compositionTooltip"}),e.createElement("div",{style:{width:"min-content"}},e.createElement(Y,{text:o.compositionTooltip},e.createElement("span",null,e.createElement(r,{...o}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toggle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},g={args:{source:V.toggle},render:o=>e.createElement(K,{...o})};var h,S,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var E,C,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
