import{T as k}from"./Palette-iFbb-9f5.js";import{c as s,M as y,O as A,R as r}from"./iframe-CE3A2i_R.js";import{w as x}from"./withMeta-ChZHBTGH.js";import{s as b,a}from"./helpers-BytZKRkB.js";import{A as g}from"./Anchor-Ioz7VyII.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CSin2tY8.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./TextReducer-BWwC3ime.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Divider-BfYsgfay.js";import"./Badge-COlrkFgX.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./useIntersectionChildren-81HwgwMr.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./useMergedState-CJ57ru4s.js";import"./focus-CQD7WjR7.js";import"./omit-DXgDXInf.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./wave-id3Y8ngN.js";import"./FormLabel-BTPnuYAd.js";import"./Tag-CwGNHh5s.js";import"./index-KYV4nEoS.js";import"./Group-CT1GLKPI.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./Menu2-j8LTRpUc.js";import"./addEventListener-CMvQXZgt.js";import"./scrollTo-BEkLZ1is.js";import"./Button-DWAe4sGj.js";import"./button-BXfcPuzR.js";const v={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Аккордеон»"},T="AnchorLinks",_="В качестве основы используется AnchorLink из библиотеки Antd.",w="Переключения в одном окне, между несколькими табами",C="",S="",m={dod:v,component:T,description:_,usage:w,designLink:C,pixsoView:S},ve={title:"Deprecated/Anchor",component:g,argTypes:{affix:{...a("true"),control:{type:"boolean"}},offsetTop:{...a("0"),control:{type:"number"}},items:{table:{type:{summary:"AnchorLinkProps[]",detail:`
[
  {
    href: string;
    title: string;
    counter?: number;
    hasNotification?: boolean;
  }
]
        `}}},...b(["theme"])},args:{items:[{href:"#anchor-1",title:"Simple title"},{href:"#anchor-2",title:"With counter",counter:10},{href:"#anchor-3",title:"With notification",hasNotification:!0},{href:"#anchor-4",title:"With counter & notification",counter:25,hasNotification:!0},{href:"#anchor-5",title:"Anchor 5",counter:20},{href:"#anchor-6",title:"Anchor 6",hasNotification:!0}],testId:"anchor-test-id",klId:"anchor-kl-id"},parameters:{badges:[y.deprecated],deprecatedLink:"Hexa UI Components/AnchorNavigation",docs:{page:x(m)},design:m.pixsoView}},e={render:o=>{const n=A(),f={height:"120vw",border:`1px solid ${n.colors["text-icons-elements"].primary}`,color:n.colors["text-icons-elements"].primary,verticalAlign:"middle",lineHeight:"100vw",textAlign:"center"};return r.createElement("div",{style:{minWidth:"90vw"}},r.createElement(g,{...o}),[...Array(10).keys()].map(i=>r.createElement("div",{id:`anchor-${i}`,style:{...f,textAlign:"center"},key:i},i)))}},t={args:{source:{anchor_links:s.anchor_links,anchor_links_item:s.anchor_links_item}},render:o=>r.createElement(k,{...o})};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: AnchorProps) => {
    const theme = useTheme();
    const baseBlockStyle = {
      height: '120vw',
      border: \`1px solid \${theme.colors['text-icons-elements'].primary}\`,
      color: theme.colors['text-icons-elements'].primary,
      verticalAlign: 'middle',
      lineHeight: '100vw',
      textAlign: 'center'
    };
    return <div style={{
      minWidth: '90vw'
    }}>
        <Anchor {...args} />
        {[...Array(10).keys()].map(item => <div id={\`anchor-\${item}\`} style={{
        ...baseBlockStyle,
        textAlign: 'center'
      }} key={item}>
              {item}
            </div>)}
      </div>;
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,d,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: {
      anchor_links: componentColors.anchor_links,
      anchor_links_item: componentColors.anchor_links_item
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Te=["Basic","ColorTokens"];export{e as Basic,t as ColorTokens,Te as __namedExportsOrder,ve as default};
