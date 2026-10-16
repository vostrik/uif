import{T as b}from"./Palette-BqHKA6oY.js";import{c as o,b as T,R as r}from"./iframe-D7vGURqZ.js";import{T as t}from"./TimeInput-BRyyYg7V.js";import{t as f}from"./TimeInput.stories-J0V9v52j.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-CUTmQbEW.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./Textbox-CEZ0dDcq.js";import"./useGlobalStyles-B-HOYsT0.js";import"./InputMasked-_DcfeiFG.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./InputNumber-Bt5vXNjj.js";import"./index-Bijc3Mwe.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./SearchOutlined-zeEOv1ar.js";import"./button-iMtochpT.js";import"./wave-Bh4c9RUC.js";import"./useMergedState-Dgv3UayC.js";import"./InputPassword-5Hf3TJHk.js";import"./Button-9U8xJrYJ.js";import"./Dropdown-CRW3TkbL.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BG56_tLR.js";import"./focus-Dl3Nwm4s.js";import"./ArrowRight-DjKzMcwQ.js";import"./Toggle-Dt_5v6fg.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";import"./FormLabel-BgNNh3NE.js";import"./Tag-CV4RJqlE.js";import"./TextReducer-yX199pg5.js";import"./index-kV8384LW.js";import"./colors-C-4HMPnB.js";import"./Group-DqJlf-Gx.js";import"./Divider-51vw4bax.js";import"./Loader-CWfEwXXE.js";import"./index-sXrtJGg5.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CphszqrJ.js";import"./useTranslation-B2jQLDHY.js";import"./IconResolver-BKL_1foC.js";import"./Placeholder-b0XisIub.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
