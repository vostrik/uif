import{w as S}from"./withDesignControls-DTwO-e1q.js";import{B as o}from"./Button-BEXsH9SI.js";import{R as n,S as N}from"./iframe-Df7vKfJt.js";import{N as m}from"./Notification-fhncBx0a.js";import{n as p,o as t}from"./NotificationService-HKPCWyCL.js";import{n as A}from"./Notification.stories-D7vCkWJj.js";import"./Dropdown-CX0MMqyY.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BBH5KuLo.js";import"./useMergedState-BzyNOLYY.js";import"./focus-BahHV41T.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BobUK_ZW.js";import"./Toggle-BMGIIV8U.js";import"./AdditionalContent-DhWVtj4k.js";import"./HelpMessage-SorIYbjM.js";import"./type-BPSO7Hcc.js";import"./wave-DLXz7O8a.js";import"./FormLabel-BJ1Ltfk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DQaD3f7K.js";import"./TextReducer-PfRkTMxb.js";import"./index-Zs4RcXwe.js";import"./colors-BMjSx7ej.js";import"./Group-CS03xTqG.js";import"./Divider-DpGIrgZy.js";import"./Loader-qrngdWcb.js";import"./index-DTLMFHHc.js";import"./v4-BoP187Zn.js";import"./button-CnTfPpMx.js";import"./generateId-BXJELych.js";import"./propPresentation-CP3VpjtH.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";const en={title:"Hexa UI Components/Notification/Stories",component:m,tags:["!autodocs"],...S({meta:A})},c={render:({description:e,duration:r})=>{n.useEffect(()=>p(),[]);const i={description:e,duration:r};return n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({...i,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error(i)},"error"),n.createElement(o,{onClick:()=>t.warning(i)},"warning"),n.createElement(o,{onClick:()=>t.info(i)},"info"),n.createElement(o,{onClick:()=>t.ai(i)},"ai")))}},a={render:({description:e,duration:r,noIcon:i})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:i}),n.createElement(o,{onClick:()=>t.success({description:e,duration:r,actionButton:{title:"Go To",onClick:()=>alert("Действие")}})},"Open notification with action button"))),args:{duration:0}},s={render:({description:e,duration:r})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:!0}),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({description:e,duration:r,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error({description:e,duration:r})},"error"),n.createElement(o,{onClick:()=>t.info({description:e,duration:r})},"info")))),argTypes:{noIcon:{control:!1}}};var u,l,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
