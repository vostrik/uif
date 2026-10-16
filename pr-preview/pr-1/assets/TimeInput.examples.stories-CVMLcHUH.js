import{T as b}from"./Palette-BaeWRL5w.js";import{c as o,b as T,R as r}from"./iframe-B2l-dmA0.js";import{T as t}from"./TimeInput-CsQwCxpu.js";import{t as f}from"./TimeInput.stories-CY7we8_k.js";import"./preload-helper-Dp1pzeXC.js";import"./imaskDateOptionsGenerator-BnfUKXCI.js";import"./input-DzNTSwXz.js";import"./index-Chjiymov.js";import"./Textbox-CZYGi6SE.js";import"./useGlobalStyles-DOvBPfaB.js";import"./InputMasked-i3yD_Ead.js";import"./useThemedTextbox-CzZ-JQ0-.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-ng42U88B.js";import"./InputNumber-C9On9ukx.js";import"./index-C40OFg9h.js";import"./omit-DXgDXInf.js";import"./type-BpHiafRd.js";import"./SearchOutlined-BOgvv3Np.js";import"./button-DQ_ypKND.js";import"./wave-BK90i1zI.js";import"./useMergedState-B2rUqGYB.js";import"./InputPassword-bxKZlwoB.js";import"./Button-CojEiSsh.js";import"./Dropdown-S_MRfeG_.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CRR70Q8q.js";import"./focus-BPcTVHQR.js";import"./ArrowRight-Bx66-T-K.js";import"./Toggle-5naXiYrs.js";import"./AdditionalContent-MJG4L1hb.js";import"./HelpMessage-DIz5r9vB.js";import"./FormLabel-B4tLdVC9.js";import"./Tag-Bdw-yt0a.js";import"./TextReducer-DpL_UgVZ.js";import"./index-BOo2ub6M.js";import"./colors-CYe0s51z.js";import"./Group-DR6kYA3m.js";import"./Divider-Cp3b7YUD.js";import"./Loader-CZ44NMWY.js";import"./index-a79vEa0Q.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CYBx9QGQ.js";import"./useTranslation-B4Lk-u3d.js";import"./IconResolver-BAKZVe_Q.js";import"./Placeholder-BMiAOLu8.js";import"./propPresentation-DxdzNHPO.js";import"./blocks-DJzvhAc1.js";import"./index-CabRH6Z3.js";import"./types-C5Lrnw03.js";import"./resolveDesignControls-CFhBuB_d.js";const br={title:"Hexa UI Components/DateTime Pickers/TimeInput/Stories",component:t,tags:["!autodocs"],...f},m={args:{klId:"time-input"},render:e=>{const[g,h]=T.useState();return r.createElement(t,{...e,value:g,onChange:h})}},a={render:e=>r.createElement(r.Fragment,null,"HH:mm ",r.createElement(t,{...e,format:"HH:mm",placeholder:"__:__"}),r.createElement("br",null),"HH:mm:ss ",r.createElement(t,{...e,format:"HH:mm:ss",placeholder:"__:__:__"}),r.createElement("br",null),"HH:mm:ss.ms ",r.createElement(t,{...e,format:"HH:mm:ss.ms",placeholder:"__:__:__.___"}),r.createElement("br",null),"h:mm am/pm ",r.createElement(t,{...e,format:"h:mm aaa",placeholder:"__:__ am"}))},n={args:{source:{input_datetime_picker:o.input_datetime_picker,calendar_dropdown:o.calendar_dropdown,calendar_dropdown_button:o.calendar_dropdown_button,calendar_preset_button:o.calendar_preset_button}},render:e=>r.createElement(b,{...e})};var p,s,i;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
