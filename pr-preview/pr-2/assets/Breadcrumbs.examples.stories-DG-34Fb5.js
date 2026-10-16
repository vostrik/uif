import{T as x}from"./Palette-B17Qk-oR.js";import{r as H}from"./StoryComponents-B_SbX1GS.js";import{c as W,R as i,b as c}from"./iframe-kzbRZKTh.js";import{B as p}from"./Breadcrumbs-CSZrYTsL.js";import{g as T}from"./helpers-CTig38oc.js";import{b as P}from"./Breadcrumbs.stories-0rE_jIwW.js";import"./FormLabel-Bk6eWrFo.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B5Krc590.js";import"./TextReducer-DXOQhH6C.js";import"./index-BWTd0hrP.js";import"./omit-DXgDXInf.js";import"./type-BbTDOJ0B.js";import"./colors-BmIR1RWC.js";import"./wave-BHABDpmc.js";import"./Group-xSKPmKK8.js";import"./Divider-DtbUpKWs.js";import"./Dropdown-C51UE_7M.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C3zfAXzo.js";import"./useMergedState-BCfT7eD5.js";import"./focus-D3yS8zRr.js";import"./ArrowRight-Cuc4j5Bt.js";import"./Toggle-DiD7VZ_h.js";import"./AdditionalContent-Dh_V0UqZ.js";import"./HelpMessage-B1cYl0Nv.js";import"./Loader-DZ0oRqOo.js";import"./index-DZ6S_Syn.js";import"./v4-BoP187Zn.js";import"./Menu3-CCrRjILL.js";import"./propPresentation-zJAskzS2.js";import"./blocks-Bg7lvrJ6.js";import"./index-DMzfOa0V.js";import"./withMeta-D4lXFYrc.js";import"./DocPageLayout-jHKysIA0.js";import"./SubComponents-We9aHDLB.js";import"./TextWithTruncation-BjF1kgAQ.js";import"./ArrowDownSolid-CwAn2KlV.js";import"./ArrowRightSolid-WWnzh9Fl.js";import"./Badge-mOFGdbE6.js";import"./Indicator-BqqK5Xic.js";import"./StatusOkOutline-BqQBBn0Z.js";import"./Grid-Cf1iTfsZ.js";import"./Markdown-COgEAH6_.js";import"./index-Dqpnzz1w.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const h=T(),M=["medium","small"],Er={title:"Hexa UI Components/Breadcrumbs/Stories",component:p,tags:["!autodocs"],...P},s={args:{routes:h}},a={render:r=>{const[e,y]=c.useState(h),E=c.useCallback(o=>{y(t=>r.size==="medium"?t.slice(0,o+1):t.slice(0,o))},[r.size]);return i.createElement(p,{...r,routes:e.map((o,t)=>({...o,onClick:()=>E(t)}))})}},m={render:r=>H(M.map(e=>({label:e,content:i.createElement(p,{...r,size:e})}))),argTypes:{size:{control:!1}},args:{routes:T(5)}},n={args:{source:W.breadcrumbs},render:r=>i.createElement(x,{...r})};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    routes: storyRoutes
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,b,R;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [routes, setRoutes] = useState<Route[]>(storyRoutes);
    const onClickHandler = useCallback((i: number) => {
      setRoutes(currentRoutes => args.size === 'medium' ? currentRoutes.slice(0, i + 1) : currentRoutes.slice(0, i));
    }, [args.size]);
    return <BreadcrumbsComponent {...args} routes={routes.map((route, i) => ({
      ...route,
      onClick: () => onClickHandler(i)
    }))} />;
  }
}`,...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var C,z,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => renderVariants(breadcrumbsSizes.map(size => ({
    label: size,
    content: <BreadcrumbsComponent {...args} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    routes: generateRoutes(5)
  }
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var f,k,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: componentColors.breadcrumbs
  },
  render: args => <ThemedPalette {...args} />
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const xr=["WithMoreButton","WithRouting","Size","ColorTokens"];export{n as ColorTokens,m as Size,s as WithMoreButton,a as WithRouting,xr as __namedExportsOrder,Er as default};
