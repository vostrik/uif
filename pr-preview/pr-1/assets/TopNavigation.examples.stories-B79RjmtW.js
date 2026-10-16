import{T as O}from"./Palette-BWzVK3dX.js";import{c as $,R as e,Y as G,b as K,H as _,Z as U}from"./iframe-DIzBSOsa.js";import{L as u,g as z}from"./Menu-DOukf9HZ.js";import{T as V}from"./Tag-UnCHTvWf.js";import{o as Y}from"./Advertisement-CGwiMr-k.js";import{t as Z,o as j}from"./Browser-BCtGkiM3.js";import{t as q}from"./Moon-YhAub5Y9.js";import{o as F}from"./Settings21-Aqt_tjNg.js";import{T as m,o as J,a as Q}from"./TopNavigation-CXBGJmI7.js";import{t as X}from"./TopNavigation.stories-W9u9yZ16.js";import{P as ee}from"./Placeholder-C1bS-zFE.js";import{S as te}from"./Search-DcNI2zD3.js";import{T as oe}from"./Toggle-BwnEG2Z9.js";import"./preload-helper-Dp1pzeXC.js";import"./Sider-BBTh4R_p.js";import"./omit-DXgDXInf.js";import"./type-CN9KIPGq.js";import"./RightOutlined-BFZYnNZn.js";import"./ArrowRightMini-BR8ssIZy.js";import"./Submenu-NEx6RLL7.js";import"./SubComponents-DBmByhhh.js";import"./TextReducer-B8LAxaee.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Divider-B7r6BzqD.js";import"./Badge-BnYETXMc.js";import"./colors-DWd9yYDE.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkSolid-CmY3C1FN.js";import"./useTranslation-akTbTiaP.js";import"./index-DmRlaPE6.js";import"./wave-CZhb61AN.js";import"./Group-DZSM1WME.js";import"./Button-papDIOAz.js";import"./Dropdown-DEik8dKH.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-Dlds-xGy.js";import"./useMergedState-IHysQFAx.js";import"./focus-BglFpdoy.js";import"./ArrowRight-DXYEwFBz.js";import"./Loader-t8IvB7CC.js";import"./index-B9He-UhX.js";import"./v4-BoP187Zn.js";import"./button-CJ1TwKfr.js";import"./UserAccount-CJVpRo3j.js";import"./Bell-BzkYLEt3.js";import"./HorizontalNav-BtvooxJl.js";import"./propPresentation-B5tDD9vt.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./StoryComponents-CbjM3Idf.js";import"./FormLabel-pcEEqmjq.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-5yg8yqmJ.js";import"./useGlobalStyles-DgpDkaRt.js";import"./InputMasked-BSoEqwUR.js";import"./input-DWT0eBQ1.js";import"./index-Chjiymov.js";import"./useThemedTextbox-kgZ1h4SY.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DZYGm017.js";import"./InputNumber-CYTncJIx.js";import"./index-BfnUqPRg.js";import"./SearchOutlined-Q97UXRgi.js";import"./InputPassword-kn2SY-sh.js";import"./IconResolver-Dvz6iVav.js";import"./Placeholder-CjFf63ey.js";import"./IconSearch-DcZ1BM5v.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";const re=[{children:e.createElement(te,null)},{children:"Workspace 1"},{children:"Workspace 2"},{children:"Workspace 3"},{type:"divider",children:""},{title:"Go to Portal",type:"action",children:"Go to Portal",componentsBefore:[e.createElement(j,null)]}],ne=[{children:"Account settings",componentsBefore:[e.createElement(F,{key:"account-settings-icon"})]},{type:"submenu",title:"English",componentsBefore:[e.createElement(J,{key:"language-icon"})],children:[{children:"English"},{children:"Русский"},{type:"divider",children:""},{children:"Deutsch"},{children:"Italiano"}]},{children:"Dark mode",componentsBefore:[e.createElement(q,{key:"mode-icon"})],componentsAfter:[e.createElement(oe,{key:"mode-toggle"})]},{type:"divider",children:""},{children:"Log out",componentsBefore:[e.createElement(Q,{key:"logout-icon"})]},{title:"© 2025 AO Kaspersky Lab",type:"group",children:[]}];var ae=(t=>(t.AVAILABLE="available",t.BUSY="busy",t))(ae||{});const se=z("available",U.Light),ie=z("unavailable",U.Light),l={available:e.createElement(se,null),busy:e.createElement(ie,null)};function ce(t){return[{title:"User work status",type:"group",children:[{key:"available",componentsBefore:[l.available],children:"Available",onClick:t},{key:"busy",componentsBefore:[l.busy],children:"Busy",onClick:t}]},{type:"divider",children:""}]}const At={title:"Hexa UI Components/TopNavigation/Stories",component:m,tags:["!autodocs"],...X},o={},r={args:{elementCentered:{type:"button",buttonConfig:{title:"New workspace",buttonProps:{mode:"secondary",iconBefore:e.createElement(Z,null),iconAfter:e.createElement(G,null)},dropdownMenuProps:{overlay:re}}}},name:"With Centered Element / Button"},n={args:{elementCentered:{type:"horizontalNavigation",horizontalNavigationConfig:{items:[{label:"Workspaces",selected:!0,key:"workspaces"},{label:"Licenses",key:"licenses"},{label:"Trainings",key:"trainings"}]}}},name:"With Centered Element / HorizontalNav"},a={args:{contentRight:e.createElement(V,{icon:e.createElement(Y,null),mode:"yellow",outlined:!0,style:{marginRight:0}},"Getting started: 3 of 12")}},s={render:t=>{const[p,D]=K.useState("available"),R=H=>D(H.key),x={...t.accountMenuProps,iconBefore:l[p],dropdownMenuProps:{overlay:[...ce(R),...ne],selectedItemsKeys:[p]}};return e.createElement(m,{...t,accountMenuProps:x})}},le=_(m)`
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
