import{M as s,R as e,H as i}from"./iframe-81MZLAwA.js";import{w as g}from"./withMeta-CZpsweCu.js";import{R as l}from"./Repeater-LXYMh8Xs.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-D1x5goyM.js";import"./blocks-DAJiVhat.js";import"./index--IXlTilW.js";import"./TextReducer-DAQahvzG.js";import"./SubComponents-COJkahQr.js";import"./TextWithTruncation-MTYpUBSq.js";import"./ArrowDownSolid-BNg_rdCk.js";import"./ArrowRightSolid-CIsLKAs9.js";import"./Divider-BRbYwtji.js";import"./Badge-Bt5y04C0.js";import"./type-CGSjHdi-.js";import"./colors-Czl4z4ke.js";import"./Indicator-DMhQJtUF.js";import"./StatusOkOutline-C0orjNqV.js";import"./Grid-oItbGHay.js";import"./Markdown-EvwJV-Av.js";import"./index-BAR_5hUd.js";import"./shouldForwardProp-Cdy-RLhZ.js";const u={inBuilder:"Используется под названием «Цикл»"},y="Повторяет компонент несколько раз.",N={dod:u,description:y},x=i.div`
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
