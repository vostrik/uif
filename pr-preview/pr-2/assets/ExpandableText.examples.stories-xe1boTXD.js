import{a as k}from"./StoryComponents-CEeqpkjr.js";import{b as B,R as o,L}from"./iframe-D5i9Ygdo.js";import{E as _}from"./ExpandableText-skHJAKJf.js";import{E as W,e as w,a as y}from"./ExpandableText.stories-DfrwfaUJ.js";import"./FormLabel-c2Q2BrM3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-C8lIf1tQ.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./omit-DXgDXInf.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./wave-CAHKjKs-.js";import"./Group-m0-YpTU1.js";import"./Divider-BeaQgGYc.js";import"./propPresentation-B03l1IYW.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./withMeta-DvsF1LmS.js";import"./DocPageLayout-D9kX8XlS.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Badge-DvZDnB4g.js";import"./Indicator-gZ8T3Y3p.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const sr={title:"Hexa UI Components/ExpandableText/Stories",component:_,tags:["!autodocs"],...w},r={},e={args:{children:o.createElement(L,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank"},y)}},t={args:{children:W},render:g=>{const[S,T]=B.useState(!1);return o.createElement(k,{style:{minWidth:"100px",maxWidth:"400px"}},o.createElement(_,{onExpand:T,style:{whiteSpace:S?"pre-wrap":"pre"},...g}))}},a={args:{useGradient:!0}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
