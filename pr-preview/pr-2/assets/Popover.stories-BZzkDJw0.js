import{M as t,R as e}from"./iframe-D64doaOG.js";import{g as m,c as g}from"./propPresentation-Bd1LfInE.js";import{B as u}from"./Button-TmF0MD_-.js";import{P as s}from"./FormLabel-_EAno6xN.js";const v="",P={pixsoView:v},y=["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"],b=["click","hover","focus"],f={trigger:"click",placement:"bottom",shouldLimitSize:!0,defaultVisible:!1,content:"Popover content",children:"Open popover"},i={placement:{description:"Позиция popover относительно триггера. По умолчанию — `bottom`.",control:"select",options:[...y]},trigger:{description:"Способ открытия popover: `click`, `hover` или `focus`. По умолчанию — `click`.",control:"select",options:[...b]},shouldLimitSize:{description:"Ограничивает максимальную ширину и высоту popover. При переполнении появляется прокрутка.",control:"boolean"},width:{description:"Ширина popover в пикселях.",control:{type:"number",min:0,step:1}},height:{description:"Высота popover в пикселях.",control:{type:"number",min:0,step:1}},defaultVisible:{description:"Открыт ли popover по умолчанию при монтировании.",control:"boolean"},content:{description:"Содержимое popover: текст или произвольная разметка с компонентами Hexa UI.",control:"text"}},c={argTypes:g(i),args:f,parameters:{badges:[t.stable,t.reviewedByDesign],design:P.pixsoView}},h={title:"Hexa UI Components/Popover",component:s,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["popoverStorySettings"],...c},o={name:"Playground",render:({content:a,children:l,...d})=>e.createElement("div",{style:{padding:"120px"}},e.createElement(s,{...d,content:a},e.createElement(u,null,l))),parameters:{controls:{include:m(i),sort:"none"}}};var r,n,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    content,
    children,
    ...rest
  }: PopoverPlaygroundProps) => <div style={{
    padding: '120px'
  }}>
      <PopoverComponent {...rest} content={content}>
        <Button>{children}</Button>
      </PopoverComponent>
    </div>,
  parameters: {
    controls: {
      include: getControlsInclude(popoverPropPresentation),
      sort: 'none'
    }
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const S=["popoverStorySettings","Playground"],C=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:S,default:h,popoverStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{C as P,c as p};
