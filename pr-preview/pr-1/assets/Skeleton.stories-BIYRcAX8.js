import{U as t,M as n,R as d}from"./iframe-D7vGURqZ.js";import{g as p,c as g}from"./propPresentation-BkV-ZQpa.js";import{S as l}from"./Skeleton-DmSCJkVa.js";const m="",u={pixsoView:m},S=[t.Small,t.Medium,t.Large,"flex"],y={flexWidth:!1,size:t.Medium},i={size:{control:"select",options:[...S],description:"Размер и габариты заглушки"},flexWidth:{control:"boolean",description:"Растягивать заглушку на доступную ширину"}},c={argTypes:g(i),args:y,parameters:{badges:[n.stable,n.reviewedByDesign],design:u.pixsoView}},f={title:"Hexa UI Components/Skeleton",component:l,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["skeletonStorySettings"],...c},e={name:"Playground",parameters:{controls:{include:p(i),sort:"none"}},render:o=>d.createElement(l,{...o,style:o.size==="flex"?{height:120,width:640}:{}})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(skeletonPropPresentation),
      sort: 'none'
    }
  },
  render: (rest: SkeletonProps) => <SkeletonComponent {...rest} style={rest.size === 'flex' ? {
    height: 120,
    width: 640
  } : {}} />
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const k=["skeletonStorySettings","Playground"],h=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:k,default:f,skeletonStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{h as S,S as a,c as s};
