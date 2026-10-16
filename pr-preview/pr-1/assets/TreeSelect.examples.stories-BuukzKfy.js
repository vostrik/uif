import{T}from"./Palette-BoWll2PF.js";import{a as k,T as n}from"./TreeSelect-DBzuGyQc.js";import{c as v,b as g,R as i}from"./iframe-CS_lS3JQ.js";import{S as w,t as N}from"./TreeSelect.stories-BS2vyi6v.js";import"./WithGlobalStyles-Ctoq3cuR.js";import"./useGlobalStyles-Be6xzYS-.js";import"./Select-fv4djXiD.js";import"./TextReducer-BY5uL3xm.js";import"./FormLabel-CwcsdRCh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-K_Mfb6oe.js";import"./index-etHmF8Xf.js";import"./omit-DXgDXInf.js";import"./type-BpgJjWfR.js";import"./colors-D4ituO_X.js";import"./wave-87GZ2a0S.js";import"./Group-DmPThJhc.js";import"./index-FxBC4-nU.js";import"./useMergedState-B61t_fRl.js";import"./KeyCode-c5NdJp32.js";import"./index-pXupdlRx.js";import"./addEventListener-BTGKWlk2.js";import"./Portal-iQrxryRz.js";import"./isEqual-DSLVStBP.js";import"./regeneratorRuntime-CXEq1u0D.js";import"./pickAttrs-wgZBa4UG.js";import"./List-Bjp0SNVe.js";import"./IconSearch-DV1M1iKb.js";import"./Indicator-B2JkvBkD.js";import"./v4-BoP187Zn.js";import"./useTranslation-Co6sA9X3.js";import"./Checkbox-BXqKLmll.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./useId-BYjWvsw4.js";import"./generateId-BXJELych.js";import"./index-DoT2arve.js";import"./index-D7KIalkN.js";import"./Loader-C2l0Wque.js";import"./Divider-D_7SE2Jg.js";import"./Tree-B6o5z9IK.js";import"./Tree-tSIqKc8L.js";import"./SettingsGear-wtQfYMtB.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./Radio-BhvkngYT.js";import"./index-Bz4i9ORa.js";import"./iconUtil-CbkT7k9R.js";import"./SearchOutlined-BE7_ur6Q.js";import"./propPresentation-VPDZOrCH.js";import"./blocks-CJQmJ9VN.js";import"./index-CgpwO2tq.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Ee={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
