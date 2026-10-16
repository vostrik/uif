import{T as E}from"./Palette-B35RaT7h.js";import{c as H,M as h,O as c,R as r,H as m}from"./iframe-D5i9Ygdo.js";import{w as V}from"./withMeta-DvsF1LmS.js";import{M as u,c as p,w as i}from"./common-KdSS8Lyi.js";import{u as l}from"./useThemedScrollbar-Bc0_Dp59.js";import{s as d}from"./scrollbarCss-ukip7s1D.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-D9kX8XlS.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./TextReducer-Dagp5bHw.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Divider-BeaQgGYc.js";import"./Badge-DvZDnB4g.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./Indicator-gZ8T3Y3p.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";const se={title:"Hexa UI Components/Scrollbar/Stories/Browser",parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:V(u)},design:u.pixsoView}},$=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
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
