import{T as O}from"./Palette-BqHKA6oY.js";import{c as $,R as e,Y as G,b as K,H as _,Z as U}from"./iframe-D7vGURqZ.js";import{L as u,g as z}from"./Menu-DiH7bxgV.js";import{T as V}from"./Tag-CV4RJqlE.js";import{o as Y}from"./Advertisement-C4-Cg-LO.js";import{t as Z,o as j}from"./Browser-JmnR77Vp.js";import{t as q}from"./Moon-DXwzdCJM.js";import{o as F}from"./Settings21-CX7Zmi3P.js";import{T as m,o as J,a as Q}from"./TopNavigation-B1Yo1fSj.js";import{t as X}from"./TopNavigation.stories-CH7USac9.js";import{P as ee}from"./Placeholder-DwXX8AU5.js";import{S as te}from"./Search-DM9ZGBX_.js";import{T as oe}from"./Toggle-Dt_5v6fg.js";import"./preload-helper-Dp1pzeXC.js";import"./Sider-UhUxEbRF.js";import"./omit-DXgDXInf.js";import"./type-DgSh0ByZ.js";import"./RightOutlined-Dh93Nw_f.js";import"./ArrowRightMini-B9gn8Z-4.js";import"./Submenu-CJWcS4va.js";import"./SubComponents-DsXyPHVa.js";import"./TextReducer-yX199pg5.js";import"./TextWithTruncation-DCb05iIM.js";import"./ArrowDownSolid-DlynUjOu.js";import"./ArrowRightSolid-BtdCqW53.js";import"./Divider-51vw4bax.js";import"./Badge-CJ1lMX1D.js";import"./colors-C-4HMPnB.js";import"./Indicator-CQNXQNlG.js";import"./StatusOkSolid-CphszqrJ.js";import"./useTranslation-B2jQLDHY.js";import"./index-kV8384LW.js";import"./wave-Bh4c9RUC.js";import"./Group-DqJlf-Gx.js";import"./Button-9U8xJrYJ.js";import"./Dropdown-CRW3TkbL.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BG56_tLR.js";import"./useMergedState-Dgv3UayC.js";import"./focus-Dl3Nwm4s.js";import"./ArrowRight-DjKzMcwQ.js";import"./Loader-CWfEwXXE.js";import"./index-sXrtJGg5.js";import"./v4-BoP187Zn.js";import"./button-iMtochpT.js";import"./UserAccount-Drmi8Ozw.js";import"./Bell-CeRKgnvS.js";import"./HorizontalNav-CFWV93tf.js";import"./propPresentation-BkV-ZQpa.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./StoryComponents-CY7aiZf6.js";import"./FormLabel-BgNNh3NE.js";import"./Markdown-CRrCZtGQ.js";import"./index-6XHrBjkF.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-CEZ0dDcq.js";import"./useGlobalStyles-B-HOYsT0.js";import"./InputMasked-_DcfeiFG.js";import"./input-gf-VCky2.js";import"./index-Chjiymov.js";import"./useThemedTextbox-81tGPjUq.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Cv6nyTG6.js";import"./InputNumber-Bt5vXNjj.js";import"./index-Bijc3Mwe.js";import"./SearchOutlined-zeEOv1ar.js";import"./InputPassword-5Hf3TJHk.js";import"./IconResolver-BKL_1foC.js";import"./Placeholder-b0XisIub.js";import"./IconSearch-BHlkKiBY.js";import"./AdditionalContent-hp1u3Epd.js";import"./HelpMessage-Dr7uz5o3.js";const re=[{children:e.createElement(te,null)},{children:"Workspace 1"},{children:"Workspace 2"},{children:"Workspace 3"},{type:"divider",children:""},{title:"Go to Portal",type:"action",children:"Go to Portal",componentsBefore:[e.createElement(j,null)]}],ne=[{children:"Account settings",componentsBefore:[e.createElement(F,{key:"account-settings-icon"})]},{type:"submenu",title:"English",componentsBefore:[e.createElement(J,{key:"language-icon"})],children:[{children:"English"},{children:"Русский"},{type:"divider",children:""},{children:"Deutsch"},{children:"Italiano"}]},{children:"Dark mode",componentsBefore:[e.createElement(q,{key:"mode-icon"})],componentsAfter:[e.createElement(oe,{key:"mode-toggle"})]},{type:"divider",children:""},{children:"Log out",componentsBefore:[e.createElement(Q,{key:"logout-icon"})]},{title:"© 2025 AO Kaspersky Lab",type:"group",children:[]}];var ae=(t=>(t.AVAILABLE="available",t.BUSY="busy",t))(ae||{});const se=z("available",U.Light),ie=z("unavailable",U.Light),l={available:e.createElement(se,null),busy:e.createElement(ie,null)};function ce(t){return[{title:"User work status",type:"group",children:[{key:"available",componentsBefore:[l.available],children:"Available",onClick:t},{key:"busy",componentsBefore:[l.busy],children:"Busy",onClick:t}]},{type:"divider",children:""}]}const At={title:"Hexa UI Components/TopNavigation/Stories",component:m,tags:["!autodocs"],...X},o={},r={args:{elementCentered:{type:"button",buttonConfig:{title:"New workspace",buttonProps:{mode:"secondary",iconBefore:e.createElement(Z,null),iconAfter:e.createElement(G,null)},dropdownMenuProps:{overlay:re}}}},name:"With Centered Element / Button"},n={args:{elementCentered:{type:"horizontalNavigation",horizontalNavigationConfig:{items:[{label:"Workspaces",selected:!0,key:"workspaces"},{label:"Licenses",key:"licenses"},{label:"Trainings",key:"trainings"}]}}},name:"With Centered Element / HorizontalNav"},a={args:{contentRight:e.createElement(V,{icon:e.createElement(Y,null),mode:"yellow",outlined:!0,style:{marginRight:0}},"Getting started: 3 of 12")}},s={render:t=>{const[p,D]=K.useState("available"),R=H=>D(H.key),x={...t.accountMenuProps,iconBefore:l[p],dropdownMenuProps:{overlay:[...ce(R),...ne],selectedItemsKeys:[p]}};return e.createElement(m,{...t,accountMenuProps:x})}},le=_(m)`
  position: sticky;
  top: 0;
  z-index: 1;
`,i={render:t=>e.createElement(u,null,e.createElement(le,{...t}),e.createElement(u.Content,{style:{overflow:"scroll",height:"150vh"}},e.createElement(ee,{description:"Description",image:"noData",mode:"filled",size:"medium",textAlign:"center",title:"Placeholder"})))},c={args:{source:$.top_navigation},render:t=>e.createElement(O,{...t})};var d,g,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    elementCentered: {
      type: 'button',
      buttonConfig: {
        title: 'New workspace',
        buttonProps: {
          mode: 'secondary',
          iconBefore: <Browser />,
          iconAfter: <ArrowDown1 />
        },
        dropdownMenuProps: {
          overlay: centerElementOverlay
        }
      }
    }
  },
  name: 'With Centered Element / Button'
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,k,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    elementCentered: {
      type: 'horizontalNavigation',
      horizontalNavigationConfig: {
        items: [{
          label: 'Workspaces',
          selected: true,
          key: 'workspaces'
        }, {
          label: 'Licenses',
          key: 'licenses'
        }, {
          label: 'Trainings',
          key: 'trainings'
        }]
      }
    }
  },
  name: 'With Centered Element / HorizontalNav'
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,b,P;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    contentRight: <Tag icon={<Advertisement />} mode="yellow" outlined style={{
      marginRight: 0
    }}>
        Getting started: 3 of 12
      </Tag>
  }
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var B,T,W;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: TopNavigationProps) => {
    const [selectedStatus, setSelectedStatus] = useState<UserWorkStatuses>(UserWorkStatuses.AVAILABLE);
    const onMenuItemClick = (info: any) => setSelectedStatus(info.key as UserWorkStatuses);
    const accountMenuProps = {
      ...args.accountMenuProps,
      iconBefore: userStatusIcons[selectedStatus],
      dropdownMenuProps: {
        overlay: [...getUserWorkStatusMenuItems(onMenuItemClick), ...defaultAccountMenuOverlay] as DropdownOverlayProp,
        selectedItemsKeys: [selectedStatus]
      }
    };
    return <TopNavigationComponent {...args} accountMenuProps={accountMenuProps} />;
  }
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var w,A,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: TopNavigationProps) => <Layout>
      <StyledTopNavigationComponent {...args} />
      <Layout.Content style={{
      overflow: 'scroll',
      height: '150vh'
    }}>
        <Placeholder description="Description" image="noData" mode="filled" size="medium" textAlign="center" title="Placeholder" />
      </Layout.Content>
    </Layout>
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,N,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    source: componentColors.top_navigation
  },
  render: args => <ThemedPalette {...args} />
}`,...(M=(N=c.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const It=["UserWorkStatuses","Basic","WithCenteredElementButton","WithCenteredElementHorizontalNav","WithContentRight","WithUserStatus","InScrollableLayout","ColorTokens"];export{o as Basic,c as ColorTokens,i as InScrollableLayout,ae as UserWorkStatuses,r as WithCenteredElementButton,n as WithCenteredElementHorizontalNav,a as WithContentRight,s as WithUserStatus,It as __namedExportsOrder,At as default};
