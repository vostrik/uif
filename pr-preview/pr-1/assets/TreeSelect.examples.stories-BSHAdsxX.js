import{T}from"./Palette-BrjVJZd3.js";import{a as k,T as n}from"./TreeSelect-Css30GRy.js";import{c as v,b as g,R as i}from"./iframe-CuxZtUxP.js";import{S as w,t as N}from"./TreeSelect.stories-C5mVaBaK.js";import"./WithGlobalStyles-DaUbsGao.js";import"./useGlobalStyles-Db1QJWsp.js";import"./Select-DzKM5TvG.js";import"./TextReducer-DDrjI2Ts.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Dt4urbN1.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./index-BYpoxBYL.js";import"./useMergedState-P4F0ljFz.js";import"./KeyCode-c5NdJp32.js";import"./index-BRVkNmfg.js";import"./addEventListener-DLuhf4PV.js";import"./Portal-D7c67ae8.js";import"./isEqual-BjiJJFtM.js";import"./regeneratorRuntime-B1uYfXsH.js";import"./pickAttrs-ngGqSzBU.js";import"./List-CSzGcTW1.js";import"./IconSearch-BpVxUzQS.js";import"./Indicator-BDm4vtnD.js";import"./v4-BoP187Zn.js";import"./useTranslation-CK04u0KU.js";import"./Checkbox-GN_6Gck8.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./useId-D3DcsVr-.js";import"./generateId-BXJELych.js";import"./index-BttC3HIA.js";import"./index-Dfjq1KcL.js";import"./Loader-gIIFbDBw.js";import"./Divider-FNnXL9Gj.js";import"./Tree-DiWPncuy.js";import"./Tree-Dz4HfPlh.js";import"./SettingsGear-Cz5yH-5S.js";import"./ArrowDownSolid-DT8risoU.js";import"./Radio-S19TPsl6.js";import"./index-BT_P0ngG.js";import"./iconUtil-Jz-rM0MW.js";import"./SearchOutlined-C23ph8ww.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
