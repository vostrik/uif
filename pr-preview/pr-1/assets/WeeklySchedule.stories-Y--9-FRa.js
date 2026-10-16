import{M as s,R as r,H as u}from"./iframe-CE3A2i_R.js";import{w as y}from"./withMeta-ChZHBTGH.js";import{W as p}from"./WeeklySchedule-D_EMMa_Y.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CSin2tY8.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./TextReducer-BWwC3ime.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Divider-BfYsgfay.js";import"./Badge-COlrkFgX.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";const h={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},g="WeeklySchedule",S="Компонент с выбором расписания по дням недели",k=`Расписание можно выбирать посредством клика на каждую ячейку, а так же выделением с уходом за область компонента.

 Компонент подстраивается под размер родителя, min-height=350px, для корректного отображения столбца со временем`,W={dod:h,component:g,usage:S,description:k},f={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},x={monday:[0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],tuesday:[0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],wednesday:[0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],thursday:[0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],friday:[0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],saturday:[0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0],sunday:[1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0]},w={monday:"Пн",tuesday:"Вт",wednesday:"Ср",thursday:"Чт",friday:"Пт",saturday:"Сб",sunday:"Вс"},b={selected:"Разрешено",notSelected:"Запрещено"},Q={title:"Other/WeeklySchedule",component:p,parameters:{badges:[s.stable,s.missingDesign],docs:{page:y(W)}},args:{initialState:f,legend:b,daysOfWeek:w,testId:"weekly-schedule-test-id"},decorators:[(a,m)=>r.createElement(T,null,r.createElement(a,{...m}))]},T=u.div`
  display: inline-block;
  text-align: center;
  width: 420px;
  height: 350px;
  margin: 4px 4px 8px 4px;
`,e={render:({...a})=>r.createElement(p,{...a})},t={args:{initialState:x}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    ...args
  }: WeeklyScheduleProps) => <WeeklySchedule {...args} />
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    initialState: initialScheduleWithSelected
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const U=["Basic","WithInitialSelected"];export{e as Basic,t as WithInitialSelected,U as __namedExportsOrder,Q as default};
