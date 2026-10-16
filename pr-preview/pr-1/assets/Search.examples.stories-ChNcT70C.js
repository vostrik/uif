import{T as x}from"./Palette-BqHKA6oY.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-D7vGURqZ.js";import{E as l}from"./type-DgSh0ByZ.js";import{S as i}from"./Search-DM9ZGBX_.js";import{s as V}from"./Search.stories-DFJnGJnu.js";import{u as W}from"./useTranslation-B2jQLDHY.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-CRW3TkbL.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BG56_tLR.js";import"./useMergedState-Dgv3UayC.js";import"./focus-Dl3Nwm4s.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DjKzMcwQ.js";import"./Toggle-Dt_5v6fg.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./wave-Bh4c9RUC.js";import"./FormLabel-BgNNh3NE.js";import"./Tag-CV4RJqlE.js";import"./TextReducer-yX199pg5.js";import"./index-kV8384LW.js";import"./colors-C-4HMPnB.js";import"./Group-DqJlf-Gx.js";import"./Divider-51vw4bax.js";import"./Loader-CWfEwXXE.js";import"./index-sXrtJGg5.js";import"./v4-BoP187Zn.js";import"./Textbox-CEZ0dDcq.js";import"./useGlobalStyles-B-HOYsT0.js";import"./InputMasked-_DcfeiFG.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./InputNumber-Bt5vXNjj.js";import"./index-Bijc3Mwe.js";import"./SearchOutlined-zeEOv1ar.js";import"./button-iMtochpT.js";import"./InputPassword-5Hf3TJHk.js";import"./Button-9U8xJrYJ.js";import"./StatusOkSolid-CphszqrJ.js";import"./IconResolver-BKL_1foC.js";import"./Placeholder-b0XisIub.js";import"./IconSearch-BHlkKiBY.js";import"./Indicator-CQNXQNlG.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
