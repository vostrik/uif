import{T as E}from"./Palette-BB5tpPID.js";import{c as H,M as h,O as c,R as r,H as m}from"./iframe-aBV3CYH3.js";import{w as V}from"./withMeta-C33uN6BS.js";import{M as u,c as p,w as i}from"./common-B1uXi2N9.js";import{u as l}from"./useThemedScrollbar-DgOy-GlW.js";import{s as d}from"./scrollbarCss-DxkhLnsX.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BUnRw7iv.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./TextReducer-D8U9kJ52.js";import"./SubComponents-ClGCVWuG.js";import"./TextWithTruncation---FFfZpN.js";import"./ArrowDownSolid-Bgc_LaMP.js";import"./ArrowRightSolid-B1ur2LqF.js";import"./Divider-C5DkIf6Z.js";import"./Badge-CXW4mzDn.js";import"./type-GmYgjqv3.js";import"./colors-nuNhf3hF.js";import"./Indicator-HvddXj7N.js";import"./StatusOkOutline-SGeFpZ58.js";import"./Grid-BW46MuRJ.js";import"./Markdown-DM5b4r5r.js";import"./index-D7pAken6.js";import"./shouldForwardProp-Cdy-RLhZ.js";const se={title:"Hexa UI Components/Scrollbar/Stories/Browser",parameters:{badges:[h.stable,h.reviewedByDesign],docs:{page:V(u)},design:u.pixsoView}},$=m.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`
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
