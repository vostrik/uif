import{B as A}from"./Button-CXL83VB_.js";import{R as t,P as d,b}from"./iframe-D5i9Ygdo.js";import{A as i}from"./DocPageLayout-D9kX8XlS.js";import{a as m,b as v,d as u,r as h}from"./AnchorNavigation.stories-DTU5VT1j.js";import{S as f}from"./Sidebar-CkgiMPnB.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./useMergedState-BRnWrkwv.js";import"./focus-BNJDX2dF.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./type-CpBfXgi8.js";import"./wave-CAHKjKs-.js";import"./FormLabel-c2Q2BrM3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-C8lIf1tQ.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./colors-TzwrEhrS.js";import"./Group-m0-YpTU1.js";import"./Divider-BeaQgGYc.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./button-D-Oiy998.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Badge-DvZDnB4g.js";import"./Indicator-gZ8T3Y3p.js";import"./propPresentation-B03l1IYW.js";import"./withMeta-DvsF1LmS.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./PortalWrapper-BhslRT6z.js";import"./Portal-o-tkHM4V.js";import"./useForceUpdate-BQBcvAvz.js";const ut={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:v.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(f,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
