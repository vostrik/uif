import{T as k}from"./Palette-BrjVJZd3.js";import{c as s,M as y,O as A,R as r}from"./iframe-CuxZtUxP.js";import{w as x}from"./withMeta-BqFg98vY.js";import{s as b,a}from"./helpers-BytZKRkB.js";import{A as g}from"./Anchor-BKliAIxZ.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-laC5MAc2.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./TextReducer-DDrjI2Ts.js";import"./SubComponents-DjSVH-Ma.js";import"./TextWithTruncation-DGkObJqj.js";import"./ArrowDownSolid-DT8risoU.js";import"./ArrowRightSolid-BD1ZcQ2R.js";import"./Divider-FNnXL9Gj.js";import"./Badge-ZSNeDhrE.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./Indicator-BDm4vtnD.js";import"./StatusOkOutline-MSqmg68d.js";import"./Grid-9ETswfwf.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./useIntersectionChildren-Cq2zUo8-.js";import"./Dropdown-y0CDWPOg.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BjiJJFtM.js";import"./useMergedState-P4F0ljFz.js";import"./focus-D0ElrM-1.js";import"./omit-DXgDXInf.js";import"./Toggle-DNd7EzHq.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./wave-DhdBo9LV.js";import"./FormLabel-AJ1msRQ3.js";import"./Tag-Dt4urbN1.js";import"./index-BPmhZr6B.js";import"./Group-gZM6GuIE.js";import"./ArrowRight-DuajFAMc.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./Menu2-BxyRMUNi.js";import"./addEventListener-DLuhf4PV.js";import"./scrollTo-BbT9MTuj.js";import"./Button-CL-Qr1l3.js";import"./button-DiQn-Imx.js";const v={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Аккордеон»"},T="AnchorLinks",_="В качестве основы используется AnchorLink из библиотеки Antd.",w="Переключения в одном окне, между несколькими табами",C="",S="",m={dod:v,component:T,description:_,usage:w,designLink:C,pixsoView:S},ve={title:"Deprecated/Anchor",component:g,argTypes:{affix:{...a("true"),control:{type:"boolean"}},offsetTop:{...a("0"),control:{type:"number"}},items:{table:{type:{summary:"AnchorLinkProps[]",detail:`
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
