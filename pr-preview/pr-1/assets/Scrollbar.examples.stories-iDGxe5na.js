import{T as v}from"./Palette-9PuIUoqy.js";import{w as $}from"./withDesignControls-DTwO-e1q.js";import{B as S}from"./Button-NQ8G2asL.js";import{c as O,O as l,R as e,b as P,H as u}from"./iframe-C5ywg3yF.js";import{c as i,w as d}from"./common-DBSMz-Kw.js";import{S as n}from"./Scrollbar-BW6bX_w3.js";import{s as _}from"./Scrollbar.stories-CsWRNTO2.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./useMergedState-hWmk9BX_.js";import"./focus-D6fBl5Nk.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DKeSAYRW.js";import"./Toggle-h5WMIT3p.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";import"./type-CYimqQsV.js";import"./wave-6D6RLP9Y.js";import"./FormLabel-Cl6NqZ0b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D2J0DCjt.js";import"./TextReducer-DYBA9RxT.js";import"./index-B9cL_k2v.js";import"./colors-CEAxVyTa.js";import"./Group-M-SjioCQ.js";import"./Divider-DL-FS3qr.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./v4-BoP187Zn.js";import"./button-C0MuISIr.js";import"./index-Chjiymov.js";import"./useThemedScrollbar-POibe8jk.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";const ye={title:"Hexa UI Components/Scrollbar/Stories",component:n,tags:["!autodocs"],...$({meta:_})},z=u.div`
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
