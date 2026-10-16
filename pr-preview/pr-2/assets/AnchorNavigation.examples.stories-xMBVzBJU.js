import{B as A}from"./Button-TmF0MD_-.js";import{R as t,P as d,b}from"./iframe-D64doaOG.js";import{A as i}from"./DocPageLayout-hKNknvQM.js";import{a as m,b as v,d as u,r as h}from"./AnchorNavigation.stories-B_49hpp_.js";import{S as f}from"./Sidebar-COgIZB3d.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./useMergedState-D_-bsn6_.js";import"./focus-DobIVKtg.js";import"./omit-DXgDXInf.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./type-BhjCrcP5.js";import"./wave-D0moY5T7.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./colors-CZlhbD2k.js";import"./Group-g0kG_cFj.js";import"./Divider-CHq-NCgF.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./v4-BoP187Zn.js";import"./button-Xku0lj0N.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./SubComponents-CmPDyBhW.js";import"./TextWithTruncation-OcBO6EIa.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./ArrowRightSolid-BZ2MxU-F.js";import"./Badge-tlJSCzR8.js";import"./Indicator-BWF03Jjq.js";import"./propPresentation-Bd1LfInE.js";import"./withMeta-BASmJkxv.js";import"./StatusOkOutline-3Qqm9vRx.js";import"./Grid-1I9G4hH2.js";import"./Markdown-BoWm1Hej.js";import"./index-BayBP1qJ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./PortalWrapper-CO_6Ev7t.js";import"./Portal-5MZgfFMr.js";import"./useForceUpdate-C4UQGBwb.js";const ut={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:v.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(f,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
