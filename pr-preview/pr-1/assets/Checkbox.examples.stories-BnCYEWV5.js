import{T as u}from"./Palette-BLZ41xKU.js";import{c as d,R as e,N as l}from"./iframe-BPWAyQGL.js";import{a as C}from"./StoryComponents-BLyMRmVd.js";import{T as h}from"./Textbox-BHhM7EQ-.js";import{a as o}from"./Checkbox-C6enviWc.js";import{c as b}from"./Checkbox.stories-BSCiXpBc.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-B-aKaC8j.js";import"./Tag-CLdMII2D.js";import"./TextReducer-eAZWrg4x.js";import"./index-DVFdTPQg.js";import"./omit-DXgDXInf.js";import"./type-maMiwprh.js";import"./colors-kJjG_WhN.js";import"./wave-EISCTe2f.js";import"./Group-DuhoQwP5.js";import"./Divider-UsJkeAB_.js";import"./useGlobalStyles-vof3p1Uv.js";import"./InputMasked-DUtpnYD4.js";import"./input-CoHkwCY4.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Rrj0SyKM.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-hzPyAOnM.js";import"./InputNumber-yEWAmw0H.js";import"./index-Caav-DZ5.js";import"./SearchOutlined-BFls0Wly.js";import"./button-B1Scf5B3.js";import"./useMergedState-g6WViP84.js";import"./InputPassword-BS9yIELW.js";import"./Button-CQWa6EYf.js";import"./Dropdown-lv8Gw8_U.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YytDoSjm.js";import"./focus-DFc-nYJ4.js";import"./ArrowRight-B3jVM-Au.js";import"./Toggle-DuE0rxkq.js";import"./AdditionalContent-BJ7Szo00.js";import"./HelpMessage-CD1QG__s.js";import"./Loader-DFUBe3p9.js";import"./index-dBktDYt3.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BxJYhgs5.js";import"./useTranslation-DQyKnvau.js";import"./IconResolver-CCt_PimO.js";import"./Placeholder-oZWN3qNI.js";import"./useId-DBMYbMQW.js";import"./generateId-BXJELych.js";import"./index-B8TW-s5N.js";import"./index-CwCi8DSA.js";import"./propPresentation-CIJdeABG.js";import"./blocks-CmgeZvgx.js";import"./index-BXqOKXS7.js";import"./withMeta-siR5CAf4.js";import"./DocPageLayout-CSVxDKJe.js";import"./SubComponents-D_d7nq2C.js";import"./TextWithTruncation-CTt1ujNW.js";import"./ArrowDownSolid-DRt_qnJW.js";import"./ArrowRightSolid-BpVPz2Qv.js";import"./Badge-CukyCQDU.js";import"./Indicator-V_gcwk1L.js";import"./StatusOkOutline-BjZQeYA-.js";import"./Grid-BWroeBDL.js";import"./Markdown-CbfyQx-w.js";import"./index-BNpFfLq6.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
