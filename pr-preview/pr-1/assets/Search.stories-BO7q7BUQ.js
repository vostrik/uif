import{M as c,R as r,H as y}from"./iframe-CMq2KAbH.js";import{e as f,g as h,c as P}from"./propPresentation-DhN30H9i.js";import{S as p}from"./Search-Zqw0-XRN.js";import{s as b}from"./resolveDesignControls-CFhBuB_d.js";import{v as x}from"./typesHelpers-tpz7Of7L.js";const v="",E={pixsoView:v},_=(e,t={})=>f(b[e],t),I={disabled:!1,validationStatus:"default",placeholder:"Search...",value:""},u={disabled:_("disabled",{description:"Недоступное состояние поля поиска"}),validationStatus:{control:"select",description:"Визуальный статус валидации поля",options:[...x]},placeholder:{control:"text",description:"Подсказка в пустом поле"},value:{control:"text",description:"Контролируемое значение поля поиска"}},w=y.div`
  width: 300px;
`,m={argTypes:P(u),args:{...I,testId:"search-test-id",klId:"search-kl-id"},parameters:{badges:[c.stable,c.reviewedByDesign],design:E.pixsoView},decorators:[(e,t)=>r.createElement(w,null,r.createElement(e,{...t}))]},H={title:"Hexa UI Components/Search",component:p,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["searchStorySettings"],...m},M=({value:e,onChange:t,onClearClick:o,...S})=>{const[g,a]=r.useState(e??"");return r.useEffect(()=>{a(e??"")},[e]),r.createElement(p,{...S,value:g,onChange:n=>{a(n),t==null||t(n)},onClearClick:()=>{a(""),o==null||o()}})},s={name:"Playground",render:e=>r.createElement(M,{...e}),parameters:{controls:{include:h(u),sort:"none"}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <SearchPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(searchPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const O=["searchStorySettings","Playground"],V=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:O,default:H,searchStorySettings:m},Symbol.toStringTag,{value:"Module"}));export{V as S,m as s};
