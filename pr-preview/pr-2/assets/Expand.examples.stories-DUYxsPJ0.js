import{r as H}from"./StoryComponents-CTGylUMP.js";import{R as T,T as f}from"./iframe-BxJnf3ZL.js";import{E as C}from"./Expand-ADV8X3RL.js";import{e as S,a as b}from"./Expand.stories-STmgy_8p.js";import"./FormLabel-C8HaQNzE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B4FkS-ry.js";import"./TextReducer-jgmtD67Q.js";import"./index-Dlpfquxs.js";import"./omit-DXgDXInf.js";import"./type-l5tskpde.js";import"./colors-yztLXgoP.js";import"./wave-CE4pLSVu.js";import"./Group-Dnx8lKl-.js";import"./Divider-Ch4BCEC8.js";import"./useTranslation-XbAzRulq.js";import"./propPresentation-lj9O_TmM.js";import"./blocks-BzGBXNOF.js";import"./index-RPybRgje.js";import"./withMeta-BBywDIZF.js";import"./DocPageLayout-z7hcKswJ.js";import"./SubComponents-B17FNPjy.js";import"./TextWithTruncation-DRr7EPDb.js";import"./ArrowDownSolid-mA2-OHVl.js";import"./ArrowRightSolid-DI2-NN91.js";import"./Badge-BD8rQxYw.js";import"./Indicator-DttH4MVv.js";import"./StatusOkOutline-B39sGwVj.js";import"./Grid-DxmWR4Wt.js";import"./Markdown-M2-twDFV.js";import"./index-DkgxDGTG.js";import"./shouldForwardProp-Cdy-RLhZ.js";const te={title:"Hexa UI Components/Expand/Stories",component:C,tags:["!autodocs"],...b},e={},r={args:{children:T.createElement(f,null,"Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.")}},t={render:E=>H([32,64,120].map(a=>({label:String(a),content:T.createElement(C,{...E,collapsedHeight:a})}))),argTypes:{collapsedHeight:{control:!1}},args:{children:S},name:"Collapsed Height"},o={args:{children:S,textToExpand:"Показать полностью",textToCollapse:"Скрыть"}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
