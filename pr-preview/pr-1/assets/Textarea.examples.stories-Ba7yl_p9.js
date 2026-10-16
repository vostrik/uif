import{r as E}from"./StoryComponents-DgMyNenL.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-CE3A2i_R.js";import{T as w}from"./Textbox-Bh1_eJmX.js";import{t as I}from"./Textarea.stories-DI0zAkeF.js";import"./FormLabel-BTPnuYAd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./Divider-BfYsgfay.js";import"./useGlobalStyles-DemgArYT.js";import"./InputMasked-DJRwMJxo.js";import"./input-CXZYXpvP.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DFiuUy0S.js";import"./useClassNamedTextbox-Ceydhy0X.js";import"./InputNumber-pm1MHzRq.js";import"./index-Bma-jNZr.js";import"./SearchOutlined-C5ND5PMp.js";import"./button-BXfcPuzR.js";import"./useMergedState-CJ57ru4s.js";import"./InputPassword-DTGy24rF.js";import"./Button-DWAe4sGj.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BHaQF9M1.js";import"./useTranslation-Df249MGx.js";import"./IconResolver-D-DLfVil.js";import"./Placeholder-Cww9fqa_.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
