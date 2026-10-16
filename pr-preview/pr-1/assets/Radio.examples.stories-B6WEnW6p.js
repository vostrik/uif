import{b as i,R as r,N as w}from"./iframe-CuxZtUxP.js";import{T as B}from"./Textbox-CxoGGP_s.js";import{R as a}from"./Radio-S19TPsl6.js";import{r as _}from"./Radio.stories-Dai4epM8.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-Db1QJWsp.js";import"./InputMasked-CsxMnSBJ.js";import"./input-BPkqxyzb.js";import"./index-Chjiymov.js";import"./useThemedTextbox-30gzApTL.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DdNl3Yg2.js";import"./InputNumber-D6vE5QAB.js";import"./index-WcvzS2Hd.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./SearchOutlined-C23ph8ww.js";import"./button-DiQn-Imx.js";import"./wave-DhdBo9LV.js";import"./useMergedState-P4F0ljFz.js";import"./InputPassword-B-4kxudl.js";import"./Button-CL-Qr1l3.js";import"./Dropdown-y0CDWPOg.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BjiJJFtM.js";import"./focus-D0ElrM-1.js";import"./Toggle-DNd7EzHq.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./FormLabel-AJ1msRQ3.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./colors-DJ1jxL9H.js";import"./Group-gZM6GuIE.js";import"./ArrowRight-DuajFAMc.js";import"./Divider-FNnXL9Gj.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BjnZPyJU.js";import"./useTranslation-CK04u0KU.js";import"./IconResolver-C_QNjFLL.js";import"./Placeholder-CZpzyuK5.js";import"./useId-D3DcsVr-.js";import"./generateId-BXJELych.js";import"./index-BT_P0ngG.js";import"./index-Dfjq1KcL.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./resolveDesignControls-CFhBuB_d.js";const _e={title:"Hexa UI Components/Radio/Stories",component:a,tags:["!autodocs"],..._},y=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y})}},l={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y,vertical:!1})},name:"Inline Options"},H=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],u={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:H})},name:"With Description"},m={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return r.createElement(w,{getPopupContainer:()=>document.body},r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n}))},name:"With Tooltip"},c={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:r.createElement(B,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})},name:"With Dependent Element"},d={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})}};var v,g,O;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
