import{T as x}from"./Palette-DCq6aAvk.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-DZ6CNdmR.js";import{E as l}from"./type-CxXYYU3T.js";import{S as i}from"./Search-5blpJWEY.js";import{s as V}from"./Search.stories-K_OsK_uv.js";import{u as W}from"./useTranslation-Bw9GGU1E.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-duWrCIkx.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DHB5dyvI.js";import"./useMergedState-Bv7O4HCz.js";import"./focus-QtQWvBuy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-Fn5l7xGu.js";import"./Toggle-DHSC5Vjo.js";import"./AdditionalContent-CPgxIA4P.js";import"./HelpMessage-BoCaja7X.js";import"./wave-DyggUTsD.js";import"./FormLabel-WpK8CiKN.js";import"./Tag-jEOS0vhO.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./colors-uxJ92uqJ.js";import"./Group-dqpsK0g-.js";import"./Divider-CeH8hLX2.js";import"./Loader-CUCsJRC1.js";import"./index-BdH7CSvn.js";import"./v4-BoP187Zn.js";import"./Textbox-BVe-NjwS.js";import"./useGlobalStyles-C8XA7wQH.js";import"./InputMasked-Dc-xkFNK.js";import"./input-BjQab1dI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-BB93mY2Z.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-dtfbHAr8.js";import"./InputNumber-I6H84s6n.js";import"./index-BEJuuqy6.js";import"./SearchOutlined-C_XoquOD.js";import"./button-R3ozi3gu.js";import"./InputPassword-0CEE8fhu.js";import"./Button-C9wH3E3m.js";import"./StatusOkSolid-CniIV_0K.js";import"./IconResolver-DS4sEvCH.js";import"./Placeholder-CImJHfn5.js";import"./IconSearch-pcJARPxG.js";import"./Indicator-x62EYK4r.js";import"./propPresentation-DQRIYBrB.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
