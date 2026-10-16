import{r as E}from"./StoryComponents-CK7kJD3s.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-CuxZtUxP.js";import{T as w}from"./Textbox-CxoGGP_s.js";import{t as I}from"./Textarea.stories-ByJ9oAJK.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./Divider-FNnXL9Gj.js";import"./useGlobalStyles-Db1QJWsp.js";import"./InputMasked-CsxMnSBJ.js";import"./input-BPkqxyzb.js";import"./index-Chjiymov.js";import"./useThemedTextbox-30gzApTL.js";import"./useClassNamedTextbox-DdNl3Yg2.js";import"./InputNumber-D6vE5QAB.js";import"./index-WcvzS2Hd.js";import"./SearchOutlined-C23ph8ww.js";import"./button-DiQn-Imx.js";import"./useMergedState-P4F0ljFz.js";import"./InputPassword-B-4kxudl.js";import"./Button-CL-Qr1l3.js";import"./Dropdown-y0CDWPOg.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BjiJJFtM.js";import"./focus-D0ElrM-1.js";import"./Toggle-DNd7EzHq.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./ArrowRight-DuajFAMc.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BjnZPyJU.js";import"./useTranslation-CK04u0KU.js";import"./IconResolver-C_QNjFLL.js";import"./Placeholder-CZpzyuK5.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
