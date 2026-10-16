import{M as p,R as t,b as B}from"./iframe-81MZLAwA.js";import{w as I}from"./withMeta-CZpsweCu.js";import{s as O}from"./helpers-BytZKRkB.js";import{B as w}from"./Button-CYzQuw3S.js";import{o as c}from"./Placeholder-o3pofUe9.js";import{D as v}from"./DetailsPage-B9UzL_1Y.js";import{T as S}from"./Toggle-8vjpudf9.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-D1x5goyM.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";import"./TextReducer-DAQahvzG.js";import"./SubComponents-COJkahQr.js";import"./TextWithTruncation-MTYpUBSq.js";import"./ArrowDownSolid-BNg_rdCk.js";import"./ArrowRightSolid-CIsLKAs9.js";import"./Divider-BRbYwtji.js";import"./Badge-Bt5y04C0.js";import"./type-CGSjHdi-.js";import"./colors-Czl4z4ke.js";import"./Indicator-DMhQJtUF.js";import"./StatusOkOutline-C0orjNqV.js";import"./Grid-oItbGHay.js";import"./Markdown-EvwJV-Av.js";import"./index-BAR_5hUd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-CPc30GEo.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YFPB3eZ_.js";import"./useMergedState-i9W27Uf3.js";import"./focus-B5e4OkQI.js";import"./omit-DXgDXInf.js";import"./ArrowRight-tad8nQ3_.js";import"./Loader-zSayompk.js";import"./index-BUvvmL18.js";import"./v4-BoP187Zn.js";import"./button-DeWVoXnk.js";import"./wave-YGWrPKVL.js";import"./Sidebar-CUXS8XES.js";import"./PortalWrapper-VKKISEn0.js";import"./Portal-C0EEReO6.js";import"./useForceUpdate-N2Igz-Ld.js";import"./Tabs-CjAGSNXZ.js";import"./i18n-CTpCV-em.js";import"./FormLabel-DA9R7IzT.js";import"./Tag-F-RHo_zh.js";import"./index-BxcIeMF-.js";import"./Group-CFZXzKY0.js";import"./index-DaQYs-fn.js";import"./addEventListener-CnddlH6m.js";import"./regeneratorRuntime-BbbKwVXw.js";import"./EllipsisOutlined-D2BAnk6J.js";import"./useIntersectionChildren-CUIE6k01.js";import"./useTranslation-B5SB7IYa.js";import"./generateId-BXJELych.js";import"./Submenu-VeSbMkIE.js";import"./AdditionalContent-BO_qq22o.js";import"./HelpMessage-DWvNdbZo.js";const N={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!1},R="DetailsPage",_="",H="",K="",M="",F={dod:N,component:R,description:_,usage:H,designLink:K,pixsoView:M},zt={title:"Other/DetailsPage",component:v,argTypes:{onChange:{},...O(["theme","navigation","customButtons"])},args:{testId:"details-page-test-id",klId:"details-page-kl-id"},parameters:{actions:{argTypesRegex:"^(on.*)"},badges:[p.stable,p.missingDesign],docs:{page:I(F)}}},E={FIRST_ACTION:{text:"Action 1",onClick:()=>alert("Action 1")},SECOND_ACTION:{text:"Action 2",onClick:()=>alert("Action 2")}},o=e=>{const[W,m]=B.useState(!1);return t.createElement(t.Fragment,null,t.createElement(w,{onClick:()=>m(!0)},"Open"),t.createElement(v,{visible:W,onClose:()=>m(!1),title:"Details Page",navigation:[{text:"Tab 1",iconBefore:t.createElement(c,null),key:"tab-1",navigation:{items:[{type:"row",text:"Tab 1.1",content:"Content 1.1",key:"tab-1-1"},{type:"row",text:"Tab 1.2",content:"Content 1.2",key:"tab-1-2"}]}},{text:"Tab 2",iconAfter:t.createElement(c,null),key:"tab-2",navigation:{items:[{type:"row",text:"Tab 2.1",content:"Content 2.1",key:"tab-2-1"},{type:"row",text:"Tab 2.2",content:"Content 2.2",key:"tab-2-2"},{type:"row",text:"Tab 2.3",content:"Content 2.3",key:"tab-2-3"}]}},{text:"Tab 3",iconAfter:t.createElement(c,null),key:"tab-3",content:"Content 3"}],headerActions:t.createElement(S,null,"Label"),actions:E,...e}))},r={render:e=>t.createElement(o,{...e})},a={render:e=>t.createElement(o,{...e}),args:{actions:{...E,THIRD_ACTION:{text:"Action 3",onClick:()=>alert("Action 3")}}}},n={render:e=>t.createElement(o,{...e}),args:{actions:void 0}},i={render:e=>t.createElement(o,{...e}),args:{navigation:void 0,children:"Content"}},s={render:e=>t.createElement(o,{...e}),args:{defaultActiveKey:"tab-1",actions:void 0}};var l,g,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
