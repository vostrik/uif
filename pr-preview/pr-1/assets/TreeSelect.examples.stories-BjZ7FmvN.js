import{T}from"./Palette-JYTl6zH7.js";import{a as k,T as n}from"./TreeSelect-OVlWHgMi.js";import{c as v,b as g,R as i}from"./iframe-CWTW431d.js";import{S as w,t as N}from"./TreeSelect.stories-BRWehBWa.js";import"./WithGlobalStyles-DlY6Q6Kh.js";import"./useGlobalStyles-DzGsrGop.js";import"./Select-Ccmgj3zA.js";import"./TextReducer-BKSOrAn7.js";import"./FormLabel-CGcobH17.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-a0Ju7I2Y.js";import"./index-D-MPt99R.js";import"./omit-DXgDXInf.js";import"./type-DnwzfU9Y.js";import"./colors-CDrajaLR.js";import"./wave-DKblzsMF.js";import"./Group-BXfAcZfu.js";import"./index-Cg7pBzQK.js";import"./useMergedState-DIWBApoD.js";import"./KeyCode-c5NdJp32.js";import"./index-rZR0vFU1.js";import"./addEventListener-DJqonJl0.js";import"./Portal-DxC8yDp2.js";import"./isEqual-C6z_ExK5.js";import"./regeneratorRuntime-DIl02UDk.js";import"./pickAttrs-DtXcozgm.js";import"./List-Bg8LqGmz.js";import"./IconSearch-CIkkotrl.js";import"./Indicator-D27-HXk4.js";import"./v4-BoP187Zn.js";import"./useTranslation-BA-QSkbB.js";import"./Checkbox-Lx72eYm4.js";import"./AdditionalContent-eqvFhAFS.js";import"./HelpMessage-Bq5rlA1f.js";import"./useId-CUQWhris.js";import"./generateId-BXJELych.js";import"./index-BYd2HsKx.js";import"./index-CECn3iMu.js";import"./Loader-Dwsr2p9J.js";import"./Divider-BNE7kxRe.js";import"./Tree-uJdMXhPX.js";import"./Tree-Wg9-zLpn.js";import"./SettingsGear-UgKHAg5C.js";import"./ArrowDownSolid-Dxbmwou1.js";import"./Radio-u3MiVqz8.js";import"./index-B2Tt38Ir.js";import"./iconUtil-MxduZROU.js";import"./SearchOutlined-ChTgzuYk.js";import"./propPresentation-DC_pTLa9.js";import"./blocks-5hWq9pxN.js";import"./index-Cifl6OSo.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
