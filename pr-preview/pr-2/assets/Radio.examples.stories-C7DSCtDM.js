import{b as i,R as r,N as w}from"./iframe-DXVY_al-.js";import{T as B}from"./Textbox-DDr6OIiV.js";import{R as a}from"./Radio-AFMQ9KE7.js";import{r as _}from"./Radio.stories-GER4SJhM.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-DBIbeLBm.js";import"./InputMasked-DkaNQw15.js";import"./input-BpTIWK3x.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Cq5Mjd4x.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DCNzFJDX.js";import"./InputNumber-JjJWXSJf.js";import"./index-CtBoabqo.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./SearchOutlined-BWXO38kT.js";import"./button-CXIseOCg.js";import"./wave-LbmbYf62.js";import"./useMergedState-CR6rJtpb.js";import"./InputPassword-BpB75HOe.js";import"./Button-D0QhSnae.js";import"./Dropdown-BLJYQkSA.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CH4g4j4L.js";import"./focus-BfF3lKIC.js";import"./ArrowRight-D886n5Yw.js";import"./Toggle-B5cbHog7.js";import"./AdditionalContent-ziC3WO2J.js";import"./HelpMessage-SIOObLpW.js";import"./FormLabel-g5DQo_wL.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./colors-CsMbn7MB.js";import"./Group-BgkSKQtg.js";import"./Divider-Hc8qqOlX.js";import"./Loader-BxJLuQsn.js";import"./index-CzITj10R.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-C5PT2fwA.js";import"./useTranslation-DdpNEPN3.js";import"./IconResolver-B5JE2hw5.js";import"./Placeholder-DnfSgq--.js";import"./useId-ZbvgH8iI.js";import"./generateId-BXJELych.js";import"./index-CBsR5aKR.js";import"./index--miG9MHz.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./resolveDesignControls-CFhBuB_d.js";const _e={title:"Hexa UI Components/Radio/Stories",component:a,tags:["!autodocs"],..._},y=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y})}},l={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y,vertical:!1})},name:"Inline Options"},H=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],u={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:H})},name:"With Description"},m={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return r.createElement(w,{getPopupContainer:()=>document.body},r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n}))},name:"With Tooltip"},c={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:r.createElement(B,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})},name:"With Dependent Element"},d={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})}};var v,g,O;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
