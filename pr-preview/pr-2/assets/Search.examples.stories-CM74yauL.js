import{T as x}from"./Palette-D1YANZRt.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-DXVY_al-.js";import{E as l}from"./type-CsTtS0gC.js";import{S as i}from"./Search-B8OcwLAg.js";import{s as V}from"./Search.stories-C5uDJO7M.js";import{u as W}from"./useTranslation-DdpNEPN3.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-BLJYQkSA.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CH4g4j4L.js";import"./useMergedState-CR6rJtpb.js";import"./focus-BfF3lKIC.js";import"./omit-DXgDXInf.js";import"./ArrowRight-D886n5Yw.js";import"./Toggle-B5cbHog7.js";import"./AdditionalContent-ziC3WO2J.js";import"./HelpMessage-SIOObLpW.js";import"./wave-LbmbYf62.js";import"./FormLabel-g5DQo_wL.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./colors-CsMbn7MB.js";import"./Group-BgkSKQtg.js";import"./Divider-Hc8qqOlX.js";import"./Loader-BxJLuQsn.js";import"./index-CzITj10R.js";import"./v4-BoP187Zn.js";import"./Textbox-DDr6OIiV.js";import"./useGlobalStyles-DBIbeLBm.js";import"./InputMasked-DkaNQw15.js";import"./input-BpTIWK3x.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Cq5Mjd4x.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DCNzFJDX.js";import"./InputNumber-JjJWXSJf.js";import"./index-CtBoabqo.js";import"./SearchOutlined-BWXO38kT.js";import"./button-CXIseOCg.js";import"./InputPassword-BpB75HOe.js";import"./Button-D0QhSnae.js";import"./StatusOkSolid-C5PT2fwA.js";import"./IconResolver-B5JE2hw5.js";import"./Placeholder-DnfSgq--.js";import"./IconSearch-wrwxbLm_.js";import"./Indicator-B4cq0q5a.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
