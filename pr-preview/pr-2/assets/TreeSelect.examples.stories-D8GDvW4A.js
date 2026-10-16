import{T}from"./Palette-Bw8CWH_N.js";import{a as k,T as n}from"./TreeSelect-C71iTtIC.js";import{c as v,b as g,R as i}from"./iframe-BfQ7ApZt.js";import{S as w,t as N}from"./TreeSelect.stories-BYP65p-I.js";import"./WithGlobalStyles-CXOS8GGe.js";import"./useGlobalStyles-DUVx8yfE.js";import"./Select-CoUNbT5-.js";import"./TextReducer-CUYXVfXw.js";import"./FormLabel-Djf96u0n.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CNKGekQl.js";import"./index-BrzaXK4u.js";import"./omit-DXgDXInf.js";import"./type-BB57qeSp.js";import"./colors-DNfPmHyW.js";import"./wave-DHr58TaD.js";import"./Group-D5E9cFoC.js";import"./index-D5SjVOUn.js";import"./useMergedState-C69lNlPn.js";import"./KeyCode-c5NdJp32.js";import"./index-DikAOKhQ.js";import"./addEventListener-CachLH6z.js";import"./Portal-Cw76o96G.js";import"./isEqual-n2s7gkAb.js";import"./regeneratorRuntime-DQK8uPKk.js";import"./pickAttrs-CinTxY6V.js";import"./List-BIv0r3Yz.js";import"./IconSearch-kMFgwgR1.js";import"./Indicator-B08Z_iCO.js";import"./v4-BoP187Zn.js";import"./useTranslation-49YpKz4U.js";import"./Checkbox-CPaZXU-T.js";import"./AdditionalContent-BlBDkelx.js";import"./HelpMessage-BluS93iW.js";import"./useId-FctK62Z4.js";import"./generateId-BXJELych.js";import"./index-BYnWSJMK.js";import"./index-mQqiuGbz.js";import"./Loader-mu8dA5fb.js";import"./Divider-6ip5VOzi.js";import"./Tree-D7fWJbwS.js";import"./Tree-B2dOK1mN.js";import"./SettingsGear-DWQ5zDkW.js";import"./ArrowDownSolid-DDrs44JP.js";import"./Radio-B2RN6-5B.js";import"./index-3aMGXXK7.js";import"./iconUtil-BZNIJfrx.js";import"./SearchOutlined-TsDRpOJr.js";import"./propPresentation-BC79pgx_.js";import"./blocks-dXj6Tsfl.js";import"./index-BvTlNZwJ.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState<string>();
    return <TreeSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    showSearch: true,
    allowClear: true,
    treeDefaultExpandAll: true,
    treeData: STUB_SIMPLE
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState(['Node1']);
    return <TreeSelect {...args} onChange={setValue} value={value} />;
  },
  args: {
    allowClear: true,
    treeData: STUB_CHECKABLE,
    treeCheckable: true,
    treeLine: {
      showLeafIcon: false
    },
    showCheckedStrategy: SHOW_ALL,
    showArrow: true
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,C,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: {
      tree: componentColors.tree
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Le=["Basic","Checkable","ColorTokens"];export{r as Basic,t as Checkable,o as ColorTokens,Le as __namedExportsOrder,Ee as default};
