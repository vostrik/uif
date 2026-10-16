import{T as b}from"./Palette-iFbb-9f5.js";import{c as o,b as T,R as r}from"./iframe-CE3A2i_R.js";import{T as t}from"./TimeInput-BJNI79QI.js";import{t as f}from"./TimeInput.stories--3XXVjHq.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-B-gpxSk5.js";import"./input-CXZYXpvP.js";import"./index-Chjiymov.js";import"./Textbox-Bh1_eJmX.js";import"./useGlobalStyles-DemgArYT.js";import"./InputMasked-DJRwMJxo.js";import"./useThemedTextbox-DFiuUy0S.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Ceydhy0X.js";import"./InputNumber-pm1MHzRq.js";import"./index-Bma-jNZr.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./SearchOutlined-C5ND5PMp.js";import"./button-BXfcPuzR.js";import"./wave-id3Y8ngN.js";import"./useMergedState-CJ57ru4s.js";import"./InputPassword-DTGy24rF.js";import"./Button-DWAe4sGj.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./FormLabel-BTPnuYAd.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./colors-JBaSgu6R.js";import"./Group-CT1GLKPI.js";import"./Divider-BfYsgfay.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BHaQF9M1.js";import"./useTranslation-Df249MGx.js";import"./IconResolver-D-DLfVil.js";import"./Placeholder-Cww9fqa_.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    klId: 'time-input'
  },
  render: args => {
    const [value, setValue] = useState<string>();
    return <TimeInput {...args} value={value} onChange={setValue} />;
  }
}`,...(i=(s=m.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var _,c,l;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <>
      HH:mm <TimeInput {...args} format="HH:mm" placeholder="__:__" />
      <br />
      HH:mm:ss <TimeInput {...args} format="HH:mm:ss" placeholder="__:__:__" />
      <br />
      HH:mm:ss.ms <TimeInput {...args} format="HH:mm:ss.ms" placeholder="__:__:__.___" />
      <br />
      h:mm am/pm <TimeInput {...args} format="h:mm aaa" placeholder="__:__ am" />
    </>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,H;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    source: {
      input_datetime_picker: componentColors.input_datetime_picker,
      calendar_dropdown: componentColors.calendar_dropdown,
      calendar_dropdown_button: componentColors.calendar_dropdown_button,
      calendar_preset_button: componentColors.calendar_preset_button
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(H=(u=n.parameters)==null?void 0:u.docs)==null?void 0:H.source}}};const Tr=["Basic","Variants","ColorTokens"];export{m as Basic,n as ColorTokens,a as Variants,Tr as __namedExportsOrder,br as default};
