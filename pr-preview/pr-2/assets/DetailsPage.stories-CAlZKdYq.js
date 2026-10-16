import{M as p,R as t,b as B}from"./iframe-DNVAFsND.js";import{w as I}from"./withMeta-1ILsmPN4.js";import{s as O}from"./helpers-BytZKRkB.js";import{B as w}from"./Button-Cmmczys_.js";import{o as c}from"./Placeholder-CTw9X4Hx.js";import{D as v}from"./DetailsPage-CSwKDNvk.js";import{T as S}from"./Toggle-B1y7zhcL.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-DHJjSlsJ.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./TextReducer-CcQuVU5v.js";import"./SubComponents-DZ7xv99p.js";import"./TextWithTruncation-D7TECrLB.js";import"./ArrowDownSolid-DNNTg_Oj.js";import"./ArrowRightSolid-Bihw6Oc3.js";import"./Divider-AC6gIdGc.js";import"./Badge-DVgh10Ht.js";import"./type-0ivux5bP.js";import"./colors-C_cfvQV4.js";import"./Indicator-TFz7xCUL.js";import"./StatusOkOutline-C3AeAZ8Y.js";import"./Grid-DLzObExD.js";import"./Markdown-kDLujRI3.js";import"./index-uXb6Xqmd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./useMergedState-ynS__ke0.js";import"./focus-DFzoFYVL.js";import"./omit-DXgDXInf.js";import"./ArrowRight-GlR7Ouxo.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./v4-BoP187Zn.js";import"./button-BVzDJ1xK.js";import"./wave-BJ1hX2v5.js";import"./Sidebar-D74-L6i_.js";import"./PortalWrapper-Bu_UBFRw.js";import"./Portal-CRwjbGuR.js";import"./useForceUpdate-CWieNRQI.js";import"./Tabs-D27kQuCf.js";import"./i18n-BMsVYjdT.js";import"./FormLabel-DZAlZE9m.js";import"./Tag-CWq2qS_r.js";import"./index-Bdb3sctg.js";import"./Group-DazgOZHb.js";import"./index-BLLPHz7a.js";import"./addEventListener-5nEmwaqI.js";import"./regeneratorRuntime-Deiwfhnr.js";import"./EllipsisOutlined-MFeq5xR6.js";import"./useIntersectionChildren-B66vTOPV.js";import"./useTranslation-Dg1XEziH.js";import"./generateId-BXJELych.js";import"./Submenu-BU1TlG6g.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",M="",F={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:M},zt={title:"Other/DetailsPage",component:v,argTypes:{onChange:{},...O(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(F)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(w,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,b,T;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    actions: {
      ...actions,
      THIRD_ACTION: {
        text: 'Action 3',
        onClick: () => alert('Action 3')
      }
    }
  }
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var h,f,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    actions: undefined
  }
}`,...(A=(f=n.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var D,C,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    navigation: undefined,
    children: 'Content'
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var P,k,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: DetailsPageProps) => <DetailsPageWithButton {...args} />,
  args: {
    defaultActiveKey: 'tab-1',
    actions: undefined
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const Gt=["Basic","WithThreeActions","WithoutActions","WithoutNavigation","WithDefaultActiveKey"];export{r as Basic,s as WithDefaultActiveKey,a as WithThreeActions,n as WithoutActions,i as WithoutNavigation,Gt as __namedExportsOrder,zt as default};
