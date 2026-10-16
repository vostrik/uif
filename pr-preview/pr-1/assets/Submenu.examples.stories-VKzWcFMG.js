import{C as R}from"./Warnings-B3IyJCvB.js";import{B}from"./Button-C-yJZqhy.js";import{b as l,R as e,S as j,H as V}from"./iframe-CS_lS3JQ.js";import{T as z}from"./Tag-K_Mfb6oe.js";import{T as D}from"./Toggle-BOxHbuiK.js";import{o as H}from"./Placeholder-Q-SCb9Hd.js";import{o as P}from"./Plus-CZaig3eZ.js";import{o as W}from"./Settings-D7bOCKfO.js";import{S as m}from"./Submenu-CWzpQmGJ.js";import{m as O}from"./mocks-C4-v-_Xh.js";import{S as N}from"./Sidebar-Cm_BdkCF.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./useMergedState-B61t_fRl.js";import"./focus-BLc_l6vY.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DMancYzQ.js";import"./Divider-D_7SE2Jg.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./type-BpgJjWfR.js";import"./v4-BoP187Zn.js";import"./button-6xivo2h5.js";import"./wave-87GZ2a0S.js";import"./preload-helper-Dp1pzeXC.js";import"./TextReducer-BY5uL3xm.js";import"./index-etHmF8Xf.js";import"./colors-D4ituO_X.js";import"./Group-DmPThJhc.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./FormLabel-CwcsdRCh.js";import"./SubComponents-BHE4NYtA.js";import"./TextWithTruncation-JO92Emz0.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./ArrowRightSolid-BEUEmyaL.js";import"./Badge-Cc2Xscgq.js";import"./Indicator-B2JkvBkD.js";import"./CustomItem-BZI8Gq53.js";import"./Menu-CJx_wx1q.js";import"./Sider-DKqjZmix.js";import"./RightOutlined-B654noN0.js";import"./ArrowRightMini-D1g7SlDU.js";import"./StatusOkSolid-cz3jVigG.js";import"./useTranslation-Co6sA9X3.js";import"./NotificationService-CYJY1m-j.js";import"./generateId-BXJELych.js";import"./Menu2-BCJeOr2q.js";import"./PortalWrapper-fVzV0qr7.js";import"./Portal-iQrxryRz.js";import"./useForceUpdate-D7iF0vYl.js";const Ne={title:"Hexa UI Components/Submenu/Stories",component:m,tags:["!autodocs"]},h=V(N)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`,_=o=>{const[n,t]=l.useState(!1);return e.createElement(e.Fragment,null,e.createElement(B,{onClick:()=>t(!0)},"Open"),e.createElement(h,{title:"Sidebar",visible:n,onClose:()=>t(!1)},e.createElement(m,{...o})))},i={render:_.bind({}),args:{truncateText:!1,collapseOnTextClick:!0,elementBefore:"Element before",elementAfter:"Element after",defaultActiveKey:"row-1-2",testId:"submenu-test-id",klId:"submenu-kl-id",items:O}},a={render:o=>{const[n,t]=l.useState(!1),[p,r]=l.useState("row-4-1");return e.createElement(j,{gap:"separated",direction:"vertical",align:"start"},e.createElement(R,null),e.createElement(B,{onClick:()=>t(!0)},"Open"),e.createElement(h,{title:"Sidebar",visible:n,onClose:()=>t(!1)},e.createElement(m,{...o,activeKey:p,onChange:r})))},args:{items:O}},c={"-":null,Placeholder:e.createElement(H,{klId:"submenu-row-icon"}),Plus:e.createElement(P,{klId:"submenu-row-icon"}),Settings:e.createElement(W,{klId:"submenu-row-icon"})},x={"-":null,Toggle:e.createElement(D,null),Tag:e.createElement(z,{mode:"purple",size:"small"},"Tag")},s={render:({disabled:o,iconBefore:n,text:t,truncateText:p,elementAfter:r,notificationVariant:d,indicatorMode:u,badgeMode:b,badgeCount:K,badgeText:M,action:f})=>{const g=y=>({type:"row",key:"row-"+y,text:t,disabled:o,content:"This is row "+y,...n!=="-"?{iconBefore:c[n]}:{},...d==="indicator"&&u?{notification:{type:"indicator",mode:u}}:{},...d==="badge"&&b?{notification:{type:"badge",mode:b,text:M,count:K}}:{},...r?{elementAfter:x[r]}:{},...f!=="-"?{action:{onClick:()=>alert("Row action clicked"),icon:c[f]}}:{}});return e.createElement(m,{truncateText:p,items:[g(1),g(2)]})},argTypes:{disabled:{control:{type:"boolean"},description:"Disabled state (not a submenu prop)"},iconBefore:{control:{type:"select"},options:Object.keys(c),description:"Icon before, custom icon of size 16 (not a submenu prop)"},text:{control:{type:"text"},description:"Row text (not a submenu prop)"},elementAfter:{control:{type:"select"},options:Object.keys(x),description:"Element after, custom element with maximum height of 20px (not a submenu prop)"},notificationVariant:{control:{type:"select"},options:["badge","indicator","none"],description:"Notification variant (not a submenu prop)"},indicatorMode:{control:{type:"select"},options:["new","critical","medium"],description:"Indicator mode (not a submenu prop)"},badgeMode:{control:{type:"select"},options:["new","critical"],description:"Badge mode (not a submenu prop)"},badgeCount:{control:{type:"number",min:0},description:"Badge count (not a submenu prop)"},badgeText:{control:{type:"text"},description:"Badge text (not a submenu prop)"},action:{control:{type:"select"},options:Object.keys(c),description:"Action icon, custom icon of size 16 (not a submenu prop)"}},args:{disabled:!1,iconBefore:"-",text:"Row",truncateText:!1,elementAfter:"-",notificationVariant:"none",indicatorMode:"critical",badgeMode:"critical",badgeCount:10,badgeText:void 0,action:"-"},parameters:{controls:{exclude:/(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|elementBefore|testId|klId)/}}};var S,I,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
