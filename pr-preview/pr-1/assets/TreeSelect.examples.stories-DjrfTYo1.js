import{T}from"./Palette-CDmqs2Vy.js";import{a as k,T as n}from"./TreeSelect-D34_qeGd.js";import{c as v,b as g,R as i}from"./iframe-BC0sauTx.js";import{S as w,t as N}from"./TreeSelect.stories-aWxC0mVu.js";import"./WithGlobalStyles-CMqaOBpn.js";import"./useGlobalStyles-CqyrLu9a.js";import"./Select-0OmSTOj3.js";import"./TextReducer-B-H2cHGE.js";import"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DYf45Xcw.js";import"./index-Bazlc50n.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./colors-BlEKYhgo.js";import"./wave-CeOhQ2OJ.js";import"./Group-CuTH3Q6e.js";import"./index-DfGxRC7Y.js";import"./useMergedState-GIAdtRIo.js";import"./KeyCode-c5NdJp32.js";import"./index-DA1QsbVZ.js";import"./addEventListener-oy-TF7CF.js";import"./Portal-Dt5L31z9.js";import"./isEqual-CAsWAeK7.js";import"./regeneratorRuntime-C0pOTN4U.js";import"./pickAttrs-Dsm7ACIa.js";import"./List-BFi6zTWM.js";import"./IconSearch-B-ed8d-J.js";import"./Indicator-C6NMvhP-.js";import"./v4-BoP187Zn.js";import"./useTranslation-De9R2daC.js";import"./Checkbox-0v2wFjNL.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./useId-2E_W_Qyw.js";import"./generateId-BXJELych.js";import"./index-r5fD96Zl.js";import"./index-Cr_hWViW.js";import"./Loader-ZrnY6mmh.js";import"./Divider-BINKUE5V.js";import"./Tree-CW6ra5Ta.js";import"./Tree-DSf8yyUk.js";import"./SettingsGear-DQuvmpTW.js";import"./ArrowDownSolid-CAJ9wxew.js";import"./Radio-D266ULd-.js";import"./index-BZuDLSBv.js";import"./iconUtil-D8IW3An1.js";import"./SearchOutlined-CsWPDYZB.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
