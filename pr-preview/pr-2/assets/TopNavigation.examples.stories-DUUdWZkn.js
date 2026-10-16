import{T as O}from"./Palette-B17Qk-oR.js";import{c as $,R as e,Y as G,b as K,H as _,Z as U}from"./iframe-kzbRZKTh.js";import{L as u,g as z}from"./Menu-Bgz3jUl-.js";import{T as V}from"./Tag-B5Krc590.js";import{o as Y}from"./Advertisement-yZ-1eKTt.js";import{t as Z,o as j}from"./Browser-DgeO6vAl.js";import{t as q}from"./Moon-_YoecVdv.js";import{o as F}from"./Settings21-C23EOF_P.js";import{T as m,o as J,a as Q}from"./TopNavigation-CSoE-gWW.js";import{t as X}from"./TopNavigation.stories-6GdbMSDE.js";import{P as ee}from"./Placeholder-BzEjtjIz.js";import{S as te}from"./Search-DtSbKEsK.js";import{T as oe}from"./Toggle-DiD7VZ_h.js";import"./preload-helper-Dp1pzeXC.js";import"./Sider-D10qFmNS.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./RightOutlined-BO1Frjn1.js";import"./ArrowRightMini-BSDE2S1M.js";import"./Submenu-BJntrZRe.js";import"./SubComponents-We9aHDLB.js";import"./TextReducer-DXOQhH6C.js";import"./TextWithTruncation-BjF1kgAQ.js";import"./ArrowDownSolid-CwAn2KlV.js";import"./ArrowRightSolid-WWnzh9Fl.js";import"./Divider-DtbUpKWs.js";import"./Badge-mOFGdbE6.js";import"./colors-BmIR1RWC.js";import"./Indicator-BqqK5Xic.js";import"./StatusOkSolid-CZ2Xw8j1.js";import"./useTranslation-BiFIvaSU.js";import"./index-BWTd0hrP.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./Button-Dd8IwuWk.js";import"./Dropdown-C51UE_7M.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C3zfAXzo.js";import"./useMergedState-BCfT7eD5.js";import"./focus-D3yS8zRr.js";import"./ArrowRight-Cuc4j5Bt.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";import"./v4-BoP187Zn.js";import"./button-DwzApgVz.js";import"./UserAccount-BD83KyCj.js";import"./Bell-BFzY2ZvV.js";import"./HorizontalNav-Dakxq_HG.js";import"./propPresentation-zJAskzS2.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./StoryComponents-B_SbX1GS.js";import"./FormLabel-Bk6eWrFo.js";import"./Markdown-COgEAH6_.js";import"./index-Dqpnzz1w.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-Dg5QwrqF.js";import"./useGlobalStyles-BoqL1JUd.js";import"./InputMasked-CKY1oKhk.js";import"./input-Bn3C5XX8.js";import"./index-Chjiymov.js";import"./useThemedTextbox-DEm_zcHd.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BSIzcI4n.js";import"./InputNumber-CNpt5PMk.js";import"./index-CaGsXE34.js";import"./SearchOutlined-D3lRq4Vf.js";import"./InputPassword-DCCl0vlz.js";import"./IconResolver-pzcNx2TP.js";import"./Placeholder-Drb6ifDx.js";import"./IconSearch-dCvuvjbY.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";const re=[{children:e.createElement(te,null)},{children:"Workspace 1"},{children:"Workspace 2"},{children:"Workspace 3"},{type:"divider",children:""},{title:"Go to Portal",type:"action",children:"Go to Portal",componentsBefore:[e.createElement(j,null)]}],ne=[{children:"Account settings",componentsBefore:[e.createElement(F,{key:"account-settings-icon"})]},{type:"submenu",title:"English",componentsBefore:[e.createElement(J,{key:"language-icon"})],children:[{children:"English"},{children:"Русский"},{type:"divider",children:""},{children:"Deutsch"},{children:"Italiano"}]},{children:"Dark mode",componentsBefore:[e.createElement(q,{key:"mode-icon"})],componentsAfter:[e.createElement(oe,{key:"mode-toggle"})]},{type:"divider",children:""},{children:"Log out",componentsBefore:[e.createElement(Q,{key:"logout-icon"})]},{title:"© 2025 AO Kaspersky Lab",type:"group",children:[]}];var ae=(t=>(t.AVAILABLE="available",t.BUSY="busy",t))(ae||{});const se=z("available",U.Light),ie=z("unavailable",U.Light),l={available:e.createElement(se,null),busy:e.createElement(ie,null)};function ce(t){return[{title:"User work status",type:"group",children:[{key:"available",componentsBefore:[l.available],children:"Available",onClick:t},{key:"busy",componentsBefore:[l.busy],children:"Busy",onClick:t}]},{type:"divider",children:""}]}const At={title:"Hexa UI Components/TopNavigation/Stories",component:m,tags:["!autodocs"],...X},o={},r={args:{elementCentered:{type:"button",buttonConfig:{title:"New workspace",buttonProps:{mode:"secondary",iconBefore:e.createElement(Z,null),iconAfter:e.createElement(G,null)},dropdownMenuProps:{overlay:re}}}},name:"With Centered Element / Button"},n={args:{elementCentered:{type:"horizontalNavigation",horizontalNavigationConfig:{items:[{label:"Workspaces",selected:!0,key:"workspaces"},{label:"Licenses",key:"licenses"},{label:"Trainings",key:"trainings"}]}}},name:"With Centered Element / HorizontalNav"},a={args:{contentRight:e.createElement(V,{icon:e.createElement(Y,null),mode:"yellow",outlined:!0,style:{marginRight:0}},"Getting started: 3 of 12")}},s={render:t=>{const[p,D]=K.useState("available"),R=H=>D(H.key),x={...t.accountMenuProps,iconBefore:l[p],dropdownMenuProps:{overlay:[...ce(R),...ne],selectedItemsKeys:[p]}};return e.createElement(m,{...t,accountMenuProps:x})}},le=_(m)`
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
