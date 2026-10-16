import{a as s,b as c}from"./StoryComponents-D51pRFFv.js";import{R as r,H as d}from"./iframe-DXVY_al-.js";import{D as n}from"./Divider-Hc8qqOlX.js";import{d as l}from"./Divider.stories-CzSuV9lA.js";import"./FormLabel-g5DQo_wL.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./propPresentation-DzyQPo2A.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const o=d.div`
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
