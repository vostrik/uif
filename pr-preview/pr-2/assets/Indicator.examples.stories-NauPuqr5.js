import{T as I}from"./Palette-B35RaT7h.js";import{R as e,c as k,H as T}from"./iframe-D5i9Ygdo.js";import{i as h}from"./Indicator.stories-myH2QdsD.js";import{I as t,a as l}from"./Indicator-gZ8T3Y3p.js";import"./preload-helper-Dp1pzeXC.js";import"./propPresentation-B03l1IYW.js";import"./blocks-D648YVJ_.js";import"./index-D6Hq5B5y.js";import"./withMeta-DvsF1LmS.js";import"./DocPageLayout-D9kX8XlS.js";import"./TextReducer-Dagp5bHw.js";import"./SubComponents-3pT2nS5V.js";import"./TextWithTruncation-BxT_CxC-.js";import"./ArrowDownSolid-BF9zMbAG.js";import"./ArrowRightSolid-szArsg1u.js";import"./Divider-BeaQgGYc.js";import"./Badge-DvZDnB4g.js";import"./type-CpBfXgi8.js";import"./colors-TzwrEhrS.js";import"./StatusOkOutline-Dm0nm6Vh.js";import"./Grid-DOURr8B4.js";import"./Markdown-CmBAv1sP.js";import"./index-BCZ1XEfV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const Z={title:"Hexa UI Components/Indicator/Stories",component:t,tags:["!autodocs"],...h},n={},i=T.span`
  width: 15px;
  height: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 10px;
  }
`,a={render:o=>e.createElement(e.Fragment,null,e.createElement("div",{style:{background:"#2735448c",borderRadius:5,marginBottom:16}},e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(t,{...o,mode:r}))))),e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(t,{...o,mode:r}))))),argTypes:{mode:{control:!1},border:{control:!1}},args:{border:!0}},s={render:o=>e.createElement(e.Fragment,null,e.createElement("div",{style:{background:"#2735448c",borderRadius:5,marginBottom:16}},e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(t,{...o,mode:r,border:!1}))))),e.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.map(r=>e.createElement(i,{key:r},e.createElement(t,{...o,mode:r,border:!1}))))),argTypes:{mode:{control:!1},border:{control:!1}}},d={render:()=>e.createElement(I,{source:k.indicator}),argTypes:{mode:{control:!1},border:{control:!1}}};var m,p,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,y,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: IndicatorProps) => <>
      <div style={{
      background: '#2735448c',
      borderRadius: 5,
      marginBottom: 16
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
          {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} /></Cell>)}
        </div>
      </div>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} /></Cell>)}
      </div>
    </>,
  argTypes: {
    mode: {
      control: false
    },
    border: {
      control: false
    }
  },
  args: {
    border: true
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,x,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: IndicatorProps) => <>
      <div style={{
      background: '#2735448c',
      borderRadius: 5,
      marginBottom: 16
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
          {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} border={false} /></Cell>)}
        </div>
      </div>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {IndicatorModes.map(mode => <Cell key={mode}><IndicatorComponent {...args} mode={mode} border={false} /></Cell>)}
      </div>
    </>,
  argTypes: {
    mode: {
      control: false
    },
    border: {
      control: false
    }
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,C,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ThemedPalette source={componentColors.indicator} />,
  argTypes: {
    mode: {
      control: false
    },
    border: {
      control: false
    }
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const $=["Basic","Modes","WithoutBorder","ColorTokens"];export{n as Basic,d as ColorTokens,a as Modes,s as WithoutBorder,$ as __namedExportsOrder,Z as default};
