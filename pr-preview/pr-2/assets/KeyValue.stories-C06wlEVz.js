import{M as v,R as e,b as T,L as K,H as C}from"./iframe-aBV3CYH3.js";import{w as b}from"./withMeta-C33uN6BS.js";import{s as x}from"./helpers-BytZKRkB.js";import{B as E}from"./Button-DgUfCEii.js";import{T as m}from"./Textbox-BtYMJ3_s.js";import{T as p}from"./Tag-DY7rUT5S.js";import{K as l}from"./KeyValue-BUt9XpId.js";import{C as W}from"./Checkbox-CPlAGo0k.js";import{R as f}from"./Radio-BkxYXxGm.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BUnRw7iv.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./TextReducer-D8U9kJ52.js";import"./SubComponents-ClGCVWuG.js";import"./TextWithTruncation---FFfZpN.js";import"./ArrowDownSolid-Bgc_LaMP.js";import"./ArrowRightSolid-B1ur2LqF.js";import"./Divider-C5DkIf6Z.js";import"./Badge-CXW4mzDn.js";import"./type-GmYgjqv3.js";import"./colors-nuNhf3hF.js";import"./Indicator-HvddXj7N.js";import"./StatusOkOutline-SGeFpZ58.js";import"./Grid-BW46MuRJ.js";import"./Markdown-DM5b4r5r.js";import"./index-D7pAken6.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-KoQ7Ozhb.js";import"./KeyCode-c5NdJp32.js";import"./isEqual--rqab9QN.js";import"./useMergedState-CYatStVN.js";import"./focus-DNariyKj.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BspTRk2f.js";import"./Toggle-CFrSJDb6.js";import"./AdditionalContent-CBTW8zX-.js";import"./HelpMessage-DBlyCl9F.js";import"./wave-iSaySfuY.js";import"./FormLabel-d3dW3auX.js";import"./Loader-CchH_JSv.js";import"./index-CqTa44a8.js";import"./v4-BoP187Zn.js";import"./button-DGh54oSp.js";import"./useGlobalStyles-BWqTjI30.js";import"./InputMasked-jxiIpy-4.js";import"./input-CiZcLd1s.js";import"./index-Chjiymov.js";import"./useThemedTextbox-QNQ8dboe.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DhQ9d7Tv.js";import"./InputNumber-CGktXF1w.js";import"./index-CYEAabar.js";import"./SearchOutlined-CWG8nuz8.js";import"./InputPassword-BekFf1yQ.js";import"./StatusOkSolid-CIlAhBZx.js";import"./useTranslation-C3jgrI3o.js";import"./IconResolver-CiXsV5MV.js";import"./Placeholder-C0eqEAUH.js";import"./index-BkZLf1_p.js";import"./Group-MwZqih5e.js";import"./useId-C8P8VwVw.js";import"./generateId-BXJELych.js";import"./index-DGmaz9Et.js";import"./index-Cgy3Aexl.js";import"./index-DbhZkxXv.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Ключ: Значение»"},S="KeyValue",B="Используется для структурирования информации.",H="Компонент KeyValue. Применим для нередактируемых данных и форм с полями ввода.",I={dod:w,component:S,usage:B,description:H},R=[{pairKey:"Input",pairValue:e.createElement(m,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:e.createElement(m.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:e.createElement(E,{size:"medium",mode:"primary"},"Button")},{pairKey:"Checkbox Group",pairValue:e.createElement(W,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],direction:"vertical"})},{pairKey:"Radio",pairValue:e.createElement(f,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],vertical:!0})},{pairKey:"Tag Group",pairValue:e.createElement("div",null,e.createElement(p,{mode:"red",size:"small"},"Tag"),e.createElement(p,{mode:"marengo",size:"small"},"Tag"),e.createElement(p,{mode:"marina",size:"small"},"Tag"))},{pairKey:"Link",pairValue:e.createElement(K,{href:"#",target:"_blank",size:"medium"},"Link")}],je={title:"Deprecated/KeyValue",component:l,argTypes:{keyTooltip:{control:{type:"text"}},...x(["theme","data","rowHeight","padding","wrapperClasses"])},args:{labelPosition:"aside",keyRequired:!1,keyMode:"secondary",data:R,keysMargin:16,testId:"key-value-test-id",klId:"key-value-kl-id"},parameters:{badges:[v.deprecated],deprecatedLink:"Hexa UI Components/FieldSet",docs:{page:b(I)}}},a={},z=C.div`
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
