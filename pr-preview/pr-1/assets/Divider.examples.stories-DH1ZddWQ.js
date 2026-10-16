import{a as s,b as c}from"./StoryComponents-CK7kJD3s.js";import{R as r,H as d}from"./iframe-CuxZtUxP.js";import{D as n}from"./Divider-FNnXL9Gj.js";import{d as l}from"./Divider.stories-rjxsaUtA.js";import"./FormLabel-AJ1msRQ3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-Dt4urbN1.js";import"./TextReducer-DDrjI2Ts.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./propPresentation-CPSL2Fd9.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const o=d.div`
  width: 50px;
  height: 50px;
  background: grey;
`,w={title:"Hexa UI Components/Divider/Stories",component:n,tags:["!autodocs"],...l},e={render:t=>{const a=t.direction==="horizontal"?s:c;return r.createElement(a,null,r.createElement(o,null),r.createElement(n,{...t}),r.createElement(o,null),r.createElement(n,{...t}),r.createElement(o,null))}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    const Wrapper = args.direction === 'horizontal' ? StoryColumn : StoryWrapper;
    return <Wrapper>
        <SomeContent />
        <DividerComponent {...args} />
        <SomeContent />
        <DividerComponent {...args} />
        <SomeContent />
      </Wrapper>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const I=["Basic"];export{e as Basic,I as __namedExportsOrder,w as default};
