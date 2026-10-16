import{M as x,R as e,S as E,T as f}from"./iframe-kzbRZKTh.js";import{T as L}from"./Textbox-Dg5QwrqF.js";import{T as n}from"./Tag-B5Krc590.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-Cl4gxoQZ.js";import{P as S}from"./FormLabel-Bk6eWrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-BoqL1JUd.js";import"./InputMasked-CKY1oKhk.js";import"./input-Bn3C5XX8.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DEm_zcHd.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BSIzcI4n.js";import"./InputNumber-CNpt5PMk.js";import"./index-CaGsXE34.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./SearchOutlined-D3lRq4Vf.js";import"./button-DwzApgVz.js";import"./wave-BHABDpmc.js";import"./useMergedState-BCfT7eD5.js";import"./InputPassword-DCCl0vlz.js";import"./Button-Dd8IwuWk.js";import"./Dropdown-C51UE_7M.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C3zfAXzo.js";import"./focus-D3yS8zRr.js";import"./ArrowRight-Cuc4j5Bt.js";import"./Toggle-DiD7VZ_h.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";import"./Divider-DtbUpKWs.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CZ2Xw8j1.js";import"./useTranslation-BiFIvaSU.js";import"./IconResolver-pzcNx2TP.js";import"./Placeholder-Drb6ifDx.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./colors-BmIR1RWC.js";import"./Group-xSKPmKK8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-Cw6vERwS.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
