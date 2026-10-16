import{C as R}from"./Warnings-B48ejef0.js";import{B}from"./Button-CthyJnKL.js";import{b as l,R as e,S as j,H as V}from"./iframe-CMq2KAbH.js";import{T as z}from"./Tag-jK9gdpxg.js";import{o as D}from"./Placeholder-DvpzdgNV.js";import{o as H}from"./Plus-C6HJRMFW.js";import{o as P}from"./Settings-DLDLKxDj.js";import{S as m}from"./Submenu-zaMSW9vt.js";import{m as O}from"./mocks-DB3mVEqp.js";import{S as W}from"./Sidebar-D878rfF2.js";import{T as N}from"./Toggle-B21kP8-p.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BzdZu4G4.js";import"./Divider-C_lHVbvw.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./type-D3DD6-1D.js";import"./v4-BoP187Zn.js";import"./button-D46-rz2F.js";import"./wave-3WO31ZRq.js";import"./preload-helper-Dp1pzeXC.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./colors-CLR_yiO4.js";import"./Group-BToCNK5g.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Badge-DZq-1HSe.js";import"./Indicator-PCazPGCQ.js";import"./CustomItem-B_RLd7sP.js";import"./Menu-CUoJMBFK.js";import"./Sider-Bn7Su4bY.js";import"./RightOutlined-pxfmtda1.js";import"./ArrowRightMini-9olo6jIu.js";import"./StatusOkSolid-DvHSb1lq.js";import"./useTranslation-DM_UuMFJ.js";import"./NotificationService-DXUQKYqS.js";import"./generateId-BXJELych.js";import"./Menu2-BxwN2Mzc.js";import"./PortalWrapper-C_wuvrSB.js";import"./Portal-ytVqnDVd.js";import"./useForceUpdate-P-XrsDyC.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./FormLabel-lYRdE9pS.js";const Ne={title:"Hexa UI Components/Submenu/Stories",component:m,tags:["!autodocs"]},h=V(W)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`,_=o=>{const[n,t]=l.useState(!1);return e.createElement(e.Fragment,null,e.createElement(B,{onClick:()=>t(!0)},"Open"),e.createElement(h,{title:"Sidebar",visible:n,onClose:()=>t(!1)},e.createElement(m,{...o})))},i={render:_.bind({}),args:{truncateText:!1,collapseOnTextClick:!0,elementBefore:"Element before",elementAfter:"Element after",defaultActiveKey:"row-1-2",testId:"submenu-test-id",klId:"submenu-kl-id",items:O}},a={render:o=>{const[n,t]=l.useState(!1),[p,r]=l.useState("row-4-1");return e.createElement(j,{gap:"separated",direction:"vertical",align:"start"},e.createElement(R,null),e.createElement(B,{onClick:()=>t(!0)},"Open"),e.createElement(h,{title:"Sidebar",visible:n,onClose:()=>t(!1)},e.createElement(m,{...o,activeKey:p,onChange:r})))},args:{items:O}},c={"-":null,Placeholder:e.createElement(D,{klId:"submenu-row-icon"}),Plus:e.createElement(H,{klId:"submenu-row-icon"}),Settings:e.createElement(P,{klId:"submenu-row-icon"})},x={"-":null,Toggle:e.createElement(N,null),Tag:e.createElement(z,{mode:"purple",size:"small"},"Tag")},s={render:({disabled:o,iconBefore:n,text:t,truncateText:p,elementAfter:r,notificationVariant:d,indicatorMode:u,badgeMode:b,badgeCount:K,badgeText:M,action:f})=>{const g=y=>({type:"row",key:"row-"+y,text:t,disabled:o,content:"This is row "+y,...n!=="-"?{iconBefore:c[n]}:{},...d==="indicator"&&u?{notification:{type:"indicator",mode:u}}:{},...d==="badge"&&b?{notification:{type:"badge",mode:b,text:M,count:K}}:{},...r?{elementAfter:x[r]}:{},...f!=="-"?{action:{onClick:()=>alert("Row action clicked"),icon:c[f]}}:{}});return e.createElement(m,{truncateText:p,items:[g(1),g(2)]})},argTypes:{disabled:{control:{type:"boolean"},description:"Disabled state (not a submenu prop)"},iconBefore:{control:{type:"select"},options:Object.keys(c),description:"Icon before, custom icon of size 16 (not a submenu prop)"},text:{control:{type:"text"},description:"Row text (not a submenu prop)"},elementAfter:{control:{type:"select"},options:Object.keys(x),description:"Element after, custom element with maximum height of 20px (not a submenu prop)"},notificationVariant:{control:{type:"select"},options:["badge","indicator","none"],description:"Notification variant (not a submenu prop)"},indicatorMode:{control:{type:"select"},options:["new","critical","medium"],description:"Indicator mode (not a submenu prop)"},badgeMode:{control:{type:"select"},options:["new","critical"],description:"Badge mode (not a submenu prop)"},badgeCount:{control:{type:"number",min:0},description:"Badge count (not a submenu prop)"},badgeText:{control:{type:"text"},description:"Badge text (not a submenu prop)"},action:{control:{type:"select"},options:Object.keys(c),description:"Action icon, custom icon of size 16 (not a submenu prop)"}},args:{disabled:!1,iconBefore:"-",text:"Row",truncateText:!1,elementAfter:"-",notificationVariant:"none",indicatorMode:"critical",badgeMode:"critical",badgeCount:10,badgeText:void 0,action:"-"},parameters:{controls:{exclude:/(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|elementBefore|testId|klId)/}}};var S,I,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: SubmenuDefaultStory.bind({}),
  args: {
    truncateText: false,
    collapseOnTextClick: true,
    elementBefore: 'Element before',
    elementAfter: 'Element after',
    defaultActiveKey: 'row-1-2',
    testId: 'submenu-test-id',
    klId: 'submenu-kl-id',
    items: mockedItems
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var C,T,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('row-4-1');
    return <Space gap="separated" direction="vertical" align="start">
        <ControllableActiveKeyInfo />
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithSubmenu title="Sidebar" visible={isOpen} onClose={() => setIsOpen(false)}>
          <SubmenuComponent {...args} activeKey={activeKey} onChange={setActiveKey} />
        </StyledSidebarWithSubmenu>
      </Space>;
  },
  args: {
    items: mockedItems
  }
}`,...(w=(T=a.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var A,E,v;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ({
    disabled,
    iconBefore,
    text,
    truncateText,
    elementAfter,
    notificationVariant,
    indicatorMode,
    badgeMode,
    badgeCount,
    badgeText,
    action
  }) => {
    const createItem = (index: number): SubmenuItemProps => ({
      type: 'row',
      key: 'row-' + index,
      text,
      disabled,
      content: 'This is row ' + index,
      ...(iconBefore !== '-' ? {
        iconBefore: defaultIcons[iconBefore]
      } : {}),
      ...(notificationVariant === 'indicator' && indicatorMode ? {
        notification: {
          type: 'indicator',
          mode: indicatorMode
        }
      } : {}),
      ...(notificationVariant === 'badge' && badgeMode ? {
        notification: {
          type: 'badge',
          mode: badgeMode,
          text: badgeText,
          count: badgeCount
        }
      } : {}),
      ...(elementAfter ? {
        elementAfter: defaultElementsAfter[elementAfter]
      } : {}),
      ...(action !== '-' ? {
        action: {
          onClick: () => alert('Row action clicked'),
          icon: defaultIcons[action]
        }
      } : {})
    });
    return <SubmenuComponent truncateText={truncateText} items={[createItem(1), createItem(2)]} />;
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      },
      description: 'Disabled state (not a submenu prop)'
    },
    iconBefore: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultIcons),
      description: 'Icon before, custom icon of size 16 (not a submenu prop)'
    },
    text: {
      control: {
        type: 'text'
      },
      description: 'Row text (not a submenu prop)'
    },
    elementAfter: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultElementsAfter),
      description: 'Element after, custom element with maximum height of 20px (not a submenu prop)'
    },
    notificationVariant: {
      control: {
        type: 'select'
      },
      options: ['badge', 'indicator', 'none'],
      description: 'Notification variant (not a submenu prop)'
    },
    indicatorMode: {
      control: {
        type: 'select'
      },
      options: ['new', 'critical', 'medium'],
      description: 'Indicator mode (not a submenu prop)'
    },
    badgeMode: {
      control: {
        type: 'select'
      },
      options: ['new', 'critical'],
      description: 'Badge mode (not a submenu prop)'
    },
    badgeCount: {
      control: {
        type: 'number',
        min: 0
      },
      description: 'Badge count (not a submenu prop)'
    },
    badgeText: {
      control: {
        type: 'text'
      },
      description: 'Badge text (not a submenu prop)'
    },
    action: {
      control: {
        type: 'select'
      },
      options: Object.keys(defaultIcons),
      description: 'Action icon, custom icon of size 16 (not a submenu prop)'
    }
  },
  args: {
    disabled: false,
    iconBefore: '-',
    text: 'Row',
    truncateText: false,
    elementAfter: '-',
    notificationVariant: 'none',
    indicatorMode: 'critical',
    badgeMode: 'critical',
    badgeCount: 10,
    badgeText: undefined,
    action: '-'
  },
  parameters: {
    controls: {
      exclude: /(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|elementBefore|testId|klId)/
    }
  }
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const _e=["Basic","ControllableActiveKey","SubmenuRow"];export{i as Basic,a as ControllableActiveKey,s as SubmenuRow,_e as __namedExportsOrder,Ne as default};
