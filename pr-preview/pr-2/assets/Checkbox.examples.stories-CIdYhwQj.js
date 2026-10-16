import{T as u}from"./Palette-B35RaT7h.js";import{c as d,R as e,N as l}from"./iframe-D5i9Ygdo.js";import{a as C}from"./StoryComponents-CEeqpkjr.js";import{T as h}from"./Textbox-DmC8mJtS.js";import{a as o}from"./Checkbox-A_ZN7wFW.js";import{c as b}from"./Checkbox.stories-2f-v_SLu.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-c2Q2BrM3.js";import"./Tag-C8lIf1tQ.js";import"./TextReducer-Dagp5bHw.js";import"./index-CjdVh8OV.js";import"./omit-DXgDXInf.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./wave-CAHKjKs-.js";import"./Group-m0-YpTU1.js";import"./Divider-BeaQgGYc.js";import"./useGlobalStyles-BDgH4xnZ.js";import"./InputMasked-D5lxln8b.js";import"./input-DSbZT73f.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Dl-Tm7pH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BKLnJg9s.js";import"./InputNumber-RQbuw8Bm.js";import"./index-xCiVKA0M.js";import"./SearchOutlined-DkaJltl-.js";import"./button-D-Oiy998.js";import"./useMergedState-BRnWrkwv.js";import"./InputPassword-BM3g8Pk1.js";import"./Button-CXL83VB_.js";import"./Dropdown-Ch8JK4fs.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./focus-BNJDX2dF.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-BK2TPeG4.js";import"./useTranslation-DsfYxNia.js";import"./IconResolver-C8r5gqjC.js";import"./Placeholder-DkijJV4P.js";import"./useId-Bqy4VVR_.js";import"./generateId-BXJELych.js";import"./index-Bx-gf1Vw.js";import"./index-996YLOch.js";import"./propPresentation-B03l1IYW.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./withMeta-DvsF1LmS.js";import"./DocPageLayout-D9kX8XlS.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Badge-DvZDnB4g.js";import"./Indicator-gZ8T3Y3p.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
