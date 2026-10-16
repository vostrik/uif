import{M as p,R as t,b as B}from"./iframe-DIzBSOsa.js";import{w as I}from"./withMeta-CymzVPc2.js";import{s as O}from"./helpers-BytZKRkB.js";import{B as w}from"./Button-papDIOAz.js";import{o as c}from"./Placeholder-CjFf63ey.js";import{D as v}from"./DetailsPage-CDnmP8GT.js";import{T as S}from"./Toggle-BwnEG2Z9.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ycYJCuGf.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./TextReducer-B8LAxaee.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Divider-B7r6BzqD.js";import"./Badge-BnYETXMc.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-DEik8dKH.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-Dlds-xGy.js";import"./useMergedState-IHysQFAx.js";import"./focus-BglFpdoy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DXYEwFBz.js";import"./Loader-t8IvB7CC.js";import"./index-B9He-UhX.js";import"./v4-BoP187Zn.js";import"./button-CJ1TwKfr.js";import"./wave-CZhb61AN.js";import"./Sidebar-B4j5sorg.js";import"./PortalWrapper-CAgz3n0k.js";import"./Portal-D81GKiFd.js";import"./useForceUpdate-N57z21K9.js";import"./Tabs-CjxdWRzN.js";import"./i18n-CXzXw5Mm.js";import"./FormLabel-pcEEqmjq.js";import"./Tag-UnCHTvWf.js";import"./index-DmRlaPE6.js";import"./Group-DZSM1WME.js";import"./index-DAsgmH2b.js";import"./addEventListener-CSx5L2Uq.js";import"./regeneratorRuntime-CwDONfYV.js";import"./EllipsisOutlined-CfXPVKAK.js";import"./useIntersectionChildren-D_Embh5Y.js";import"./useTranslation-akTbTiaP.js";import"./generateId-BXJELych.js";import"./Submenu-NEx6RLL7.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",M="",F={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:M},zt={title:"Other/DetailsPage",component:v,argTypes:{onChange:{},...O(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(F)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(w,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
