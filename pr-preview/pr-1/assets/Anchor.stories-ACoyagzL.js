import{T as k}from"./Palette-BWzVK3dX.js";import{c as s,M as y,O as A,R as r}from"./iframe-DIzBSOsa.js";import{w as x}from"./withMeta-CymzVPc2.js";import{s as b,a}from"./helpers-BytZKRkB.js";import{A as g}from"./Anchor-BQFs1T2L.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ycYJCuGf.js";import"./blocks-CN-Hl-9x.js";import"./index-BXbLzoge.js";import"./TextReducer-B8LAxaee.js";import"./SubComponents-DBmByhhh.js";import"./TextWithTruncation-dLrsMwqv.js";import"./ArrowDownSolid-DqF5r2uC.js";import"./ArrowRightSolid-_AWQ7E9n.js";import"./Divider-B7r6BzqD.js";import"./Badge-BnYETXMc.js";import"./type-CN9KIPGq.js";import"./colors-DWd9yYDE.js";import"./Indicator-Byl-sjIi.js";import"./StatusOkOutline-k09TmeGi.js";import"./Grid-xZbyb4bX.js";import"./Markdown-DkVO2iEB.js";import"./index-BdJcXrXD.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./useIntersectionChildren-D_Embh5Y.js";import"./Dropdown-DEik8dKH.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-Dlds-xGy.js";import"./useMergedState-IHysQFAx.js";import"./focus-BglFpdoy.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DXYEwFBz.js";import"./Toggle-BwnEG2Z9.js";import"./AdditionalContent-DMZYHc5I.js";import"./HelpMessage-CJOPKvsg.js";import"./wave-CZhb61AN.js";import"./FormLabel-pcEEqmjq.js";import"./Tag-UnCHTvWf.js";import"./index-DmRlaPE6.js";import"./Group-DZSM1WME.js";import"./Loader-t8IvB7CC.js";import"./index-B9He-UhX.js";import"./v4-BoP187Zn.js";import"./Menu2-0ufc2XzO.js";import"./addEventListener-CSx5L2Uq.js";import"./scrollTo-DCPmPxM2.js";import"./Button-papDIOAz.js";import"./button-CJ1TwKfr.js";const v={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Аккордеон»"},T="AnchorLinks",_="В качестве основы используется AnchorLink из библиотеки Antd.",w="Переключения в одном окне, между несколькими табами",C="",S="",m={dod:v,component:T,description:_,usage:w,designLink:C,pixsoView:S},ve={title:"Deprecated/Anchor",component:g,argTypes:{affix:{...a("true"),control:{type:"boolean"}},offsetTop:{...a("0"),control:{type:"number"}},items:{table:{type:{summary:"AnchorLinkProps[]",detail:`
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
