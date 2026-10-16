import{M as p,R as t,b as B}from"./iframe-Df7vKfJt.js";import{w as I}from"./withMeta-D3rOwpne.js";import{s as O}from"./helpers-BytZKRkB.js";import{B as w}from"./Button-BEXsH9SI.js";import{o as c}from"./Placeholder-CXT89Bbl.js";import{D as v}from"./DetailsPage-CDyExyo1.js";import{T as S}from"./Toggle-BMGIIV8U.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BXWkA_DB.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";import"./TextReducer-PfRkTMxb.js";import"./SubComponents-Cs8A_EB6.js";import"./TextWithTruncation-lg2aspiP.js";import"./ArrowDownSolid-DgIE-i6b.js";import"./ArrowRightSolid-h0t1Ghk7.js";import"./Divider-DpGIrgZy.js";import"./Badge-B4SoFXPk.js";import"./type-BPSO7Hcc.js";import"./colors-BMjSx7ej.js";import"./Indicator-BtYVEqOa.js";import"./StatusOkOutline-C_OQ_OEK.js";import"./Grid-BE_VlTzM.js";import"./Markdown-C6fkmFkS.js";import"./index-Cmh3yLHD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-CX0MMqyY.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BBH5KuLo.js";import"./useMergedState-BzyNOLYY.js";import"./focus-BahHV41T.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BobUK_ZW.js";import"./Loader-qrngdWcb.js";import"./index-DTLMFHHc.js";import"./v4-BoP187Zn.js";import"./button-CnTfPpMx.js";import"./wave-DLXz7O8a.js";import"./Sidebar-jrahi0VM.js";import"./PortalWrapper-BepjqPI_.js";import"./Portal-DjPI9O6T.js";import"./useForceUpdate-ByqJI1ll.js";import"./Tabs-Bb7Cwli6.js";import"./i18n-GQYElYy9.js";import"./FormLabel-BJ1Ltfk6.js";import"./Tag-DQaD3f7K.js";import"./index-Zs4RcXwe.js";import"./Group-CS03xTqG.js";import"./index-Bi9yLF_e.js";import"./addEventListener-BkOIecfh.js";import"./regeneratorRuntime-DZE0JvTb.js";import"./EllipsisOutlined-CWZ19LZf.js";import"./useIntersectionChildren-BKXny5h7.js";import"./useTranslation-BXD4vFEx.js";import"./generateId-BXJELych.js";import"./Submenu-DSGf5ei2.js";import"./AdditionalContent-DhWVtj4k.js";import"./HelpMessage-SorIYbjM.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",M="",F={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:M},zt={title:"Other/DetailsPage",component:v,argTypes:{onChange:{},...O(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(F)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(w,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
