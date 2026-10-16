import{w as S}from"./withDesignControls-DTwO-e1q.js";import{B as o}from"./Button-Cmjt4Mlb.js";import{R as n,S as N}from"./iframe-BC0sauTx.js";import{N as m}from"./Notification-BHK0YQX9.js";import{n as p,o as t}from"./NotificationService-CgnV07YF.js";import{n as A}from"./Notification.stories-DcCfd4M5.js";import"./Dropdown-bUtM1Y1j.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CAsWAeK7.js";import"./useMergedState-GIAdtRIo.js";import"./focus-Dnl7tSMp.js";import"./omit-DXgDXInf.js";import"./ArrowRight-UOmwPHbX.js";import"./Toggle-BnlzIyHw.js";import"./AdditionalContent-tnuN7Mwd.js";import"./HelpMessage-DztK078o.js";import"./type-ceO20y0I.js";import"./wave-CeOhQ2OJ.js";import"./FormLabel-DvUxTPYn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DYf45Xcw.js";import"./TextReducer-B-H2cHGE.js";import"./index-Bazlc50n.js";import"./colors-BlEKYhgo.js";import"./Group-CuTH3Q6e.js";import"./Divider-BINKUE5V.js";import"./Loader-ZrnY6mmh.js";import"./index-DfGxRC7Y.js";import"./v4-BoP187Zn.js";import"./button-CQm7lrDl.js";import"./generateId-BXJELych.js";import"./propPresentation-DqHLXn9o.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";const en={title:"Hexa UI Components/Notification/Stories",component:m,tags:["!autodocs"],...S({meta:A})},c={render:({description:e,duration:r})=>{n.useEffect(()=>p(),[]);const i={description:e,duration:r};return n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({...i,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error(i)},"error"),n.createElement(o,{onClick:()=>t.warning(i)},"warning"),n.createElement(o,{onClick:()=>t.info(i)},"info"),n.createElement(o,{onClick:()=>t.ai(i)},"ai")))}},a={render:({description:e,duration:r,noIcon:i})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:i}),n.createElement(o,{onClick:()=>t.success({description:e,duration:r,actionButton:{title:"Go To",onClick:()=>alert("Действие")}})},"Open notification with action button"))),args:{duration:0}},s={render:({description:e,duration:r})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:!0}),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({description:e,duration:r,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error({description:e,duration:r})},"error"),n.createElement(o,{onClick:()=>t.info({description:e,duration:r})},"info")))),argTypes:{noIcon:{control:!1}}};var u,l,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
