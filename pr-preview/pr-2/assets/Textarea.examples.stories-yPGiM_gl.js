import{r as E}from"./StoryComponents-eJOs43SN.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-DNVAFsND.js";import{T as w}from"./Textbox-DtZRjkLt.js";import{t as I}from"./Textarea.stories-aIVDgq52.js";import"./FormLabel-DZAlZE9m.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./wave-BJ1hX2v5.js";import"./Group-DazgOZHb.js";import"./Divider-AC6gIdGc.js";import"./useGlobalStyles-B9ioAtoA.js";import"./InputMasked-DtOxLUJQ.js";import"./input-ThTede3e.js";import"./index-Chjiymov.js";import"./useThemedTextbox-JibM730T.js";import"./useClassNamedTextbox-DY9JG4_L.js";import"./InputNumber-BgZFiRwU.js";import"./index-kDjmKyHE.js";import"./SearchOutlined-ujROV_cz.js";import"./button-BVzDJ1xK.js";import"./useMergedState-ynS__ke0.js";import"./InputPassword-Ca1Y1uhk.js";import"./Button-Cmmczys_.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./focus-DFzoFYVL.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-kiUV4rGA.js";import"./useTranslation-Dg1XEziH.js";import"./IconResolver-COitkxCH.js";import"./Placeholder-CTw9X4Hx.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
