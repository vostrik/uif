import{b as i,R as r,N as w}from"./iframe-D7vGURqZ.js";import{T as B}from"./Textbox-CEZ0dDcq.js";import{R as a}from"./Radio-CtfAkarO.js";import{r as _}from"./Radio.stories-Be5i_GRE.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-B-HOYsT0.js";import"./InputMasked-_DcfeiFG.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./InputNumber-Bt5vXNjj.js";import"./index-Bijc3Mwe.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./SearchOutlined-zeEOv1ar.js";import"./button-iMtochpT.js";import"./wave-Bh4c9RUC.js";import"./useMergedState-Dgv3UayC.js";import"./InputPassword-5Hf3TJHk.js";import"./Button-9U8xJrYJ.js";import"./Dropdown-CRW3TkbL.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BG56_tLR.js";import"./focus-Dl3Nwm4s.js";import"./ArrowRight-DjKzMcwQ.js";import"./Toggle-Dt_5v6fg.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./FormLabel-BgNNh3NE.js";import"./Tag-CV4RJqlE.js";import"./TextReducer-yX199pg5.js";import"./index-kV8384LW.js";import"./colors-C-4HMPnB.js";import"./Group-DqJlf-Gx.js";import"./Divider-51vw4bax.js";import"./Loader-CWfEwXXE.js";import"./index-sXrtJGg5.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CphszqrJ.js";import"./useTranslation-B2jQLDHY.js";import"./IconResolver-BKL_1foC.js";import"./Placeholder-b0XisIub.js";import"./useId-cILExZ2P.js";import"./generateId-BXJELych.js";import"./index-1qm2gIUV.js";import"./index-6pHAbIny.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./resolveDesignControls-CFhBuB_d.js";const _e={title:"Hexa UI Components/Radio/Stories",component:a,tags:["!autodocs"],..._},y=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y})}},l={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:y,vertical:!1})},name:"Inline Options"},H=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],u={render:e=>{const[t,o]=i.useState();return r.createElement(a,{...e,value:t,onChange:n=>o(n.target.value),options:H})},name:"With Description"},m={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return r.createElement(w,{getPopupContainer:()=>document.body},r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n}))},name:"With Tooltip"},c={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:r.createElement(B,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})},name:"With Dependent Element"},d={render:e=>{const[t,o]=i.useState(),n=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return r.createElement(a,{...e,value:t,onChange:s=>o(s.target.value),options:n})}};var v,g,O;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
