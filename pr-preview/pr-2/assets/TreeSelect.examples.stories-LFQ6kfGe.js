import{T}from"./Palette-BlbcEcWI.js";import{a as k,T as n}from"./TreeSelect-B4klaN0Z.js";import{c as v,b as g,R as i}from"./iframe-DNVAFsND.js";import{S as w,t as N}from"./TreeSelect.stories-BAxQ7zIz.js";import"./WithGlobalStyles-DmH5CWai.js";import"./useGlobalStyles-B9ioAtoA.js";import"./Select-Dp0meiLd.js";import"./TextReducer-CcQuVU5v.js";import"./FormLabel-DZAlZE9m.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CWq2qS_r.js";import"./index-Bdb3sctg.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./wave-BJ1hX2v5.js";import"./Group-DazgOZHb.js";import"./index-DMLUsSjF.js";import"./useMergedState-ynS__ke0.js";import"./KeyCode-c5NdJp32.js";import"./index-BLLPHz7a.js";import"./addEventListener-5nEmwaqI.js";import"./Portal-CRwjbGuR.js";import"./isEqual-D4FdOSTr.js";import"./regeneratorRuntime-Deiwfhnr.js";import"./pickAttrs-C-RfKKf4.js";import"./List-BQ64oloB.js";import"./IconSearch-3y4eF6f1.js";import"./Indicator-TFz7xCUL.js";import"./v4-BoP187Zn.js";import"./useTranslation-Dg1XEziH.js";import"./Checkbox-BqJnHVm-.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";import"./useId-CIwCpVbf.js";import"./generateId-BXJELych.js";import"./index-BPy9NEbV.js";import"./index-DO6FZTZA.js";import"./Loader-DssZ-VPI.js";import"./Divider-AC6gIdGc.js";import"./Tree-SPWYz36p.js";import"./Tree-DIGy8JAz.js";import"./SettingsGear-BAcJKvdm.js";import"./ArrowDownSolid-DNNTg_Oj.js";import"./Radio-Bh4SAWeM.js";import"./index-U8wWdTj8.js";import"./iconUtil-3jQrmgyK.js";import"./SearchOutlined-ujROV_cz.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
