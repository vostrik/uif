import{M as e,R as p}from"./iframe-BxJnf3ZL.js";import{g as u,c as m}from"./propPresentation-lj9O_TmM.js";import{S as s}from"./StatusCard-C32UXQjF.js";import{i as g,a as C,s as S}from"./types-oUBlL0vH.js";const f="",b={pixsoView:f},y={mode:"success",size:"medium",iconVariant:"default",title:"Заголовок",image:!0,description:!0,actions:!1,children:!1},a={mode:{control:"select",description:"Семантический цветовой режим карточки",options:[...S]},size:{control:"select",description:"Размер изображения и иконки статуса",options:[...C]},iconVariant:{control:"select",description:"Вариант иллюстрации статуса",options:[...g]},title:{control:"text",description:"Заголовок карточки"},image:{control:"boolean",description:"Отображение иллюстрации статуса"},description:{control:"boolean",description:"Отображение текстового описания"},actions:{control:"boolean",description:"Отображение действия в карточке"},children:{control:"boolean",description:"Отображение дополнительного содержимого"}},P={title:"Hexa UI Components/StatusCard",component:s,tags:["!autodocs"],includeStories:["Playground"],argTypes:m(a),args:y,parameters:{badges:[e.stable,e.reviewedByDesign],design:b.pixsoView}},t={name:"Playground",render:({actions:i,children:c,description:d,...l})=>p.createElement(s,{...l,actions:i?[{text:"Action",onClick:()=>alert("Action")}]:void 0,description:d?"Описание статуса":void 0},c?"Дополнительное содержимое":null),parameters:{controls:{include:u(a),sort:"none"}}};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    actions,
    children,
    description,
    ...args
  }) => <StatusCardComponent {...args} actions={actions ? [{
    text: 'Action',
    onClick: () => alert('Action')
  }] : undefined} description={description ? 'Описание статуса' : undefined}>
      {children ? 'Дополнительное содержимое' : null}
    </StatusCardComponent>,
  parameters: {
    controls: {
      include: getControlsInclude(statusCardPropPresentation),
      sort: 'none'
    }
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:x,default:P},Symbol.toStringTag,{value:"Module"}));export{v as S};
