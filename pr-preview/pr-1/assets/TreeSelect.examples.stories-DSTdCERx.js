import{T}from"./Palette-BqHKA6oY.js";import{a as k,T as n}from"./TreeSelect-BkK7cQd_.js";import{c as v,b as g,R as i}from"./iframe-D7vGURqZ.js";import{S as w,t as N}from"./TreeSelect.stories-vxf0JrwI.js";import"./WithGlobalStyles-JPkQjE1A.js";import"./useGlobalStyles-B-HOYsT0.js";import"./Select-CwVDDty5.js";import"./TextReducer-yX199pg5.js";import"./FormLabel-BgNNh3NE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CV4RJqlE.js";import"./index-kV8384LW.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./wave-Bh4c9RUC.js";import"./Group-DqJlf-Gx.js";import"./index-sXrtJGg5.js";import"./useMergedState-Dgv3UayC.js";import"./KeyCode-c5NdJp32.js";import"./index-BqtHrC0v.js";import"./addEventListener-B1lua7Ax.js";import"./Portal-5e2sV8df.js";import"./isEqual-BG56_tLR.js";import"./regeneratorRuntime-CnvjKiBt.js";import"./pickAttrs-Cmf7WHza.js";import"./List-CzxbyXDB.js";import"./IconSearch-BHlkKiBY.js";import"./Indicator-CQNXQNlG.js";import"./v4-BoP187Zn.js";import"./useTranslation-B2jQLDHY.js";import"./Checkbox-D2B00BGu.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./useId-cILExZ2P.js";import"./generateId-BXJELych.js";import"./index-pgh_DLMr.js";import"./index-6pHAbIny.js";import"./Loader-CWfEwXXE.js";import"./Divider-51vw4bax.js";import"./Tree-CI-yxeqJ.js";import"./Tree-CrUcIwqZ.js";import"./SettingsGear-bdfcEdG6.js";import"./ArrowDownSolid-DlynUjOu.js";import"./Radio-CtfAkarO.js";import"./index-1qm2gIUV.js";import"./iconUtil-DnIw0Vfw.js";import"./SearchOutlined-zeEOv1ar.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
