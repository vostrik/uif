import{M as s,R as e,H as i}from"./iframe-DZ6CNdmR.js";import{w as g}from"./withMeta-b3qPVvuK.js";import{R as l}from"./Repeater-C9xAF0zX.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout--9QtG6bt.js";import"./blocks-DW5239T7.js";import"./index-DwOr7VHC.js";import"./TextReducer-BUFzZryR.js";import"./SubComponents-C8gYiU3N.js";import"./TextWithTruncation-Oqju7yY8.js";import"./ArrowDownSolid-eeOjxQzr.js";import"./ArrowRightSolid-74XVFpn5.js";import"./Divider-CeH8hLX2.js";import"./Badge-MyBI9tsY.js";import"./type-CxXYYU3T.js";import"./colors-uxJ92uqJ.js";import"./Indicator-x62EYK4r.js";import"./StatusOkOutline-9gbc7hr8.js";import"./Grid-D0SzO1ht.js";import"./Markdown-AzZ1dVDo.js";import"./index-DR4iiykL.js";import"./shouldForwardProp-Cdy-RLhZ.js";const u={inBuilder:"Используется под названием «Цикл»"},y="Повторяет компонент несколько раз.",N={dod:u,description:y},x=i.div`
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
