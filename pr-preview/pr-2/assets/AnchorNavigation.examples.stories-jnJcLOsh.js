import{B as A}from"./Button-CqaIK97I.js";import{R as t,P as d,b}from"./iframe-BfQ7ApZt.js";import{A as i}from"./DocPageLayout-2y8II_-a.js";import{a as m,b as v,d as u,r as h}from"./AnchorNavigation.stories-CKP6c0-K.js";import{S as f}from"./Sidebar-D5YG7dxs.js";import"./Dropdown-CHDWb0q5.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-n2s7gkAb.js";import"./useMergedState-C69lNlPn.js";import"./focus-CLSyxWMD.js";import"./omit-DXgDXInf.js";import"./ArrowRight-IWPA832A.js";import"./Toggle-DWqz3Goe.js";import"./AdditionalContent-BlBDkelx.js";import"./HelpMessage-BluS93iW.js";import"./type-BB57qeSp.js";import"./wave-DHr58TaD.js";import"./FormLabel-Djf96u0n.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CNKGekQl.js";import"./TextReducer-CUYXVfXw.js";import"./index-BrzaXK4u.js";import"./colors-DNfPmHyW.js";import"./Group-D5E9cFoC.js";import"./Divider-6ip5VOzi.js";import"./Loader-mu8dA5fb.js";import"./index-D5SjVOUn.js";import"./v4-BoP187Zn.js";import"./button-COUo-Xn0.js";import"./blocks-dXj6Tsfl.js";import"./index-BvTlNZwJ.js";import"./SubComponents-BoEEWChq.js";import"./TextWithTruncation-CzEIiJw0.js";import"./ArrowDownSolid-DDrs44JP.js";import"./ArrowRightSolid-cPlsc-qL.js";import"./Badge-D0c6h182.js";import"./Indicator-B08Z_iCO.js";import"./propPresentation-BC79pgx_.js";import"./withMeta-DokDzFm5.js";import"./StatusOkOutline-D_gga3lz.js";import"./Grid-DSSjgc2t.js";import"./Markdown-Dktqg8l-.js";import"./index-BKOZdw_L.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./PortalWrapper-sq_WBr2X.js";import"./Portal-Cw76o96G.js";import"./useForceUpdate-DaxUnCGr.js";const ut={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:v.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(f,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
