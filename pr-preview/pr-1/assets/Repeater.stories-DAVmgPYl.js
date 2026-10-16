import{M as s,R as e,H as i}from"./iframe-D7vGURqZ.js";import{w as g}from"./withMeta-AvforKRz.js";import{R as l}from"./Repeater-BqumouCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-COy0blt1.js";import"./blocks-x_TkxTby.js";import"./index-Biot0zek.js";import"./TextReducer-yX199pg5.js";import"./SubComponents-DsXyPHVa.js";import"./TextWithTruncation-DCb05iIM.js";import"./ArrowDownSolid-DlynUjOu.js";import"./ArrowRightSolid-BtdCqW53.js";import"./Divider-51vw4bax.js";import"./Badge-CJ1lMX1D.js";import"./type-DgSh0ByZ.js";import"./colors-C-4HMPnB.js";import"./Indicator-CQNXQNlG.js";import"./StatusOkOutline-BvinxEvP.js";import"./Grid-C62gR1jB.js";import"./Markdown-CRrCZtGQ.js";import"./index-6XHrBjkF.js";import"./shouldForwardProp-Cdy-RLhZ.js";const u={inBuilder:"Используется под названием «Цикл»"},y="Повторяет компонент несколько раз.",N={dod:u,description:y},x=i.div`
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
