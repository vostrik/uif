import{T as n,S as E}from"./Palette-BaeWRL5w.js";import{w as T}from"./withMeta-CjL9OWCI.js";import{c as h,a4 as k,a5 as M,a6 as x,R as e,a as b,P as w}from"./iframe-B2l-dmA0.js";import"./DocPageLayout-UzXGnAOi.js";import"./blocks-DJzvhAc1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CabRH6Z3.js";import"./TextReducer-DpL_UgVZ.js";import"./SubComponents-EI3g0EZ8.js";import"./TextWithTruncation-CDCo7Y_H.js";import"./ArrowDownSolid-Crf9Tjxd.js";import"./ArrowRightSolid-D6hHiNpP.js";import"./Divider-Cp3b7YUD.js";import"./Badge-sQ1WxikW.js";import"./type-BpHiafRd.js";import"./colors-CYe0s51z.js";import"./Indicator-6We_UnkV.js";import"./StatusOkOutline-C91EBLeD.js";import"./Grid-lspeiN_1.js";import"./Markdown-CjdEfNRZ.js";import"./index-CVJDPu1G.js";import"./shouldForwardProp-Cdy-RLhZ.js";const D="Техническая страница для отображения цветов дизайн системы.",R={description:D},Y={title:"Design Tokens/Colors",component:n,parameters:{docs:{page:T(R)},controls:{exclude:/.*/g}}},o={args:{source:x},render:r=>e.createElement(E,{...r})},s={args:{source:k},render:r=>e.createElement(n,{...r})},t={args:{source:M},render:r=>e.createElement(n,{...r})},a={args:{source:h},render:r=>e.createElement(e.Fragment,null,e.createElement(b,{mode:"info",closable:!1},e.createElement(w,null,"Component tokens is deprecated. Use semantic tokens")),e.createElement(n,{...r}))};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
