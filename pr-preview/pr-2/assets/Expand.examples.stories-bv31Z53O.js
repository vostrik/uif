import{r as H}from"./StoryComponents-BPvyLU8J.js";import{R as T,T as f}from"./iframe-D64doaOG.js";import{E as C}from"./Expand-CuLLSGSD.js";import{e as S,a as b}from"./Expand.stories-J5bwlJLj.js";import"./FormLabel-_EAno6xN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D6DOgDGV.js";import"./TextReducer-D9EoPo-Z.js";import"./index-BUFoDfzb.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./colors-CZlhbD2k.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./Divider-CHq-NCgF.js";import"./useTranslation-CtdtsiRO.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./withMeta-BASmJkxv.js";import"./DocPageLayout-hKNknvQM.js";import"./SubComponents-CmPDyBhW.js";import"./TextWithTruncation-OcBO6EIa.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./ArrowRightSolid-BZ2MxU-F.js";import"./Badge-tlJSCzR8.js";import"./Indicator-BWF03Jjq.js";import"./StatusOkOutline-3Qqm9vRx.js";import"./Grid-1I9G4hH2.js";import"./Markdown-BoWm1Hej.js";import"./index-BayBP1qJ.js";import"./shouldForwardProp-Cdy-RLhZ.js";const te={title:"Hexa UI Components/Expand/Stories",component:C,tags:["!autodocs"],...b},e={},r={args:{children:T.createElement(f,null,"Короткий текст, который полностью помещается в заданную высоту — кнопка разворота не отображается.")}},t={render:E=>H([32,64,120].map(a=>({label:String(a),content:T.createElement(C,{...E,collapsedHeight:a})}))),argTypes:{collapsedHeight:{control:!1}},args:{children:S},name:"Collapsed Height"},o={args:{children:S,textToExpand:"Показать полностью",textToCollapse:"Скрыть"}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
