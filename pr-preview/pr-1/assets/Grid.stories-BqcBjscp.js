import{M as i,R as e,H as d}from"./iframe-Df7vKfJt.js";import{w as p}from"./withMeta-D3rOwpne.js";import{G as r}from"./Grid-BE_VlTzM.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BXWkA_DB.js";import"./blocks-CkvcI2q2.js";import"./index-Z1IA21Yl.js";import"./TextReducer-PfRkTMxb.js";import"./SubComponents-Cs8A_EB6.js";import"./TextWithTruncation-lg2aspiP.js";import"./ArrowDownSolid-DgIE-i6b.js";import"./ArrowRightSolid-h0t1Ghk7.js";import"./Divider-DpGIrgZy.js";import"./Badge-B4SoFXPk.js";import"./type-BPSO7Hcc.js";import"./colors-BMjSx7ej.js";import"./Indicator-BtYVEqOa.js";import"./StatusOkOutline-C_OQ_OEK.js";import"./Markdown-C6fkmFkS.js";import"./index-Cmh3yLHD.js";import"./shouldForwardProp-Cdy-RLhZ.js";const c={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,inBuilder:"Используется под названием «Grid»"},l="Grid",u="Компонент для композиции элементов на странице с помощью грид системы",g="Расположение элементов на странице и внутри самостоятельных блоков",y={dod:c,component:l,description:u,usage:g},O={title:"Hexa UI Components/Layout/Grid",component:r,argTypes:{cols:{control:{type:"number",min:1}},layoutProperty:{control:"object"}},args:{layoutProperty:{gap:"grouped"},testId:"grid-test-id",klId:"grid-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:p(y)}}},b=d.div`
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
