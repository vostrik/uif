import{R as e,a as N,P as s,Y as U,M as f}from"./iframe-D5i9Ygdo.js";import{w as Y}from"./withDesignControls-DTwO-e1q.js";import{w as $}from"./withMeta-DvsF1LmS.js";import{r as g}from"./StoryComponents-CEeqpkjr.js";import{B as j}from"./Button-CXL83VB_.js";import{D as q}from"./Dropdown-Ch8JK4fs.js";import{T as G}from"./Tag-C8lIf1tQ.js";import{P as n}from"./Placeholder-3iz6LoNf.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-D9kX8XlS.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./TextReducer-Dagp5bHw.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Divider-BeaQgGYc.js";import"./Badge-DvZDnB4g.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./Indicator-gZ8T3Y3p.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./FormLabel-c2Q2BrM3.js";import"./button-D-Oiy998.js";import"./omit-DXgDXInf.js";import"./wave-CAHKjKs-.js";import"./Loader-Dy3Ztxbv.js";import"./index-CqaKVEiO.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CaW8sGOK.js";import"./useMergedState-BRnWrkwv.js";import"./focus-BNJDX2dF.js";import"./ArrowRight-BAmBzp_S.js";import"./Toggle-DLx7OJGm.js";import"./AdditionalContent-DV7YHkAD.js";import"./HelpMessage-BikZb-K7.js";import"./v4-BoP187Zn.js";import"./index-CjdVh8OV.js";import"./Group-m0-YpTU1.js";const _=["base","filled"],H=["small","medium"],J=["error403","error404","error503","noData","success","failed","warning","notChecked","noLicense","notFound","configurationExport","preparing","noAccess","deleting","unavailable","onMaintenance"],K={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},Q="Placeholder",W="",X="Используется для временного отображения пустого состояния или заглушки.",Z="",ee="",h={dod:K,component:Q,description:W,usage:X,designLink:Z,pixsoView:ee},te=["-",...J],Xe={component:n,title:"Hexa UI Components/Placeholder",...Y({meta:{argTypes:{actionButtons:{control:"boolean"},actionLinks:{control:"boolean"},mode:{control:"radio",options:_},size:{control:"radio",options:H},image:{control:"select",options:te},textAlign:{control:"radio",options:["left","center","right"]}},args:{image:"noData",title:"Placeholder title",description:"Description",textAlign:"center",mode:"base",size:"medium",testId:"placeholder-test-id",klId:"placeholder-kl-id"},parameters:{badges:[f.stable,f.reviewedByDesign],docs:{page:$(h)},design:h.pixsoView}}})},o=({actionButtons:t,actionLinks:r,image:u,...O})=>({image:u==="-"?void 0:u,actionButtons:t?[{text:"Button",mode:"primary"},{text:"Button"}]:void 0,actionLinks:r?[{text:"Link"}]:void 0,...O}),a={render:t=>e.createElement(n,{...o(t)})},i={render:t=>g(_.map(r=>({label:r,content:e.createElement(n,{...o(t),mode:r})}))),argTypes:{mode:{control:!1}}},l={render:t=>g(H.map(r=>({label:r,content:e.createElement(n,{...o(t),size:r})}))),argTypes:{size:{control:!1}}},c={render:t=>e.createElement(e.Fragment,null,e.createElement(N,{mode:"info",closable:!1},e.createElement(s,null,"Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited."),e.createElement(s,null,"Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.")),e.createElement(n,{...o(t)}))},ne=[{children:"Variant 1"},{children:"Variant 2"},{children:"Variant 3"}],oe=e.createElement(j,{iconAfter:e.createElement(U,null)},"Button"),re=e.createElement(q,{overlay:ne,trigger:["click"]},oe),p={render:t=>g([{label:"actionButtons",content:e.createElement(n,{...o({...t,actionButtons:!0})})},{label:"actionLinks",content:e.createElement(n,{...o({...t,actionLinks:!0})})},{label:"dropdown",content:e.createElement(n,{...o({...t,actionButtons:!0}),actionButtons:re})}],!0,"medium"),argTypes:{size:{control:!1}}},m={args:{title:"Description Formatting",description:`**bold**
  _italic_
  ~~strike~~
  \`inline code\`
  [link](https://example.com/)`},render:t=>e.createElement(e.Fragment,null,e.createElement(N,{mode:"info",title:"DescriptionFormatting",closable:!1},e.createElement(s,null,"Для отображение отступов для description используйте \\n"),e.createElement(s,null,e.createElement("code",null,"const description = `Text1\\nText2`")," (1 отступ) ",e.createElement("br",null),e.createElement("code",null,"const description = `Text1\\n\\nText2`")," (2 отступа) ",e.createElement("br",null)),e.createElement(s,null,"Для выделения текста и добавления ссылок - Markdown")),e.createElement("div",{style:{width:420,minHeight:280}},e.createElement(n,{...o(t),textAlign:"left"}))),argTypes:{description:{control:"text"},textAlign:{control:!1},title:{control:!1}}},d={args:{title:"Description React Node",description:e.createElement("div",null,e.createElement(G,null,"Tag"),"Несколько строк ",e.createElement("br",null),"ReactNode")},render:t=>e.createElement(n,{...o(t),textAlign:"left"}),argTypes:{description:{control:!1},textAlign:{control:!1},title:{control:!1}}};var b,x,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <PlaceholderComponent {...processArgs(args)} />
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var E,P,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => renderVariants(placeholderModes.map(mode => ({
    label: mode,
    content: <PlaceholderComponent {...processArgs(args)} mode={mode} />
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(A=(P=i.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var k,y,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => renderVariants(placeholderSizes.map(size => ({
    label: size,
    content: <PlaceholderComponent {...processArgs(args)} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var D,w,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <>
      <SectionMessage mode="info" closable={false}>
        <P>Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited.</P>
        <P>Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.</P>
      </SectionMessage>
      <PlaceholderComponent {...processArgs(args)} />
    </>
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var M,v,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'actionButtons',
    content: <PlaceholderComponent {...processArgs({
      ...args,
      actionButtons: true
    })} />
  }, {
    label: 'actionLinks',
    content: <PlaceholderComponent {...processArgs({
      ...args,
      actionLinks: true
    })} />
  }, {
    label: 'dropdown',
    content: <PlaceholderComponent {...processArgs({
      ...args,
      actionButtons: true
    })} actionButtons={dropdown} />
  }], true, 'medium'),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var C,V,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Description Formatting',
    description: '**bold**\\n  _italic_\\n  ~~strike~~\\n  \`inline code\`\\n  [link](https://example.com/)'
  },
  render: args => <>
      <SectionMessage mode="info" title="DescriptionFormatting" closable={false}>
        <P>Для отображение отступов для description используйте \\n</P>
        <P>
          <code>const description = \`Text1\\nText2\`</code> (1 отступ) <br />
          <code>const description = \`Text1\\n\\nText2\`</code> (2 отступа) <br />
        </P>
        <P>Для выделения текста и добавления ссылок - Markdown</P>
      </SectionMessage>
      <div style={{
      width: 420,
      minHeight: 280
    }}>
        <PlaceholderComponent {...processArgs(args)} textAlign="left" />
      </div>
    </>,
  argTypes: {
    description: {
      control: 'text'
    },
    textAlign: {
      control: false
    },
    title: {
      control: false
    }
  }
}`,...(L=(V=m.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var F,R,I;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Description React Node',
    description: <div>
        <Tag>Tag</Tag>
        Несколько строк <br />ReactNode
      </div>
  },
  render: args => <PlaceholderComponent {...processArgs(args)} textAlign="left" />,
  argTypes: {
    description: {
      control: false
    },
    textAlign: {
      control: false
    },
    title: {
      control: false
    }
  }
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const Ze=["Placeholder","Mode","Size","Image","Actions","DescriptionFormatting","DescriptionReactNode"];export{p as Actions,m as DescriptionFormatting,d as DescriptionReactNode,c as Image,i as Mode,a as Placeholder,l as Size,Ze as __namedExportsOrder,Xe as default};
