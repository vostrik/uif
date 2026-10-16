import{T as x}from"./Palette-JYTl6zH7.js";import{r as H}from"./StoryComponents-z3jtU0VG.js";import{c as W,R as i,b as c}from"./iframe-CWTW431d.js";import{B as p}from"./Breadcrumbs-BuZE7yLr.js";import{g as T}from"./helpers-CTig38oc.js";import{b as P}from"./Breadcrumbs.stories-DwL_4lc5.js";import"./FormLabel-CGcobH17.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-a0Ju7I2Y.js";import"./TextReducer-BKSOrAn7.js";import"./index-D-MPt99R.js";import"./omit-DXgDXInf.js";import"./type-DnwzfU9Y.js";import"./colors-CDrajaLR.js";import"./wave-DKblzsMF.js";import"./Group-BXfAcZfu.js";import"./Divider-BNE7kxRe.js";import"./Dropdown-CpY4_2yP.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C6z_ExK5.js";import"./useMergedState-DIWBApoD.js";import"./focus-bRTu4OQx.js";import"./ArrowRight-MEBjPGWY.js";import"./Toggle-COf30Rrf.js";import"./AdditionalContent-eqvFhAFS.js";import"./HelpMessage-Bq5rlA1f.js";import"./Loader-Dwsr2p9J.js";import"./index-Cg7pBzQK.js";import"./v4-BoP187Zn.js";import"./Menu3-CtTdKUuW.js";import"./propPresentation-DC_pTLa9.js";import"./blocks-5hWq9pxN.js";import"./index-Cifl6OSo.js";import"./withMeta-B80vBHhP.js";import"./DocPageLayout-BZwqqSX5.js";import"./SubComponents-DV3S-e9U.js";import"./TextWithTruncation-4wYl1Y4Q.js";import"./ArrowDownSolid-Dxbmwou1.js";import"./ArrowRightSolid-PYHen0lO.js";import"./Badge-BxavHYM7.js";import"./Indicator-D27-HXk4.js";import"./StatusOkOutline-wl-jmqUJ.js";import"./Grid-BYWukwlc.js";import"./Markdown-BS7aYAEA.js";import"./index-C-seFtJV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const h=T(),M=["medium","small"],Er={title:"Hexa UI Components/Breadcrumbs/Stories",component:p,tags:["!autodocs"],...P},s={args:{routes:h}},a={render:r=>{const[e,y]=c.useState(h),E=c.useCallback(o=>{y(t=>r.size==="medium"?t.slice(0,o+1):t.slice(0,o))},[r.size]);return i.createElement(p,{...r,routes:e.map((o,t)=>({...o,onClick:()=>E(t)}))})}},m={render:r=>H(M.map(e=>({label:e,content:i.createElement(p,{...r,size:e})}))),argTypes:{size:{control:!1}},args:{routes:T(5)}},n={args:{source:W.breadcrumbs},render:r=>i.createElement(x,{...r})};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
