import{T as E}from"./Palette-iFbb-9f5.js";import{c as H,M as h,O as c,R as r,H as m}from"./iframe-CE3A2i_R.js";import{w as V}from"./withMeta-ChZHBTGH.js";import{M as u,c as p,w as i}from"./common-D61yTQgM.js";import{u as l}from"./useThemedScrollbar-DkiYCZ4m.js";import{s as d}from"./scrollbarCss-BkVWVVTh.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CSin2tY8.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./TextReducer-BWwC3ime.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Divider-BfYsgfay.js";import"./Badge-COlrkFgX.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";const se={title:"Hexa UI Components/Scrollbar/Stories/Browser",parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:V(u)},design:u.pixsoView}},$=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  overflow-y: scroll;
  overflow-x: hidden;
  ${i}
  ${d}
`,z=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  overflow-y: hidden;
  overflow-x: scroll;
  p { width: 800px; }
  ${i}
  ${d}
`,P=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
  overflow: scroll;
  p { width: 600px; }
  ${i}
  ${d}
`,t={render:()=>{const e=c(),{cssConfig:o}=l({theme:e.key});return r.createElement($,{cssConfig:o,theme:e.key},r.createElement("p",null,p))}},s={render:()=>{const e=c(),{cssConfig:o}=l({theme:e.key});return r.createElement(z,{cssConfig:o,theme:e.key},r.createElement("p",null,p))}},n={render:()=>{const e=c(),{cssConfig:o}=l({theme:e.key});return r.createElement(P,{cssConfig:o,theme:e.key},r.createElement("p",null,p))}},a={args:{source:H.scrollbar},render:e=>r.createElement(E,{...e})};var g,f,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const {
      cssConfig
    } = useThemedScrollbar({
      theme: theme.key
    });
    return <VerticalWrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </VerticalWrapper>;
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,y,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const {
      cssConfig
    } = useThemedScrollbar({
      theme: theme.key
    });
    return <HorizontalWrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </HorizontalWrapper>;
  }
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var T,b,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const {
      cssConfig
    } = useThemedScrollbar({
      theme: theme.key
    });
    return <Wrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </Wrapper>;
  }
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,W,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    source: componentColors.scrollbar
  },
  render: args => <ThemedPalette {...args} />
}`,...(x=(W=a.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};const ne=["Vertical","Horizontal","Both","ColorTokens"];export{n as Both,a as ColorTokens,s as Horizontal,t as Vertical,ne as __namedExportsOrder,se as default};
