import{M as p,R as t,b as B}from"./iframe-CS_lS3JQ.js";import{w as I}from"./withMeta-BVZrRcOQ.js";import{s as O}from"./helpers-BytZKRkB.js";import{B as w}from"./Button-C-yJZqhy.js";import{T as S}from"./Toggle-BOxHbuiK.js";import{o as c}from"./Placeholder-Q-SCb9Hd.js";import{D as v}from"./DetailsPage-BFBNbwBy.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-s2jsbGO9.js";import"./index-CGDdDTKA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-DKYvymTG.js";import"./blocks-CJQmJ9VN.js";import"./index-CgpwO2tq.js";import"./TextReducer-BY5uL3xm.js";import"./SubComponents-BHE4NYtA.js";import"./TextWithTruncation-JO92Emz0.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./ArrowRightSolid-BEUEmyaL.js";import"./Divider-D_7SE2Jg.js";import"./Badge-Cc2Xscgq.js";import"./type-BpgJjWfR.js";import"./colors-D4ituO_X.js";import"./Indicator-B2JkvBkD.js";import"./StatusOkOutline-zylH21B-.js";import"./Grid-DyDvPcR7.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./useMergedState-B61t_fRl.js";import"./focus-BLc_l6vY.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DMancYzQ.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./v4-BoP187Zn.js";import"./button-6xivo2h5.js";import"./wave-87GZ2a0S.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./FormLabel-CwcsdRCh.js";import"./Tag-K_Mfb6oe.js";import"./index-etHmF8Xf.js";import"./Group-DmPThJhc.js";import"./Sidebar-Cm_BdkCF.js";import"./PortalWrapper-fVzV0qr7.js";import"./Portal-iQrxryRz.js";import"./useForceUpdate-D7iF0vYl.js";import"./Tabs-CIJofYAo.js";import"./i18n-tfx-Aj80.js";import"./index-pXupdlRx.js";import"./addEventListener-BTGKWlk2.js";import"./regeneratorRuntime-CXEq1u0D.js";import"./EllipsisOutlined-gVID5V3w.js";import"./useIntersectionChildren-DUqAl0RH.js";import"./useTranslation-Co6sA9X3.js";import"./generateId-BXJELych.js";import"./Submenu-CWzpQmGJ.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",M="",F={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:M},zt={title:"Other/DetailsPage",component:v,argTypes:{onChange:{},...O(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(F)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(w,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
