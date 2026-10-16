import{a as k}from"./StoryComponents-DXy8kn5n.js";import{b as B,R as o,L}from"./iframe-BfQ7ApZt.js";import{E as _}from"./ExpandableText-B_QqdhFQ.js";import{E as W,e as w,a as y}from"./ExpandableText.stories-DhQhxRZ4.js";import"./FormLabel-Djf96u0n.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CNKGekQl.js";import"./TextReducer-CUYXVfXw.js";import"./index-BrzaXK4u.js";import"./omit-DXgDXInf.js";import"./type-BB57qeSp.js";import"./colors-DNfPmHyW.js";import"./wave-DHr58TaD.js";import"./Group-D5E9cFoC.js";import"./Divider-6ip5VOzi.js";import"./propPresentation-BC79pgx_.js";import"./blocks-dXj6Tsfl.js";import"./index-BvTlNZwJ.js";import"./withMeta-DokDzFm5.js";import"./DocPageLayout-2y8II_-a.js";import"./SubComponents-BoEEWChq.js";import"./TextWithTruncation-CzEIiJw0.js";import"./ArrowDownSolid-DDrs44JP.js";import"./ArrowRightSolid-cPlsc-qL.js";import"./Badge-D0c6h182.js";import"./Indicator-B08Z_iCO.js";import"./StatusOkOutline-D_gga3lz.js";import"./Grid-DSSjgc2t.js";import"./Markdown-Dktqg8l-.js";import"./index-BKOZdw_L.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const sr={title:"Hexa UI Components/ExpandableText/Stories",component:_,tags:["!autodocs"],...w},r={},e={args:{children:o.createElement(L,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank"},y)}},t={args:{children:W},render:g=>{const[S,T]=B.useState(!1);return o.createElement(k,{style:{minWidth:"100px",maxWidth:"400px"}},o.createElement(_,{onExpand:T,style:{whiteSpace:S?"pre-wrap":"pre"},...g}))}},a={args:{useGradient:!0}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
