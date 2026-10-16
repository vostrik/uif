import{M as s,R as e,H as i}from"./iframe-CMq2KAbH.js";import{w as g}from"./withMeta-Dv8G7Dbj.js";import{R as l}from"./Repeater-D0_1nEJo.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CwgI-MzD.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./TextReducer-Dpv34lw7.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Divider-C_lHVbvw.js";import"./Badge-DZq-1HSe.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./Indicator-PCazPGCQ.js";import"./StatusOkOutline-WlwXIENv.js";import"./Grid-BaI88Kn5.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";const u={inBuilder:"Используется под названием «Цикл»"},y="Повторяет компонент несколько раз.",N={dod:u,description:y},x=i.div`
  width: 700px;
`,F={title:"Other/Repeater",component:l,parameters:{badges:[s.dev,s.missingDesign],docs:{page:g(N)}}},E=({name:t,className:n,key:r})=>e.createElement(d,{key:r},e.createElement("a",{className:n},t)),R=({name:t,className:n,key:r})=>e.createElement(d,{key:r},e.createElement("span",{className:n},t)),d=i.p`
  .cls1 {
    font-size: 30px
  }
  .cls2 {
    font-size: 10px
  }
`,a={Link:E,Text:R},o={render:({componentName:t,...n})=>e.createElement(x,null,e.createElement(l,{...n,component:a[t]})),args:{data:[{name:"item 1",className:"cls1"},{name:"item 2",className:"cls2"}]},argTypes:{componentName:{options:Object.keys(a),control:{type:"select"}}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    componentName,
    ...rest
  }: RepeaterPropsStory) => <Wrapper>
      <Repeater {...rest} component={components[componentName]} />
    </Wrapper>,
  args: {
    data: [{
      name: 'item 1',
      className: 'cls1'
    }, {
      name: 'item 2',
      className: 'cls2'
    }]
  },
  argTypes: {
    componentName: {
      options: Object.keys(components),
      control: {
        type: 'select'
      }
    }
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const G=["Basic"];export{o as Basic,G as __namedExportsOrder,F as default};
