import{a as s,b as c}from"./StoryComponents-B9rb_aq9.js";import{R as r,H as d}from"./iframe-aBV3CYH3.js";import{D as n}from"./Divider-C5DkIf6Z.js";import{d as l}from"./Divider.stories-DASKFCXk.js";import"./FormLabel-d3dW3auX.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DY7rUT5S.js";import"./TextReducer-D8U9kJ52.js";import"./index-BkZLf1_p.js";import"./omit-DXgDXInf.js";import"./type-GmYgjqv3.js";import"./colors-nuNhf3hF.js";import"./wave-iSaySfuY.js";import"./Group-MwZqih5e.js";import"./propPresentation-DwmroTjb.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const o=d.div`
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
