import{M as x,R as e,S as E,T as f}from"./iframe-B2l-dmA0.js";import{T as L}from"./Textbox-CZYGi6SE.js";import{T as n}from"./Tag-Bdw-yt0a.js";import{M as k}from"./meta-CIhoNxAS.js";import{L as m}from"./LockGroup-C_1HHtYr.js";import{P as S}from"./FormLabel-B4tLdVC9.js";import"./preload-helper-Dp1pzeXC.js";import"./useGlobalStyles-DOvBPfaB.js";import"./InputMasked-i3yD_Ead.js";import"./input-DzNTSwXz.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CzZ-JQ0-.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-ng42U88B.js";import"./InputNumber-C9On9ukx.js";import"./index-C40OFg9h.js";import"./omit-DXgDXInf.js";import"./type-BpHiafRd.js";import"./SearchOutlined-BOgvv3Np.js";import"./button-DQ_ypKND.js";import"./wave-BK90i1zI.js";import"./useMergedState-B2rUqGYB.js";import"./InputPassword-bxKZlwoB.js";import"./Button-CojEiSsh.js";import"./Dropdown-S_MRfeG_.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CRR70Q8q.js";import"./focus-BPcTVHQR.js";import"./ArrowRight-Bx66-T-K.js";import"./Toggle-5naXiYrs.js";import"./AdditionalContent-MJG4L1hb.js";import"./HelpMessage-DIz5r9vB.js";import"./Divider-Cp3b7YUD.js";import"./Loader-CZ44NMWY.js";import"./index-a79vEa0Q.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CYBx9QGQ.js";import"./useTranslation-B4Lk-u3d.js";import"./IconResolver-BAKZVe_Q.js";import"./Placeholder-BMiAOLu8.js";import"./TextReducer-DpL_UgVZ.js";import"./index-BOo2ub6M.js";import"./colors-CYe0s51z.js";import"./Group-DR6kYA3m.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusWarningSolid-Dv_dEALy.js";const ue={title:"Hexa UI Components/LockGroup/Stories",component:m,tags:["!autodocs"],parameters:{badges:[x.stable],design:k.pixsoView}},r={args:{title:"Заголовок",statusText:"Настройка доступна для редактирования",onLockChange:t=>alert(`Замок ${t?"закрыт":"открыт"}`)},render:t=>e.createElement(m,{...t},e.createElement(L,{value:"12345"}))},o={args:{title:"Заголовок",informationText:e.createElement(f,null,"Информационный текст с ",e.createElement("a",null,"ссылкой"))},render:t=>e.createElement(m,{...t})},a={args:{title:"Заголовок",titleElementAfter:e.createElement(E,{gap:"dependent"},e.createElement(n,null,"Windows"),e.createElement(n,null,"Mac"),e.createElement(S,{content:e.createElement(e.Fragment,null,"Некоторое содержимое")},e.createElement(n,null,"Linux (переопределено)")))},render:t=>e.createElement(m,{...t})};var p,i,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
