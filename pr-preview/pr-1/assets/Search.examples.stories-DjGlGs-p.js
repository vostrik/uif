import{T as x}from"./Palette-TtIZCnc5.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-Df7vKfJt.js";import{E as l}from"./type-BPSO7Hcc.js";import{S as i}from"./Search-D_jo1rMR.js";import{s as V}from"./Search.stories-DzlHIyb2.js";import{u as W}from"./useTranslation-BXD4vFEx.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-CX0MMqyY.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BBH5KuLo.js";import"./useMergedState-BzyNOLYY.js";import"./focus-BahHV41T.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BobUK_ZW.js";import"./Toggle-BMGIIV8U.js";import"./AdditionalContent-DhWVtj4k.js";import"./HelpMessage-SorIYbjM.js";import"./wave-DLXz7O8a.js";import"./FormLabel-BJ1Ltfk6.js";import"./Tag-DQaD3f7K.js";import"./TextReducer-PfRkTMxb.js";import"./index-Zs4RcXwe.js";import"./colors-BMjSx7ej.js";import"./Group-CS03xTqG.js";import"./Divider-DpGIrgZy.js";import"./Loader-qrngdWcb.js";import"./index-DTLMFHHc.js";import"./v4-BoP187Zn.js";import"./Textbox-B14hTMNc.js";import"./useGlobalStyles-Bi09YJyx.js";import"./InputMasked-tWD34xqG.js";import"./input-BKEOzk-S.js";import"./index-Chjiymov.js";import"./useThemedTextbox-fVj2LBMS.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-W1Zj8ekK.js";import"./InputNumber-B5i2pNIr.js";import"./index-cR9EwmNO.js";import"./SearchOutlined-BMyuNpTD.js";import"./button-CnTfPpMx.js";import"./InputPassword-9gZnQ8V2.js";import"./Button-BEXsH9SI.js";import"./StatusOkSolid-PsOIyvFx.js";import"./IconResolver-CayOmfoU.js";import"./Placeholder-CXT89Bbl.js";import"./IconSearch-BuQ7TQA5.js";import"./Indicator-BtYVEqOa.js";import"./propPresentation-CP3VpjtH.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
