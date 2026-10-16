import{M as n,R as o,H as P}from"./iframe-DXVY_al-.js";import{e as y,g as f,c as S}from"./propPresentation-DzyQPo2A.js";import{I as c}from"./InputPassword-BpB75HOe.js";import{s as w}from"./resolveDesignControls-CFhBuB_d.js";import{v as b}from"./typesHelpers-tpz7Of7L.js";const I=(e,t={})=>y(w[e],t),v={placeholder:"Password",disabled:!1,readOnly:!1,validationStatus:"default",clearBeforeFirstChange:!1,showVisibilityIcon:!0,value:""},p={validationStatus:{description:"Визуальный статус валидации поля",control:"select",options:[...b]},disabled:I("disabled"),readOnly:{description:"Только чтение: поле не редактируется",control:"boolean"},clearBeforeFirstChange:{description:"Очищать значение при первом фокусе до первого изменения",control:"boolean"},showVisibilityIcon:{description:"Показывать иконку переключения видимости пароля",control:"boolean"},placeholder:{description:"Подсказка в пустом поле",control:"text"},value:{description:"Контролируемое значение поля",control:"text"}},x=P.div`
  width: 300px;
`,u={argTypes:S(p),args:{...v,testId:"input-password-test-id",klId:"input-password-kl-id"},parameters:{badges:[n.stable,n.reviewedByDesign],design:""},decorators:[(e,t)=>o.createElement(x,null,o.createElement(e,{...t}))]},h={title:"Hexa UI Components/Inputs/InputPassword",component:c,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["inputPasswordStorySettings"],...u},E=({value:e,onChange:t,...m})=>{const[g,s]=o.useState(e??"");return o.useEffect(()=>{s(e??"")},[e]),o.createElement(c,{...m,value:g,onChange:a=>{s(a),t==null||t(a)}})},r={name:"Playground",render:e=>o.createElement(E,{...e}),parameters:{controls:{include:f(p),sort:"none"}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <InputPasswordPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(inputPasswordPropPresentation),
      sort: 'none'
    }
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const _=["inputPasswordStorySettings","Playground"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:_,default:h,inputPasswordStorySettings:u},Symbol.toStringTag,{value:"Module"}));export{j as I,u as i};
