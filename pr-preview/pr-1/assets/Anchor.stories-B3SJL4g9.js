import{T as k}from"./Palette-BoWll2PF.js";import{c as s,M as y,O as A,R as r}from"./iframe-CS_lS3JQ.js";import{w as x}from"./withMeta-BVZrRcOQ.js";import{s as b,a}from"./helpers-BytZKRkB.js";import{A as g}from"./Anchor-Dqye4r-_.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-s2jsbGO9.js";import"./index-CGDdDTKA.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-DKYvymTG.js";import"./blocks-CJQmJ9VN.js";import"./index-CgpwO2tq.js";import"./TextReducer-BY5uL3xm.js";import"./SubComponents-BHE4NYtA.js";import"./TextWithTruncation-JO92Emz0.js";import"./ArrowDownSolid-DJn6hFP7.js";import"./ArrowRightSolid-BEUEmyaL.js";import"./Divider-D_7SE2Jg.js";import"./Badge-Cc2Xscgq.js";import"./type-BpgJjWfR.js";import"./colors-D4ituO_X.js";import"./Indicator-B2JkvBkD.js";import"./StatusOkOutline-zylH21B-.js";import"./Grid-DyDvPcR7.js";import"./useIntersectionChildren-DUqAl0RH.js";import"./Dropdown-BicdhTL9.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-DSLVStBP.js";import"./useMergedState-B61t_fRl.js";import"./focus-BLc_l6vY.js";import"./omit-DXgDXInf.js";import"./Toggle-BOxHbuiK.js";import"./AdditionalContent-DjSD8NAm.js";import"./HelpMessage-B8QdDqVO.js";import"./wave-87GZ2a0S.js";import"./FormLabel-CwcsdRCh.js";import"./Tag-K_Mfb6oe.js";import"./index-etHmF8Xf.js";import"./Group-DmPThJhc.js";import"./ArrowRight-DMancYzQ.js";import"./Loader-C2l0Wque.js";import"./index-FxBC4-nU.js";import"./v4-BoP187Zn.js";import"./Menu2-BCJeOr2q.js";import"./addEventListener-BTGKWlk2.js";import"./scrollTo-BrgWX6ui.js";import"./Button-C-yJZqhy.js";import"./button-6xivo2h5.js";const v={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0,inBuilder:"Используется под названием «Аккордеон»"},T="AnchorLinks",_="В качестве основы используется AnchorLink из библиотеки Antd.",w="Переключения в одном окне, между несколькими табами",C="",S="",m={dod:v,component:T,description:_,usage:w,designLink:C,pixsoView:S},ve={title:"Deprecated/Anchor",component:g,argTypes:{affix:{...a("true"),control:{type:"boolean"}},offsetTop:{...a("0"),control:{type:"number"}},items:{table:{type:{summary:"AnchorLinkProps[]",detail:`
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
