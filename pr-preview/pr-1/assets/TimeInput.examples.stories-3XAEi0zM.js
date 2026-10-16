import{T as b}from"./Palette-BLZ41xKU.js";import{c as o,b as T,R as r}from"./iframe-BPWAyQGL.js";import{T as t}from"./TimeInput-BJcwFVol.js";import{t as f}from"./TimeInput.stories-CiuNUMqy.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-2BzT6ZQW.js";import"./input-CoHkwCY4.js";import"./index-Chjiymov.js";import"./Textbox-BHhM7EQ-.js";import"./useGlobalStyles-vof3p1Uv.js";import"./InputMasked-DUtpnYD4.js";import"./useThemedTextbox-Rrj0SyKM.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-hzPyAOnM.js";import"./InputNumber-yEWAmw0H.js";import"./index-Caav-DZ5.js";import"./omit-DXgDXInf.js";import"./type-maMiwprh.js";import"./SearchOutlined-BFls0Wly.js";import"./button-B1Scf5B3.js";import"./wave-EISCTe2f.js";import"./useMergedState-g6WViP84.js";import"./InputPassword-BS9yIELW.js";import"./Button-CQWa6EYf.js";import"./Dropdown-lv8Gw8_U.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YytDoSjm.js";import"./focus-DFc-nYJ4.js";import"./ArrowRight-B3jVM-Au.js";import"./Toggle-DuE0rxkq.js";import"./AdditionalContent-BJ7Szo00.js";import"./HelpMessage-CD1QG__s.js";import"./FormLabel-B-aKaC8j.js";import"./Tag-CLdMII2D.js";import"./TextReducer-eAZWrg4x.js";import"./index-DVFdTPQg.js";import"./colors-kJjG_WhN.js";import"./Group-DuhoQwP5.js";import"./Divider-UsJkeAB_.js";import"./Loader-DFUBe3p9.js";import"./index-dBktDYt3.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BxJYhgs5.js";import"./useTranslation-DQyKnvau.js";import"./IconResolver-CCt_PimO.js";import"./Placeholder-oZWN3qNI.js";import"./propPresentation-CIJdeABG.js";import"./blocks-CmgeZvgx.js";import"./index-BXqOKXS7.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
