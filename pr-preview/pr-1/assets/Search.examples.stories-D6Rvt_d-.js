import{T as x}from"./Palette-BoWll2PF.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-CS_lS3JQ.js";import{E as l}from"./type-BpgJjWfR.js";import{S as i}from"./Search-DtxZZycV.js";import{s as V}from"./Search.stories-0hvscfDy.js";import{u as W}from"./useTranslation-Co6sA9X3.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./useMergedState-B61t_fRl.js";import"./focus-BLc_l6vY.js";import"./omit-DXgDXInf.js";import"./Toggle-BOxHbuiK.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./wave-87GZ2a0S.js";import"./FormLabel-CwcsdRCh.js";import"./Tag-K_Mfb6oe.js";import"./TextReducer-BY5uL3xm.js";import"./index-etHmF8Xf.js";import"./colors-D4ituO_X.js";import"./Group-DmPThJhc.js";import"./ArrowRight-DMancYzQ.js";import"./Divider-D_7SE2Jg.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./v4-BoP187Zn.js";import"./Textbox-Xvu2giKA.js";import"./useGlobalStyles-Be6xzYS-.js";import"./InputMasked-CXoAUoAM.js";import"./input-DKVbfvkV.js";import"./index-Chjiymov.js";import"./useThemedTextbox-BXVkZeWV.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BO5f5yOH.js";import"./InputNumber-C_LUGXAO.js";import"./index-7fiEC0nI.js";import"./SearchOutlined-BE7_ur6Q.js";import"./button-6xivo2h5.js";import"./InputPassword-BM_nvyAd.js";import"./Button-C-yJZqhy.js";import"./StatusOkSolid-cz3jVigG.js";import"./IconResolver-A6fpvtN_.js";import"./Placeholder-Q-SCb9Hd.js";import"./IconSearch-DV1M1iKb.js";import"./Indicator-B2JkvBkD.js";import"./propPresentation-VPDZOrCH.js";import"./blocks-CJQmJ9VN.js";import"./index-CgpwO2tq.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
