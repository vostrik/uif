import{T as O}from"./Palette-9PuIUoqy.js";import{c as $,R as e,Y as G,b as K,H as _,Z as U}from"./iframe-C5ywg3yF.js";import{L as u,g as z}from"./Menu-DYUVri9s.js";import{T as V}from"./Tag-D2J0DCjt.js";import{o as Y}from"./Advertisement-CO0mK6TE.js";import{t as Z,o as j}from"./Browser-OPGQlP8-.js";import{t as q}from"./Moon-Y9Jo5_gK.js";import{o as F}from"./Settings21-BttkSjq_.js";import{T as m,o as J,a as Q}from"./TopNavigation-BrklXvhz.js";import{t as X}from"./TopNavigation.stories-D57caFoC.js";import{P as ee}from"./Placeholder-d-GP37_m.js";import{S as te}from"./Search-D2_ngLzW.js";import{T as oe}from"./Toggle-h5WMIT3p.js";import"./preload-helper-Dp1pzeXC.js";import"./Sider-BNR_N0qf.js";import"./omit-DXgDXInf.js";import"./type-CYimqQsV.js";import"./RightOutlined-iKgeufKL.js";import"./ArrowRightMini-CGo7ufaA.js";import"./Submenu-DysXK1MV.js";import"./SubComponents-kdha7qeJ.js";import"./TextReducer-DYBA9RxT.js";import"./TextWithTruncation-B3iFB_Ef.js";import"./ArrowDownSolid-_KyHq5Me.js";import"./ArrowRightSolid-Duj2LKDv.js";import"./Divider-DL-FS3qr.js";import"./Badge-ejx6pHZd.js";import"./colors-CEAxVyTa.js";import"./Indicator-DkDd6DuE.js";import"./StatusOkSolid-CWfQ4eAP.js";import"./useTranslation-CbJmFUUZ.js";import"./index-B9cL_k2v.js";import"./wave-6D6RLP9Y.js";import"./Group-M-SjioCQ.js";import"./Button-NQ8G2asL.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./useMergedState-hWmk9BX_.js";import"./focus-D6fBl5Nk.js";import"./ArrowRight-DKeSAYRW.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./v4-BoP187Zn.js";import"./button-C0MuISIr.js";import"./UserAccount-CEOpek4K.js";import"./Bell-DWqOFpqD.js";import"./HorizontalNav-CVRPEl4x.js";import"./propPresentation-BBbAkRBO.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./StoryComponents-CoJHZgFZ.js";import"./FormLabel-Cl6NqZ0b.js";import"./Markdown-fvY8LtSv.js";import"./index-DPF1SB_W.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-DNM5rp-I.js";import"./useGlobalStyles-gt8SBDCb.js";import"./InputMasked-MSHBCWYW.js";import"./input-B0Wxb6FI.js";import"./index-Chjiymov.js";import"./useThemedTextbox-4oG6-pH9.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BZR5FXIa.js";import"./InputNumber-kTKOXpAH.js";import"./index-FBskrQl3.js";import"./SearchOutlined-DkKb0CGg.js";import"./InputPassword-D428oXIW.js";import"./IconResolver-CZ0-QjIX.js";import"./Placeholder-DD0S7nvg.js";import"./IconSearch-BPTFigGi.js";import"./AdditionalContent-CGaR5f3H.js";import"./HelpMessage-CN6qGX_P.js";const re=[{children:e.createElement(te,null)},{children:"Workspace 1"},{children:"Workspace 2"},{children:"Workspace 3"},{type:"divider",children:""},{title:"Go to Portal",type:"action",children:"Go to Portal",componentsBefore:[e.createElement(j,null)]}],ne=[{children:"Account settings",componentsBefore:[e.createElement(F,{key:"account-settings-icon"})]},{type:"submenu",title:"English",componentsBefore:[e.createElement(J,{key:"language-icon"})],children:[{children:"English"},{children:"Русский"},{type:"divider",children:""},{children:"Deutsch"},{children:"Italiano"}]},{children:"Dark mode",componentsBefore:[e.createElement(q,{key:"mode-icon"})],componentsAfter:[e.createElement(oe,{key:"mode-toggle"})]},{type:"divider",children:""},{children:"Log out",componentsBefore:[e.createElement(Q,{key:"logout-icon"})]},{title:"© 2025 AO Kaspersky Lab",type:"group",children:[]}];var ae=(t=>(t.AVAILABLE="available",t.BUSY="busy",t))(ae||{});const se=z("available",U.Light),ie=z("unavailable",U.Light),l={available:e.createElement(se,null),busy:e.createElement(ie,null)};function ce(t){return[{title:"User work status",type:"group",children:[{key:"available",componentsBefore:[l.available],children:"Available",onClick:t},{key:"busy",componentsBefore:[l.busy],children:"Busy",onClick:t}]},{type:"divider",children:""}]}const At={title:"Hexa UI Components/TopNavigation/Stories",component:m,tags:["!autodocs"],...X},o={},r={args:{elementCentered:{type:"button",buttonConfig:{title:"New workspace",buttonProps:{mode:"secondary",iconBefore:e.createElement(Z,null),iconAfter:e.createElement(G,null)},dropdownMenuProps:{overlay:re}}}},name:"With Centered Element / Button"},n={args:{elementCentered:{type:"horizontalNavigation",horizontalNavigationConfig:{items:[{label:"Workspaces",selected:!0,key:"workspaces"},{label:"Licenses",key:"licenses"},{label:"Trainings",key:"trainings"}]}}},name:"With Centered Element / HorizontalNav"},a={args:{contentRight:e.createElement(V,{icon:e.createElement(Y,null),mode:"yellow",outlined:!0,style:{marginRight:0}},"Getting started: 3 of 12")}},s={render:t=>{const[p,D]=K.useState("available"),R=H=>D(H.key),x={...t.accountMenuProps,iconBefore:l[p],dropdownMenuProps:{overlay:[...ce(R),...ne],selectedItemsKeys:[p]}};return e.createElement(m,{...t,accountMenuProps:x})}},le=_(m)`
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
