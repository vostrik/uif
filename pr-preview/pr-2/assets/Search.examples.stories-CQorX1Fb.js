import{T as x}from"./Palette-BAVbpaYU.js";import{c as T,b as y,R as r,H as k,T as R}from"./iframe-BxJnf3ZL.js";import{E as l}from"./type-l5tskpde.js";import{S as i}from"./Search-ChLnVOkX.js";import{s as V}from"./Search.stories-P__NRD4i.js";import{u as W}from"./useTranslation-XbAzRulq.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-DGWR5wSe.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-lpBnInVO.js";import"./useMergedState-BgQ2XY1A.js";import"./focus-CSmuw2j_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BHNzx7qw.js";import"./Toggle-CGR2gxI3.js";import"./AdditionalContent-0QTduPgH.js";import"./HelpMessage-DFGrmg6s.js";import"./wave-CE4pLSVu.js";import"./FormLabel-C8HaQNzE.js";import"./Tag-B4FkS-ry.js";import"./TextReducer-jgmtD67Q.js";import"./index-Dlpfquxs.js";import"./colors-yztLXgoP.js";import"./Group-Dnx8lKl-.js";import"./Divider-Ch4BCEC8.js";import"./Loader-CkJh8F18.js";import"./index-DLAJHFC-.js";import"./v4-BoP187Zn.js";import"./Textbox-CAZ2Fv9U.js";import"./useGlobalStyles-BwyzlKcq.js";import"./InputMasked-CAu3zsjn.js";import"./input-n1WBQ7hV.js";import"./index-Chjiymov.js";import"./useThemedTextbox-C_LafCEC.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-C1QARNsJ.js";import"./InputNumber-BTIEgQNa.js";import"./index-YsXWYt75.js";import"./SearchOutlined-DAC8EMEh.js";import"./button-ZplnygZi.js";import"./InputPassword-t2hcqH-O.js";import"./Button-I6hF4eMe.js";import"./StatusOkSolid-B81X7uk8.js";import"./IconResolver-ByUaWSDK.js";import"./Placeholder-B2af5lXh.js";import"./IconSearch-5ySeIJle.js";import"./Indicator-DttH4MVv.js";import"./propPresentation-lj9O_TmM.js";import"./blocks-BzGBXNOF.js";import"./index-RPybRgje.js";import"./resolveDesignControls-CFhBuB_d.js";const f=k.div`
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
