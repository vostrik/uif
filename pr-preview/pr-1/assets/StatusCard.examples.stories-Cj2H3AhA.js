import{r as C}from"./StoryComponents-oT406532.js";import{T as i}from"./Tag-F-RHo_zh.js";import{R as e,L as T}from"./iframe-81MZLAwA.js";import{S as h}from"./StatusCard-DXag2exX.js";import{s as y,a as v}from"./types-oUBlL0vH.js";import"./FormLabel-DA9R7IzT.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-BRbYwtji.js";import"./TextReducer-DAQahvzG.js";import"./index-BxcIeMF-.js";import"./omit-DXgDXInf.js";import"./type-CGSjHdi-.js";import"./colors-Czl4z4ke.js";import"./wave-YGWrPKVL.js";import"./Group-CFZXzKY0.js";import"./Button-CYzQuw3S.js";import"./Dropdown-CPc30GEo.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YFPB3eZ_.js";import"./useMergedState-i9W27Uf3.js";import"./focus-B5e4OkQI.js";import"./ArrowRight-tad8nQ3_.js";import"./Toggle-8vjpudf9.js";import"./AdditionalContent-BO_qq22o.js";import"./HelpMessage-DWvNdbZo.js";import"./Loader-zSayompk.js";import"./index-BUvvmL18.js";import"./v4-BoP187Zn.js";import"./button-DeWVoXnk.js";import"./StatusOkSolid-ounbDYo0.js";import"./StatusWarningSolid-86GSA-Nr.js";const x=()=>e.createElement(e.Fragment,null,"Описание статуса с ",e.createElement(T,{href:"#"},"ссылкой")," и дополнительной информацией."),b=()=>e.createElement("span",null,e.createElement(i,{mode:"purple",interactive:!0,outlined:!0},"Пользовательский контент"),e.createElement(i,{mode:"violet",interactive:!0,outlined:!0},"Дополнительно")),M=[{text:"Действие 1",onClick:()=>alert("Действие 1")},{text:"Действие 2",onClick:()=>alert("Действие 2")}],ne={title:"Hexa UI Components/StatusCard/Stories",component:h,tags:["!autodocs"],args:{title:"Заголовок",image:!0,description:!0,children:!0,mode:"success",size:"medium",iconVariant:"default",actions:!1}},s=({actions:t,children:r,description:z,...E})=>e.createElement(h,{...E,actions:t?M:void 0,description:z?e.createElement(x,null):void 0},r?e.createElement(b,null):null),a={render:t=>C(y.map(r=>({label:r,content:s({...t,mode:r})}))),argTypes:{mode:{control:!1}},args:{children:!1}},n={render:t=>C(v.map(r=>({label:r,content:s({...t,size:r})}))),argTypes:{size:{control:!1}},args:{children:!1}},o={render:s,argTypes:{actions:{control:!1}},args:{actions:!0}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
