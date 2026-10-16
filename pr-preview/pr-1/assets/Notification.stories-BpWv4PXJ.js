import{M as r,R as n,S as B}from"./iframe-CWTW431d.js";import{g as y,c as S}from"./propPresentation-DC_pTLa9.js";import{B as t}from"./Button-Dtt-8qQC.js";import{N as l}from"./Notification-C-sMSO5z.js";import{n as C,o as e}from"./NotificationService-DAUBUhuE.js";const k="",A={pixsoView:k},N={noIcon:!1,description:"Body text",duration:5,withActionButton:!1},u={noIcon:{control:"boolean",description:"Скрыть иконку статуса в контейнере уведомлений"},description:{control:"text",description:"Текст уведомления"},duration:{control:"number",description:"Длительность показа в секундах; 0 — не закрывать автоматически"},withActionButton:{control:"boolean",description:"Показать кнопку действия в уведомлении"}},m={argTypes:S(u),args:{...N,testId:"notification-test-id",klId:"notification-kl-id"},parameters:{badges:[r.stable,r.reviewedByDesign],design:A.pixsoView}},w={title:"Hexa UI Components/Notification",component:l,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["notificationStorySettings"],...m},i={name:"Playground",render:({noIcon:d,description:p,duration:f,withActionButton:g})=>{n.useEffect(()=>C(),[]);const o={description:p,duration:f,actionButton:g?{title:"Go To",onClick:()=>alert("Действие")}:void 0};return n.createElement(n.Fragment,null,n.createElement(l,{noIcon:d}),n.createElement(B,{gap:8},n.createElement(t,{onClick:()=>e({...o,mode:"success"})},"success"),n.createElement(t,{onClick:()=>e.error(o)},"error"),n.createElement(t,{onClick:()=>e.warning(o)},"warning"),n.createElement(t,{onClick:()=>e.info(o)},"info"),n.createElement(t,{onClick:()=>e.ai(o)},"ai")))},parameters:{controls:{include:y(u),sort:"none"}}};var c,a,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    noIcon,
    description,
    duration,
    withActionButton
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    const commonArgs: NotificationApiParams = {
      description,
      duration,
      actionButton: withActionButton ? {
        title: 'Go To',
        onClick: () => alert('Действие')
      } : undefined
    };
    return <>
        <Notification noIcon={noIcon} />
        <Space gap={8}>
          <Button onClick={() => openNotification({
          ...commonArgs,
          mode: 'success'
        })}>success</Button>
          <Button onClick={() => openNotification.error(commonArgs)}>error</Button>
          <Button onClick={() => openNotification.warning(commonArgs)}>warning</Button>
          <Button onClick={() => openNotification.info(commonArgs)}>info</Button>
          <Button onClick={() => openNotification.ai(commonArgs)}>ai</Button>
        </Space>
      </>;
  },
  parameters: {
    controls: {
      include: getControlsInclude(notificationPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(a=i.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["notificationStorySettings","Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,__namedExportsOrder:E,default:w,notificationStorySettings:m},Symbol.toStringTag,{value:"Module"}));export{T as N,m as n};
