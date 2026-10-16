import{T as b}from"./Palette-BB5tpPID.js";import{c as o,b as T,R as r}from"./iframe-aBV3CYH3.js";import{T as t}from"./TimeInput-Da5kuw0M.js";import{t as f}from"./TimeInput.stories-DJ_Ng8ee.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-BFwevWds.js";import"./input-CiZcLd1s.js";import"./index-Chjiymov.js";import"./Textbox-BtYMJ3_s.js";import"./useGlobalStyles-BWqTjI30.js";import"./InputMasked-jxiIpy-4.js";import"./useThemedTextbox-QNQ8dboe.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DhQ9d7Tv.js";import"./InputNumber-CGktXF1w.js";import"./index-CYEAabar.js";import"./omit-DXgDXInf.js";import"./type-GmYgjqv3.js";import"./SearchOutlined-CWG8nuz8.js";import"./button-DGh54oSp.js";import"./wave-iSaySfuY.js";import"./useMergedState-CYatStVN.js";import"./InputPassword-BekFf1yQ.js";import"./Button-DgUfCEii.js";import"./Dropdown-KoQ7Ozhb.js";import"./KeyCode-c5NdJp32.js";import"./isEqual--rqab9QN.js";import"./focus-DNariyKj.js";import"./ArrowRight-BspTRk2f.js";import"./Toggle-CFrSJDb6.js";import"./AdditionalContent-CBTW8zX-.js";import"./HelpMessage-DBlyCl9F.js";import"./FormLabel-d3dW3auX.js";import"./Tag-DY7rUT5S.js";import"./TextReducer-D8U9kJ52.js";import"./index-BkZLf1_p.js";import"./colors-nuNhf3hF.js";import"./Group-MwZqih5e.js";import"./Divider-C5DkIf6Z.js";import"./Loader-CchH_JSv.js";import"./index-CqTa44a8.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CIlAhBZx.js";import"./useTranslation-C3jgrI3o.js";import"./IconResolver-CiXsV5MV.js";import"./Placeholder-C0eqEAUH.js";import"./propPresentation-DwmroTjb.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
