import{T as k}from"./Palette-BAVbpaYU.js";import{c as s,M as y,O as A,R as r}from"./iframe-BxJnf3ZL.js";import{w as x}from"./withMeta-BBywDIZF.js";import{s as b,a}from"./helpers-BytZKRkB.js";import{A as g}from"./Anchor-MppajLq2.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-z7hcKswJ.js";import"./blocks-BzGBXNOF.js";import"./index-RPybRgje.js";import"./TextReducer-jgmtD67Q.js";import"./SubComponents-B17FNPjy.js";import"./TextWithTruncation-DRr7EPDb.js";import"./ArrowDownSolid-mA2-OHVl.js";import"./ArrowRightSolid-DI2-NN91.js";import"./Divider-Ch4BCEC8.js";import"./Badge-BD8rQxYw.js";import"./type-l5tskpde.js";import"./colors-yztLXgoP.js";import"./Indicator-DttH4MVv.js";import"./StatusOkOutline-B39sGwVj.js";import"./Grid-DxmWR4Wt.js";import"./Markdown-M2-twDFV.js";import"./index-DkgxDGTG.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./useIntersectionChildren-Blr96UEJ.js";import"./Dropdown-DGWR5wSe.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-lpBnInVO.js";import"./useMergedState-BgQ2XY1A.js";import"./focus-CSmuw2j_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BHNzx7qw.js";import"./Toggle-CGR2gxI3.js";import"./AdditionalContent-0QTduPgH.js";import"./HelpMessage-DFGrmg6s.js";import"./wave-CE4pLSVu.js";import"./FormLabel-C8HaQNzE.js";import"./Tag-B4FkS-ry.js";import"./index-Dlpfquxs.js";import"./Group-Dnx8lKl-.js";import"./Loader-CkJh8F18.js";import"./index-DLAJHFC-.js";import"./v4-BoP187Zn.js";import"./Menu2-CMdAijjE.js";import"./addEventListener-jyfUXkC3.js";import"./scrollTo-Dv5Cf9s1.js";import"./Button-I6hF4eMe.js";import"./button-ZplnygZi.js";const v={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Аккордеон»"},T="AnchorLinks",_="В качестве основы используется AnchorLink из библиотеки Antd.",w="Переключения в одном окне, между несколькими табами",C="",S="",m={dod:v,component:T,description:_,usage:w,designLink:C,pixsoView:S},ve={title:"Deprecated/Anchor",component:g,argTypes:{affix:{...a("true"),control:{type:"boolean"}},offsetTop:{...a("0"),control:{type:"number"}},items:{table:{type:{summary:"AnchorLinkProps[]",detail:`
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
