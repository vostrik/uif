import{B as A}from"./Button-DWAe4sGj.js";import{R as t,P as d,b}from"./iframe-CE3A2i_R.js";import{A as i}from"./DocPageLayout-CSin2tY8.js";import{a as m,b as v,d as u,r as h}from"./AnchorNavigation.stories-DStNh9Vw.js";import{S as f}from"./Sidebar-CfYCI0Ua.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./useMergedState-CJ57ru4s.js";import"./focus-CQD7WjR7.js";import"./omit-DXgDXInf.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./type-CJd4Aj23.js";import"./wave-id3Y8ngN.js";import"./FormLabel-BTPnuYAd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./colors-JBaSgu6R.js";import"./Group-CT1GLKPI.js";import"./Divider-BfYsgfay.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./button-BXfcPuzR.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Badge-COlrkFgX.js";import"./Indicator-CzmYw3rU.js";import"./propPresentation-CndodZqI.js";import"./withMeta-ChZHBTGH.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./PortalWrapper-DvFMGbR6.js";import"./Portal-BZtnLvEx.js";import"./useForceUpdate-cso_XA1y.js";const ut={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:v.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(f,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: AnchorNavigationProps) => <>
      <P style={{
      marginBottom: '1em'
    }}>{dummyText}</P>

      <AnchorNavigation {...args}>
        {renderAnchorContent(args.items)}
      </AnchorNavigation>
    </>,
  args: {
    items: anchorItems
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,l,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AnchorNavigationProps) => {
    const [isOpen, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Sidebar title="Sidebar" visible={isOpen} onClose={() => setOpen(false)}>
          <P style={{
          marginBottom: '1em'
        }}>{dummyText}</P>

          <AnchorNavigation {...args}>
            {renderAnchorContent(args.items)}
          </AnchorNavigation>
        </Sidebar>
      </>;
  },
  args: {
    items: anchorItems.slice(0, 10)
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const ht=["WithManyItems","WithSidebar"];export{r as WithManyItems,o as WithSidebar,ht as __namedExportsOrder,ut as default};
