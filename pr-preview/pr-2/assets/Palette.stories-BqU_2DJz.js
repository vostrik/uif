import{T as n,S as E}from"./Palette-Bw8CWH_N.js";import{w as T}from"./withMeta-DokDzFm5.js";import{c as h,a4 as k,a5 as M,a6 as x,R as e,a as b,P as w}from"./iframe-BfQ7ApZt.js";import"./DocPageLayout-2y8II_-a.js";import"./blocks-dXj6Tsfl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BvTlNZwJ.js";import"./TextReducer-CUYXVfXw.js";import"./SubComponents-BoEEWChq.js";import"./TextWithTruncation-CzEIiJw0.js";import"./ArrowDownSolid-DDrs44JP.js";import"./ArrowRightSolid-cPlsc-qL.js";import"./Divider-6ip5VOzi.js";import"./Badge-D0c6h182.js";import"./type-BB57qeSp.js";import"./colors-DNfPmHyW.js";import"./Indicator-B08Z_iCO.js";import"./StatusOkOutline-D_gga3lz.js";import"./Grid-DSSjgc2t.js";import"./Markdown-Dktqg8l-.js";import"./index-BKOZdw_L.js";import"./shouldForwardProp-Cdy-RLhZ.js";const D="Техническая страница для отображения цветов дизайн системы.",R={description:D},Y={title:"Design Tokens/Colors",component:n,parameters:{docs:{page:T(R)},controls:{exclude:/.*/g}}},o={args:{source:x},render:r=>e.createElement(E,{...r})},s={args:{source:k},render:r=>e.createElement(n,{...r})},t={args:{source:M},render:r=>e.createElement(n,{...r})},a={args:{source:h},render:r=>e.createElement(e.Fragment,null,e.createElement(b,{mode:"info",closable:!1},e.createElement(w,null,"Component tokens is deprecated. Use semantic tokens")),e.createElement(n,{...r}))};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: colors
  },
  render: args => <StaticPalette {...args} />
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: productColors
  },
  render: args => <ThemedPalette {...args} />
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    source: semanticColors
  },
  render: args => <ThemedPalette {...args} />
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var S,P,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    source: componentColors
  },
  render: args => <>
      <SectionMessage mode={'info'} closable={false}>
        <P>
          Component tokens is deprecated. Use semantic tokens
        </P>
      </SectionMessage>
      <ThemedPalette {...args} />
    </>
}`,...(f=(P=a.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const Z=["StaticColors","ProductColors","SemanticColors","ComponentColors"];export{a as ComponentColors,s as ProductColors,t as SemanticColors,o as StaticColors,Z as __namedExportsOrder,Y as default};
