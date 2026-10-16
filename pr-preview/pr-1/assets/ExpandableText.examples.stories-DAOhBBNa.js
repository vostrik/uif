import{a as k}from"./StoryComponents-oT406532.js";import{b as B,R as o,L}from"./iframe-81MZLAwA.js";import{E as _}from"./ExpandableText-CHlgtl13.js";import{E as W,e as w,a as y}from"./ExpandableText.stories-ByqfFu72.js";import"./FormLabel-DA9R7IzT.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-F-RHo_zh.js";import"./TextReducer-DAQahvzG.js";import"./index-BxcIeMF-.js";import"./omit-DXgDXInf.js";import"./type-CGSjHdi-.js";import"./colors-Czl4z4ke.js";import"./wave-YGWrPKVL.js";import"./Group-CFZXzKY0.js";import"./Divider-BRbYwtji.js";import"./propPresentation--qHUuHxi.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";import"./withMeta-CZpsweCu.js";import"./DocPageLayout-D1x5goyM.js";import"./SubComponents-COJkahQr.js";import"./TextWithTruncation-MTYpUBSq.js";import"./ArrowDownSolid-BNg_rdCk.js";import"./ArrowRightSolid-CIsLKAs9.js";import"./Badge-Bt5y04C0.js";import"./Indicator-DMhQJtUF.js";import"./StatusOkOutline-C0orjNqV.js";import"./Grid-oItbGHay.js";import"./Markdown-EvwJV-Av.js";import"./index-BAR_5hUd.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const sr={title:"Hexa UI Components/ExpandableText/Stories",component:_,tags:["!autodocs"],...w},r={},e={args:{children:o.createElement(L,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank"},y)}},t={args:{children:W},render:g=>{const[S,T]=B.useState(!1);return o.createElement(k,{style:{minWidth:"100px",maxWidth:"400px"}},o.createElement(_,{onExpand:T,style:{whiteSpace:S?"pre-wrap":"pre"},...g}))}},a={args:{useGradient:!0}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
