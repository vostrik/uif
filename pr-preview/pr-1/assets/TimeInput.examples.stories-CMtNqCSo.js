import{T as b}from"./Palette-CDmqs2Vy.js";import{c as o,b as T,R as r}from"./iframe-BC0sauTx.js";import{T as t}from"./TimeInput-VuCUe6kS.js";import{t as f}from"./TimeInput.stories-2bNS9JVL.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-hh5tR66Q.js";import"./input-l3UZTC3h.js";import"./index-Chjiymov.js";import"./Textbox-D4IO5GkS.js";import"./useGlobalStyles-CqyrLu9a.js";import"./InputMasked-DUtfeg-u.js";import"./useThemedTextbox-DHXQEynY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DJSqrEzb.js";import"./InputNumber-BWAkKPkq.js";import"./index-D0QCmQVE.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./SearchOutlined-CsWPDYZB.js";import"./button-CQm7lrDl.js";import"./wave-CeOhQ2OJ.js";import"./useMergedState-GIAdtRIo.js";import"./InputPassword-atq-sjm4.js";import"./Button-Cmjt4Mlb.js";import"./Dropdown-bUtM1Y1j.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CAsWAeK7.js";import"./focus-Dnl7tSMp.js";import"./ArrowRight-UOmwPHbX.js";import"./Toggle-BnlzIyHw.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./FormLabel-DvUxTPYn.js";import"./Tag-DYf45Xcw.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./colors-BlEKYhgo.js";import"./Group-CuTH3Q6e.js";import"./Divider-BINKUE5V.js";import"./Loader-ZrnY6mmh.js";import"./index-DfGxRC7Y.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-DYWGd29I.js";import"./useTranslation-De9R2daC.js";import"./IconResolver-DXnbb7I9.js";import"./Placeholder-DM3diPVD.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
