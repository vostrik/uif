import{b as i,R as r,N as w}from"./iframe-D64doaOG.js";import{T as B}from"./Textbox-DG8LriK_.js";import{R as a}from"./Radio-BMOjQcya.js";import{r as _}from"./Radio.stories-DYsK7hT9.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-BHDTOddm.js";import"./InputMasked-mR9gPOBu.js";import"./input-BGaYNdUH.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CSuDfsxH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./InputNumber-BgiYnHn5.js";import"./index-M7uLrcpx.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./SearchOutlined-XfEsUDsT.js";import"./button-Xku0lj0N.js";import"./wave-D0moY5T7.js";import"./useMergedState-D_-bsn6_.js";import"./InputPassword-CF4iGcsj.js";import"./Button-TmF0MD_-.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./FormLabel-_EAno6xN.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./colors-CZlhbD2k.js";import"./Group-g0kG_cFj.js";import"./Divider-CHq-NCgF.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./IconResolver-B-B8tWu_.js";import"./Placeholder-CPZh2A8H.js";import"./useId-DuQtMQjK.js";import"./generateId-BXJELych.js";import"./index-DVIJVHjY.js";import"./index-CSRrHaEE.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./resolveDesignControls-CFhBuB_d.js";const _e={title:"Hexa UI Components/Radio/Stories",component:a,tags:["!autodocs"],..._},y=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y})}},l={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y,vertical:!1})},name:"Inline Options"},H=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],u={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:H})},name:"With Description"},m={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return r.createElement(w,{getPopupContainer:()=>document.body},r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n}))},name:"With Tooltip"},c={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:r.createElement(B,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})},name:"With Dependent Element"},d={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})}};var v,g,O;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
