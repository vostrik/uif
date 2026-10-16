import{w as S}from"./withDesignControls-DTwO-e1q.js";import{B as o}from"./Button-CthyJnKL.js";import{R as n,S as N}from"./iframe-CMq2KAbH.js";import{N as m}from"./Notification-cuInLtbe.js";import{n as p,o as t}from"./NotificationService-DXUQKYqS.js";import{n as A}from"./Notification.stories-M0oPiM4E.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./type-D3DD6-1D.js";import"./wave-3WO31ZRq.js";import"./FormLabel-lYRdE9pS.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./colors-CLR_yiO4.js";import"./Group-BToCNK5g.js";import"./Divider-C_lHVbvw.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./button-D46-rz2F.js";import"./generateId-BXJELych.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";const en={title:"Hexa UI Components/Notification/Stories",component:m,tags:["!autodocs"],...S({meta:A})},c={render:({description:e,duration:r})=>{n.useEffect(()=>p(),[]);const i={description:e,duration:r};return n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({...i,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error(i)},"error"),n.createElement(o,{onClick:()=>t.warning(i)},"warning"),n.createElement(o,{onClick:()=>t.info(i)},"info"),n.createElement(o,{onClick:()=>t.ai(i)},"ai")))}},a={render:({description:e,duration:r,noIcon:i})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:i}),n.createElement(o,{onClick:()=>t.success({description:e,duration:r,actionButton:{title:"Go To",onClick:()=>alert("Действие")}})},"Open notification with action button"))),args:{duration:0}},s={render:({description:e,duration:r})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:!0}),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({description:e,duration:r,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error({description:e,duration:r})},"error"),n.createElement(o,{onClick:()=>t.info({description:e,duration:r})},"info")))),argTypes:{noIcon:{control:!1}}};var u,l,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
