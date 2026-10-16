import{r as f}from"./StoryComponents-z3jtU0VG.js";import{b as O,R as c}from"./iframe-CWTW431d.js";import{I as P}from"./InputMasked-B6k5DGN3.js";import{i as R,S as k,g as I,R as M}from"./InputMasked.stories-CNTAw_3V.js";import"./FormLabel-CGcobH17.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-a0Ju7I2Y.js";import"./TextReducer-BKSOrAn7.js";import"./index-D-MPt99R.js";import"./omit-DXgDXInf.js";import"./type-DnwzfU9Y.js";import"./colors-CDrajaLR.js";import"./wave-DKblzsMF.js";import"./Group-BXfAcZfu.js";import"./Divider-BNE7kxRe.js";import"./useGlobalStyles-DzGsrGop.js";import"./input-B9zvPYiu.js";import"./index-Chjiymov.js";import"./useThemedTextbox-bbxWP79c.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-C7BYVjFh.js";import"./propPresentation-DC_pTLa9.js";import"./blocks-5hWq9pxN.js";import"./index-Cifl6OSo.js";import"./resolveDesignControls-CFhBuB_d.js";const W={title:"Hexa UI Components/Inputs/InputMasked/Stories",component:P,tags:["!autodocs"],...R},n={render:({mask:t,value:e,onChange:r,...g})=>{const[v,b]=O.useState(e??"");return c.createElement(k,{...g,$disableRtl:!M.includes(t),maskOptions:I(t),value:v,onChange:(o,S)=>{b(o),r==null||r(o,S)}})}},a=(t,e)=>c.createElement(k,{...t,$disableRtl:!M.includes(e),maskOptions:I(e)}),s={args:{value:void 0,testId:void 0,klId:void 0},render:({mask:t,...e})=>f([{label:"phone",content:a(e,"Phone")},{label:"date",content:a(e,"Date")},{label:"IP address",content:a(e,"IP")},{label:"MAC address",content:a(e,"MAC")}])};var d,p,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
