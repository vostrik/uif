import{T as x}from"./Palette-CuBWkKVo.js";import{r as H}from"./StoryComponents-CJn5qyLn.js";import{c as W,R as i,b as c}from"./iframe-CMq2KAbH.js";import{B as p}from"./Breadcrumbs-DxuafGHF.js";import{g as T}from"./helpers-CTig38oc.js";import{b as P}from"./Breadcrumbs.stories-kwcoFz96.js";import"./FormLabel-lYRdE9pS.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./Divider-C_lHVbvw.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./Menu3-OeIUJvf1.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./withMeta-Dv8G7Dbj.js";import"./DocPageLayout-CwgI-MzD.js";import"./SubComponents-OM-ufJ6_.js";import"./TextWithTruncation-L5e80JYd.js";import"./ArrowDownSolid-BktWU_7o.js";import"./ArrowRightSolid-CqGc_O9R.js";import"./Badge-DZq-1HSe.js";import"./Indicator-PCazPGCQ.js";import"./StatusOkOutline-WlwXIENv.js";import"./Grid-BaI88Kn5.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const h=T(),M=["medium","small"],Er={title:"Hexa UI Components/Breadcrumbs/Stories",component:p,tags:["!autodocs"],...P},s={args:{routes:h}},a={render:r=>{const[e,y]=c.useState(h),E=c.useCallback(o=>{y(t=>r.size==="medium"?t.slice(0,o+1):t.slice(0,o))},[r.size]);return i.createElement(p,{...r,routes:e.map((o,t)=>({...o,onClick:()=>E(t)}))})}},m={render:r=>H(M.map(e=>({label:e,content:i.createElement(p,{...r,size:e})}))),argTypes:{size:{control:!1}},args:{routes:T(5)}},n={args:{source:W.breadcrumbs},render:r=>i.createElement(x,{...r})};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
