import{M as x,R as e,S as E,T as f}from"./iframe-BC0sauTx.js";import{T as L}from"./Textbox-D4IO5GkS.js";import{T as n}from"./Tag-DYf45Xcw.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-BLAzykvD.js";import{P as S}from"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-CqyrLu9a.js";import"./InputMasked-DUtfeg-u.js";import"./input-l3UZTC3h.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DHXQEynY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DJSqrEzb.js";import"./InputNumber-BWAkKPkq.js";import"./index-D0QCmQVE.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./SearchOutlined-CsWPDYZB.js";import"./button-CQm7lrDl.js";import"./wave-CeOhQ2OJ.js";import"./useMergedState-GIAdtRIo.js";import"./InputPassword-atq-sjm4.js";import"./Button-Cmjt4Mlb.js";import"./Dropdown-bUtM1Y1j.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CAsWAeK7.js";import"./focus-Dnl7tSMp.js";import"./ArrowRight-UOmwPHbX.js";import"./Toggle-BnlzIyHw.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./Divider-BINKUE5V.js";import"./Loader-ZrnY6mmh.js";import"./index-DfGxRC7Y.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-DYWGd29I.js";import"./useTranslation-De9R2daC.js";import"./IconResolver-DXnbb7I9.js";import"./Placeholder-DM3diPVD.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./colors-BlEKYhgo.js";import"./Group-CuTH3Q6e.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-DC4UIBZX.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
