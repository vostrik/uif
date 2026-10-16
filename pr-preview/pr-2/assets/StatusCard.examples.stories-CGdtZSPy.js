import{r as C}from"./StoryComponents-CTGylUMP.js";import{T as i}from"./Tag-B4FkS-ry.js";import{R as e,L as T}from"./iframe-BxJnf3ZL.js";import{S as h}from"./StatusCard-C32UXQjF.js";import{s as y,a as v}from"./types-oUBlL0vH.js";import"./FormLabel-C8HaQNzE.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Ch4BCEC8.js";import"./TextReducer-jgmtD67Q.js";import"./index-Dlpfquxs.js";import"./omit-DXgDXInf.js";import"./type-l5tskpde.js";import"./colors-yztLXgoP.js";import"./wave-CE4pLSVu.js";import"./Group-Dnx8lKl-.js";import"./Button-I6hF4eMe.js";import"./Dropdown-DGWR5wSe.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-lpBnInVO.js";import"./useMergedState-BgQ2XY1A.js";import"./focus-CSmuw2j_.js";import"./ArrowRight-BHNzx7qw.js";import"./Toggle-CGR2gxI3.js";import"./AdditionalContent-0QTduPgH.js";import"./HelpMessage-DFGrmg6s.js";import"./Loader-CkJh8F18.js";import"./index-DLAJHFC-.js";import"./v4-BoP187Zn.js";import"./button-ZplnygZi.js";import"./StatusOkSolid-0pv6zwQl.js";import"./StatusWarningSolid-DPnOg20O.js";const x=()=>e.createElement(e.Fragment,null,"Описание статуса с ",e.createElement(T,{href:"#"},"ссылкой")," и дополнительной информацией."),b=()=>e.createElement("span",null,e.createElement(i,{mode:"purple",interactive:!0,outlined:!0},"Пользовательский контент"),e.createElement(i,{mode:"violet",interactive:!0,outlined:!0},"Дополнительно")),M=[{text:"Действие 1",onClick:()=>alert("Действие 1")},{text:"Действие 2",onClick:()=>alert("Действие 2")}],ne={title:"Hexa UI Components/StatusCard/Stories",component:h,tags:["!autodocs"],args:{title:"Заголовок",image:!0,description:!0,children:!0,mode:"success",size:"medium",iconVariant:"default",actions:!1}},s=({actions:t,children:r,description:z,...E})=>e.createElement(h,{...E,actions:t?M:void 0,description:z?e.createElement(x,null):void 0},r?e.createElement(b,null):null),a={render:t=>C(y.map(r=>({label:r,content:s({...t,mode:r})}))),argTypes:{mode:{control:!1}},args:{children:!1}},n={render:t=>C(v.map(r=>({label:r,content:s({...t,size:r})}))),argTypes:{size:{control:!1}},args:{children:!1}},o={render:s,argTypes:{actions:{control:!1}},args:{actions:!0}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => renderVariants(statusCardModes.map(mode => ({
    label: mode,
    content: renderStatusCard({
      ...args,
      mode
    })
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  },
  args: {
    children: false
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => renderVariants(statusCardSizes.map(size => ({
    label: size,
    content: renderStatusCard({
      ...args,
      size
    })
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    children: false
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: renderStatusCard,
  argTypes: {
    actions: {
      control: false
    }
  },
  args: {
    actions: true
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const oe=["Mode","Size","WithActions"];export{a as Mode,n as Size,o as WithActions,oe as __namedExportsOrder,ne as default};
