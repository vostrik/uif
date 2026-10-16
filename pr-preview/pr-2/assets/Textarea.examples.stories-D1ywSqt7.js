import{r as E}from"./StoryComponents-B_SbX1GS.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-kzbRZKTh.js";import{T as w}from"./Textbox-Dg5QwrqF.js";import{t as I}from"./Textarea.stories-BFva0bxX.js";import"./FormLabel-Bk6eWrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B5Krc590.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./Divider-DtbUpKWs.js";import"./useGlobalStyles-BoqL1JUd.js";import"./InputMasked-CKY1oKhk.js";import"./input-Bn3C5XX8.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DEm_zcHd.js";import"./useClassNamedTextbox-BSIzcI4n.js";import"./InputNumber-CNpt5PMk.js";import"./index-CaGsXE34.js";import"./SearchOutlined-D3lRq4Vf.js";import"./button-DwzApgVz.js";import"./useMergedState-BCfT7eD5.js";import"./InputPassword-DCCl0vlz.js";import"./Button-Dd8IwuWk.js";import"./Dropdown-C51UE_7M.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C3zfAXzo.js";import"./focus-D3yS8zRr.js";import"./ArrowRight-Cuc4j5Bt.js";import"./Toggle-DiD7VZ_h.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CZ2Xw8j1.js";import"./useTranslation-BiFIvaSU.js";import"./IconResolver-pzcNx2TP.js";import"./Placeholder-Drb6ifDx.js";import"./propPresentation-zJAskzS2.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(textareaValue);
    const [emptyValue, setEmptyValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: 400
    }}>
        {renderTextarea(args, value, v => setValue(v))}
        {renderTextarea({
        ...args,
        placeholder: 'Empty textarea',
        rows: 5
      }, emptyValue, v => setEmptyValue(v))}
      </div>;
  }
}`,...(x=(c=o.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var y,b,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(textareaValue);
    return renderVariants([{
      label: 'default',
      content: renderTextarea(args, value, v => setValue(v))
    }, {
      label: 'readonly',
      content: renderTextarea({
        ...args,
        readOnly: true
      }, textareaValue)
    }, {
      label: 'disabled',
      content: renderTextarea({
        ...args,
        disabled: true
      }, textareaValue)
    }], true);
  },
  argTypes: {
    disabled: {
      control: false,
      table: {
        disable: true
      }
    },
    readOnly: {
      control: false,
      table: {
        disable: true
      }
    }
  },
  args: {
    disabled: false,
    readOnly: false
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var V,g,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => renderVariants(validationStatuses.map(status => ({
    label: status,
    content: renderTextarea({
      ...args,
      validationStatus: status
    }, textareaValue)
  })), true)
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,T,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Текст в поле с ограничением.');
    return renderTextarea({
      ...args,
      showCount: true,
      maxLength: 100
    }, value, v => setValue(v));
  }
}`,...(h=(T=m.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const Oe=["Basic","State","ValidationStatus","WithCounter"];export{o as Basic,l as State,i as ValidationStatus,m as WithCounter,Oe as __namedExportsOrder,Ee as default};
