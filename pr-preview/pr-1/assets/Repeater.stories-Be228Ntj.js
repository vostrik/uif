import{M as s,R as e,H as i}from"./iframe-CE3A2i_R.js";import{w as g}from"./withMeta-ChZHBTGH.js";import{R as l}from"./Repeater-C7e8f0sn.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CSin2tY8.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./TextReducer-BWwC3ime.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Divider-BfYsgfay.js";import"./Badge-COlrkFgX.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";const u={inBuilder:"Используется под названием «Цикл»"},y="Повторяет компонент несколько раз.",N={dod:u,description:y},x=i.div`
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
