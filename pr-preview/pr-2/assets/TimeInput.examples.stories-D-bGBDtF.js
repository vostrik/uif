import{T as b}from"./Palette-L_jpL42l.js";import{c as o,b as T,R as r}from"./iframe-D64doaOG.js";import{T as t}from"./TimeInput-Dn0et-ie.js";import{t as f}from"./TimeInput.stories-C2vJLg0a.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-C14Ex4Uh.js";import"./input-BGaYNdUH.js";import"./index-Chjiymov.js";import"./Textbox-DG8LriK_.js";import"./useGlobalStyles-BHDTOddm.js";import"./InputMasked-mR9gPOBu.js";import"./useThemedTextbox-CSuDfsxH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./InputNumber-BgiYnHn5.js";import"./index-M7uLrcpx.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./SearchOutlined-XfEsUDsT.js";import"./button-Xku0lj0N.js";import"./wave-D0moY5T7.js";import"./useMergedState-D_-bsn6_.js";import"./InputPassword-CF4iGcsj.js";import"./Button-TmF0MD_-.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Toggle-DKzag4k9.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";import"./FormLabel-_EAno6xN.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./colors-CZlhbD2k.js";import"./Group-g0kG_cFj.js";import"./Divider-CHq-NCgF.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./IconResolver-B-B8tWu_.js";import"./Placeholder-CPZh2A8H.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
