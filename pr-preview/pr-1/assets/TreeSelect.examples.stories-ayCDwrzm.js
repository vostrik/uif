import{T}from"./Palette-BaeWRL5w.js";import{a as k,T as n}from"./TreeSelect-Bxa7Jdj3.js";import{c as v,b as g,R as i}from"./iframe-B2l-dmA0.js";import{S as w,t as N}from"./TreeSelect.stories-B-2TrbpG.js";import"./WithGlobalStyles-Bxo2a5yV.js";import"./useGlobalStyles-DOvBPfaB.js";import"./Select-CqTsWq-v.js";import"./TextReducer-DpL_UgVZ.js";import"./FormLabel-B4tLdVC9.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Bdw-yt0a.js";import"./index-BOo2ub6M.js";import"./omit-DXgDXInf.js";import"./type-BpHiafRd.js";import"./colors-CYe0s51z.js";import"./wave-BK90i1zI.js";import"./Group-DR6kYA3m.js";import"./index-a79vEa0Q.js";import"./useMergedState-B2rUqGYB.js";import"./KeyCode-c5NdJp32.js";import"./index-Cjen56g0.js";import"./addEventListener-BoiPpR6a.js";import"./Portal-D5S_1wfx.js";import"./isEqual-CRR70Q8q.js";import"./regeneratorRuntime-DXcbctbJ.js";import"./pickAttrs-Dzsdrk_t.js";import"./List-n8rU_vX-.js";import"./IconSearch-CUrV-1OI.js";import"./Indicator-6We_UnkV.js";import"./v4-BoP187Zn.js";import"./useTranslation-B4Lk-u3d.js";import"./Checkbox-UDY_jJAR.js";import"./AdditionalContent-MJG4L1hb.js";import"./HelpMessage-DIz5r9vB.js";import"./useId-6IhzUeRK.js";import"./generateId-BXJELych.js";import"./index-D4YlcZ4b.js";import"./index-BojPFag2.js";import"./Loader-CZ44NMWY.js";import"./Divider-Cp3b7YUD.js";import"./Tree-BfRFxPlw.js";import"./Tree-BYUodCCX.js";import"./SettingsGear-BKq3KDhB.js";import"./ArrowDownSolid-Crf9Tjxd.js";import"./Radio-CEHGvf0c.js";import"./index-Dr_Oyd08.js";import"./iconUtil-Y285eBHt.js";import"./SearchOutlined-BOgvv3Np.js";import"./propPresentation-DxdzNHPO.js";import"./blocks-DJzvhAc1.js";import"./index-CabRH6Z3.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
