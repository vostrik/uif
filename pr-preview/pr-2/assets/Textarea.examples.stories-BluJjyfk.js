import{r as E}from"./StoryComponents-BPvyLU8J.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-D64doaOG.js";import{T as w}from"./Textbox-DG8LriK_.js";import{t as I}from"./Textarea.stories-InNPO-Cs.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./Divider-CHq-NCgF.js";import"./useGlobalStyles-BHDTOddm.js";import"./InputMasked-mR9gPOBu.js";import"./input-BGaYNdUH.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CSuDfsxH.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./InputNumber-BgiYnHn5.js";import"./index-M7uLrcpx.js";import"./SearchOutlined-XfEsUDsT.js";import"./button-Xku0lj0N.js";import"./useMergedState-D_-bsn6_.js";import"./InputPassword-CF4iGcsj.js";import"./Button-TmF0MD_-.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./IconResolver-B-B8tWu_.js";import"./Placeholder-CPZh2A8H.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
