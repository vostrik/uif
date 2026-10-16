import{M as v,R as e,b as T,L as K,H as C}from"./iframe-DIzBSOsa.js";import{w as b}from"./withMeta-CymzVPc2.js";import{s as x}from"./helpers-BytZKRkB.js";import{B as E}from"./Button-papDIOAz.js";import{T as m}from"./Textbox-5yg8yqmJ.js";import{T as p}from"./Tag-UnCHTvWf.js";import{K as l}from"./KeyValue-BmAIt1A8.js";import{C as W}from"./Checkbox-DAHc4PDc.js";import{R as f}from"./Radio-Dq4BYxrY.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ycYJCuGf.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./TextReducer-B8LAxaee.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Divider-B7r6BzqD.js";import"./Badge-BnYETXMc.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-DEik8dKH.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-Dlds-xGy.js";import"./useMergedState-IHysQFAx.js";import"./focus-BglFpdoy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DXYEwFBz.js";import"./Toggle-BwnEG2Z9.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";import"./wave-CZhb61AN.js";import"./FormLabel-pcEEqmjq.js";import"./Loader-t8IvB7CC.js";import"./index-B9He-UhX.js";import"./v4-BoP187Zn.js";import"./button-CJ1TwKfr.js";import"./useGlobalStyles-DgpDkaRt.js";import"./InputMasked-BSoEqwUR.js";import"./input-DWT0eBQ1.js";import"./index-Chjiymov.js";import"./useThemedTextbox-kgZ1h4SY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DZYGm017.js";import"./InputNumber-CYTncJIx.js";import"./index-BfnUqPRg.js";import"./SearchOutlined-Q97UXRgi.js";import"./InputPassword-kn2SY-sh.js";import"./StatusOkSolid-CmY3C1FN.js";import"./useTranslation-akTbTiaP.js";import"./IconResolver-Dvz6iVav.js";import"./Placeholder-CjFf63ey.js";import"./index-DmRlaPE6.js";import"./Group-DZSM1WME.js";import"./useId-Pl0djdF9.js";import"./generateId-BXJELych.js";import"./index-BnuIwIW_.js";import"./index-D8DmUpKe.js";import"./index-Bnv2tKra.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Ключ: Значение»"},S="KeyValue",B="Используется для структурирования информации.",H="Компонент KeyValue. Применим для нередактируемых данных и форм с полями ввода.",I={dod:w,component:S,usage:B,description:H},R=[{pairKey:"Input",pairValue:e.createElement(m,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:e.createElement(m.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:e.createElement(E,{size:"medium",mode:"primary"},"Button")},{pairKey:"Checkbox Group",pairValue:e.createElement(W,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],direction:"vertical"})},{pairKey:"Radio",pairValue:e.createElement(f,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],vertical:!0})},{pairKey:"Tag Group",pairValue:e.createElement("div",null,e.createElement(p,{mode:"red",size:"small"},"Tag"),e.createElement(p,{mode:"marengo",size:"small"},"Tag"),e.createElement(p,{mode:"marina",size:"small"},"Tag"))},{pairKey:"Link",pairValue:e.createElement(K,{href:"#",target:"_blank",size:"medium"},"Link")}],je={title:"Deprecated/KeyValue",component:l,argTypes:{keyTooltip:{control:{type:"text"}},...x(["theme","data","rowHeight","padding","wrapperClasses"])},args:{labelPosition:"aside",keyRequired:!1,keyMode:"secondary",data:R,keysMargin:16,testId:"key-value-test-id",klId:"key-value-kl-id"},parameters:{badges:[v.deprecated],deprecatedLink:"Hexa UI Components/FieldSet",docs:{page:b(I)}}},a={},z=C.div`
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
