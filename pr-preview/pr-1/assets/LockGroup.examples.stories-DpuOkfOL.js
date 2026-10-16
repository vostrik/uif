import{M as x,R as e,S as E,T as f}from"./iframe-Df7vKfJt.js";import{T as L}from"./Textbox-B14hTMNc.js";import{T as n}from"./Tag-DQaD3f7K.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-CWyE-zZ7.js";import{P as S}from"./FormLabel-BJ1Ltfk6.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-Bi09YJyx.js";import"./InputMasked-tWD34xqG.js";import"./input-BKEOzk-S.js";import"./index-Chjiymov.js";import"./useThemedTextbox-fVj2LBMS.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-W1Zj8ekK.js";import"./InputNumber-B5i2pNIr.js";import"./index-cR9EwmNO.js";import"./omit-DXgDXInf.js";import"./type-BPSO7Hcc.js";import"./SearchOutlined-BMyuNpTD.js";import"./button-CnTfPpMx.js";import"./wave-DLXz7O8a.js";import"./useMergedState-BzyNOLYY.js";import"./InputPassword-9gZnQ8V2.js";import"./Button-BEXsH9SI.js";import"./Dropdown-CX0MMqyY.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BBH5KuLo.js";import"./focus-BahHV41T.js";import"./ArrowRight-BobUK_ZW.js";import"./Toggle-BMGIIV8U.js";import"./AdditionalContent-DhWVtj4k.js";import"./HelpMessage-SorIYbjM.js";import"./Divider-DpGIrgZy.js";import"./Loader-qrngdWcb.js";import"./index-DTLMFHHc.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-PsOIyvFx.js";import"./useTranslation-BXD4vFEx.js";import"./IconResolver-CayOmfoU.js";import"./Placeholder-CXT89Bbl.js";import"./TextReducer-PfRkTMxb.js";import"./index-Zs4RcXwe.js";import"./colors-BMjSx7ej.js";import"./Group-CS03xTqG.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-D8PC9jTi.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок',
    statusText: 'Настройка доступна для редактирования',
    onLockChange: checked => alert(\`Замок \${checked ? 'закрыт' : 'открыт'}\`)
  },
  render: args => <LockGroup {...args}>
      <Textbox value="12345" />
    </LockGroup>
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,l,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок',
    informationText: <Text>Информационный текст с <a>ссылкой</a></Text>
  },
  render: args => <LockGroup {...args} />
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,u,T;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок',
    titleElementAfter: <Space gap="dependent">
        <Tag>Windows</Tag>
        <Tag>Mac</Tag>
        <Popover content={<>Некоторое содержимое</>}>
          <Tag>Linux (переопределено)</Tag>
        </Popover>
      </Space>
  },
  render: args => <LockGroup {...args} />
}`,...(T=(u=a.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const Te=["Basic","WithInformationText","ElementAfter"];export{r as Basic,a as ElementAfter,o as WithInformationText,Te as __namedExportsOrder,ue as default};
