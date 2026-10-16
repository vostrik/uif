import{T}from"./Palette-BWzVK3dX.js";import{a as k,T as n}from"./TreeSelect-Bi8aiTBy.js";import{c as v,b as g,R as i}from"./iframe-DIzBSOsa.js";import{S as w,t as N}from"./TreeSelect.stories-_RmSbeex.js";import"./WithGlobalStyles-BBiHpo9t.js";import"./useGlobalStyles-DgpDkaRt.js";import"./Select-BRkj2Ax9.js";import"./TextReducer-B8LAxaee.js";import"./FormLabel-pcEEqmjq.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-UnCHTvWf.js";import"./index-DmRlaPE6.js";import"./omit-DXgDXInf.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./wave-CZhb61AN.js";import"./Group-DZSM1WME.js";import"./index-B9He-UhX.js";import"./useMergedState-IHysQFAx.js";import"./KeyCode-c5NdJp32.js";import"./index-DAsgmH2b.js";import"./addEventListener-CSx5L2Uq.js";import"./Portal-D81GKiFd.js";import"./isEqual-Dlds-xGy.js";import"./regeneratorRuntime-CwDONfYV.js";import"./pickAttrs-CW3WlJrc.js";import"./List-CAI2EC-r.js";import"./IconSearch-DcZ1BM5v.js";import"./Indicator-Byl-sjIi.js";import"./v4-BoP187Zn.js";import"./useTranslation-akTbTiaP.js";import"./Checkbox-DAHc4PDc.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";import"./useId-Pl0djdF9.js";import"./generateId-BXJELych.js";import"./index-BnuIwIW_.js";import"./index-D8DmUpKe.js";import"./Loader-t8IvB7CC.js";import"./Divider-B7r6BzqD.js";import"./Tree-DaGhjAJR.js";import"./Tree-Bj3t1dv7.js";import"./SettingsGear-DSgz2ELR.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./Radio-Dq4BYxrY.js";import"./index-Bnv2tKra.js";import"./iconUtil-Br0LwEeX.js";import"./SearchOutlined-Q97UXRgi.js";import"./propPresentation-B5tDD9vt.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
