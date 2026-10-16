import{T as u}from"./Palette-BWzVK3dX.js";import{c as d,R as e,N as l}from"./iframe-DIzBSOsa.js";import{a as C}from"./StoryComponents-CbjM3Idf.js";import{T as h}from"./Textbox-5yg8yqmJ.js";import{a as o}from"./Checkbox-DAHc4PDc.js";import{c as b}from"./Checkbox.stories-BnTFRBqI.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-pcEEqmjq.js";import"./Tag-UnCHTvWf.js";import"./TextReducer-B8LAxaee.js";import"./index-DmRlaPE6.js";import"./omit-DXgDXInf.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./wave-CZhb61AN.js";import"./Group-DZSM1WME.js";import"./Divider-B7r6BzqD.js";import"./useGlobalStyles-DgpDkaRt.js";import"./InputMasked-BSoEqwUR.js";import"./input-DWT0eBQ1.js";import"./index-Chjiymov.js";import"./useThemedTextbox-kgZ1h4SY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DZYGm017.js";import"./InputNumber-CYTncJIx.js";import"./index-BfnUqPRg.js";import"./SearchOutlined-Q97UXRgi.js";import"./button-CJ1TwKfr.js";import"./useMergedState-IHysQFAx.js";import"./InputPassword-kn2SY-sh.js";import"./Button-papDIOAz.js";import"./Dropdown-DEik8dKH.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-Dlds-xGy.js";import"./focus-BglFpdoy.js";import"./ArrowRight-DXYEwFBz.js";import"./Toggle-BwnEG2Z9.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";import"./Loader-t8IvB7CC.js";import"./index-B9He-UhX.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-CmY3C1FN.js";import"./useTranslation-akTbTiaP.js";import"./IconResolver-Dvz6iVav.js";import"./Placeholder-CjFf63ey.js";import"./useId-Pl0djdF9.js";import"./generateId-BXJELych.js";import"./index-BnuIwIW_.js";import"./index-D8DmUpKe.js";import"./propPresentation-B5tDD9vt.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./withMeta-CymzVPc2.js";import"./DocPageLayout-ycYJCuGf.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Badge-BnYETXMc.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
