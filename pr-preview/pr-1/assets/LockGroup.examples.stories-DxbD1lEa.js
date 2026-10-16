import{M as x,R as e,S as E,T as f}from"./iframe-CuxZtUxP.js";import{T as L}from"./Textbox-CxoGGP_s.js";import{T as n}from"./Tag-Dt4urbN1.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-DlQcIvqj.js";import{P as S}from"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-Db1QJWsp.js";import"./InputMasked-CsxMnSBJ.js";import"./input-BPkqxyzb.js";import"./index-Chjiymov.js";import"./useThemedTextbox-30gzApTL.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DdNl3Yg2.js";import"./InputNumber-D6vE5QAB.js";import"./index-WcvzS2Hd.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./SearchOutlined-C23ph8ww.js";import"./button-DiQn-Imx.js";import"./wave-DhdBo9LV.js";import"./useMergedState-P4F0ljFz.js";import"./InputPassword-B-4kxudl.js";import"./Button-CL-Qr1l3.js";import"./Dropdown-y0CDWPOg.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BjiJJFtM.js";import"./focus-D0ElrM-1.js";import"./Toggle-DNd7EzHq.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./ArrowRight-DuajFAMc.js";import"./Divider-FNnXL9Gj.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BjnZPyJU.js";import"./useTranslation-CK04u0KU.js";import"./IconResolver-C_QNjFLL.js";import"./Placeholder-CZpzyuK5.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./colors-DJ1jxL9H.js";import"./Group-gZM6GuIE.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-Cx1sPTMm.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
