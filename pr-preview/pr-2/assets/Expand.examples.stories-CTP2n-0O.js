import{r as H}from"./StoryComponents-D51pRFFv.js";import{R as T,T as f}from"./iframe-DXVY_al-.js";import{E as C}from"./Expand-BhP5oPnn.js";import{e as S,a as b}from"./Expand.stories-C6OZB7GT.js";import"./FormLabel-g5DQo_wL.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./Divider-Hc8qqOlX.js";import"./useTranslation-DdpNEPN3.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./withMeta-CBaPUhSC.js";import"./DocPageLayout-CyCyvv-O.js";import"./SubComponents-BmDm24jU.js";import"./TextWithTruncation-Bi2HiZvn.js";import"./ArrowDownSolid-CLCLXTUz.js";import"./ArrowRightSolid-BSWeQvzk.js";import"./Badge-Cj1zsPT9.js";import"./Indicator-B4cq0q5a.js";import"./StatusOkOutline-Dbo4WwyZ.js";import"./Grid-D1T_Hu63.js";import"./Markdown-DlRQLHKn.js";import"./index-BAYulqpX.js";import"./shouldForwardProp-Cdy-RLhZ.js";const te={title:"Hexa UI Components/Expand/Stories",component:C,tags:["!autodocs"],...b},e={},r={args:{children:T.createElement(f,null,"Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.")}},t={render:E=>H([32,64,120].map(a=>({label:String(a),content:T.createElement(C,{...E,collapsedHeight:a})}))),argTypes:{collapsedHeight:{control:!1}},args:{children:S},name:"Collapsed Height"},o={args:{children:S,textToExpand:"Показать полностью",textToCollapse:"Скрыть"}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
