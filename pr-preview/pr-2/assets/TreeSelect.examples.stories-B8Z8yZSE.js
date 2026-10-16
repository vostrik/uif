import{T}from"./Palette-L_jpL42l.js";import{a as k,T as n}from"./TreeSelect-piBoANVv.js";import{c as v,b as g,R as i}from"./iframe-D64doaOG.js";import{S as w,t as N}from"./TreeSelect.stories-C_n9ioAS.js";import"./WithGlobalStyles-B8piC_dp.js";import"./useGlobalStyles-BHDTOddm.js";import"./Select-C6LzJUfZ.js";import"./TextReducer-D9EoPo-Z.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D6DOgDGV.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./index-B5M9_ZQL.js";import"./useMergedState-D_-bsn6_.js";import"./KeyCode-c5NdJp32.js";import"./index-TCL1DjR0.js";import"./addEventListener-BiP2jT9t.js";import"./Portal-5MZgfFMr.js";import"./isEqual-DOaPQPHU.js";import"./regeneratorRuntime-9jCSACXv.js";import"./pickAttrs-VMlRZr5S.js";import"./List-iUrYHpAM.js";import"./IconSearch-GhEnEuU-.js";import"./Indicator-BWF03Jjq.js";import"./v4-BoP187Zn.js";import"./useTranslation-CtdtsiRO.js";import"./Checkbox-CQJUKqA0.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./useId-DuQtMQjK.js";import"./generateId-BXJELych.js";import"./index-BxD9VrI3.js";import"./index-CSRrHaEE.js";import"./Loader-DHdWRNjN.js";import"./Divider-CHq-NCgF.js";import"./Tree-BvWxRCxD.js";import"./Tree-CPWlgx3K.js";import"./SettingsGear-BgCWcKQG.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./Radio-BMOjQcya.js";import"./index-DVIJVHjY.js";import"./iconUtil-BCyQXUK8.js";import"./SearchOutlined-XfEsUDsT.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
