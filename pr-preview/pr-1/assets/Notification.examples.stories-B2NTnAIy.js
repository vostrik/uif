import{w as S}from"./withDesignControls-DTwO-e1q.js";import{B as o}from"./Button-C9wH3E3m.js";import{R as n,S as N}from"./iframe-DZ6CNdmR.js";import{N as m}from"./Notification-CDHFxvHx.js";import{n as p,o as t}from"./NotificationService-CyXQUiNr.js";import{n as A}from"./Notification.stories-CXYNEusD.js";import"./Dropdown-duWrCIkx.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DHB5dyvI.js";import"./useMergedState-Bv7O4HCz.js";import"./focus-QtQWvBuy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-Fn5l7xGu.js";import"./Toggle-DHSC5Vjo.js";import"./AdditionalContent-CPgxIA4P.js";import"./HelpMessage-BoCaja7X.js";import"./type-CxXYYU3T.js";import"./wave-DyggUTsD.js";import"./FormLabel-WpK8CiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jEOS0vhO.js";import"./TextReducer-BUFzZryR.js";import"./index-Aj0jm6uB.js";import"./colors-uxJ92uqJ.js";import"./Group-dqpsK0g-.js";import"./Divider-CeH8hLX2.js";import"./Loader-CUCsJRC1.js";import"./index-BdH7CSvn.js";import"./v4-BoP187Zn.js";import"./button-R3ozi3gu.js";import"./generateId-BXJELych.js";import"./propPresentation-DQRIYBrB.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";const en={title:"Hexa UI Components/Notification/Stories",component:m,tags:["!autodocs"],...S({meta:A})},c={render:({description:e,duration:r})=>{n.useEffect(()=>p(),[]);const i={description:e,duration:r};return n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({...i,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error(i)},"error"),n.createElement(o,{onClick:()=>t.warning(i)},"warning"),n.createElement(o,{onClick:()=>t.info(i)},"info"),n.createElement(o,{onClick:()=>t.ai(i)},"ai")))}},a={render:({description:e,duration:r,noIcon:i})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:i}),n.createElement(o,{onClick:()=>t.success({description:e,duration:r,actionButton:{title:"Go To",onClick:()=>alert("Действие")}})},"Open notification with action button"))),args:{duration:0}},s={render:({description:e,duration:r})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:!0}),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({description:e,duration:r,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error({description:e,duration:r})},"error"),n.createElement(o,{onClick:()=>t.info({description:e,duration:r})},"info")))),argTypes:{noIcon:{control:!1}}};var u,l,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    description,
    duration
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    const commonArgs: NotificationApiParams = {
      description,
      duration
    };
    return <>
        <Notification />
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
  }
}`,...(f=(l=c.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var d,g,B;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    description,
    duration,
    noIcon
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    return <>
        <Notification noIcon={noIcon} />
        <Button onClick={() => openNotification.success({
        description,
        duration,
        actionButton: {
          title: 'Go To',
          onClick: () => alert('Действие')
        }
      })}>
          Open notification with action button
        </Button>
      </>;
  },
  args: {
    duration: 0
  }
}`,...(B=(g=a.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var E,C,k;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    description,
    duration
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    return <>
        <Notification noIcon />
        <Space gap={8}>
          <Button onClick={() => openNotification({
          description,
          duration,
          mode: 'success'
        })}>success</Button>
          <Button onClick={() => openNotification.error({
          description,
          duration
        })}>error</Button>
          <Button onClick={() => openNotification.info({
          description,
          duration
        })}>info</Button>
        </Space>
      </>;
  },
  argTypes: {
    noIcon: {
      control: false
    }
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const rn=["Mode","WithActionButton","NoIcon"];export{c as Mode,s as NoIcon,a as WithActionButton,rn as __namedExportsOrder,en as default};
