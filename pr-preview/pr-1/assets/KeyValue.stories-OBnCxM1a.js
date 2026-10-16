import{M as v,R as e,b as T,L as K,H as C}from"./iframe-D7vGURqZ.js";import{w as b}from"./withMeta-AvforKRz.js";import{s as x}from"./helpers-BytZKRkB.js";import{B as E}from"./Button-9U8xJrYJ.js";import{T as m}from"./Textbox-CEZ0dDcq.js";import{T as p}from"./Tag-CV4RJqlE.js";import{K as l}from"./KeyValue-CFCvBuCI.js";import{C as W}from"./Checkbox-D2B00BGu.js";import{R as f}from"./Radio-CtfAkarO.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-COy0blt1.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./TextReducer-yX199pg5.js";import"./SubComponents-DsXyPHVa.js";import"./TextWithTruncation-DCb05iIM.js";import"./ArrowDownSolid-DlynUjOu.js";import"./ArrowRightSolid-BtdCqW53.js";import"./Divider-51vw4bax.js";import"./Badge-CJ1lMX1D.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./Indicator-CQNXQNlG.js";import"./StatusOkOutline-BvinxEvP.js";import"./Grid-C62gR1jB.js";import"./Markdown-CRrCZtGQ.js";import"./index-6XHrBjkF.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-CRW3TkbL.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BG56_tLR.js";import"./useMergedState-Dgv3UayC.js";import"./focus-Dl3Nwm4s.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DjKzMcwQ.js";import"./Toggle-Dt_5v6fg.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./wave-Bh4c9RUC.js";import"./FormLabel-BgNNh3NE.js";import"./Loader-CWfEwXXE.js";import"./index-sXrtJGg5.js";import"./v4-BoP187Zn.js";import"./button-iMtochpT.js";import"./useGlobalStyles-B-HOYsT0.js";import"./InputMasked-_DcfeiFG.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./InputNumber-Bt5vXNjj.js";import"./index-Bijc3Mwe.js";import"./SearchOutlined-zeEOv1ar.js";import"./InputPassword-5Hf3TJHk.js";import"./StatusOkSolid-CphszqrJ.js";import"./useTranslation-B2jQLDHY.js";import"./IconResolver-BKL_1foC.js";import"./Placeholder-b0XisIub.js";import"./index-kV8384LW.js";import"./Group-DqJlf-Gx.js";import"./useId-cILExZ2P.js";import"./generateId-BXJELych.js";import"./index-pgh_DLMr.js";import"./index-6pHAbIny.js";import"./index-1qm2gIUV.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Ключ: Значение»"},S="KeyValue",B="Используется для структурирования информации.",H="Компонент KeyValue. Применим для нередактируемых данных и форм с полями ввода.",I={dod:w,component:S,usage:B,description:H},R=[{pairKey:"Input",pairValue:e.createElement(m,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:e.createElement(m.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:e.createElement(E,{size:"medium",mode:"primary"},"Button")},{pairKey:"Checkbox Group",pairValue:e.createElement(W,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],direction:"vertical"})},{pairKey:"Radio",pairValue:e.createElement(f,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],vertical:!0})},{pairKey:"Tag Group",pairValue:e.createElement("div",null,e.createElement(p,{mode:"red",size:"small"},"Tag"),e.createElement(p,{mode:"marengo",size:"small"},"Tag"),e.createElement(p,{mode:"marina",size:"small"},"Tag"))},{pairKey:"Link",pairValue:e.createElement(K,{href:"#",target:"_blank",size:"medium"},"Link")}],je={title:"Deprecated/KeyValue",component:l,argTypes:{keyTooltip:{control:{type:"text"}},...x(["theme","data","rowHeight","padding","wrapperClasses"])},args:{labelPosition:"aside",keyRequired:!1,keyMode:"secondary",data:R,keysMargin:16,testId:"key-value-test-id",klId:"key-value-kl-id"},parameters:{badges:[v.deprecated],deprecatedLink:"Hexa UI Components/FieldSet",docs:{page:b(I)}}},a={},z=C.div`
  ${({keyWidth:t,valueWidth:r})=>`
    .kl-custom-key {
      min-width: ${t}px;
    }
      
    .kl-custom-value {
      width: ${r}px;
    }
  `}
`,o={render:({keyWidth:t,valueWidth:r,...s})=>e.createElement(z,{keyWidth:t,valueWidth:r},e.createElement(l,{...s,wrapperClasses:{keyClassName:"kl-custom-key",valueClassName:"kl-custom-value"}})),args:{keyWidth:200,valueWidth:400}},i={render:()=>{const[t,r]=T.useState("");return e.createElement(l,{data:[{key:"unique_key",pairKey:"Input",pairValue:e.createElement(m,{value:t,onChange:s=>{r(s)}})}]})}};var n,u,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,y,k;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    keyWidth,
    valueWidth,
    ...rest
  }: KeyValueCustomClassesProps) => {
    return <KeyValueWrapper keyWidth={keyWidth} valueWidth={valueWidth}>
        <KeyValue {...rest} wrapperClasses={{
        keyClassName: 'kl-custom-key',
        valueClassName: 'kl-custom-value'
      }} />
      </KeyValueWrapper>;
  },
  args: {
    keyWidth: 200,
    valueWidth: 400
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var V,h,g;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <KeyValue data={[{
      key: 'unique_key',
      pairKey: 'Input',
      pairValue: <Textbox value={value} onChange={(newValue: string) => {
        setValue(newValue);
      }} />
    }]} />;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Ae=["Basic","CustomClasses","KeyValueWithUpdateValueState"];export{a as Basic,o as CustomClasses,i as KeyValueWithUpdateValueState,Ae as __namedExportsOrder,je as default};
