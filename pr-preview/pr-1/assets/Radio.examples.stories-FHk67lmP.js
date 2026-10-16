import{b as i,R as r,N as w}from"./iframe-C5ywg3yF.js";import{T as B}from"./Textbox-DNM5rp-I.js";import{R as a}from"./Radio-DcTC1BVd.js";import{r as _}from"./Radio.stories-B-AdmxP0.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-gt8SBDCb.js";import"./InputMasked-MSHBCWYW.js";import"./input-B0Wxb6FI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-4oG6-pH9.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BZR5FXIa.js";import"./InputNumber-kTKOXpAH.js";import"./index-FBskrQl3.js";import"./omit-DXgDXInf.js";import"./type-CYimqQsV.js";import"./SearchOutlined-DkKb0CGg.js";import"./button-C0MuISIr.js";import"./wave-6D6RLP9Y.js";import"./useMergedState-hWmk9BX_.js";import"./InputPassword-D428oXIW.js";import"./Button-NQ8G2asL.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./focus-D6fBl5Nk.js";import"./ArrowRight-DKeSAYRW.js";import"./Toggle-h5WMIT3p.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";import"./FormLabel-Cl6NqZ0b.js";import"./Tag-D2J0DCjt.js";import"./TextReducer-DYBA9RxT.js";import"./index-B9cL_k2v.js";import"./colors-CEAxVyTa.js";import"./Group-M-SjioCQ.js";import"./Divider-DL-FS3qr.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CWfQ4eAP.js";import"./useTranslation-CbJmFUUZ.js";import"./IconResolver-CZ0-QjIX.js";import"./Placeholder-DD0S7nvg.js";import"./useId-zoCJlebJ.js";import"./generateId-BXJELych.js";import"./index-KdvApCHM.js";import"./index-q8N1L7ed.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./resolveDesignControls-CFhBuB_d.js";const _e={title:"Hexa UI Components/Radio/Stories",component:a,tags:["!autodocs"],..._},y=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y})}},l={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y,vertical:!1})},name:"Inline Options"},H=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],u={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:H})},name:"With Description"},m={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return r.createElement(w,{getPopupContainer:()=>document.body},r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n}))},name:"With Tooltip"},c={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:r.createElement(B,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})},name:"With Dependent Element"},d={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})}};var v,g,O;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={basicOptions} />;
  }
}`,...(O=(g=p.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var b,h,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={basicOptions} vertical={false} />;
  },
  name: 'Inline Options'
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,V,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={withDescriptionOptions} />;
  },
  name: 'With Description'
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var R,W,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const tooltipOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2',
      tooltip: 'Подсказка к опции'
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <PopupConfigProvider getPopupContainer={() => document.body}>
        <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={tooltipOptions} />
      </PopupConfigProvider>;
  },
  name: 'With Tooltip'
}`,...(P=(W=m.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var f,D,q;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const dependentOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2',
      description: 'Описание опции',
      dependentElement: <Textbox placeholder="Зависимый элемент" />
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={dependentOptions} />;
  },
  name: 'With Dependent Element'
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var x,T,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const requiredOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1',
      required: true
    }, {
      label: 'Option 2',
      value: '2',
      required: true
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={requiredOptions} />;
  }
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const He=["Basic","InlineOptions","WithDescription","WithTooltip","WithDependentElement","Required"];export{p as Basic,l as InlineOptions,d as Required,c as WithDependentElement,u as WithDescription,m as WithTooltip,He as __namedExportsOrder,_e as default};
