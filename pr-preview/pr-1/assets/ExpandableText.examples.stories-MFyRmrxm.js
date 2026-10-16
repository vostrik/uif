import{a as k}from"./StoryComponents-CY7aiZf6.js";import{b as B,R as o,L}from"./iframe-D7vGURqZ.js";import{E as _}from"./ExpandableText-CA4HLgIx.js";import{E as W,e as w,a as y}from"./ExpandableText.stories-DjGzYHZQ.js";import"./FormLabel-BgNNh3NE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CV4RJqlE.js";import"./TextReducer-yX199pg5.js";import"./index-kV8384LW.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./wave-Bh4c9RUC.js";import"./Group-DqJlf-Gx.js";import"./Divider-51vw4bax.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./withMeta-AvforKRz.js";import"./DocPageLayout-COy0blt1.js";import"./SubComponents-DsXyPHVa.js";import"./TextWithTruncation-DCb05iIM.js";import"./ArrowDownSolid-DlynUjOu.js";import"./ArrowRightSolid-BtdCqW53.js";import"./Badge-CJ1lMX1D.js";import"./Indicator-CQNXQNlG.js";import"./StatusOkOutline-BvinxEvP.js";import"./Grid-C62gR1jB.js";import"./Markdown-CRrCZtGQ.js";import"./index-6XHrBjkF.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const sr={title:"Hexa UI Components/ExpandableText/Stories",component:_,tags:["!autodocs"],...w},r={},e={args:{children:o.createElement(L,{decoration:"icon",href:"https://www.kaspersky.com",target:"_blank"},y)}},t={args:{children:W},render:g=>{const[S,T]=B.useState(!1);return o.createElement(k,{style:{minWidth:"100px",maxWidth:"400px"}},o.createElement(_,{onExpand:T,style:{whiteSpace:S?"pre-wrap":"pre"},...g}))}},a={args:{useGradient:!0}};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
