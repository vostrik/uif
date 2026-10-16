import{T}from"./Palette-9PuIUoqy.js";import{a as k,T as n}from"./TreeSelect-rt19GUUN.js";import{c as v,b as g,R as i}from"./iframe-C5ywg3yF.js";import{S as w,t as N}from"./TreeSelect.stories-Z1aYXO3X.js";import"./WithGlobalStyles-C_T7EFVW.js";import"./useGlobalStyles-gt8SBDCb.js";import"./Select-LTJTiRcm.js";import"./TextReducer-DYBA9RxT.js";import"./FormLabel-Cl6NqZ0b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D2J0DCjt.js";import"./index-B9cL_k2v.js";import"./omit-DXgDXInf.js";import"./type-CYimqQsV.js";import"./colors-CEAxVyTa.js";import"./wave-6D6RLP9Y.js";import"./Group-M-SjioCQ.js";import"./index-BpcMiooq.js";import"./useMergedState-hWmk9BX_.js";import"./KeyCode-c5NdJp32.js";import"./index-DVYfaf-P.js";import"./addEventListener-XFs79bdF.js";import"./Portal-CF_yGYrl.js";import"./isEqual-C1aX2UMP.js";import"./regeneratorRuntime-Dh23YIsD.js";import"./pickAttrs-BgzDEcR5.js";import"./List-Cq8vYI6g.js";import"./IconSearch-BPTFigGi.js";import"./Indicator-DkDd6DuE.js";import"./v4-BoP187Zn.js";import"./useTranslation-CbJmFUUZ.js";import"./Checkbox-SayzM99V.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";import"./useId-zoCJlebJ.js";import"./generateId-BXJELych.js";import"./index-0ym8uL7g.js";import"./index-q8N1L7ed.js";import"./Loader-BD-fvmCW.js";import"./Divider-DL-FS3qr.js";import"./Tree-Cb-9DPV-.js";import"./Tree-DDDeFjci.js";import"./SettingsGear-CLyoz4IT.js";import"./ArrowDownSolid-_KyHq5Me.js";import"./Radio-DcTC1BVd.js";import"./index-KdvApCHM.js";import"./iconUtil-D3niJN1J.js";import"./SearchOutlined-DkKb0CGg.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
