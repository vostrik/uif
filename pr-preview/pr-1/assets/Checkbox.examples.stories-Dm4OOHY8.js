import{T as u}from"./Palette-CuBWkKVo.js";import{c as d,R as e,N as l}from"./iframe-CMq2KAbH.js";import{a as C}from"./StoryComponents-CJn5qyLn.js";import{T as h}from"./Textbox-C3XwSVev.js";import{a as o}from"./Checkbox-ngQLk1ON.js";import{c as b}from"./Checkbox.stories-kV6RYu7T.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-lYRdE9pS.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./Divider-C_lHVbvw.js";import"./useGlobalStyles-e7QAzIdB.js";import"./InputMasked-BJJRFGYn.js";import"./input-oCYnQPV0.js";import"./index-Chjiymov.js";import"./useThemedTextbox-0WxJoH-t.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-CJseRoSV.js";import"./InputNumber-B55XAJ_M.js";import"./index-uP0Vmx41.js";import"./SearchOutlined-Bkdm0CAd.js";import"./button-D46-rz2F.js";import"./useMergedState-9g38g9C2.js";import"./InputPassword-BpE4fLB8.js";import"./Button-CthyJnKL.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./focus-CwA7FrxM.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-DvHSb1lq.js";import"./useTranslation-DM_UuMFJ.js";import"./IconResolver-Cpezmei0.js";import"./Placeholder-DvpzdgNV.js";import"./useId-Cff2kRyv.js";import"./generateId-BXJELych.js";import"./index-DnBmp9Qy.js";import"./index-4_wyJ-_O.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./withMeta-Dv8G7Dbj.js";import"./DocPageLayout-CwgI-MzD.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Badge-DZq-1HSe.js";import"./Indicator-PCazPGCQ.js";import"./StatusOkOutline-WlwXIENv.js";import"./Grid-BaI88Kn5.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
