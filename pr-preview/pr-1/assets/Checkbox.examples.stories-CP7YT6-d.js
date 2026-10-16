import{T as u}from"./Palette-iFbb-9f5.js";import{c as d,R as e,N as l}from"./iframe-CE3A2i_R.js";import{a as C}from"./StoryComponents-DgMyNenL.js";import{T as h}from"./Textbox-Bh1_eJmX.js";import{a as o}from"./Checkbox-DgJSahC_.js";import{c as b}from"./Checkbox.stories-M07r30d3.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-BTPnuYAd.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./Divider-BfYsgfay.js";import"./useGlobalStyles-DemgArYT.js";import"./InputMasked-DJRwMJxo.js";import"./input-CXZYXpvP.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DFiuUy0S.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Ceydhy0X.js";import"./InputNumber-pm1MHzRq.js";import"./index-Bma-jNZr.js";import"./SearchOutlined-C5ND5PMp.js";import"./button-BXfcPuzR.js";import"./useMergedState-CJ57ru4s.js";import"./InputPassword-DTGy24rF.js";import"./Button-DWAe4sGj.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BHaQF9M1.js";import"./useTranslation-Df249MGx.js";import"./IconResolver-D-DLfVil.js";import"./Placeholder-Cww9fqa_.js";import"./useId-CJZ66fF7.js";import"./generateId-BXJELych.js";import"./index-D9iZAV-N.js";import"./index-x-4LxR_n.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./withMeta-ChZHBTGH.js";import"./DocPageLayout-CSin2tY8.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Badge-COlrkFgX.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: CheckboxProps) => <StoryColumn>
      <CheckboxComponent {...args}>
        Check me
      </CheckboxComponent>
      <PopupConfigProvider getPopupContainer={() => document.body}>
        <CheckboxComponent
      // eslint-disable-next-line @stylistic/max-len
      tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante." {...args}>
          tooltip
        </CheckboxComponent>
      </PopupConfigProvider>
      <CheckboxComponent checked {...args}>
        Im checked
      </CheckboxComponent>
      <CheckboxComponent checked={false} indeterminate {...args}>
        Im indeterminate
      </CheckboxComponent>
      <CheckboxComponent description="Some description" {...args}>
        With description
      </CheckboxComponent>
      <CheckboxComponent description="Some description" dependentElement={<Textbox placeholder="dependentElement" />} {...args}>
        With description and dependentElement
      </CheckboxComponent>
    </StoryColumn>
}`,...(a=(m=r.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var s,p,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    source: componentColors.checkbox
  },
  render: args => <ThemedPalette {...args} />
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const De=["Basic","ColorTokens"];export{r as Basic,i as ColorTokens,De as __namedExportsOrder,Be as default};
