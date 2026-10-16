import{r as E}from"./StoryComponents-tHbdltRK.js";import{v as L}from"./typesHelpers-tpz7Of7L.js";import{b as p,R as O}from"./iframe-B2l-dmA0.js";import{T as w}from"./Textbox-CZYGi6SE.js";import{t as I}from"./Textarea.stories-C-sFGMH6.js";import"./FormLabel-B4tLdVC9.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Bdw-yt0a.js";import"./TextReducer-DpL_UgVZ.js";import"./index-BOo2ub6M.js";import"./omit-DXgDXInf.js";import"./type-BpHiafRd.js";import"./colors-CYe0s51z.js";import"./wave-BK90i1zI.js";import"./Group-DR6kYA3m.js";import"./Divider-Cp3b7YUD.js";import"./useGlobalStyles-DOvBPfaB.js";import"./InputMasked-i3yD_Ead.js";import"./input-DzNTSwXz.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CzZ-JQ0-.js";import"./useClassNamedTextbox-ng42U88B.js";import"./InputNumber-C9On9ukx.js";import"./index-C40OFg9h.js";import"./SearchOutlined-BOgvv3Np.js";import"./button-DQ_ypKND.js";import"./useMergedState-B2rUqGYB.js";import"./InputPassword-bxKZlwoB.js";import"./Button-CojEiSsh.js";import"./Dropdown-S_MRfeG_.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CRR70Q8q.js";import"./focus-BPcTVHQR.js";import"./ArrowRight-Bx66-T-K.js";import"./Toggle-5naXiYrs.js";import"./AdditionalContent-MJG4L1hb.js";import"./HelpMessage-DIz5r9vB.js";import"./Loader-CZ44NMWY.js";import"./index-a79vEa0Q.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CYBx9QGQ.js";import"./useTranslation-B4Lk-u3d.js";import"./IconResolver-BAKZVe_Q.js";import"./Placeholder-BMiAOLu8.js";import"./propPresentation-DxdzNHPO.js";import"./blocks-DJzvhAc1.js";import"./index-CabRH6Z3.js";import"./resolveDesignControls-CFhBuB_d.js";const Ee={title:"Hexa UI Components/Textarea/Stories",component:w.Textarea,tags:["!autodocs"],...I},n="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",a=(e,t=n,r)=>O.createElement(w.Textarea,{...e,value:t,onChange:r}),o={render:e=>{const[t,r]=p.useState(n),[s,C]=p.useState("");return O.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400}},a(e,t,u=>r(u)),a({...e,placeholder:"Empty textarea",rows:5},s,u=>C(u)))}},l={render:e=>{const[t,r]=p.useState(n);return E([{label:"default",content:a(e,t,s=>r(s))},{label:"readonly",content:a({...e,readOnly:!0},n)},{label:"disabled",content:a({...e,disabled:!0},n)}])},argTypes:{disabled:{control:!1,table:{disable:!0}},readOnly:{control:!1,table:{disable:!0}}},args:{disabled:!1,readOnly:!1}},i={render:e=>E(L.map(t=>({label:t,content:a({...e,validationStatus:t},n)})))},m={render:e=>{const[t,r]=p.useState("Текст в поле с ограничением.");return a({...e,showCount:!0,maxLength:100},t,s=>r(s))}};var d,c,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
