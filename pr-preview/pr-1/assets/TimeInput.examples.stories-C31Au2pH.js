import{T as b}from"./Palette-DCq6aAvk.js";import{c as o,b as T,R as r}from"./iframe-DZ6CNdmR.js";import{T as t}from"./TimeInput-FbOnvzUB.js";import{t as f}from"./TimeInput.stories-CXzm2IKi.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-BPT5bDQZ.js";import"./input-BjQab1dI.js";import"./index-Chjiymov.js";import"./Textbox-BVe-NjwS.js";import"./useGlobalStyles-C8XA7wQH.js";import"./InputMasked-Dc-xkFNK.js";import"./useThemedTextbox-BB93mY2Z.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-dtfbHAr8.js";import"./InputNumber-I6H84s6n.js";import"./index-BEJuuqy6.js";import"./omit-DXgDXInf.js";import"./type-CxXYYU3T.js";import"./SearchOutlined-C_XoquOD.js";import"./button-R3ozi3gu.js";import"./wave-DyggUTsD.js";import"./useMergedState-Bv7O4HCz.js";import"./InputPassword-0CEE8fhu.js";import"./Button-C9wH3E3m.js";import"./Dropdown-duWrCIkx.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DHB5dyvI.js";import"./focus-QtQWvBuy.js";import"./ArrowRight-Fn5l7xGu.js";import"./Toggle-DHSC5Vjo.js";import"./AdditionalContent-CPgxIA4P.js";import"./HelpMessage-BoCaja7X.js";import"./FormLabel-WpK8CiKN.js";import"./Tag-jEOS0vhO.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./colors-uxJ92uqJ.js";import"./Group-dqpsK0g-.js";import"./Divider-CeH8hLX2.js";import"./Loader-CUCsJRC1.js";import"./index-BdH7CSvn.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CniIV_0K.js";import"./useTranslation-Bw9GGU1E.js";import"./IconResolver-DS4sEvCH.js";import"./Placeholder-CImJHfn5.js";import"./propPresentation-DQRIYBrB.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
