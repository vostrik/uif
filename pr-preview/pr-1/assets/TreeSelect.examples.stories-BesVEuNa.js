import{T}from"./Palette-BLZ41xKU.js";import{a as k,T as n}from"./TreeSelect-DsF3FtAX.js";import{c as v,b as g,R as i}from"./iframe-BPWAyQGL.js";import{S as w,t as N}from"./TreeSelect.stories-B24NIUbc.js";import"./WithGlobalStyles-vDZt7Lit.js";import"./useGlobalStyles-vof3p1Uv.js";import"./Select-ClNB3YO0.js";import"./TextReducer-eAZWrg4x.js";import"./FormLabel-B-aKaC8j.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CLdMII2D.js";import"./index-DVFdTPQg.js";import"./omit-DXgDXInf.js";import"./type-maMiwprh.js";import"./colors-kJjG_WhN.js";import"./wave-EISCTe2f.js";import"./Group-DuhoQwP5.js";import"./index-dBktDYt3.js";import"./useMergedState-g6WViP84.js";import"./KeyCode-c5NdJp32.js";import"./index-TWdY_aDt.js";import"./addEventListener-BiJM96Zz.js";import"./Portal-nrMuzFy1.js";import"./isEqual-YytDoSjm.js";import"./regeneratorRuntime-BjcfEHyP.js";import"./pickAttrs-B74veRfM.js";import"./List-DErlc8km.js";import"./IconSearch-VD6JkoWj.js";import"./Indicator-V_gcwk1L.js";import"./v4-BoP187Zn.js";import"./useTranslation-DQyKnvau.js";import"./Checkbox-C6enviWc.js";import"./AdditionalContent-BJ7Szo00.js";import"./HelpMessage-CD1QG__s.js";import"./useId-DBMYbMQW.js";import"./generateId-BXJELych.js";import"./index-B8TW-s5N.js";import"./index-CwCi8DSA.js";import"./Loader-DFUBe3p9.js";import"./Divider-UsJkeAB_.js";import"./Tree-B8y7hhRA.js";import"./Tree-nnWGI_FR.js";import"./SettingsGear-DJ0M1C2-.js";import"./ArrowDownSolid-DRt_qnJW.js";import"./Radio-D71vNyeY.js";import"./index-C7ock8iA.js";import"./iconUtil-CbtVr7d1.js";import"./SearchOutlined-BFls0Wly.js";import"./propPresentation-CIJdeABG.js";import"./blocks-CmgeZvgx.js";import"./index-BXqOKXS7.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
