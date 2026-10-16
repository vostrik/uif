import{T as O}from"./Palette-L_jpL42l.js";import{c as $,R as e,Y as G,b as K,H as _,Z as U}from"./iframe-D64doaOG.js";import{L as u,g as z}from"./Menu-CuoB-74z.js";import{T as V}from"./Tag-D6DOgDGV.js";import{o as Y}from"./Advertisement-U_sFLqWM.js";import{t as Z,o as j}from"./Browser-DaiHix8o.js";import{t as q}from"./Moon-hTYzpfrt.js";import{o as F}from"./Settings21-DGqxQ0E8.js";import{T as m,o as J,a as Q}from"./TopNavigation-CmeTkbxi.js";import{t as X}from"./TopNavigation.stories-B-N9j6wM.js";import{P as ee}from"./Placeholder-Dj6J9ZsG.js";import{S as te}from"./Search-BmmS_D4s.js";import{T as oe}from"./Toggle-DKzag4k9.js";import"./preload-helper-Dp1pzeXC.js";import"./Sider-BrS79yvp.js";import"./omit-DXgDXInf.js";import"./type-BhjCrcP5.js";import"./RightOutlined-I6So6vVt.js";import"./ArrowRightMini-CEuwNWtf.js";import"./Submenu-BJ194FnO.js";import"./SubComponents-CmPDyBhW.js";import"./TextReducer-D9EoPo-Z.js";import"./TextWithTruncation-OcBO6EIa.js";import"./ArrowDownSolid-b0Mul1k0.js";import"./ArrowRightSolid-BZ2MxU-F.js";import"./Divider-CHq-NCgF.js";import"./Badge-tlJSCzR8.js";import"./colors-CZlhbD2k.js";import"./Indicator-BWF03Jjq.js";import"./StatusOkSolid-BICad4Wy.js";import"./useTranslation-CtdtsiRO.js";import"./index-BUFoDfzb.js";import"./wave-D0moY5T7.js";import"./Group-g0kG_cFj.js";import"./Button-TmF0MD_-.js";import"./Dropdown-CakLMIuG.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DOaPQPHU.js";import"./useMergedState-D_-bsn6_.js";import"./focus-DobIVKtg.js";import"./ArrowRight-3NiJ6X-U.js";import"./Loader-DHdWRNjN.js";import"./index-B5M9_ZQL.js";import"./v4-BoP187Zn.js";import"./button-Xku0lj0N.js";import"./UserAccount-DnOtcaP9.js";import"./Bell-Dl0eivu8.js";import"./HorizontalNav-Bx3VxtMX.js";import"./propPresentation-Bd1LfInE.js";import"./blocks-Mkmu72nY.js";import"./index-g4UEVAJN.js";import"./StoryComponents-BPvyLU8J.js";import"./FormLabel-_EAno6xN.js";import"./Markdown-BoWm1Hej.js";import"./index-BayBP1qJ.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-DG8LriK_.js";import"./useGlobalStyles-BHDTOddm.js";import"./InputMasked-mR9gPOBu.js";import"./input-BGaYNdUH.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CSuDfsxH.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-E0BmDxS6.js";import"./InputNumber-BgiYnHn5.js";import"./index-M7uLrcpx.js";import"./SearchOutlined-XfEsUDsT.js";import"./InputPassword-CF4iGcsj.js";import"./IconResolver-B-B8tWu_.js";import"./Placeholder-CPZh2A8H.js";import"./IconSearch-GhEnEuU-.js";import"./AdditionalContent-Dm003yIA.js";import"./HelpMessage-D9PDbKUA.js";const re=[{children:e.createElement(te,null)},{children:"Workspace 1"},{children:"Workspace 2"},{children:"Workspace 3"},{type:"divider",children:""},{title:"Go to Portal",type:"action",children:"Go to Portal",componentsBefore:[e.createElement(j,null)]}],ne=[{children:"Account settings",componentsBefore:[e.createElement(F,{key:"account-settings-icon"})]},{type:"submenu",title:"English",componentsBefore:[e.createElement(J,{key:"language-icon"})],children:[{children:"English"},{children:"Русский"},{type:"divider",children:""},{children:"Deutsch"},{children:"Italiano"}]},{children:"Dark mode",componentsBefore:[e.createElement(q,{key:"mode-icon"})],componentsAfter:[e.createElement(oe,{key:"mode-toggle"})]},{type:"divider",children:""},{children:"Log out",componentsBefore:[e.createElement(Q,{key:"logout-icon"})]},{title:"© 2025 AO Kaspersky Lab",type:"group",children:[]}];var ae=(t=>(t.AVAILABLE="available",t.BUSY="busy",t))(ae||{});const se=z("available",U.Light),ie=z("unavailable",U.Light),l={available:e.createElement(se,null),busy:e.createElement(ie,null)};function ce(t){return[{title:"User work status",type:"group",children:[{key:"available",componentsBefore:[l.available],children:"Available",onClick:t},{key:"busy",componentsBefore:[l.busy],children:"Busy",onClick:t}]},{type:"divider",children:""}]}const At={title:"Hexa UI Components/TopNavigation/Stories",component:m,tags:["!autodocs"],...X},o={},r={args:{elementCentered:{type:"button",buttonConfig:{title:"New workspace",buttonProps:{mode:"secondary",iconBefore:e.createElement(Z,null),iconAfter:e.createElement(G,null)},dropdownMenuProps:{overlay:re}}}},name:"With Centered Element / Button"},n={args:{elementCentered:{type:"horizontalNavigation",horizontalNavigationConfig:{items:[{label:"Workspaces",selected:!0,key:"workspaces"},{label:"Licenses",key:"licenses"},{label:"Trainings",key:"trainings"}]}}},name:"With Centered Element / HorizontalNav"},a={args:{contentRight:e.createElement(V,{icon:e.createElement(Y,null),mode:"yellow",outlined:!0,style:{marginRight:0}},"Getting started: 3 of 12")}},s={render:t=>{const[p,D]=K.useState("available"),R=H=>D(H.key),x={...t.accountMenuProps,iconBefore:l[p],dropdownMenuProps:{overlay:[...ce(R),...ne],selectedItemsKeys:[p]}};return e.createElement(m,{...t,accountMenuProps:x})}},le=_(m)`
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
