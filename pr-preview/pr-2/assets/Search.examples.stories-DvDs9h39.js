import{T as x}from"./Palette-B17Qk-oR.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-kzbRZKTh.js";import{E as l}from"./type-BbTDOJ0B.js";import{S as i}from"./Search-DtSbKEsK.js";import{s as V}from"./Search.stories-CbW1knVs.js";import{u as W}from"./useTranslation-BiFIvaSU.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-C51UE_7M.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C3zfAXzo.js";import"./useMergedState-BCfT7eD5.js";import"./focus-D3yS8zRr.js";import"./omit-DXgDXInf.js";import"./ArrowRight-Cuc4j5Bt.js";import"./Toggle-DiD7VZ_h.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";import"./wave-BHABDpmc.js";import"./FormLabel-Bk6eWrFo.js";import"./Tag-B5Krc590.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./colors-BmIR1RWC.js";import"./Group-xSKPmKK8.js";import"./Divider-DtbUpKWs.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";import"./v4-BoP187Zn.js";import"./Textbox-Dg5QwrqF.js";import"./useGlobalStyles-BoqL1JUd.js";import"./InputMasked-CKY1oKhk.js";import"./input-Bn3C5XX8.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DEm_zcHd.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BSIzcI4n.js";import"./InputNumber-CNpt5PMk.js";import"./index-CaGsXE34.js";import"./SearchOutlined-D3lRq4Vf.js";import"./button-DwzApgVz.js";import"./InputPassword-DCCl0vlz.js";import"./Button-Dd8IwuWk.js";import"./StatusOkSolid-CZ2Xw8j1.js";import"./IconResolver-pzcNx2TP.js";import"./Placeholder-Drb6ifDx.js";import"./IconSearch-dCvuvjbY.js";import"./Indicator-BqqK5Xic.js";import"./propPresentation-zJAskzS2.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
