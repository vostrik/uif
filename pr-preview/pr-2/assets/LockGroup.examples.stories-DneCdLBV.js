import{M as x,R as e,S as E,T as f}from"./iframe-D5i9Ygdo.js";import{T as L}from"./Textbox-DmC8mJtS.js";import{T as n}from"./Tag-C8lIf1tQ.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-CMJa-ccX.js";import{P as S}from"./FormLabel-c2Q2BrM3.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-BDgH4xnZ.js";import"./InputMasked-D5lxln8b.js";import"./input-DSbZT73f.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Dl-Tm7pH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BKLnJg9s.js";import"./InputNumber-RQbuw8Bm.js";import"./index-xCiVKA0M.js";import"./omit-DXgDXInf.js";import"./type-CpBfXgi8.js";import"./SearchOutlined-DkaJltl-.js";import"./button-D-Oiy998.js";import"./wave-CAHKjKs-.js";import"./useMergedState-BRnWrkwv.js";import"./InputPassword-BM3g8Pk1.js";import"./Button-CXL83VB_.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./focus-BNJDX2dF.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./Divider-BeaQgGYc.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BK2TPeG4.js";import"./useTranslation-DsfYxNia.js";import"./IconResolver-C8r5gqjC.js";import"./Placeholder-DkijJV4P.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./colors-TzwrEhrS.js";import"./Group-m0-YpTU1.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-CpLpmk3w.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
