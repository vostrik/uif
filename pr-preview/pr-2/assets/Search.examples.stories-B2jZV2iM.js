import{T as x}from"./Palette-B35RaT7h.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-D5i9Ygdo.js";import{E as l}from"./type-CpBfXgi8.js";import{S as i}from"./Search-CIsozb73.js";import{s as V}from"./Search.stories-DdcTam-0.js";import{u as W}from"./useTranslation-DsfYxNia.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./useMergedState-BRnWrkwv.js";import"./focus-BNJDX2dF.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./wave-CAHKjKs-.js";import"./FormLabel-c2Q2BrM3.js";import"./Tag-C8lIf1tQ.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./colors-TzwrEhrS.js";import"./Group-m0-YpTU1.js";import"./Divider-BeaQgGYc.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./Textbox-DmC8mJtS.js";import"./useGlobalStyles-BDgH4xnZ.js";import"./InputMasked-D5lxln8b.js";import"./input-DSbZT73f.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Dl-Tm7pH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BKLnJg9s.js";import"./InputNumber-RQbuw8Bm.js";import"./index-xCiVKA0M.js";import"./SearchOutlined-DkaJltl-.js";import"./button-D-Oiy998.js";import"./InputPassword-BM3g8Pk1.js";import"./Button-CXL83VB_.js";import"./StatusOkSolid-BK2TPeG4.js";import"./IconResolver-C8r5gqjC.js";import"./Placeholder-DkijJV4P.js";import"./IconSearch-BCo8Q4Qp.js";import"./Indicator-gZ8T3Y3p.js";import"./propPresentation-B03l1IYW.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
