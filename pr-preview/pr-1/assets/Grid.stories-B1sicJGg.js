import{M as i,R as e,H as d}from"./iframe-DIzBSOsa.js";import{w as p}from"./withMeta-CymzVPc2.js";import{G as r}from"./Grid-xZbyb4bX.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ycYJCuGf.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./TextReducer-B8LAxaee.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Divider-B7r6BzqD.js";import"./Badge-BnYETXMc.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";const c={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,inBuilder:"Используется под названием «Grid»"},l="Grid",u="Компонент для композиции элементов на странице с помощью грид системы",g="Расположение элементов на странице и внутри самостоятельных блоков",y={dod:c,component:l,description:u,usage:g},O={title:"Hexa UI Components/Layout/Grid",component:r,argTypes:{cols:{control:{type:"number",min:1}},layoutProperty:{control:"object"}},args:{layoutProperty:{gap:"grouped"},testId:"grid-test-id",klId:"grid-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:p(y)}}},b=d.div`
  width: 100%;
  height: 100%;
  border : solid 2px blue;
  text-align: center;
  font-weight: bold;
`,G=Array(28).fill("empty value"),t={render:m=>e.createElement(e.Fragment,null,e.createElement(r,{...m},G.map((f,o)=>e.createElement(r.Item,{key:o},e.createElement(b,null,"Widget #",o+1)))))};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: GridProps) => {
    return <>
        <Grid {...args}>
          {defaultArray.map((el, i) => <Grid.Item key={i}>
              <Widget>Widget #{i + 1}</Widget>
            </Grid.Item>)}
        </Grid>
      </>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,O as default};
