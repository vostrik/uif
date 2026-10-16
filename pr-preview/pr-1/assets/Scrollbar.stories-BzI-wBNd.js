import{T as E}from"./Palette-JYTl6zH7.js";import{c as H,M as h,O as c,R as r,H as m}from"./iframe-CWTW431d.js";import{w as V}from"./withMeta-B80vBHhP.js";import{M as u,c as p,w as i}from"./common-Bi561_Ev.js";import{u as l}from"./useThemedScrollbar-MITxsV6n.js";import{s as d}from"./scrollbarCss-D8lRDg-s.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BZwqqSX5.js";import"./blocks-5hWq9pxN.js";import"./index-Cifl6OSo.js";import"./TextReducer-BKSOrAn7.js";import"./SubComponents-DV3S-e9U.js";import"./TextWithTruncation-4wYl1Y4Q.js";import"./ArrowDownSolid-Dxbmwou1.js";import"./ArrowRightSolid-PYHen0lO.js";import"./Divider-BNE7kxRe.js";import"./Badge-BxavHYM7.js";import"./type-DnwzfU9Y.js";import"./colors-CDrajaLR.js";import"./Indicator-D27-HXk4.js";import"./StatusOkOutline-wl-jmqUJ.js";import"./Grid-BYWukwlc.js";import"./Markdown-BS7aYAEA.js";import"./index-C-seFtJV.js";import"./shouldForwardProp-Cdy-RLhZ.js";const se={title:"Hexa UI Components/Scrollbar/Stories/Browser",parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:V(u)},design:u.pixsoView}},$=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
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
