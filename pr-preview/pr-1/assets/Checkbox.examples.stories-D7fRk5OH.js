import{T as u}from"./Palette-BoWll2PF.js";import{c as d,R as e,N as l}from"./iframe-CS_lS3JQ.js";import{a as C}from"./StoryComponents-DLSfzQIZ.js";import{T as h}from"./Textbox-Xvu2giKA.js";import{a as o}from"./Checkbox-BXqKLmll.js";import{c as b}from"./Checkbox.stories-BHFFMJct.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-CwcsdRCh.js";import"./Tag-K_Mfb6oe.js";import"./TextReducer-BY5uL3xm.js";import"./index-etHmF8Xf.js";import"./omit-DXgDXInf.js";import"./type-BpgJjWfR.js";import"./colors-D4ituO_X.js";import"./wave-87GZ2a0S.js";import"./Group-DmPThJhc.js";import"./Divider-D_7SE2Jg.js";import"./useGlobalStyles-Be6xzYS-.js";import"./InputMasked-CXoAUoAM.js";import"./input-DKVbfvkV.js";import"./index-Chjiymov.js";import"./useThemedTextbox-BXVkZeWV.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BO5f5yOH.js";import"./InputNumber-C_LUGXAO.js";import"./index-7fiEC0nI.js";import"./SearchOutlined-BE7_ur6Q.js";import"./button-6xivo2h5.js";import"./useMergedState-B61t_fRl.js";import"./InputPassword-BM_nvyAd.js";import"./Button-C-yJZqhy.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./focus-BLc_l6vY.js";import"./Toggle-BOxHbuiK.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./ArrowRight-DMancYzQ.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-cz3jVigG.js";import"./useTranslation-Co6sA9X3.js";import"./IconResolver-A6fpvtN_.js";import"./Placeholder-Q-SCb9Hd.js";import"./useId-BYjWvsw4.js";import"./generateId-BXJELych.js";import"./index-DoT2arve.js";import"./index-D7KIalkN.js";import"./propPresentation-VPDZOrCH.js";import"./blocks-CJQmJ9VN.js";import"./index-CgpwO2tq.js";import"./withMeta-BVZrRcOQ.js";import"./Markdown-s2jsbGO9.js";import"./index-CGDdDTKA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-DKYvymTG.js";import"./SubComponents-BHE4NYtA.js";import"./TextWithTruncation-JO92Emz0.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./ArrowRightSolid-BEUEmyaL.js";import"./Badge-Cc2Xscgq.js";import"./Indicator-B2JkvBkD.js";import"./StatusOkOutline-zylH21B-.js";import"./Grid-DyDvPcR7.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
