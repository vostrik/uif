import{T as O}from"./Palette-TtIZCnc5.js";import{c as $,R as e,Y as G,b as K,H as _,Z as U}from"./iframe-Df7vKfJt.js";import{L as u,g as z}from"./Menu-Cu4kNDQa.js";import{T as V}from"./Tag-DQaD3f7K.js";import{o as Y}from"./Advertisement-Cx7CzR-k.js";import{t as Z,o as j}from"./Browser-ChwhJ3vC.js";import{t as q}from"./Moon-C52cyvco.js";import{o as F}from"./Settings21-BygmuvXN.js";import{T as m,o as J,a as Q}from"./TopNavigation-f8g8SlCg.js";import{t as X}from"./TopNavigation.stories-C4GFEkm7.js";import{P as ee}from"./Placeholder-DFsTXjV1.js";import{S as te}from"./Search-D_jo1rMR.js";import{T as oe}from"./Toggle-BMGIIV8U.js";import"./preload-helper-Dp1pzeXC.js";import"./Sider-CvIYW2rK.js";import"./omit-DXgDXInf.js";import"./type-BPSO7Hcc.js";import"./RightOutlined-_AtI9B-D.js";import"./ArrowRightMini-Cap3mbie.js";import"./Submenu-DSGf5ei2.js";import"./SubComponents-Cs8A_EB6.js";import"./TextReducer-PfRkTMxb.js";import"./TextWithTruncation-lg2aspiP.js";import"./ArrowDownSolid-DgIE-i6b.js";import"./ArrowRightSolid-h0t1Ghk7.js";import"./Divider-DpGIrgZy.js";import"./Badge-B4SoFXPk.js";import"./colors-BMjSx7ej.js";import"./Indicator-BtYVEqOa.js";import"./StatusOkSolid-PsOIyvFx.js";import"./useTranslation-BXD4vFEx.js";import"./index-Zs4RcXwe.js";import"./wave-DLXz7O8a.js";import"./Group-CS03xTqG.js";import"./Button-BEXsH9SI.js";import"./Dropdown-CX0MMqyY.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BBH5KuLo.js";import"./useMergedState-BzyNOLYY.js";import"./focus-BahHV41T.js";import"./ArrowRight-BobUK_ZW.js";import"./Loader-qrngdWcb.js";import"./index-DTLMFHHc.js";import"./v4-BoP187Zn.js";import"./button-CnTfPpMx.js";import"./UserAccount-C2RlY9yT.js";import"./Bell-DY-IakL8.js";import"./HorizontalNav-CIdWGcEg.js";import"./propPresentation-CP3VpjtH.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";import"./StoryComponents-DZDmQnnk.js";import"./FormLabel-BJ1Ltfk6.js";import"./Markdown-C6fkmFkS.js";import"./index-Cmh3yLHD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-B14hTMNc.js";import"./useGlobalStyles-Bi09YJyx.js";import"./InputMasked-tWD34xqG.js";import"./input-BKEOzk-S.js";import"./index-Chjiymov.js";import"./useThemedTextbox-fVj2LBMS.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-W1Zj8ekK.js";import"./InputNumber-B5i2pNIr.js";import"./index-cR9EwmNO.js";import"./SearchOutlined-BMyuNpTD.js";import"./InputPassword-9gZnQ8V2.js";import"./IconResolver-CayOmfoU.js";import"./Placeholder-CXT89Bbl.js";import"./IconSearch-BuQ7TQA5.js";import"./AdditionalContent-DhWVtj4k.js";import"./HelpMessage-SorIYbjM.js";const re=[{children:e.createElement(te,null)},{children:"Workspace 1"},{children:"Workspace 2"},{children:"Workspace 3"},{type:"divider",children:""},{title:"Go to Portal",type:"action",children:"Go to Portal",componentsBefore:[e.createElement(j,null)]}],ne=[{children:"Account settings",componentsBefore:[e.createElement(F,{key:"account-settings-icon"})]},{type:"submenu",title:"English",componentsBefore:[e.createElement(J,{key:"language-icon"})],children:[{children:"English"},{children:"Русский"},{type:"divider",children:""},{children:"Deutsch"},{children:"Italiano"}]},{children:"Dark mode",componentsBefore:[e.createElement(q,{key:"mode-icon"})],componentsAfter:[e.createElement(oe,{key:"mode-toggle"})]},{type:"divider",children:""},{children:"Log out",componentsBefore:[e.createElement(Q,{key:"logout-icon"})]},{title:"© 2025 AO Kaspersky Lab",type:"group",children:[]}];var ae=(t=>(t.AVAILABLE="available",t.BUSY="busy",t))(ae||{});const se=z("available",U.Light),ie=z("unavailable",U.Light),l={available:e.createElement(se,null),busy:e.createElement(ie,null)};function ce(t){return[{title:"User work status",type:"group",children:[{key:"available",componentsBefore:[l.available],children:"Available",onClick:t},{key:"busy",componentsBefore:[l.busy],children:"Busy",onClick:t}]},{type:"divider",children:""}]}const At={title:"Hexa UI Components/TopNavigation/Stories",component:m,tags:["!autodocs"],...X},o={},r={args:{elementCentered:{type:"button",buttonConfig:{title:"New workspace",buttonProps:{mode:"secondary",iconBefore:e.createElement(Z,null),iconAfter:e.createElement(G,null)},dropdownMenuProps:{overlay:re}}}},name:"With Centered Element / Button"},n={args:{elementCentered:{type:"horizontalNavigation",horizontalNavigationConfig:{items:[{label:"Workspaces",selected:!0,key:"workspaces"},{label:"Licenses",key:"licenses"},{label:"Trainings",key:"trainings"}]}}},name:"With Centered Element / HorizontalNav"},a={args:{contentRight:e.createElement(V,{icon:e.createElement(Y,null),mode:"yellow",outlined:!0,style:{marginRight:0}},"Getting started: 3 of 12")}},s={render:t=>{const[p,D]=K.useState("available"),R=H=>D(H.key),x={...t.accountMenuProps,iconBefore:l[p],dropdownMenuProps:{overlay:[...ce(R),...ne],selectedItemsKeys:[p]}};return e.createElement(m,{...t,accountMenuProps:x})}},le=_(m)`
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
