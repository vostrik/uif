import{r as f}from"./StoryComponents-CY7aiZf6.js";import{b as O,R as c}from"./iframe-D7vGURqZ.js";import{I as P}from"./InputMasked-_DcfeiFG.js";import{i as R,S as k,g as I,R as M}from"./InputMasked.stories-C38VIeaC.js";import"./FormLabel-BgNNh3NE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CV4RJqlE.js";import"./TextReducer-yX199pg5.js";import"./index-kV8384LW.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./wave-Bh4c9RUC.js";import"./Group-DqJlf-Gx.js";import"./Divider-51vw4bax.js";import"./useGlobalStyles-B-HOYsT0.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./resolveDesignControls-CFhBuB_d.js";const W={title:"Hexa UI Components/Inputs/InputMasked/Stories",component:P,tags:["!autodocs"],...R},n={render:({mask:t,value:e,onChange:r,...g})=>{const[v,b]=O.useState(e??"");return c.createElement(k,{...g,$disableRtl:!M.includes(t),maskOptions:I(t),value:v,onChange:(o,S)=>{b(o),r==null||r(o,S)}})}},a=(t,e)=>c.createElement(k,{...t,$disableRtl:!M.includes(e),maskOptions:I(e)}),s={args:{value:void 0,testId:void 0,klId:void 0},render:({mask:t,...e})=>f([{label:"phone",content:a(e,"Phone")},{label:"date",content:a(e,"Date")},{label:"IP address",content:a(e,"IP")},{label:"MAC address",content:a(e,"MAC")}])};var d,p,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    mask,
    value: valueProp,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(valueProp ?? '');
    return <StyledInputMasked {...args} $disableRtl={!RTLMasks.includes(mask)} maskOptions={getInputMaskOptions(mask)} value={value} onChange={(newValue, maskOptions) => {
      setValue(newValue);
      onChange?.(newValue, maskOptions);
    }} />;
  }
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,l,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: undefined,
    testId: undefined,
    klId: undefined
  },
  render: ({
    mask: _mask,
    ...args
  }) => renderVariants([{
    label: 'phone',
    content: renderInputMasked(args, 'Phone')
  }, {
    label: 'date',
    content: renderInputMasked(args, 'Date')
  }, {
    label: 'IP address',
    content: renderInputMasked(args, 'IP')
  }, {
    label: 'MAC address',
    content: renderInputMasked(args, 'MAC')
  }], true)
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const X=["Basic","CommonMasks"];export{n as Basic,s as CommonMasks,X as __namedExportsOrder,W as default};
