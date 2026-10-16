import{r as H}from"./StoryComponents-BvaH4X64.js";import{R as T,T as f}from"./iframe-DZ6CNdmR.js";import{E as C}from"./Expand-B-qY8Yau.js";import{e as S,a as b}from"./Expand.stories-X7zPGNiO.js";import"./FormLabel-WpK8CiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jEOS0vhO.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./omit-DXgDXInf.js";import"./type-CxXYYU3T.js";import"./colors-uxJ92uqJ.js";import"./wave-DyggUTsD.js";import"./Group-dqpsK0g-.js";import"./Divider-CeH8hLX2.js";import"./useTranslation-Bw9GGU1E.js";import"./propPresentation-DQRIYBrB.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";import"./withMeta-b3qPVvuK.js";import"./DocPageLayout--9QtG6bt.js";import"./SubComponents-C8gYiU3N.js";import"./TextWithTruncation-Oqju7yY8.js";import"./ArrowDownSolid-eeOjxQzr.js";import"./ArrowRightSolid-74XVFpn5.js";import"./Badge-MyBI9tsY.js";import"./Indicator-x62EYK4r.js";import"./StatusOkOutline-9gbc7hr8.js";import"./Grid-D0SzO1ht.js";import"./Markdown-AzZ1dVDo.js";import"./index-DR4iiykL.js";import"./shouldForwardProp-Cdy-RLhZ.js";const te={title:"Hexa UI Components/Expand/Stories",component:C,tags:["!autodocs"],...b},e={},r={args:{children:T.createElement(f,null,"Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.")}},t={render:E=>H([32,64,120].map(a=>({label:String(a),content:T.createElement(C,{...E,collapsedHeight:a})}))),argTypes:{collapsedHeight:{control:!1}},args:{children:S},name:"Collapsed Height"},o={args:{children:S,textToExpand:"Показать полностью",textToCollapse:"Скрыть"}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <Text>
        Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.
      </Text>
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => renderVariants([32, 64, 120].map(height => ({
    label: String(height),
    content: <ExpandComponent {...args} collapsedHeight={height} />
  })), true),
  argTypes: {
    collapsedHeight: {
      control: false
    }
  },
  args: {
    children: expandMockText
  },
  name: 'Collapsed Height'
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,h,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: expandMockText,
    textToExpand: 'Показать полностью',
    textToCollapse: 'Скрыть'
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const oe=["WithText","ShortContent","CollapsedHeight","CustomLabels"];export{t as CollapsedHeight,o as CustomLabels,r as ShortContent,e as WithText,oe as __namedExportsOrder,te as default};
