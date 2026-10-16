import{M as v,R as e,b as T,L as K,H as C}from"./iframe-kzbRZKTh.js";import{w as b}from"./withMeta-D4lXFYrc.js";import{s as x}from"./helpers-BytZKRkB.js";import{B as E}from"./Button-Dd8IwuWk.js";import{T as m}from"./Textbox-Dg5QwrqF.js";import{T as p}from"./Tag-B5Krc590.js";import{K as l}from"./KeyValue-6q670s4U.js";import{C as W}from"./Checkbox-pmpF8MFx.js";import{R as f}from"./Radio-tB9xwhM_.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-jHKysIA0.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./TextReducer-DXOQhH6C.js";import"./SubComponents-We9aHDLB.js";import"./TextWithTruncation-BjF1kgAQ.js";import"./ArrowDownSolid-CwAn2KlV.js";import"./ArrowRightSolid-WWnzh9Fl.js";import"./Divider-DtbUpKWs.js";import"./Badge-mOFGdbE6.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./Indicator-BqqK5Xic.js";import"./StatusOkOutline-BqQBBn0Z.js";import"./Grid-Cf1iTfsZ.js";import"./Markdown-COgEAH6_.js";import"./index-Dqpnzz1w.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-C51UE_7M.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C3zfAXzo.js";import"./useMergedState-BCfT7eD5.js";import"./focus-D3yS8zRr.js";import"./omit-DXgDXInf.js";import"./ArrowRight-Cuc4j5Bt.js";import"./Toggle-DiD7VZ_h.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";import"./wave-BHABDpmc.js";import"./FormLabel-Bk6eWrFo.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";import"./v4-BoP187Zn.js";import"./button-DwzApgVz.js";import"./useGlobalStyles-BoqL1JUd.js";import"./InputMasked-CKY1oKhk.js";import"./input-Bn3C5XX8.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DEm_zcHd.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BSIzcI4n.js";import"./InputNumber-CNpt5PMk.js";import"./index-CaGsXE34.js";import"./SearchOutlined-D3lRq4Vf.js";import"./InputPassword-DCCl0vlz.js";import"./StatusOkSolid-CZ2Xw8j1.js";import"./useTranslation-BiFIvaSU.js";import"./IconResolver-pzcNx2TP.js";import"./Placeholder-Drb6ifDx.js";import"./index-BWTd0hrP.js";import"./Group-xSKPmKK8.js";import"./useId-fWxabs7a.js";import"./generateId-BXJELych.js";import"./index-D2UEQQt0.js";import"./index-DJRYRM1w.js";import"./index-CxJZ9SuL.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Ключ: Значение»"},S="KeyValue",B="Используется для структурирования информации.",H="Компонент KeyValue. Применим для нередактируемых данных и форм с полями ввода.",I={dod:w,component:S,usage:B,description:H},R=[{pairKey:"Input",pairValue:e.createElement(m,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:e.createElement(m.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:e.createElement(E,{size:"medium",mode:"primary"},"Button")},{pairKey:"Checkbox Group",pairValue:e.createElement(W,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],direction:"vertical"})},{pairKey:"Radio",pairValue:e.createElement(f,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],vertical:!0})},{pairKey:"Tag Group",pairValue:e.createElement("div",null,e.createElement(p,{mode:"red",size:"small"},"Tag"),e.createElement(p,{mode:"marengo",size:"small"},"Tag"),e.createElement(p,{mode:"marina",size:"small"},"Tag"))},{pairKey:"Link",pairValue:e.createElement(K,{href:"#",target:"_blank",size:"medium"},"Link")}],je={title:"Deprecated/KeyValue",component:l,argTypes:{keyTooltip:{control:{type:"text"}},...x(["theme","data","rowHeight","padding","wrapperClasses"])},args:{labelPosition:"aside",keyRequired:!1,keyMode:"secondary",data:R,keysMargin:16,testId:"key-value-test-id",klId:"key-value-kl-id"},parameters:{badges:[v.deprecated],deprecatedLink:"Hexa UI Components/FieldSet",docs:{page:b(I)}}},a={},z=C.div`
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
