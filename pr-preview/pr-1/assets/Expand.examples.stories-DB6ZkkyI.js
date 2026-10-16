import{r as H}from"./StoryComponents-CbjM3Idf.js";import{R as T,T as f}from"./iframe-DIzBSOsa.js";import{E as C}from"./Expand-Cx4bipKW.js";import{e as S,a as b}from"./Expand.stories-CFDH5GpJ.js";import"./FormLabel-pcEEqmjq.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-UnCHTvWf.js";import"./TextReducer-B8LAxaee.js";import"./index-DmRlaPE6.js";import"./omit-DXgDXInf.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./wave-CZhb61AN.js";import"./Group-DZSM1WME.js";import"./Divider-B7r6BzqD.js";import"./useTranslation-akTbTiaP.js";import"./propPresentation-B5tDD9vt.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./withMeta-CymzVPc2.js";import"./DocPageLayout-ycYJCuGf.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Badge-BnYETXMc.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";const te={title:"Hexa UI Components/Expand/Stories",component:C,tags:["!autodocs"],...b},e={},r={args:{children:T.createElement(f,null,"Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.")}},t={render:E=>H([32,64,120].map(a=>({label:String(a),content:T.createElement(C,{...E,collapsedHeight:a})}))),argTypes:{collapsedHeight:{control:!1}},args:{children:S},name:"Collapsed Height"},o={args:{children:S,textToExpand:"Показать полностью",textToCollapse:"Скрыть"}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
