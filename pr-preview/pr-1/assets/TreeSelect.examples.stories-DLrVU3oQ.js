import{T}from"./Palette-iFbb-9f5.js";import{a as k,T as n}from"./TreeSelect-MZEqyLae.js";import{c as v,b as g,R as i}from"./iframe-CE3A2i_R.js";import{S as w,t as N}from"./TreeSelect.stories-ihoiRNIV.js";import"./WithGlobalStyles-B8Vd7N-9.js";import"./useGlobalStyles-DemgArYT.js";import"./Select-BT_77KsJ.js";import"./TextReducer-BWwC3ime.js";import"./FormLabel-BTPnuYAd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CwGNHh5s.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./index-DeHYj0xS.js";import"./useMergedState-CJ57ru4s.js";import"./KeyCode-c5NdJp32.js";import"./index-BrIAEOLg.js";import"./addEventListener-CMvQXZgt.js";import"./Portal-BZtnLvEx.js";import"./isEqual-BJj8FZs2.js";import"./regeneratorRuntime-CTHXUUGe.js";import"./pickAttrs-BsfpNHHc.js";import"./List-CHL_Pj4J.js";import"./IconSearch-CovRQ5CD.js";import"./Indicator-CzmYw3rU.js";import"./v4-BoP187Zn.js";import"./useTranslation-Df249MGx.js";import"./Checkbox-DgJSahC_.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./useId-CJZ66fF7.js";import"./generateId-BXJELych.js";import"./index-D9iZAV-N.js";import"./index-x-4LxR_n.js";import"./Loader-B-PrFUxA.js";import"./Divider-BfYsgfay.js";import"./Tree-BQu26Q2s.js";import"./Tree-CIAEXzM-.js";import"./SettingsGear-B-7blicS.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./Radio-CzRYOx6O.js";import"./index-rUbf6g01.js";import"./iconUtil-okTrlXMH.js";import"./SearchOutlined-C5ND5PMp.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
