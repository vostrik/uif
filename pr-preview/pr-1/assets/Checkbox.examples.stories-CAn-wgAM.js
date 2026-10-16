import{T as u}from"./Palette-CDmqs2Vy.js";import{c as d,R as e,N as l}from"./iframe-BC0sauTx.js";import{a as C}from"./StoryComponents-CfV16-7w.js";import{T as h}from"./Textbox-D4IO5GkS.js";import{a as o}from"./Checkbox-0v2wFjNL.js";import{c as b}from"./Checkbox.stories-nNyIwtET.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-DvUxTPYn.js";import"./Tag-DYf45Xcw.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./colors-BlEKYhgo.js";import"./wave-CeOhQ2OJ.js";import"./Group-CuTH3Q6e.js";import"./Divider-BINKUE5V.js";import"./useGlobalStyles-CqyrLu9a.js";import"./InputMasked-DUtfeg-u.js";import"./input-l3UZTC3h.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DHXQEynY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DJSqrEzb.js";import"./InputNumber-BWAkKPkq.js";import"./index-D0QCmQVE.js";import"./SearchOutlined-CsWPDYZB.js";import"./button-CQm7lrDl.js";import"./useMergedState-GIAdtRIo.js";import"./InputPassword-atq-sjm4.js";import"./Button-Cmjt4Mlb.js";import"./Dropdown-bUtM1Y1j.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CAsWAeK7.js";import"./focus-Dnl7tSMp.js";import"./ArrowRight-UOmwPHbX.js";import"./Toggle-BnlzIyHw.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./Loader-ZrnY6mmh.js";import"./index-DfGxRC7Y.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-DYWGd29I.js";import"./useTranslation-De9R2daC.js";import"./IconResolver-DXnbb7I9.js";import"./Placeholder-DM3diPVD.js";import"./useId-2E_W_Qyw.js";import"./generateId-BXJELych.js";import"./index-r5fD96Zl.js";import"./index-Cr_hWViW.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./withMeta-BRvA4BlU.js";import"./DocPageLayout-CarEzdaF.js";import"./SubComponents-DrIlL0Al.js";import"./TextWithTruncation-DOatzAnE.js";import"./ArrowDownSolid-CAJ9wxew.js";import"./ArrowRightSolid-DmJilGE2.js";import"./Badge-BeYddg-s.js";import"./Indicator-C6NMvhP-.js";import"./StatusOkOutline-nyfZfHQX.js";import"./Grid-Kb2vKuef.js";import"./Markdown-DQohGWul.js";import"./index-Ca2avi9Z.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./meta-hCnUNwms.js";import"./resolveDesignControls-CFhBuB_d.js";const Be={title:"Hexa UI Components/Checkbox/Stories",component:o,tags:["!autodocs"],...b},r={render:t=>e.createElement(C,null,e.createElement(o,{...t},"Check me"),e.createElement(l,{getPopupContainer:()=>document.body},e.createElement(o,{tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet scelerisque ligula, eget aliquet sem elementum id. Suspendisse ornare scelerisque arcu, non tincidunt quam. Vestibulum a laoreet erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a gravida quam. Cras varius, dui quis euismod ultrices, eros leo maximus nibh, a sagittis dolor augue condimentum libero. Duis tortor est, placerat ut porta in, sagittis eu ante. Sed viverra leo magna, sed volutpat diam consequat id. Nulla pharetra nibh sit amet tempus ornare. Nunc ut quam ante.",...t},"tooltip")),e.createElement(o,{checked:!0,...t},"Im checked"),e.createElement(o,{checked:!1,indeterminate:!0,...t},"Im indeterminate"),e.createElement(o,{description:"Some description",...t},"With description"),e.createElement(o,{description:"Some description",dependentElement:e.createElement(h,{placeholder:"dependentElement"}),...t},"With description and dependentElement"))},i={args:{source:d.checkbox},render:t=>e.createElement(u,{...t})};var n,m,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
