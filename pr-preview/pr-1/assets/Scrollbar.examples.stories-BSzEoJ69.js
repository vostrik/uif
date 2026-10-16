import{T as v}from"./Palette-9c62pNPs.js";import{w as $}from"./withDesignControls-DTwO-e1q.js";import{B as S}from"./Button-CYzQuw3S.js";import{c as O,O as l,R as e,b as P,H as u}from"./iframe-81MZLAwA.js";import{c as i,w as d}from"./common-BC8QIwJU.js";import{S as n}from"./Scrollbar-gzMcb6QL.js";import{s as _}from"./Scrollbar.stories-IJDn51uA.js";import"./Dropdown-CPc30GEo.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YFPB3eZ_.js";import"./useMergedState-i9W27Uf3.js";import"./focus-B5e4OkQI.js";import"./omit-DXgDXInf.js";import"./ArrowRight-tad8nQ3_.js";import"./Toggle-8vjpudf9.js";import"./AdditionalContent-BO_qq22o.js";import"./HelpMessage-DWvNdbZo.js";import"./type-CGSjHdi-.js";import"./wave-YGWrPKVL.js";import"./FormLabel-DA9R7IzT.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-F-RHo_zh.js";import"./TextReducer-DAQahvzG.js";import"./index-BxcIeMF-.js";import"./colors-Czl4z4ke.js";import"./Group-CFZXzKY0.js";import"./Divider-BRbYwtji.js";import"./Loader-zSayompk.js";import"./index-BUvvmL18.js";import"./v4-BoP187Zn.js";import"./button-DeWVoXnk.js";import"./index-Chjiymov.js";import"./useThemedScrollbar-DOi4nF0-.js";import"./propPresentation--qHUuHxi.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";const ye={title:"Hexa UI Components/Scrollbar/Stories",component:n,tags:["!autodocs"],...$({meta:_})},z=u.div`
  ${d}
`,D=u.div`
  p { width: 800px; }
  ${d}
`,I=u.div`
  p { width: 600px; }
  ${d}
`,m={render:r=>{const t=l();return e.createElement(z,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key},e.createElement("p",null,i)))}},a={render:r=>{const t=l();return e.createElement(D,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key},e.createElement("p",null,i)))}},s={render:r=>{const t=l();return e.createElement(I,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key},e.createElement("p",null,i)))}},c={render:r=>{const t=l(),h=P.useRef(null);return e.createElement(z,{theme:t.key},e.createElement(n,{...r,theme:r.theme??t.key,ref:h},e.createElement(S,{onClick:()=>{var o;return(o=h.current)==null?void 0:o.scrollToBottom()}},"Scroll to bottom"),e.createElement("p",null,i),e.createElement(S,{onClick:()=>{var o;return(o=h.current)==null?void 0:o.scrollToTop()}},"Scroll to top")))}},p={args:{source:O.scrollbar},render:r=>e.createElement(v,{...r})};var k,g,C;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    return <VerticalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </VerticalWrapper>;
  }
}`,...(C=(g=m.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,b,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    return <HorizontalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </HorizontalWrapper>;
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var E,T,W;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    return <Wrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </Wrapper>;
  }
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var B,H,V;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const theme = useTheme();
    const ref = useRef<Scrollbars | null>(null);
    return <VerticalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key} ref={ref}>
          <Button onClick={() => ref.current?.scrollToBottom()}>Scroll to bottom</Button>
          <p>{content}</p>
          <Button onClick={() => ref.current?.scrollToTop()}>Scroll to top</Button>
        </ScrollbarComponent>
      </VerticalWrapper>;
  }
}`,...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var w,x,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    source: componentColors.scrollbar
  },
  render: args => <ThemedPalette {...args} />
}`,...(R=(x=p.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const Ee=["Vertical","Horizontal","Both","WithRef","ColorTokens"];export{s as Both,p as ColorTokens,a as Horizontal,m as Vertical,c as WithRef,Ee as __namedExportsOrder,ye as default};
