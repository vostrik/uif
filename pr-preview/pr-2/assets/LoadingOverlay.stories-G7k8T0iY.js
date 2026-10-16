import{M as t,R as o}from"./iframe-DXVY_al-.js";import{e as c,g as p,c as m}from"./propPresentation-DzyQPo2A.js";import{L as i}from"./LoadingOverlay-B_akNPvJ.js";import{s as y}from"./resolveDesignControls-CFhBuB_d.js";const u="",v={pixsoView:u},O=["medium","large"],P=(e,g={})=>c(y[e],g),S={size:"medium",description:"help text"},l={size:P("size",{options:[...O],description:"Размер индикатора загрузки"}),description:{control:"text",description:"Текстовая подсказка под индикатором"}},d={argTypes:m(l),args:{...S,testId:"loading-overlay-test-id"},parameters:{badges:[t.stable,t.reviewedByDesign],design:v.pixsoView}},f={title:"Hexa UI Components/LoadingOverlay",component:i,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["loadingOverlayStorySettings"],...d};function x({children:e}){return o.createElement("div",{style:{border:"1px solid grey",height:300,padding:20,position:"relative",width:500}},e)}const r={name:"Playground",parameters:{controls:{include:p(l),sort:"none"}},render:e=>o.createElement(x,null,o.createElement(i,{...e}))};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(loadingOverlayPropPresentation),
      sort: 'none'
    }
  },
  render: (args: LoadingOverlayProps) => <OverlayContainer>
      <LoadingOverlayComponent {...args} />
    </OverlayContainer>
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["loadingOverlayStorySettings","Playground"],z=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:b,default:f,loadingOverlayStorySettings:d},Symbol.toStringTag,{value:"Module"}));export{z as L,d as l};
