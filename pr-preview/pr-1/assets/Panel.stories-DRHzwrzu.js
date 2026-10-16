import{w as B}from"./withDesignControls-DTwO-e1q.js";import{T as U}from"./Tag-D2J0DCjt.js";import{R as e,T as b}from"./iframe-C5ywg3yF.js";import{P as a,O as l,m as t,a as w,s as F}from"./PanelStoryLayout-d68lngKg.js";import{P as r}from"./Panel-eYrp64Jv.js";import"./TextReducer-DYBA9RxT.js";import"./index-B9cL_k2v.js";import"./omit-DXgDXInf.js";import"./type-CYimqQsV.js";import"./colors-CEAxVyTa.js";import"./wave-6D6RLP9Y.js";import"./Group-M-SjioCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./withMeta-bWUFpinF.js";import"./DocPageLayout-BUnx0FMe.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./SubComponents-kdha7qeJ.js";import"./TextWithTruncation-B3iFB_Ef.js";import"./ArrowDownSolid-_KyHq5Me.js";import"./ArrowRightSolid-Duj2LKDv.js";import"./Divider-DL-FS3qr.js";import"./Badge-ejx6pHZd.js";import"./Indicator-DkDd6DuE.js";import"./StatusOkOutline-CklF5FNA.js";import"./Grid-OMao_GWl.js";import"./Markdown-fvY8LtSv.js";import"./index-DPF1SB_W.js";import"./shouldForwardProp-Cdy-RLhZ.js";const M=["small","medium","large"],de={component:r,title:"Hexa UI Components/Panel",...B({meta:F})},s={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),argTypes:{resizeHandle:{control:!1}}},i={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),args:{sectionBottom:e.createElement(b,null,"Section bottom ReactNode")},argTypes:{resizeHandle:{control:!1}}},m={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),args:{elementAfter:e.createElement(U,null,"Tag after")},argTypes:{resizeHandle:{control:!1}}},c={render:n=>e.createElement(a,null,e.createElement(l,null),M.map(o=>e.createElement(r,{...n,key:o,title:o.charAt(0).toUpperCase()+o.slice(1),titleSize:o},t))),args:{initialSize:150},argTypes:{title:{control:!1},titleSize:{control:!1},resizeHandle:{control:!1}}},p={render:n=>e.createElement(a,null,e.createElement(r,{...n,resizeHandle:"right",title:"Left Panel"},t),e.createElement(w,null,e.createElement(l,null),e.createElement(r,{...n,resizeHandle:"top",title:"Footer Panel",initialSize:150},t)),e.createElement(r,{...n,title:"Right Panel"},t)),argTypes:{resizeHandle:{control:!1},initialSize:{control:!1},title:{control:!1}},args:{}},d={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n,padding:"medium"},t)),argTypes:{resizeHandle:{control:!1},padding:{control:!1}}};var u,g,P;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  argTypes: {
    resizeHandle: {
      control: false
    }
  }
}`,...(P=(g=s.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var f,T,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  args: {
    sectionBottom: <Text>Section bottom ReactNode</Text>
  },
  argTypes: {
    resizeHandle: {
      control: false
    }
  }
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var y,E,S;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  args: {
    elementAfter: <Tag>Tag after</Tag>
  },
  argTypes: {
    resizeHandle: {
      control: false
    }
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var h,H,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <OtherArea></OtherArea>
        {panelTitleSize.map(size => <Panel {...args} key={size} title={size.charAt(0).toUpperCase() + size.slice(1)} titleSize={size}>
            {mockText}
          </Panel>)}
      </PanelsLayout>;
  },
  args: {
    initialSize: 150
  },
  argTypes: {
    title: {
      control: false
    },
    titleSize: {
      control: false
    },
    resizeHandle: {
      control: false
    }
  }
}`,...(A=(H=c.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var x,L,O;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <PanelsLayout>
        <Panel {...args} resizeHandle="right" title="Left Panel">
          {mockText}
        </Panel>
        <PanelsCol>
          <OtherArea></OtherArea>
          <Panel {...args} resizeHandle="top" title="Footer Panel" initialSize={150}>
            {mockText}
          </Panel>
        </PanelsCol>
        <Panel {...args} title="Right Panel">
          {mockText}
        </Panel>
      </PanelsLayout>;
  },
  argTypes: {
    resizeHandle: {
      control: false
    },
    initialSize: {
      control: false
    },
    title: {
      control: false
    }
  },
  args: {}
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var k,C,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <PanelsLayout>
      <OtherArea />
      <Panel {...args} padding="medium">
        {mockText}
      </Panel>
    </PanelsLayout>,
  argTypes: {
    resizeHandle: {
      control: false
    },
    padding: {
      control: false
    }
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const ue=["SinglePanel","SectionBottom","ElementAfterTitle","Headers","Variations","MediumPadding"];export{m as ElementAfterTitle,c as Headers,d as MediumPadding,i as SectionBottom,s as SinglePanel,p as Variations,ue as __namedExportsOrder,de as default};
