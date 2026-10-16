import{T as U}from"./Palette-BlbcEcWI.js";import{c as i,b as e,R as t,X,S as j}from"./iframe-DNVAFsND.js";import{R as r}from"./RangeTimeInput-IKxWUOZ3.js";import{T as l}from"./TimeInput-CcJDj6jO.js";import{r as q}from"./RangeTimeInput.stories-DBdf8Xh5.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-D-R5k3vx.js";import"./input-ThTede3e.js";import"./index-Chjiymov.js";import"./RangeSeparator-BSUjMFJQ.js";import"./Textbox-DtZRjkLt.js";import"./useGlobalStyles-B9ioAtoA.js";import"./InputMasked-DtOxLUJQ.js";import"./useThemedTextbox-JibM730T.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DY9JG4_L.js";import"./InputNumber-BgZFiRwU.js";import"./index-kDjmKyHE.js";import"./omit-DXgDXInf.js";import"./type-0ivux5bP.js";import"./SearchOutlined-ujROV_cz.js";import"./button-BVzDJ1xK.js";import"./wave-BJ1hX2v5.js";import"./useMergedState-ynS__ke0.js";import"./InputPassword-Ca1Y1uhk.js";import"./Button-Cmmczys_.js";import"./Dropdown-JGfdkU0i.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D4FdOSTr.js";import"./focus-DFzoFYVL.js";import"./ArrowRight-GlR7Ouxo.js";import"./Toggle-B1y7zhcL.js";import"./AdditionalContent-D9yWR_3E.js";import"./HelpMessage-C_F_6WkG.js";import"./FormLabel-DZAlZE9m.js";import"./Tag-CWq2qS_r.js";import"./TextReducer-CcQuVU5v.js";import"./index-Bdb3sctg.js";import"./colors-C_cfvQV4.js";import"./Group-DazgOZHb.js";import"./Divider-AC6gIdGc.js";import"./Loader-DssZ-VPI.js";import"./index-DMLUsSjF.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-kiUV4rGA.js";import"./useTranslation-Dg1XEziH.js";import"./IconResolver-COitkxCH.js";import"./Placeholder-CTw9X4Hx.js";import"./propPresentation-Ca9RmEyN.js";import"./blocks-DC9vndXh.js";import"./index-xI5_I1Dm.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const qt={title:"Hexa UI Components/DateTime Pickers/RangeTimeInput/Stories",component:r,tags:["!autodocs"],...q},p={render:n=>{const[a,o]=e.useState(),[s,m]=e.useState();return t.createElement(r,{...n,valueStart:a,valueEnd:s,onChangeStart:o,onChangeEnd:m})}},c={render:n=>{const[a,o]=e.useState(),[s,m]=e.useState(),[w,R]=e.useState(),[k,V]=e.useState(),[F,x]=e.useState(),[P,z]=e.useState(),[B,y]=e.useState(),[D,O]=e.useState();return t.createElement(t.Fragment,null,"HH:mm",t.createElement(r,{...n,format:"HH:mm",valueStart:a,valueEnd:s,onChangeStart:o,onChangeEnd:m}),t.createElement("br",null),"HH:mm:ss",t.createElement(r,{...n,format:"HH:mm:ss",valueStart:w,valueEnd:k,onChangeStart:R,onChangeEnd:V}),t.createElement("br",null),"HH:mm:ss.ms",t.createElement(r,{...n,format:"HH:mm:ss.ms",valueStart:F,valueEnd:P,onChangeStart:x,onChangeEnd:z}),t.createElement("br",null),"h:mm am/pm",t.createElement(r,{...n,format:"h:mm aaa",valueStart:B,valueEnd:D,onChangeStart:y,onChangeEnd:O}))}},d={render:n=>{const[a,o]=e.useState(),[s,m]=e.useState();return t.createElement(t.Fragment,null,t.createElement(X,null,"Range time picker is composition of 2 TimeInputs"),t.createElement(j,{gap:4,direction:"horizontal",wrap:"nowrap"},t.createElement(l,{...n,value:a,onChange:o,format:"HH:mm:ss",placeholder:"__:__:__"}),"– ",t.createElement(l,{...n,value:s,onChange:m,format:"HH:mm:ss",placeholder:"__:__:__"})))}},u={args:{source:{input_datetime_picker:i.input_datetime_picker,calendar_dropdown:i.calendar_dropdown,calendar_dropdown_button:i.calendar_dropdown_button,calendar_preset_button:i.calendar_preset_button}},render:n=>t.createElement(U,{...n})};var S,g,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [valueStart, setValueStart] = useState<string>();
    const [valueEnd, setValueEnd] = useState<string>();
    return <RangeTimeInput {...args} valueStart={valueStart} valueEnd={valueEnd} onChangeStart={setValueStart} onChangeEnd={setValueEnd} />;
  }
}`,...(E=(g=p.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,h,H;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [start1, setStart1] = useState<string>();
    const [end1, setEnd1] = useState<string>();
    const [start2, setStart2] = useState<string>();
    const [end2, setEnd2] = useState<string>();
    const [start3, setStart3] = useState<string>();
    const [end3, setEnd3] = useState<string>();
    const [start4, setStart4] = useState<string>();
    const [end4, setEnd4] = useState<string>();
    return <>
        HH:mm
        <RangeTimeInput {...args} format="HH:mm" valueStart={start1} valueEnd={end1} onChangeStart={setStart1} onChangeEnd={setEnd1} />
        <br />
        HH:mm:ss
        <RangeTimeInput {...args} format="HH:mm:ss" valueStart={start2} valueEnd={end2} onChangeStart={setStart2} onChangeEnd={setEnd2} />
        <br />
        HH:mm:ss.ms
        <RangeTimeInput {...args} format="HH:mm:ss.ms" valueStart={start3} valueEnd={end3} onChangeStart={setStart3} onChangeEnd={setEnd3} />
        <br />
        h:mm am/pm
        <RangeTimeInput {...args} format="h:mm aaa" valueStart={start4} valueEnd={end4} onChangeStart={setStart4} onChangeEnd={setEnd4} />
      </>;
  }
}`,...(H=(h=c.parameters)==null?void 0:h.docs)==null?void 0:H.source}}};var C,T,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [firstTime, setFirstTime] = useState<string>();
    const [secondTime, setSecondTime] = useState<string>();
    return <>
        <H6>Range time picker is composition of 2 TimeInputs</H6>
        <Space gap={4} direction="horizontal" wrap="nowrap">
          <TimeInput {...args} value={firstTime} onChange={setFirstTime} format="HH:mm:ss" placeholder="__:__:__" />
          – <TimeInput {...args} value={secondTime} onChange={setSecondTime} format="HH:mm:ss" placeholder="__:__:__" />
        </Space>
      </>;
  }
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,I,b;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: {
      input_datetime_picker: componentColors.input_datetime_picker,
      calendar_dropdown: componentColors.calendar_dropdown,
      calendar_dropdown_button: componentColors.calendar_dropdown_button,
      calendar_preset_button: componentColors.calendar_preset_button
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(b=(I=u.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const At=["Basic","Variants","TimeInputComposition","ColorTokens"];export{p as Basic,u as ColorTokens,d as TimeInputComposition,c as Variants,At as __namedExportsOrder,qt as default};
