import{T}from"./Palette-DCq6aAvk.js";import{a as k,T as n}from"./TreeSelect-B_vkMWrX.js";import{c as v,b as g,R as i}from"./iframe-DZ6CNdmR.js";import{S as w,t as N}from"./TreeSelect.stories-BZnWkPZP.js";import"./WithGlobalStyles-DGAieQaq.js";import"./useGlobalStyles-C8XA7wQH.js";import"./Select-CwAXgEEF.js";import"./TextReducer-BUFzZryR.js";import"./FormLabel-WpK8CiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jEOS0vhO.js";import"./index-Aj0jm6uB.js";import"./omit-DXgDXInf.js";import"./type-CxXYYU3T.js";import"./colors-uxJ92uqJ.js";import"./wave-DyggUTsD.js";import"./Group-dqpsK0g-.js";import"./index-BdH7CSvn.js";import"./useMergedState-Bv7O4HCz.js";import"./KeyCode-c5NdJp32.js";import"./index-CS4FsDxm.js";import"./addEventListener-CMogv84G.js";import"./Portal-CUIZqvlJ.js";import"./isEqual-DHB5dyvI.js";import"./regeneratorRuntime-BM5cR9eM.js";import"./pickAttrs-lUs4Fpz8.js";import"./List-5XfbApHs.js";import"./IconSearch-pcJARPxG.js";import"./Indicator-x62EYK4r.js";import"./v4-BoP187Zn.js";import"./useTranslation-Bw9GGU1E.js";import"./Checkbox--1SHICgj.js";import"./AdditionalContent-CPgxIA4P.js";import"./HelpMessage-BoCaja7X.js";import"./useId-DYFiFSDh.js";import"./generateId-BXJELych.js";import"./index-B97hSIQw.js";import"./index-BszuWbEO.js";import"./Loader-CUCsJRC1.js";import"./Divider-CeH8hLX2.js";import"./Tree-CXseKpwo.js";import"./Tree-T8lsp4Ui.js";import"./SettingsGear-wmKme8ns.js";import"./ArrowDownSolid-eeOjxQzr.js";import"./Radio-Cuw_F4rn.js";import"./index-DgOmRnFl.js";import"./iconUtil-CCZRShHs.js";import"./SearchOutlined-C_XoquOD.js";import"./propPresentation-DQRIYBrB.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
