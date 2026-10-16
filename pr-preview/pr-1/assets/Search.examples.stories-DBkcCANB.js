import{T as x}from"./Palette-9PuIUoqy.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-C5ywg3yF.js";import{E as l}from"./type-CYimqQsV.js";import{S as i}from"./Search-D2_ngLzW.js";import{s as V}from"./Search.stories-D1_WM781.js";import{u as W}from"./useTranslation-CbJmFUUZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./useMergedState-hWmk9BX_.js";import"./focus-D6fBl5Nk.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DKeSAYRW.js";import"./Toggle-h5WMIT3p.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";import"./wave-6D6RLP9Y.js";import"./FormLabel-Cl6NqZ0b.js";import"./Tag-D2J0DCjt.js";import"./TextReducer-DYBA9RxT.js";import"./index-B9cL_k2v.js";import"./colors-CEAxVyTa.js";import"./Group-M-SjioCQ.js";import"./Divider-DL-FS3qr.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./v4-BoP187Zn.js";import"./Textbox-DNM5rp-I.js";import"./useGlobalStyles-gt8SBDCb.js";import"./InputMasked-MSHBCWYW.js";import"./input-B0Wxb6FI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-4oG6-pH9.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BZR5FXIa.js";import"./InputNumber-kTKOXpAH.js";import"./index-FBskrQl3.js";import"./SearchOutlined-DkKb0CGg.js";import"./button-C0MuISIr.js";import"./InputPassword-D428oXIW.js";import"./Button-NQ8G2asL.js";import"./StatusOkSolid-CWfQ4eAP.js";import"./IconResolver-CZ0-QjIX.js";import"./Placeholder-DD0S7nvg.js";import"./IconSearch-BPTFigGi.js";import"./Indicator-DkDd6DuE.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,We={title:"Hexa UI Components/Search/Stories",component:i,tags:["!autodocs"],...V},s={render:e=>{const[t,o]=y.useState("");return r.createElement(f,null,r.createElement(i,{...e,onChange:a=>o(a),onClearClick:()=>o(""),value:t}))}},_=()=>{const{t:e}=W();return r.createElement(l,{image:l.PRESENTED_IMAGE_SIMPLE,className:"ant-empty-small",description:r.createElement(R,{type:"BTR3"},e("common.empty")),style:{width:"276px",margin:"8px 0"}})},P=Array.from({length:10}).map((e,t)=>({children:`result ${t}`})),n={render:e=>{const[t,o]=y.useState(""),a=P.filter(m=>m.children.indexOf(t)>=0);return r.createElement(f,null,r.createElement(i,{...e,onChange:m=>o(m),onClearClick:()=>o(""),value:t,dropdownOverlay:a.length?a:[{children:r.createElement(_,null)}]}))}},p={args:{source:T.input_search},render:e=>r.createElement(x,{...e})};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: SearchProps) => {
    const [value, setValue] = useState('');
    return <Wrapper>
        <Search {...args} onChange={value => setValue(value as string)} onClearClick={() => setValue('')} value={value} />
      </Wrapper>;
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,g,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (props: SearchProps) => {
    const [value, setValue] = useState('');
    const overlay = SearchResultsMock.filter(item => item.children.indexOf(value) >= 0);
    return <Wrapper>
        <Search {...props} onChange={value => setValue(value as string)} onClearClick={() => setValue('')} value={value} dropdownOverlay={overlay.length ? overlay : [{
        children: <EmptyData />
      }]} />
      </Wrapper>;
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var v,E,C;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    source: componentColors.input_search
  },
  render: args => <ThemedPalette {...args} />
}`,...(C=(E=p.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const _e=["Basic","WithResult","ColorTokens"];export{s as Basic,p as ColorTokens,n as WithResult,_e as __namedExportsOrder,We as default};
