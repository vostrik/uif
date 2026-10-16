import{T as W}from"./Palette-B17Qk-oR.js";import{c as _,M as p,R as e,H as B}from"./iframe-kzbRZKTh.js";import{a as P}from"./StoryComponents-B_SbX1GS.js";import{o as c}from"./Placeholder-Drb6ifDx.js";import{M as H,S as T}from"./types-Nxv71BsN.js";import{S as l}from"./Status-DDniE8s5.js";import"./preload-helper-Dp1pzeXC.js";import"./FormLabel-Bk6eWrFo.js";import"./Tag-B5Krc590.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./Divider-DtbUpKWs.js";import"./Indicator-BqqK5Xic.js";const X={title:"Hexa UI Components/Status/Stories",component:l,tags:["!autodocs"],parameters:{badges:[p.stable,p.reviewedByDesign],design:H.pixsoView}},G=B.span`
  padding: 2px 10px;
`,t={args:{label:"Status",icon:e.createElement(c,null)}},o={args:{label:"Status",icon:e.createElement(c,null)},render:r=>e.createElement(P,null,T.map(a=>e.createElement(G,{key:a},e.createElement(l,{mode:a,...r}))))},s={args:{label:"Status"},render:r=>e.createElement(P,null,T.map(a=>e.createElement(G,{key:a},e.createElement(l,{mode:a,...r}))))},n={args:{items:Array.from({length:5},(r,a)=>({label:`Status ${a+1}`,icon:e.createElement(c,null)}))},render:r=>e.createElement(l.Group,{...r})},m={args:{source:_.status},render:r=>e.createElement(W,{...r})};var i,d,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Status',
    icon: <Placeholder />
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,S,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Status',
    icon: <Placeholder />
  },
  render: args => <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,E,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Status'
  },
  render: args => <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>
}`,...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var h,f,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 5
    }, (_, index) => ({
      label: \`Status \${index + 1}\`,
      icon: <Placeholder />
    }))
  },
  render: args => <Status.Group {...args} />
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,M,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    source: componentColors.status
  },
  render: args => <ThemedPalette {...args} />
}`,...(I=(M=m.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const Y=["Basic","WithIcons","WithIndicator","Group","ColorTokens"];export{t as Basic,m as ColorTokens,n as Group,o as WithIcons,s as WithIndicator,Y as __namedExportsOrder,X as default};
