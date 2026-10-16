import{R as e,b as C,N as A,T as P,S as T}from"./iframe-CE3A2i_R.js";import{S as U,C as W}from"./ScrollableContainer-BF46-1Gp.js";import{a as B}from"./StoryComponents-DgMyNenL.js";import{B as r}from"./Button-DWAe4sGj.js";import{o as i}from"./Placeholder-Cww9fqa_.js";import{o as R}from"./Plus-C-VNyuat.js";import{D as t}from"./Dropdown-DDTza_yl.js";import{d as c,a as q}from"./Dropdown.stories-Dg11NZTY.js";import{B as u}from"./Badge-COlrkFgX.js";import{I as L}from"./Indicator-CzmYw3rU.js";import{S as O}from"./SegmentedButton-D7Q38fHF.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-BTPnuYAd.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./Divider-BfYsgfay.js";import"./button-BXfcPuzR.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./useMergedState-CJ57ru4s.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./v4-BoP187Zn.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./withMeta-ChZHBTGH.js";import"./DocPageLayout-CSin2tY8.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Checkbox-DgJSahC_.js";import"./useId-CJZ66fF7.js";import"./generateId-BXJELych.js";import"./index-D9iZAV-N.js";import"./index-x-4LxR_n.js";const H=[{text:"custom item",value:"custom"},{text:"action item",value:"action"},{text:"submenu item",value:"submenu"}],p={testId:"sticky-item",sticky:!0},g={custom:{...p,children:"Custom sticky element"},action:{...p,type:"action",children:e.createElement(T,{key:"action-sticky-space",gap:"dependent"},e.createElement(R,null)," Action sticky element")},submenu:{...p,type:"submenu",title:"Submenu sticky element",children:[{children:"Submenu item"}]}},He={title:"Hexa UI Components/Dropdown/Stories",component:t,tags:["!autodocs"],...q},a={render:o=>e.createElement(B,null,e.createElement(t,{...o},e.createElement(r,null,"Json overlay")),e.createElement(t,{...o,overlay:e.createElement(t.Menu,{triggerSubMenuAction:"click"},e.createElement(t.SubMenu,{"data-testid":"submenu-item",title:"Submenu"},e.createElement(t.SubMenu,{"data-testid":"sub-submenu-item",title:"SubSubmenu"},e.createElement(t.MenuItem,{description:"With tooltip",onClick:n=>alert(`some action ${n}`),testId:"action-item",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},"action item"),e.createElement(t.MenuItem,{testId:"typography-item"},e.createElement(P,{type:"BTR5"},"Typography item")),e.createElement(t.MenuItem,{testId:"button-item"},e.createElement(r,null,"Button item"))),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(u,{key:"badge",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(i,{key:"UserAccount icon"})],description:"With tooltip",disabled:!0,testId:"with-tooltip-item",tooltip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},"Disabled"),e.createElement(t.MenuItem,{disabled:!0,testId:"disabled-item"},"Disabled"),e.createElement(t.SubMenu,{"data-testid":"disabled-submenu-item",disabled:!0,title:"Disabled submenu"},e.createElement(t.MenuItem,null,"you cant see that"))),e.createElement(t.MenuDivider,null),e.createElement(t.GroupTitle,null,"Additional components"),e.createElement(t.MenuItem,{componentsBefore:[e.createElement(L,{key:"indicator",mode:"high"}),e.createElement(i,{key:"UserAccount icon"})],description:"Some description",testId:"with-components-before-item"},"With components before"),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(i,{key:"UserAccount icon"}),e.createElement(u,{key:"badge",mode:"neutral",text:"25"})],description:"Some description",testId:"with-components-after-item"},"With components after"),e.createElement(t.MenuItem,{componentsAfter:[e.createElement(u,{key:"badge1",mode:"neutral",text:"25"})],componentsBefore:[e.createElement(i,{key:"UserAccount icon1"})],description:"Some description",testId:"before-and-after-item"},"Before and After"),e.createElement(t.SubMenu,{"data-testid":"submenu-with-after-item",title:"Submenu with after"},e.createElement(t.MenuItem,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci."),e.createElement(t.MenuItem,null,"Default item 2")))},e.createElement(r,null,"Components overlay"))),args:{overlay:c,trigger:["click"]}},m={render:o=>e.createElement(U,null,e.createElement(W,null,e.createElement(t,{...o,getPopupContainer:n=>n.parentElement}))),args:{overlay:c,children:e.createElement(r,null,"Click me and scroll my container"),trigger:["click"]}},s={render:o=>{const[n,d]=C.useState(["custom"]);return e.createElement(B,null,e.createElement(O,{items:H,value:n,onChange:d}),e.createElement(t,{...o,header:g[n[0]],footer:g[n[0]]},e.createElement(r,null,"Sticky header and footer")))},args:{overlay:c,popupMaxHeight:250,trigger:["click"]}},l={render:o=>{const n=C.useRef(null),d={padding:"20px",border:"1px solid green"},x={overflow:"hidden",height:"50px",border:"1px solid gray"};return e.createElement(A,{getPopupContainer:()=>n.current},e.createElement("div",{style:d,ref:n},e.createElement("span",null,"popup container"),e.createElement("div",{style:x},e.createElement(t,{...o}),e.createElement("span",null,"overflow: hidden"))))},args:{overlay:c,children:e.createElement(r,null,"Click"),trigger:["click"]}};var y,b,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <StoryColumn>
      <Dropdown {...args}>
        <Button>Json overlay</Button>
      </Dropdown>
      <Dropdown {...args} overlay={<Dropdown.Menu triggerSubMenuAction="click">
            <Dropdown.SubMenu data-testid="submenu-item" title="Submenu">
              <Dropdown.SubMenu data-testid="sub-submenu-item" title="SubSubmenu">
                <Dropdown.MenuItem description="With tooltip" onClick={menuInfo => alert(\`some action \${menuInfo}\`)} testId="action-item" tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                  action item
                </Dropdown.MenuItem>
                <Dropdown.MenuItem testId="typography-item">
                  <Text type="BTR5">Typography item</Text>
                </Dropdown.MenuItem>
                <Dropdown.MenuItem testId="button-item">
                  <Button>Button item</Button>
                </Dropdown.MenuItem>
              </Dropdown.SubMenu>

              <Dropdown.MenuItem componentsAfter={[<Badge key="badge" mode="neutral" text="25" />]} componentsBefore={[<Placeholder key="UserAccount icon" />]} description="With tooltip" disabled testId="with-tooltip-item" tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Disabled
              </Dropdown.MenuItem>

              <Dropdown.MenuItem disabled testId="disabled-item">
                Disabled
              </Dropdown.MenuItem>

              <Dropdown.SubMenu data-testid="disabled-submenu-item" disabled title="Disabled submenu">
                <Dropdown.MenuItem>
                  you cant see that
                </Dropdown.MenuItem>
              </Dropdown.SubMenu>
            </Dropdown.SubMenu>

            <Dropdown.MenuDivider />

            <Dropdown.GroupTitle>Additional components</Dropdown.GroupTitle>
            <Dropdown.MenuItem componentsBefore={[<Indicator key="indicator" mode="high" />, <Placeholder key="UserAccount icon" />]} description="Some description" testId="with-components-before-item">
              With components before
            </Dropdown.MenuItem>
            <Dropdown.MenuItem componentsAfter={[<Placeholder key="UserAccount icon" />, <Badge key="badge" mode="neutral" text="25" />]} description="Some description" testId="with-components-after-item">
              With components after
            </Dropdown.MenuItem>
            <Dropdown.MenuItem componentsAfter={[<Badge key="badge1" mode="neutral" text="25" />]} componentsBefore={[<Placeholder key="UserAccount icon1" />]} description="Some description" testId="before-and-after-item">
              Before and After
            </Dropdown.MenuItem>

            <Dropdown.SubMenu data-testid="submenu-with-after-item" title="Submenu with after">
              <Dropdown.MenuItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque.
                Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien,
                sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor
                venenatis non nec odio. Ut orci.
              </Dropdown.MenuItem>

              <Dropdown.MenuItem>
                Default item 2
              </Dropdown.MenuItem>
            </Dropdown.SubMenu>
          </Dropdown.Menu>}>
        <Button>Components overlay</Button>
      </Dropdown>
    </StoryColumn>,
  args: {
    overlay: defaultDropdownOverlay,
    trigger: ['click']
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,S,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: DropdownProps) => <ScrollableContainer>
      <ContentContainer>
        <Dropdown {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>,
  args: {
    overlay: defaultDropdownOverlay,
    children: <Button>Click me and scroll my container</Button>,
    trigger: ['click']
  }
}`,...(h=(S=m.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var D,I,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    const [view, setView] = useState<string[]>(['custom']);
    return <StoryColumn>
        <SegmentedButton items={viewItems} value={view} onChange={setView} />
        <Dropdown {...args} header={stickyItems[view[0]]} footer={stickyItems[view[0]]}>
          <Button>Sticky header and footer</Button>
        </Dropdown>
      </StoryColumn>;
  },
  args: {
    overlay: defaultDropdownOverlay,
    popupMaxHeight: 250,
    trigger: ['click']
  }
}`,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var M,v,k;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: DropdownProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const containerStyle: CSSProperties = {
      padding: '20px',
      border: '1px solid green'
    };
    const hiddenContainer: CSSProperties = {
      overflow: 'hidden',
      height: '50px',
      border: '1px solid gray'
    };
    return <PopupConfigProvider getPopupContainer={() => containerRef.current!}>
        <div style={containerStyle} ref={containerRef}>
          <span>popup container</span>
          <div style={hiddenContainer}>
            <Dropdown {...args} />
            <span>overflow: hidden</span>
          </div>
        </div>
      </PopupConfigProvider>;
  },
  args: {
    overlay: defaultDropdownOverlay,
    children: <Button>Click</Button>,
    trigger: ['click']
  }
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const Ve=["Overlay","WithinScrollableContainer","WithStickyHeaderAndFooter","CustomPopupContainer"];export{l as CustomPopupContainer,a as Overlay,s as WithStickyHeaderAndFooter,m as WithinScrollableContainer,Ve as __namedExportsOrder,He as default};
