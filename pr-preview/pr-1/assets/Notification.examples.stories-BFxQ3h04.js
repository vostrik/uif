import{w as S}from"./withDesignControls-DTwO-e1q.js";import{B as o}from"./Button-NQ8G2asL.js";import{R as n,S as N}from"./iframe-C5ywg3yF.js";import{N as m}from"./Notification-C-nLRHYr.js";import{n as p,o as t}from"./NotificationService-U1v0sUfO.js";import{n as A}from"./Notification.stories-BChifuCe.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./useMergedState-hWmk9BX_.js";import"./focus-D6fBl5Nk.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DKeSAYRW.js";import"./Toggle-h5WMIT3p.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";import"./type-CYimqQsV.js";import"./wave-6D6RLP9Y.js";import"./FormLabel-Cl6NqZ0b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-D2J0DCjt.js";import"./TextReducer-DYBA9RxT.js";import"./index-B9cL_k2v.js";import"./colors-CEAxVyTa.js";import"./Group-M-SjioCQ.js";import"./Divider-DL-FS3qr.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./v4-BoP187Zn.js";import"./button-C0MuISIr.js";import"./generateId-BXJELych.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";const en={title:"Hexa UI Components/Notification/Stories",component:m,tags:["!autodocs"],...S({meta:A})},c={render:({description:e,duration:r})=>{n.useEffect(()=>p(),[]);const i={description:e,duration:r};return n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({...i,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error(i)},"error"),n.createElement(o,{onClick:()=>t.warning(i)},"warning"),n.createElement(o,{onClick:()=>t.info(i)},"info"),n.createElement(o,{onClick:()=>t.ai(i)},"ai")))}},a={render:({description:e,duration:r,noIcon:i})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:i}),n.createElement(o,{onClick:()=>t.success({description:e,duration:r,actionButton:{title:"Go To",onClick:()=>alert("Действие")}})},"Open notification with action button"))),args:{duration:0}},s={render:({description:e,duration:r})=>(n.useEffect(()=>p(),[]),n.createElement(n.Fragment,null,n.createElement(m,{noIcon:!0}),n.createElement(N,{gap:8},n.createElement(o,{onClick:()=>t({description:e,duration:r,mode:"success"})},"success"),n.createElement(o,{onClick:()=>t.error({description:e,duration:r})},"error"),n.createElement(o,{onClick:()=>t.info({description:e,duration:r})},"info")))),argTypes:{noIcon:{control:!1}}};var u,l,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
