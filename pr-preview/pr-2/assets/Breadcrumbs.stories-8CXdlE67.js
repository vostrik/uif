import{M as t,R as p}from"./iframe-D64doaOG.js";import{e as l,g as b,c as g}from"./propPresentation-Bd1LfInE.js";import{w as y}from"./withMeta-BASmJkxv.js";import{B as d}from"./Breadcrumbs-CwZUUJ7s.js";import{g as f}from"./helpers-CTig38oc.js";import{s as S}from"./resolveDesignControls-CFhBuB_d.js";const P={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},x="Breadcrumbs",C="«Хлебные крошки» являются дополнительной навигацией, которая помогает пользователям понять, где они находятся в структуре сайта, и перемещаться между уровнями",z="«Хлебные крошки» оформляются в виде цепочки ссылок в header страницы над заголовком или в верхней части контентной области страницы над всем конетентом",B="",T="",o={dod:P,component:x,description:C,usage:z,designLink:B,pixsoView:T},h=["medium","small"],k=(r,s={})=>l(S[r],s),w={size:"medium",routeCount:5},c={size:k("size",{options:[...h],description:"Размер типографики и отступов."}),routeCount:{control:{type:"number",min:1,max:10,step:1},description:"Количество пунктов в демо."}},u={argTypes:g(c),args:{...w,testId:"breadcrumbs-test-id",klId:"breadcrumbs-kl-id"},parameters:{badges:[t.stable,t.reviewedByDesign],docs:{page:y(o)},design:o.pixsoView}},_={title:"Hexa UI Components/Breadcrumbs",component:d,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["breadcrumbsStorySettings"],...u},e={name:"Playground",parameters:{controls:{include:b(c),sort:"none"}},render:({routeCount:r,size:s,...m})=>p.createElement(d,{...m,size:s,routes:f(r)})};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(breadcrumbsPropPresentation),
      sort: 'none'
    }
  },
  render: ({
    routeCount,
    size,
    ...rest
  }) => <BreadcrumbsComponent {...rest} size={size} routes={generateRoutes(routeCount)} />
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const I=["breadcrumbsStorySettings","Playground"],A=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:I,breadcrumbsStorySettings:u,default:_},Symbol.toStringTag,{value:"Module"}));export{A as B,u as b};
