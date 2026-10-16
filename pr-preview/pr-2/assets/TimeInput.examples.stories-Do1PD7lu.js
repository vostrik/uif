import{T as b}from"./Palette-D1YANZRt.js";import{c as o,b as T,R as r}from"./iframe-DXVY_al-.js";import{T as t}from"./TimeInput-sbZbVT-S.js";import{t as f}from"./TimeInput.stories-CUuFDGDl.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-CRuCNNAG.js";import"./input-BpTIWK3x.js";import"./index-Chjiymov.js";import"./Textbox-DDr6OIiV.js";import"./useGlobalStyles-DBIbeLBm.js";import"./InputMasked-DkaNQw15.js";import"./useThemedTextbox-Cq5Mjd4x.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DCNzFJDX.js";import"./InputNumber-JjJWXSJf.js";import"./index-CtBoabqo.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./SearchOutlined-BWXO38kT.js";import"./button-CXIseOCg.js";import"./wave-LbmbYf62.js";import"./useMergedState-CR6rJtpb.js";import"./InputPassword-BpB75HOe.js";import"./Button-D0QhSnae.js";import"./Dropdown-BLJYQkSA.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CH4g4j4L.js";import"./focus-BfF3lKIC.js";import"./ArrowRight-D886n5Yw.js";import"./Toggle-B5cbHog7.js";import"./AdditionalContent-ziC3WO2J.js";import"./HelpMessage-SIOObLpW.js";import"./FormLabel-g5DQo_wL.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./colors-CsMbn7MB.js";import"./Group-BgkSKQtg.js";import"./Divider-Hc8qqOlX.js";import"./Loader-BxJLuQsn.js";import"./index-CzITj10R.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-C5PT2fwA.js";import"./useTranslation-DdpNEPN3.js";import"./IconResolver-B5JE2hw5.js";import"./Placeholder-DnfSgq--.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
