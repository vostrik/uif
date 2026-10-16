import{T as P}from"./Palette-BWzVK3dX.js";import{c as l,R as e}from"./iframe-DIzBSOsa.js";import{o as p}from"./Placeholder-CjFf63ey.js";import{S as W}from"./SegmentedControl-BA3uCRNJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Dropdown-DEik8dKH.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-Dlds-xGy.js";import"./useMergedState-IHysQFAx.js";import"./focus-BglFpdoy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DXYEwFBz.js";import"./Toggle-BwnEG2Z9.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";import"./type-CN9KIPGq.js";import"./wave-CZhb61AN.js";import"./FormLabel-pcEEqmjq.js";import"./Tag-UnCHTvWf.js";import"./TextReducer-B8LAxaee.js";import"./index-DmRlaPE6.js";import"./colors-DWd9yYDE.js";import"./Group-DZSM1WME.js";import"./Divider-B7r6BzqD.js";import"./Loader-t8IvB7CC.js";import"./index-B9He-UhX.js";import"./v4-BoP187Zn.js";import"./Menu3-C-Nwvldj.js";import"./Badge-BnYETXMc.js";import"./Indicator-Byl-sjIi.js";const r=[{name:"one",content:"default",properties:{state:"disabled",text:"im text from tab One properties"},text:"One"},{name:"two",content:"default",properties:{state:"disabled",text:"im text from tab Two properties"},text:"Two"},{name:"three",content:"another",properties:{text:"im text from tab Three properties"},text:"Three"},{name:"four",content:"another",properties:{state:"disabled",text:"im text from tab Four properties"},text:"Four"}],v={default:t=>e.createElement("div",null,String((t==null?void 0:t.text)??"")),another:t=>e.createElement("div",null,String((t==null?void 0:t.text)??""))},it={title:"Hexa UI Components/SegmentedControl/Stories",component:W,tags:["!autodocs"]},o={size:"large",tabsData:r,contentData:v,defaultActiveTab:"two",testId:"segmented-control-test-id"},a={args:o},n={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null)}))}},s={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null),indicator:Math.floor(Math.random()*10)>5?"new":"critical"}))}},m={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null),counter:{number:Math.floor(Math.random()*14),mode:Math.floor(Math.random()*10)>5?"critical_transparent":"neutral_transparent"}}))}},c={args:{...o,tabsData:r.map(t=>({...t,iconBefore:e.createElement(p,null),infoTooltip:"Lorem ipsum"}))}},i={args:{source:{segmented_control:l.segmented_control,segmented_control_item:l.segmented_control_item}},render:t=>e.createElement(P,{...t})};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
