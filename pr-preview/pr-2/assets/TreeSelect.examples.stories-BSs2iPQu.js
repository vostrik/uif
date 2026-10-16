import{T}from"./Palette-BB5tpPID.js";import{a as k,T as n}from"./TreeSelect-CugKBPAo.js";import{c as v,b as g,R as i}from"./iframe-aBV3CYH3.js";import{S as w,t as N}from"./TreeSelect.stories-DPND_KWQ.js";import"./WithGlobalStyles-CshPVrGH.js";import"./useGlobalStyles-BWqTjI30.js";import"./Select-CpM_iyi4.js";import"./TextReducer-D8U9kJ52.js";import"./FormLabel-d3dW3auX.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DY7rUT5S.js";import"./index-BkZLf1_p.js";import"./omit-DXgDXInf.js";import"./type-GmYgjqv3.js";import"./colors-nuNhf3hF.js";import"./wave-iSaySfuY.js";import"./Group-MwZqih5e.js";import"./index-CqTa44a8.js";import"./useMergedState-CYatStVN.js";import"./KeyCode-c5NdJp32.js";import"./index-CaGZCEgq.js";import"./addEventListener-50hqKf1t.js";import"./Portal-ndL5V8tE.js";import"./isEqual--rqab9QN.js";import"./regeneratorRuntime-xyLIQKWK.js";import"./pickAttrs-Yiyzt30t.js";import"./List-BwiQBHsG.js";import"./IconSearch-ChDaKnqu.js";import"./Indicator-HvddXj7N.js";import"./v4-BoP187Zn.js";import"./useTranslation-C3jgrI3o.js";import"./Checkbox-CPlAGo0k.js";import"./AdditionalContent-CBTW8zX-.js";import"./HelpMessage-DBlyCl9F.js";import"./useId-C8P8VwVw.js";import"./generateId-BXJELych.js";import"./index-DGmaz9Et.js";import"./index-Cgy3Aexl.js";import"./Loader-CchH_JSv.js";import"./Divider-C5DkIf6Z.js";import"./Tree-D7-OOBrI.js";import"./Tree-ihiMeyif.js";import"./SettingsGear-3doj5gz3.js";import"./ArrowDownSolid-Bgc_LaMP.js";import"./Radio-BkxYXxGm.js";import"./index-DbhZkxXv.js";import"./iconUtil-DM7aM5wT.js";import"./SearchOutlined-CWG8nuz8.js";import"./propPresentation-DwmroTjb.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
