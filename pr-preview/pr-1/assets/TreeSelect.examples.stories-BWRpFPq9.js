import{T}from"./Palette-TtIZCnc5.js";import{a as k,T as n}from"./TreeSelect-DDKHLjl2.js";import{c as v,b as g,R as i}from"./iframe-Df7vKfJt.js";import{S as w,t as N}from"./TreeSelect.stories-DDCXwJ-3.js";import"./WithGlobalStyles-BQV5Kvda.js";import"./useGlobalStyles-Bi09YJyx.js";import"./Select-Bdihqv-7.js";import"./TextReducer-PfRkTMxb.js";import"./FormLabel-BJ1Ltfk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DQaD3f7K.js";import"./index-Zs4RcXwe.js";import"./omit-DXgDXInf.js";import"./type-BPSO7Hcc.js";import"./colors-BMjSx7ej.js";import"./wave-DLXz7O8a.js";import"./Group-CS03xTqG.js";import"./index-DTLMFHHc.js";import"./useMergedState-BzyNOLYY.js";import"./KeyCode-c5NdJp32.js";import"./index-Bi9yLF_e.js";import"./addEventListener-BkOIecfh.js";import"./Portal-DjPI9O6T.js";import"./isEqual-BBH5KuLo.js";import"./regeneratorRuntime-DZE0JvTb.js";import"./pickAttrs-BgBVRHIF.js";import"./List-NVYmETi6.js";import"./IconSearch-BuQ7TQA5.js";import"./Indicator-BtYVEqOa.js";import"./v4-BoP187Zn.js";import"./useTranslation-BXD4vFEx.js";import"./Checkbox-BHHx7Krr.js";import"./AdditionalContent-DhWVtj4k.js";import"./HelpMessage-SorIYbjM.js";import"./useId-Cjack8XT.js";import"./generateId-BXJELych.js";import"./index-yLTq5hKz.js";import"./index-CJjzuO1X.js";import"./Loader-qrngdWcb.js";import"./Divider-DpGIrgZy.js";import"./Tree-Bvx6qaIh.js";import"./Tree-CSsiPam0.js";import"./SettingsGear-nqfXBEGk.js";import"./ArrowDownSolid-DgIE-i6b.js";import"./Radio-CbtYdzDP.js";import"./index-CQQrDn3U.js";import"./iconUtil-D0cUCk7L.js";import"./SearchOutlined-BMyuNpTD.js";import"./propPresentation-CP3VpjtH.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
