import{B as A}from"./Button-CYzQuw3S.js";import{R as t,P as d,b}from"./iframe-81MZLAwA.js";import{A as i}from"./DocPageLayout-D1x5goyM.js";import{a as m,b as v,d as u,r as h}from"./AnchorNavigation.stories-DX7DE2KE.js";import{S as f}from"./Sidebar-CUXS8XES.js";import"./Dropdown-CPc30GEo.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YFPB3eZ_.js";import"./useMergedState-i9W27Uf3.js";import"./focus-B5e4OkQI.js";import"./omit-DXgDXInf.js";import"./ArrowRight-tad8nQ3_.js";import"./Toggle-8vjpudf9.js";import"./AdditionalContent-BO_qq22o.js";import"./HelpMessage-DWvNdbZo.js";import"./type-CGSjHdi-.js";import"./wave-YGWrPKVL.js";import"./FormLabel-DA9R7IzT.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-F-RHo_zh.js";import"./TextReducer-DAQahvzG.js";import"./index-BxcIeMF-.js";import"./colors-Czl4z4ke.js";import"./Group-CFZXzKY0.js";import"./Divider-BRbYwtji.js";import"./Loader-zSayompk.js";import"./index-BUvvmL18.js";import"./v4-BoP187Zn.js";import"./button-DeWVoXnk.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";import"./SubComponents-COJkahQr.js";import"./TextWithTruncation-MTYpUBSq.js";import"./ArrowDownSolid-BNg_rdCk.js";import"./ArrowRightSolid-CIsLKAs9.js";import"./Badge-Bt5y04C0.js";import"./Indicator-DMhQJtUF.js";import"./propPresentation--qHUuHxi.js";import"./withMeta-CZpsweCu.js";import"./StatusOkOutline-C0orjNqV.js";import"./Grid-oItbGHay.js";import"./Markdown-EvwJV-Av.js";import"./index-BAR_5hUd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./PortalWrapper-VKKISEn0.js";import"./Portal-C0EEReO6.js";import"./useForceUpdate-N2Igz-Ld.js";const ut={title:"Hexa UI Components/AnchorNavigation/Stories",component:i,tags:["!autodocs"],parameters:v.parameters,args:{title:"Page Content",items:m.slice(0,10)}},r={render:e=>t.createElement(t.Fragment,null,t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))),args:{items:m}},o={render:e=>{const[S,a]=b.useState(!1);return t.createElement(t.Fragment,null,t.createElement(A,{onClick:()=>a(!0)},"Open"),t.createElement(f,{title:"Sidebar",visible:S,onClose:()=>a(!1)},t.createElement(d,{style:{marginBottom:"1em"}},u),t.createElement(i,{...e},h(e.items))))},args:{items:m.slice(0,10)}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
