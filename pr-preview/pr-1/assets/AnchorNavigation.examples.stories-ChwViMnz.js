import{B as A}from"./Button-C-yJZqhy.js";import{R as t,P as d,b}from"./iframe-CS_lS3JQ.js";import{A as i}from"./DocPageLayout-DKYvymTG.js";import{a as m,b as v,d as u,r as h}from"./AnchorNavigation.stories-Dg87LSMv.js";import{S as f}from"./Sidebar-Cm_BdkCF.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./useMergedState-B61t_fRl.js";import"./focus-BLc_l6vY.js";import"./omit-DXgDXInf.js";import"./Toggle-BOxHbuiK.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./type-BpgJjWfR.js";import"./wave-87GZ2a0S.js";import"./FormLabel-CwcsdRCh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-K_Mfb6oe.js";import"./TextReducer-BY5uL3xm.js";import"./index-etHmF8Xf.js";import"./colors-D4ituO_X.js";import"./Group-DmPThJhc.js";import"./ArrowRight-DMancYzQ.js";import"./Divider-D_7SE2Jg.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./v4-BoP187Zn.js";import"./button-6xivo2h5.js";import"./blocks-CJQmJ9VN.js";import"./index-CgpwO2tq.js";import"./SubComponents-BHE4NYtA.js";import"./TextWithTruncation-JO92Emz0.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./ArrowRightSolid-BEUEmyaL.js";import"./Badge-Cc2Xscgq.js";import"./Indicator-B2JkvBkD.js";import"./propPresentation-VPDZOrCH.js";import"./withMeta-BVZrRcOQ.js";import"./Markdown-s2jsbGO9.js";import"./index-CGDdDTKA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-zylH21B-.js";import"./Grid-DyDvPcR7.js";import"./PortalWrapper-fVzV0qr7.js";import"./Portal-iQrxryRz.js";import"./useForceUpdate-D7iF0vYl.js";const ut={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:v.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(f,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
