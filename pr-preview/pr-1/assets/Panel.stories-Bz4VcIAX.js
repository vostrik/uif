import{w as B}from"./withDesignControls-DTwO-e1q.js";import{T as U}from"./Tag-Dt4urbN1.js";import{R as e,T as b}from"./iframe-CuxZtUxP.js";import{P as a,O as l,m as t,a as w,s as F}from"./PanelStoryLayout-oBv8ShGl.js";import{P as r}from"./Panel-CbUgwczo.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./preload-helper-Dp1pzeXC.js";import"./withMeta-BqFg98vY.js";import"./DocPageLayout-laC5MAc2.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./SubComponents-DjSVH-Ma.js";import"./TextWithTruncation-DGkObJqj.js";import"./ArrowDownSolid-DT8risoU.js";import"./ArrowRightSolid-BD1ZcQ2R.js";import"./Divider-FNnXL9Gj.js";import"./Badge-ZSNeDhrE.js";import"./Indicator-BDm4vtnD.js";import"./StatusOkOutline-MSqmg68d.js";import"./Grid-9ETswfwf.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";const M=["small","medium","large"],de={component:r,title:"Hexa UI Components/Panel",...B({meta:F})},s={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),argTypes:{resizeHandle:{control:!1}}},i={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),args:{sectionBottom:e.createElement(b,null,"Section bottom ReactNode")},argTypes:{resizeHandle:{control:!1}}},m={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n},t)),args:{elementAfter:e.createElement(U,null,"Tag after")},argTypes:{resizeHandle:{control:!1}}},c={render:n=>e.createElement(a,null,e.createElement(l,null),M.map(o=>e.createElement(r,{...n,key:o,title:o.charAt(0).toUpperCase()+o.slice(1),titleSize:o},t))),args:{initialSize:150},argTypes:{title:{control:!1},titleSize:{control:!1},resizeHandle:{control:!1}}},p={render:n=>e.createElement(a,null,e.createElement(r,{...n,resizeHandle:"right",title:"Left Panel"},t),e.createElement(w,null,e.createElement(l,null),e.createElement(r,{...n,resizeHandle:"top",title:"Footer Panel",initialSize:150},t)),e.createElement(r,{...n,title:"Right Panel"},t)),argTypes:{resizeHandle:{control:!1},initialSize:{control:!1},title:{control:!1}},args:{}},d={render:n=>e.createElement(a,null,e.createElement(l,null),e.createElement(r,{...n,padding:"medium"},t)),argTypes:{resizeHandle:{control:!1},padding:{control:!1}}};var u,g,P;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
