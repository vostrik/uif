import{M as o}from"./iframe-DIzBSOsa.js";import{e as c,g as l,c as p}from"./propPresentation-B5tDD9vt.js";import{D as g}from"./Divider-B7r6BzqD.js";import{s as m}from"./resolveDesignControls-CFhBuB_d.js";const u="",v={pixsoView:u},S=["bold","light","onLightStatic","inverted"],y=["horizontal","vertical"],P=(d,a={})=>c(m[d],a),f={mode:"bold",direction:"horizontal"},n={mode:P("mode",{options:[...S],description:"Цветовой режим линии"}),direction:{description:"Ориентация разделителя",control:"select",options:[...y]}},s={argTypes:p(n),args:{...f,testId:"divider-test-id",klId:"divider-kl-id"},parameters:{badges:[o.stable,o.reviewedByDesign],design:v.pixsoView}},b={title:"Hexa UI Components/Divider",component:g,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["dividerStorySettings"],...s},e={name:"Playground",parameters:{controls:{include:l(n),sort:"none"}}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(dividerPropPresentation),
      sort: 'none'
    }
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const D=["dividerStorySettings","Playground"],C=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:D,default:b,dividerStorySettings:s},Symbol.toStringTag,{value:"Module"}));export{C as D,s as d};
