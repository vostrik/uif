import{T as P}from"./Palette-9c62pNPs.js";import{c as l,R as e}from"./iframe-81MZLAwA.js";import{o as p}from"./Placeholder-o3pofUe9.js";import{S as W}from"./SegmentedControl-C3BKPc57.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-CPc30GEo.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-YFPB3eZ_.js";import"./useMergedState-i9W27Uf3.js";import"./focus-B5e4OkQI.js";import"./omit-DXgDXInf.js";import"./ArrowRight-tad8nQ3_.js";import"./Toggle-8vjpudf9.js";import"./AdditionalContent-BO_qq22o.js";import"./HelpMessage-DWvNdbZo.js";import"./type-CGSjHdi-.js";import"./wave-YGWrPKVL.js";import"./FormLabel-DA9R7IzT.js";import"./Tag-F-RHo_zh.js";import"./TextReducer-DAQahvzG.js";import"./index-BxcIeMF-.js";import"./colors-Czl4z4ke.js";import"./Group-CFZXzKY0.js";import"./Divider-BRbYwtji.js";import"./Loader-zSayompk.js";import"./index-BUvvmL18.js";import"./v4-BoP187Zn.js";import"./Menu3-CBoDCCT8.js";import"./Badge-Bt5y04C0.js";import"./Indicator-DMhQJtUF.js";const r=[{name:"one",content:"default",properties:{state:"disabled",text:"im text from tab One properties"},text:"One"},{name:"two",content:"default",properties:{state:"disabled",text:"im text from tab Two properties"},text:"Two"},{name:"three",content:"another",properties:{text:"im text from tab Three properties"},text:"Three"},{name:"four",content:"another",properties:{state:"disabled",text:"im text from tab Four properties"},text:"Four"}],v={default:t=>e.createElement("div",null,String((t==null?void 0:t.text)??"")),another:t=>e.createElement("div",null,String((t==null?void 0:t.text)??""))},it={title:"Hexa UI Components/SegmentedControl/Stories",component:W,tags:["!autodocs"]},o={size:"large",tabsData:r,contentData:v,defaultActiveTab:"two",testId:"segmented-control-test-id"},a={args:o},n={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null)}))}},s={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null),indicator:Math.floor(Math.random()*10)>5?"new":"critical"}))}},m={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null),counter:{number:Math.floor(Math.random()*14),mode:Math.floor(Math.random()*10)>5?"critical_transparent":"neutral_transparent"}}))}},c={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null),infoTooltip:"Lorem ipsum"}))}},i={args:{source:{segmented_control:l.segmented_control,segmented_control_item:l.segmented_control_item}},render:t=>e.createElement(P,{...t})};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: baseArgs
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({
      ...tab,
      iconBefore: <Placeholder />
    }))
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var _,x,D;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({
      ...tab,
      iconBefore: <Placeholder />,
      indicator: Math.floor(Math.random() * 10) > 5 ? 'new' : 'critical'
    }))
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var T,M,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({
      ...tab,
      iconBefore: <Placeholder />,
      counter: {
        number: Math.floor(Math.random() * 14),
        mode: Math.floor(Math.random() * 10) > 5 ? 'critical_transparent' : 'neutral_transparent'
      }
    }))
  }
}`,...(S=(M=m.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var B,C,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({
      ...tab,
      iconBefore: <Placeholder />,
      infoTooltip: 'Lorem ipsum'
    }))
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var A,w,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    source: {
      segmented_control: componentColors.segmented_control,
      segmented_control_item: componentColors.segmented_control_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const pt=["Basic","Icons","WithIndicator","WithCounter","WithTooltip","ColorTokens"];export{a as Basic,i as ColorTokens,n as Icons,m as WithCounter,s as WithIndicator,c as WithTooltip,pt as __namedExportsOrder,it as default};
