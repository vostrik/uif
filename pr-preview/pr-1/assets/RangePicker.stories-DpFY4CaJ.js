import{M as m,R as t,H as P}from"./iframe-CS_lS3JQ.js";import{e as f,g as S,c as y}from"./propPresentation-VPDZOrCH.js";import{R as l}from"./RangePicker-D0KRzAsm.js";import{s as k}from"./resolveDesignControls-CFhBuB_d.js";import{v as b}from"./typesHelpers-tpz7Of7L.js";const x="",R={pixsoView:x},v=(e,r={})=>f(k[e],r),E={showTime:!1,disabled:!1,readonly:!1,validationStatus:"default"},d={showTime:{group:"appearance",description:"Показывать выбор времени в выпадающей панели",control:"boolean"},format:{group:"appearance",description:"Формат отображения даты в полях ввода",control:"text"},disabled:v("disabled"),readonly:{group:"appearance",description:"Только чтение: поля не редактируются, календарь недоступен",control:"boolean"},validationStatus:{group:"appearance",description:"Визуальный статус валидации поля",control:"select",options:[...b]},open:{group:"technical",description:"Управление открытием выпадающей панели",control:"boolean"}},T=P.div`
  width: 300px;
`,p={argTypes:y(d),args:{...E,testId:"range-picker-test-id",klId:"range-picker-kl-id"},parameters:{badges:[m.stable],design:R.pixsoView},decorators:[(e,r)=>t.createElement(T,null,t.createElement(e,{...r}))]},_={title:"Hexa UI Components/DateTime Pickers/RangePicker",component:l,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["rangePickerStorySettings"],...p},I=({value:e,onChange:r,...g})=>{const[u,a]=t.useState(e??[null,null]);return t.useEffect(()=>{a(e??[null,null])},[e]),t.createElement(l,{...g,value:u,onChange:n=>{a(n),r==null||r(n)}})},o={name:"Playground",render:e=>t.createElement(I,{...e}),parameters:{controls:{include:S(d),sort:"none"}}};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <RangePickerPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(rangePickerPropPresentation),
      sort: 'none'
    }
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const w=["rangePickerStorySettings","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:w,default:_,rangePickerStorySettings:p},Symbol.toStringTag,{value:"Module"}));export{A as R,p as r};
