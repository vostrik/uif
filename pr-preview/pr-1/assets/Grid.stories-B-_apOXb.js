import{M as i,R as e,H as d}from"./iframe-C5ywg3yF.js";import{w as p}from"./withMeta-bWUFpinF.js";import{G as r}from"./Grid-OMao_GWl.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BUnx0FMe.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./TextReducer-DYBA9RxT.js";import"./SubComponents-kdha7qeJ.js";import"./TextWithTruncation-B3iFB_Ef.js";import"./ArrowDownSolid-_KyHq5Me.js";import"./ArrowRightSolid-Duj2LKDv.js";import"./Divider-DL-FS3qr.js";import"./Badge-ejx6pHZd.js";import"./type-CYimqQsV.js";import"./colors-CEAxVyTa.js";import"./Indicator-DkDd6DuE.js";import"./StatusOkOutline-CklF5FNA.js";import"./Markdown-fvY8LtSv.js";import"./index-DPF1SB_W.js";import"./shouldForwardProp-Cdy-RLhZ.js";const c={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,inBuilder:"Используется под названием «Grid»"},l="Grid",u="Компонент для композиции элементов на странице с помощью грид системы",g="Расположение элементов на странице и внутри самостоятельных блоков",y={dod:c,component:l,description:u,usage:g},O={title:"Hexa UI Components/Layout/Grid",component:r,argTypes:{cols:{control:{type:"number",min:1}},layoutProperty:{control:"object"}},args:{layoutProperty:{gap:"grouped"},testId:"grid-test-id",klId:"grid-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:p(y)}}},b=d.div`
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
