import{M as s,R as e,H as i}from"./iframe-DIzBSOsa.js";import{w as g}from"./withMeta-CymzVPc2.js";import{R as l}from"./Repeater-BdxtTsa2.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ycYJCuGf.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./TextReducer-B8LAxaee.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Divider-B7r6BzqD.js";import"./Badge-BnYETXMc.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";const u={inBuilder:"Используется под названием «Цикл»"},y="Повторяет компонент несколько раз.",N={dod:u,description:y},x=i.div`
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
