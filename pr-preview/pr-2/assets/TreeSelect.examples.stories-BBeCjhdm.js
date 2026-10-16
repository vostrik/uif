import{T}from"./Palette-D1YANZRt.js";import{a as k,T as n}from"./TreeSelect-CuIuZ0NQ.js";import{c as v,b as g,R as i}from"./iframe-DXVY_al-.js";import{S as w,t as N}from"./TreeSelect.stories-H4gdvQMx.js";import"./WithGlobalStyles-rMtxUeSs.js";import"./useGlobalStyles-DBIbeLBm.js";import"./Select-CWiGZ4W9.js";import"./TextReducer-L24KvYIg.js";import"./FormLabel-g5DQo_wL.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DDt60avN.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./index-CzITj10R.js";import"./useMergedState-CR6rJtpb.js";import"./KeyCode-c5NdJp32.js";import"./index-BA8GKmul.js";import"./addEventListener-DgBaYXms.js";import"./Portal-eGUUVlW-.js";import"./isEqual-CH4g4j4L.js";import"./regeneratorRuntime-CDzJN3q0.js";import"./pickAttrs-BXpMABgH.js";import"./List-az8gwEeN.js";import"./IconSearch-wrwxbLm_.js";import"./Indicator-B4cq0q5a.js";import"./v4-BoP187Zn.js";import"./useTranslation-DdpNEPN3.js";import"./Checkbox-Cl9uVH9v.js";import"./AdditionalContent-ziC3WO2J.js";import"./HelpMessage-SIOObLpW.js";import"./useId-ZbvgH8iI.js";import"./generateId-BXJELych.js";import"./index-lgiqOHWi.js";import"./index--miG9MHz.js";import"./Loader-BxJLuQsn.js";import"./Divider-Hc8qqOlX.js";import"./Tree-D-LnTB23.js";import"./Tree-DGYqLCIX.js";import"./SettingsGear-qlzgJabk.js";import"./ArrowDownSolid-CLCLXTUz.js";import"./Radio-AFMQ9KE7.js";import"./index-CBsR5aKR.js";import"./iconUtil-CiehdXNL.js";import"./SearchOutlined-BWXO38kT.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
