import{r as E}from"./StoryComponents-CoJHZgFZ.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-C5ywg3yF.js";import{T as w}from"./Textbox-DNM5rp-I.js";import{t as I}from"./Textarea.stories-CaQ2B_Et.js";import"./FormLabel-Cl6NqZ0b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D2J0DCjt.js";import"./TextReducer-DYBA9RxT.js";import"./index-B9cL_k2v.js";import"./omit-DXgDXInf.js";import"./type-CYimqQsV.js";import"./colors-CEAxVyTa.js";import"./wave-6D6RLP9Y.js";import"./Group-M-SjioCQ.js";import"./Divider-DL-FS3qr.js";import"./useGlobalStyles-gt8SBDCb.js";import"./InputMasked-MSHBCWYW.js";import"./input-B0Wxb6FI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-4oG6-pH9.js";import"./useClassNamedTextbox-BZR5FXIa.js";import"./InputNumber-kTKOXpAH.js";import"./index-FBskrQl3.js";import"./SearchOutlined-DkKb0CGg.js";import"./button-C0MuISIr.js";import"./useMergedState-hWmk9BX_.js";import"./InputPassword-D428oXIW.js";import"./Button-NQ8G2asL.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./focus-D6fBl5Nk.js";import"./ArrowRight-DKeSAYRW.js";import"./Toggle-h5WMIT3p.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CWfQ4eAP.js";import"./useTranslation-CbJmFUUZ.js";import"./IconResolver-CZ0-QjIX.js";import"./Placeholder-DD0S7nvg.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
