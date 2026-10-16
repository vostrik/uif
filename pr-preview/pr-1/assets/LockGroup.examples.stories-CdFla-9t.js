import{M as x,R as e,S as E,T as f}from"./iframe-DZ6CNdmR.js";import{T as L}from"./Textbox-BVe-NjwS.js";import{T as n}from"./Tag-jEOS0vhO.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-DBH-jEnp.js";import{P as S}from"./FormLabel-WpK8CiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-C8XA7wQH.js";import"./InputMasked-Dc-xkFNK.js";import"./input-BjQab1dI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-BB93mY2Z.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-dtfbHAr8.js";import"./InputNumber-I6H84s6n.js";import"./index-BEJuuqy6.js";import"./omit-DXgDXInf.js";import"./type-CxXYYU3T.js";import"./SearchOutlined-C_XoquOD.js";import"./button-R3ozi3gu.js";import"./wave-DyggUTsD.js";import"./useMergedState-Bv7O4HCz.js";import"./InputPassword-0CEE8fhu.js";import"./Button-C9wH3E3m.js";import"./Dropdown-duWrCIkx.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DHB5dyvI.js";import"./focus-QtQWvBuy.js";import"./ArrowRight-Fn5l7xGu.js";import"./Toggle-DHSC5Vjo.js";import"./AdditionalContent-CPgxIA4P.js";import"./HelpMessage-BoCaja7X.js";import"./Divider-CeH8hLX2.js";import"./Loader-CUCsJRC1.js";import"./index-BdH7CSvn.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CniIV_0K.js";import"./useTranslation-Bw9GGU1E.js";import"./IconResolver-DS4sEvCH.js";import"./Placeholder-CImJHfn5.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./colors-uxJ92uqJ.js";import"./Group-dqpsK0g-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-VyzHPV23.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
