import{T as x}from"./Palette-iFbb-9f5.js";import{r as H}from"./StoryComponents-DgMyNenL.js";import{c as W,R as i,b as c}from"./iframe-CE3A2i_R.js";import{B as p}from"./Breadcrumbs-CO7tjnbQ.js";import{g as T}from"./helpers-CTig38oc.js";import{b as P}from"./Breadcrumbs.stories-Bg8fJtro.js";import"./FormLabel-BTPnuYAd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-CwGNHh5s.js";import"./TextReducer-BWwC3ime.js";import"./index-KYV4nEoS.js";import"./omit-DXgDXInf.js";import"./type-CJd4Aj23.js";import"./colors-JBaSgu6R.js";import"./wave-id3Y8ngN.js";import"./Group-CT1GLKPI.js";import"./Divider-BfYsgfay.js";import"./Dropdown-DDTza_yl.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BJj8FZs2.js";import"./useMergedState-CJ57ru4s.js";import"./focus-CQD7WjR7.js";import"./ArrowRight-CtiO8sz4.js";import"./Toggle-Bx9catjq.js";import"./AdditionalContent-MuEB1NF-.js";import"./HelpMessage-CGiJa2GT.js";import"./Loader-B-PrFUxA.js";import"./index-DeHYj0xS.js";import"./v4-BoP187Zn.js";import"./Menu3-UhB4wKh6.js";import"./propPresentation-CndodZqI.js";import"./blocks-CANkqe6X.js";import"./index-BAqeFenB.js";import"./withMeta-ChZHBTGH.js";import"./DocPageLayout-CSin2tY8.js";import"./SubComponents-CeRF_0XA.js";import"./TextWithTruncation-vwuJ8fKM.js";import"./ArrowDownSolid-2gKtvJFB.js";import"./ArrowRightSolid-DEyUkgj2.js";import"./Badge-COlrkFgX.js";import"./Indicator-CzmYw3rU.js";import"./StatusOkOutline-OdNgE3pF.js";import"./Grid-DcUXc50s.js";import"./Markdown-B8dK-0JV.js";import"./index-A0tpAMov.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const h=T(),M=["medium","small"],Er={title:"Hexa UI Components/Breadcrumbs/Stories",component:p,tags:["!autodocs"],...P},s={args:{routes:h}},a={render:r=>{const[e,y]=c.useState(h),E=c.useCallback(o=>{y(t=>r.size==="medium"?t.slice(0,o+1):t.slice(0,o))},[r.size]);return i.createElement(p,{...r,routes:e.map((o,t)=>({...o,onClick:()=>E(t)}))})}},m={render:r=>H(M.map(e=>({label:e,content:i.createElement(p,{...r,size:e})}))),argTypes:{size:{control:!1}},args:{routes:T(5)}},n={args:{source:W.breadcrumbs},render:r=>i.createElement(x,{...r})};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
