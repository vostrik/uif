import{a as k}from"./StoryComponents-B9rb_aq9.js";import{b as B,R as o,L}from"./iframe-aBV3CYH3.js";import{E as _}from"./ExpandableText-BjJUpKFk.js";import{E as W,e as w,a as y}from"./ExpandableText.stories-K38DikkV.js";import"./FormLabel-d3dW3auX.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DY7rUT5S.js";import"./TextReducer-D8U9kJ52.js";import"./index-BkZLf1_p.js";import"./omit-DXgDXInf.js";import"./type-GmYgjqv3.js";import"./colors-nuNhf3hF.js";import"./wave-iSaySfuY.js";import"./Group-MwZqih5e.js";import"./Divider-C5DkIf6Z.js";import"./propPresentation-DwmroTjb.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./withMeta-C33uN6BS.js";import"./DocPageLayout-BUnRw7iv.js";import"./SubComponents-ClGCVWuG.js";import"./TextWithTruncation---FFfZpN.js";import"./ArrowDownSolid-Bgc_LaMP.js";import"./ArrowRightSolid-B1ur2LqF.js";import"./Badge-CXW4mzDn.js";import"./Indicator-HvddXj7N.js";import"./StatusOkOutline-SGeFpZ58.js";import"./Grid-BW46MuRJ.js";import"./Markdown-DM5b4r5r.js";import"./index-D7pAken6.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const sr={title:"Hexa UI Components/ExpandableText/Stories",component:_,tags:["!autodocs"],...w},r={},e={args:{children:o.createElement(L,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank"},y)}},t={args:{children:W},render:g=>{const[S,T]=B.useState(!1);return o.createElement(k,{style:{minWidth:"100px",maxWidth:"400px"}},o.createElement(_,{onExpand:T,style:{whiteSpace:S?"pre-wrap":"pre"},...g}))}},a={args:{useGradient:!0}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <Link decoration="icon" href="https://www.kaspersky.com" target="_blank">
        {EXPANDABLE_TEXT_MOCK_BODY}
      </Link>
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,E,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: EXPANDABLE_TEXT_MOCK_WITH_BREAKS
  },
  render: args => {
    const [expanded, setExpanded] = useState(false);
    return <StoryColumn style={{
      minWidth: '100px',
      maxWidth: '400px'
    }}>
        <ExpandableTextComponent onExpand={setExpanded} style={{
        whiteSpace: expanded ? 'pre-wrap' : 'pre'
      }} {...args} />
      </StoryColumn>;
  }
}`,...(l=(E=t.parameters)==null?void 0:E.docs)==null?void 0:l.source}}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    useGradient: true
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const pr=["Basic","WithLink","WithLineBreaks","WithGradient"];export{r as Basic,a as WithGradient,t as WithLineBreaks,e as WithLink,pr as __namedExportsOrder,sr as default};
