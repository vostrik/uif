import{T}from"./Palette-B17Qk-oR.js";import{a as k,T as n}from"./TreeSelect-BnCBXgtH.js";import{c as v,b as g,R as i}from"./iframe-kzbRZKTh.js";import{S as w,t as N}from"./TreeSelect.stories-B6bHypNx.js";import"./WithGlobalStyles-yqEfHR_b.js";import"./useGlobalStyles-BoqL1JUd.js";import"./Select-BAlDnJPz.js";import"./TextReducer-DXOQhH6C.js";import"./FormLabel-Bk6eWrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B5Krc590.js";import"./index-BWTd0hrP.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./index-DZ6S_Syn.js";import"./useMergedState-BCfT7eD5.js";import"./KeyCode-c5NdJp32.js";import"./index-DA4G4ohS.js";import"./addEventListener-D8Rt8GhR.js";import"./Portal-BHTgpoqu.js";import"./isEqual-C3zfAXzo.js";import"./regeneratorRuntime-BLVNnz8J.js";import"./pickAttrs-BIix9AW1.js";import"./List-DANl9yyQ.js";import"./IconSearch-dCvuvjbY.js";import"./Indicator-BqqK5Xic.js";import"./v4-BoP187Zn.js";import"./useTranslation-BiFIvaSU.js";import"./Checkbox-pmpF8MFx.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";import"./useId-fWxabs7a.js";import"./generateId-BXJELych.js";import"./index-D2UEQQt0.js";import"./index-DJRYRM1w.js";import"./Loader-DZ0oRqOo.js";import"./Divider-DtbUpKWs.js";import"./Tree-C-k3hU_x.js";import"./Tree-DjPImnzQ.js";import"./SettingsGear-quBq71Yu.js";import"./ArrowDownSolid-CwAn2KlV.js";import"./Radio-tB9xwhM_.js";import"./index-CxJZ9SuL.js";import"./iconUtil-Bzk61-ry.js";import"./SearchOutlined-D3lRq4Vf.js";import"./propPresentation-zJAskzS2.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
