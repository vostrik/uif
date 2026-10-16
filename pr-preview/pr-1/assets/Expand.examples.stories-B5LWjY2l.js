import{r as H}from"./StoryComponents-CfV16-7w.js";import{R as T,T as f}from"./iframe-BC0sauTx.js";import{E as C}from"./Expand-m1shSREe.js";import{e as S,a as b}from"./Expand.stories-DKFr9zom.js";import"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DYf45Xcw.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./omit-DXgDXInf.js";import"./type-ceO20y0I.js";import"./colors-BlEKYhgo.js";import"./wave-CeOhQ2OJ.js";import"./Group-CuTH3Q6e.js";import"./Divider-BINKUE5V.js";import"./useTranslation-De9R2daC.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./withMeta-BRvA4BlU.js";import"./DocPageLayout-CarEzdaF.js";import"./SubComponents-DrIlL0Al.js";import"./TextWithTruncation-DOatzAnE.js";import"./ArrowDownSolid-CAJ9wxew.js";import"./ArrowRightSolid-DmJilGE2.js";import"./Badge-BeYddg-s.js";import"./Indicator-C6NMvhP-.js";import"./StatusOkOutline-nyfZfHQX.js";import"./Grid-Kb2vKuef.js";import"./Markdown-DQohGWul.js";import"./index-Ca2avi9Z.js";import"./shouldForwardProp-Cdy-RLhZ.js";const te={title:"Hexa UI Components/Expand/Stories",component:C,tags:["!autodocs"],...b},e={},r={args:{children:T.createElement(f,null,"Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.")}},t={render:E=>H([32,64,120].map(a=>({label:String(a),content:T.createElement(C,{...E,collapsedHeight:a})}))),argTypes:{collapsedHeight:{control:!1}},args:{children:S},name:"Collapsed Height"},o={args:{children:S,textToExpand:"Показать полностью",textToCollapse:"Скрыть"}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
