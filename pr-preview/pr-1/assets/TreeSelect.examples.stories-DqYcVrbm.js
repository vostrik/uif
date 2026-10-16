import{T}from"./Palette-9c62pNPs.js";import{a as k,T as n}from"./TreeSelect-B6dXzzH3.js";import{c as v,b as g,R as i}from"./iframe-81MZLAwA.js";import{S as w,t as N}from"./TreeSelect.stories-BqS4GIfI.js";import"./WithGlobalStyles-f_BSG_yI.js";import"./useGlobalStyles-BwmhfDpL.js";import"./Select-CBFLhGFi.js";import"./TextReducer-DAQahvzG.js";import"./FormLabel-DA9R7IzT.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-F-RHo_zh.js";import"./index-BxcIeMF-.js";import"./omit-DXgDXInf.js";import"./type-CGSjHdi-.js";import"./colors-Czl4z4ke.js";import"./wave-YGWrPKVL.js";import"./Group-CFZXzKY0.js";import"./index-BUvvmL18.js";import"./useMergedState-i9W27Uf3.js";import"./KeyCode-c5NdJp32.js";import"./index-DaQYs-fn.js";import"./addEventListener-CnddlH6m.js";import"./Portal-C0EEReO6.js";import"./isEqual-YFPB3eZ_.js";import"./regeneratorRuntime-BbbKwVXw.js";import"./pickAttrs---SUd6Mw.js";import"./List-BGCTn4FY.js";import"./IconSearch-DQ-hQqGj.js";import"./Indicator-DMhQJtUF.js";import"./v4-BoP187Zn.js";import"./useTranslation-B5SB7IYa.js";import"./Checkbox-CW3pIplx.js";import"./AdditionalContent-BO_qq22o.js";import"./HelpMessage-DWvNdbZo.js";import"./useId-DLgsrleb.js";import"./generateId-BXJELych.js";import"./index-C0CM3e_n.js";import"./index-D0MYEFqz.js";import"./Loader-zSayompk.js";import"./Divider-BRbYwtji.js";import"./Tree-qXPvjleX.js";import"./Tree-k6j5rRdF.js";import"./SettingsGear-CMEHELIK.js";import"./ArrowDownSolid-BNg_rdCk.js";import"./Radio-9XJd1t4q.js";import"./index-BesUB6vu.js";import"./iconUtil-DjbWItxx.js";import"./SearchOutlined-CxSt6dzJ.js";import"./propPresentation--qHUuHxi.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
