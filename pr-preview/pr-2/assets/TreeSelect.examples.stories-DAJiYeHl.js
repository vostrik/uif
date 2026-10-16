import{T}from"./Palette-BAVbpaYU.js";import{a as k,T as n}from"./TreeSelect-B25wuV6P.js";import{c as v,b as g,R as i}from"./iframe-BxJnf3ZL.js";import{S as w,t as N}from"./TreeSelect.stories-BQ87JE_y.js";import"./WithGlobalStyles-C1ne0ZlF.js";import"./useGlobalStyles-BwyzlKcq.js";import"./Select-vOL0j7UD.js";import"./TextReducer-jgmtD67Q.js";import"./FormLabel-C8HaQNzE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B4FkS-ry.js";import"./index-Dlpfquxs.js";import"./omit-DXgDXInf.js";import"./type-l5tskpde.js";import"./colors-yztLXgoP.js";import"./wave-CE4pLSVu.js";import"./Group-Dnx8lKl-.js";import"./index-DLAJHFC-.js";import"./useMergedState-BgQ2XY1A.js";import"./KeyCode-c5NdJp32.js";import"./index-B88-SEp9.js";import"./addEventListener-jyfUXkC3.js";import"./Portal-DtLL7wV_.js";import"./isEqual-lpBnInVO.js";import"./regeneratorRuntime-Balhfmr5.js";import"./pickAttrs-CXAuQQhc.js";import"./List-DYgJ-AUb.js";import"./IconSearch-5ySeIJle.js";import"./Indicator-DttH4MVv.js";import"./v4-BoP187Zn.js";import"./useTranslation-XbAzRulq.js";import"./Checkbox-B8VAb0mI.js";import"./AdditionalContent-0QTduPgH.js";import"./HelpMessage-DFGrmg6s.js";import"./useId-D2csa3bI.js";import"./generateId-BXJELych.js";import"./index-BaomynJn.js";import"./index-CRsZk3jd.js";import"./Loader-CkJh8F18.js";import"./Divider-Ch4BCEC8.js";import"./Tree-CKvt1FHT.js";import"./Tree-CvQBuB2K.js";import"./SettingsGear-BJ71zTJs.js";import"./ArrowDownSolid-mA2-OHVl.js";import"./Radio-B6kw_7nm.js";import"./index-CDrbTqbu.js";import"./iconUtil-_WprIvjg.js";import"./SearchOutlined-DAC8EMEh.js";import"./propPresentation-lj9O_TmM.js";import"./blocks-BzGBXNOF.js";import"./index-RPybRgje.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
