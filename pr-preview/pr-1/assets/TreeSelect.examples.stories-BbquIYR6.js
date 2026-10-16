import{T}from"./Palette-CuBWkKVo.js";import{a as k,T as n}from"./TreeSelect-Df8NU8Le.js";import{c as v,b as g,R as i}from"./iframe-CMq2KAbH.js";import{S as w,t as N}from"./TreeSelect.stories-LA5jzpvb.js";import"./WithGlobalStyles-o7CLIUaF.js";import"./useGlobalStyles-e7QAzIdB.js";import"./Select-s3CPaAIc.js";import"./TextReducer-Dpv34lw7.js";import"./FormLabel-lYRdE9pS.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jK9gdpxg.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./index-Ev0QlY--.js";import"./useMergedState-9g38g9C2.js";import"./KeyCode-c5NdJp32.js";import"./index-CB90_bEx.js";import"./addEventListener-DqHlClvg.js";import"./Portal-ytVqnDVd.js";import"./isEqual-D5s7vtpu.js";import"./regeneratorRuntime-rQDsAnBq.js";import"./pickAttrs-DCa3PylG.js";import"./List-DxMpZ25f.js";import"./IconSearch-DPvmYi7_.js";import"./Indicator-PCazPGCQ.js";import"./v4-BoP187Zn.js";import"./useTranslation-DM_UuMFJ.js";import"./Checkbox-ngQLk1ON.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./useId-Cff2kRyv.js";import"./generateId-BXJELych.js";import"./index-DnBmp9Qy.js";import"./index-4_wyJ-_O.js";import"./Loader-B5BFds4o.js";import"./Divider-C_lHVbvw.js";import"./Tree-CIcF7p8l.js";import"./Tree-D7WPzQdL.js";import"./SettingsGear-DTkyTGLO.js";import"./ArrowDownSolid-BktWU_7o.js";import"./Radio-DDgC4Wqw.js";import"./index-DIlSoNEk.js";import"./iconUtil-BBTyevWP.js";import"./SearchOutlined-Bkdm0CAd.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
