import{T as n,S as E}from"./Palette-BoWll2PF.js";import{w as T}from"./withMeta-BVZrRcOQ.js";import{c as h,a4 as k,a5 as M,a6 as x,R as e,a as b,P as w}from"./iframe-CS_lS3JQ.js";import"./Markdown-s2jsbGO9.js";import"./index-CGDdDTKA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-DKYvymTG.js";import"./blocks-CJQmJ9VN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CgpwO2tq.js";import"./TextReducer-BY5uL3xm.js";import"./SubComponents-BHE4NYtA.js";import"./TextWithTruncation-JO92Emz0.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./ArrowRightSolid-BEUEmyaL.js";import"./Divider-D_7SE2Jg.js";import"./Badge-Cc2Xscgq.js";import"./type-BpgJjWfR.js";import"./colors-D4ituO_X.js";import"./Indicator-B2JkvBkD.js";import"./StatusOkOutline-zylH21B-.js";import"./Grid-DyDvPcR7.js";const D="Техническая страница для отображения цветов дизайн системы.",R={description:D},Y={title:"Design Tokens/Colors",component:n,parameters:{docs:{page:T(R)},controls:{exclude:/.*/g}}},o={args:{source:x},render:r=>e.createElement(E,{...r})},s={args:{source:k},render:r=>e.createElement(n,{...r})},t={args:{source:M},render:r=>e.createElement(n,{...r})},a={args:{source:h},render:r=>e.createElement(e.Fragment,null,e.createElement(b,{mode:"info",closable:!1},e.createElement(w,null,"Component tokens is deprecated. Use semantic tokens")),e.createElement(n,{...r}))};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
