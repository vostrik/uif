import{M as n,R as r,H as x}from"./iframe-CMq2KAbH.js";import{e as S,g as y,c as f}from"./propPresentation-DhN30H9i.js";import{T as i}from"./Textbox-C3XwSVev.js";import{s as P}from"./resolveDesignControls-CFhBuB_d.js";import{v as b}from"./typesHelpers-tpz7Of7L.js";const T=(e,t={})=>S(P[e],t),v={disabled:!1,readOnly:!1,validationStatus:"default",placeholder:"Placeholder",rows:3,maxLength:1024,showCount:!1,value:""},p={disabled:T("disabled",{description:"Отключённое поле: ввод недоступен"}),readOnly:{control:"boolean",description:"Режим только для чтения: значение отображается, но не редактируется"},validationStatus:{control:"select",description:"Визуальный статус валидации поля",options:[...b]},placeholder:{control:"text",description:"Подсказка в пустом поле"},rows:{control:"number",description:"Количество видимых строк поля"},maxLength:{control:"number",description:"Максимальное количество символов"},showCount:{control:"boolean",description:"Показывать счётчик символов под полем"},value:{control:"text",description:"Контролируемое значение поля"}},h=x.div`
  width: 400px;
`,E="",u={argTypes:f(p),args:{...v,testId:"textarea-test-id",klId:"textarea-kl-id"},parameters:{badges:[n.stable,n.reviewedByDesign],design:E},decorators:[(e,t)=>r.createElement(h,null,r.createElement(e,{...t}))]},I={title:"Hexa UI Components/Textarea",component:i.Textarea,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["textareaStorySettings"],...u},_=({value:e,onChange:t,...m})=>{const[g,a]=r.useState(e);return r.useEffect(()=>{a(e)},[e]),r.createElement(i.Textarea,{...m,value:g,onChange:s=>{a(s),t==null||t(s)}})},o={name:"Playground",render:e=>r.createElement(_,{...e}),parameters:{controls:{include:y(p),sort:"none"}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <TextareaPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(textareaPropPresentation),
      sort: 'none'
    }
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const O=["textareaStorySettings","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:O,default:I,textareaStorySettings:u},Symbol.toStringTag,{value:"Module"}));export{A as T,u as t};
