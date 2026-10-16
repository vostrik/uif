import{T}from"./Palette-B35RaT7h.js";import{a as k,T as n}from"./TreeSelect-CMNoi61q.js";import{c as v,b as g,R as i}from"./iframe-D5i9Ygdo.js";import{S as w,t as N}from"./TreeSelect.stories-CWdU3n-O.js";import"./WithGlobalStyles-DCzfeD71.js";import"./useGlobalStyles-BDgH4xnZ.js";import"./Select-BbSQjtom.js";import"./TextReducer-Dagp5bHw.js";import"./FormLabel-c2Q2BrM3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-C8lIf1tQ.js";import"./index-CjdVh8OV.js";import"./omit-DXgDXInf.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./wave-CAHKjKs-.js";import"./Group-m0-YpTU1.js";import"./index-CqaKVEiO.js";import"./useMergedState-BRnWrkwv.js";import"./KeyCode-c5NdJp32.js";import"./index-DzRy2n70.js";import"./addEventListener-D9lgod1h.js";import"./Portal-o-tkHM4V.js";import"./isEqual-CaW8sGOK.js";import"./regeneratorRuntime-U-zJaMuF.js";import"./pickAttrs-BaSJ_H_F.js";import"./List-BLzvUl89.js";import"./IconSearch-BCo8Q4Qp.js";import"./Indicator-gZ8T3Y3p.js";import"./v4-BoP187Zn.js";import"./useTranslation-DsfYxNia.js";import"./Checkbox-A_ZN7wFW.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./useId-Bqy4VVR_.js";import"./generateId-BXJELych.js";import"./index-Bx-gf1Vw.js";import"./index-996YLOch.js";import"./Loader-Dy3Ztxbv.js";import"./Divider-BeaQgGYc.js";import"./Tree-C5-S0Z5_.js";import"./Tree-Do1ofXQf.js";import"./SettingsGear-BQT4b-A9.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./Radio-BkhZCowi.js";import"./index-BH9P-YI5.js";import"./iconUtil-H3zmVj1J.js";import"./SearchOutlined-DkaJltl-.js";import"./propPresentation-B03l1IYW.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
