import{T as x}from"./Palette-BB5tpPID.js";import{r as H}from"./StoryComponents-B9rb_aq9.js";import{c as W,R as i,b as c}from"./iframe-aBV3CYH3.js";import{B as p}from"./Breadcrumbs-CVd-axfs.js";import{g as T}from"./helpers-CTig38oc.js";import{b as P}from"./Breadcrumbs.stories-SQtuTPWe.js";import"./FormLabel-d3dW3auX.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-DY7rUT5S.js";import"./TextReducer-D8U9kJ52.js";import"./index-BkZLf1_p.js";import"./omit-DXgDXInf.js";import"./type-GmYgjqv3.js";import"./colors-nuNhf3hF.js";import"./wave-iSaySfuY.js";import"./Group-MwZqih5e.js";import"./Divider-C5DkIf6Z.js";import"./Dropdown-KoQ7Ozhb.js";import"./KeyCode-c5NdJp32.js";import"./isEqual--rqab9QN.js";import"./useMergedState-CYatStVN.js";import"./focus-DNariyKj.js";import"./ArrowRight-BspTRk2f.js";import"./Toggle-CFrSJDb6.js";import"./AdditionalContent-CBTW8zX-.js";import"./HelpMessage-DBlyCl9F.js";import"./Loader-CchH_JSv.js";import"./index-CqTa44a8.js";import"./v4-BoP187Zn.js";import"./Menu3-DCkw0fyi.js";import"./propPresentation-DwmroTjb.js";import"./blocks-DZu63bax.js";import"./index-DOxQrBLL.js";import"./withMeta-C33uN6BS.js";import"./DocPageLayout-BUnRw7iv.js";import"./SubComponents-ClGCVWuG.js";import"./TextWithTruncation---FFfZpN.js";import"./ArrowDownSolid-Bgc_LaMP.js";import"./ArrowRightSolid-B1ur2LqF.js";import"./Badge-CXW4mzDn.js";import"./Indicator-HvddXj7N.js";import"./StatusOkOutline-SGeFpZ58.js";import"./Grid-BW46MuRJ.js";import"./Markdown-DM5b4r5r.js";import"./index-D7pAken6.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";const h=T(),M=["medium","small"],Er={title:"Hexa UI Components/Breadcrumbs/Stories",component:p,tags:["!autodocs"],...P},s={args:{routes:h}},a={render:r=>{const[e,y]=c.useState(h),E=c.useCallback(o=>{y(t=>r.size==="medium"?t.slice(0,o+1):t.slice(0,o))},[r.size]);return i.createElement(p,{...r,routes:e.map((o,t)=>({...o,onClick:()=>E(t)}))})}},m={render:r=>H(M.map(e=>({label:e,content:i.createElement(p,{...r,size:e})}))),argTypes:{size:{control:!1}},args:{routes:T(5)}},n={args:{source:W.breadcrumbs},render:r=>i.createElement(x,{...r})};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
