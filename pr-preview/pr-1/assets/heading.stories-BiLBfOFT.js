import{R as e,T as n,S as g,ax as h,ay as C,W as b,Q as v,av as A,X as k,M as l,az as s,a4 as w,aA as I}from"./iframe-BC0sauTx.js";import{w as S}from"./withMeta-BRvA4BlU.js";import{s as u,a as T}from"./helpers-BytZKRkB.js";import{M as p}from"./meta-H92Z_5ua.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CarEzdaF.js";import"./blocks-BgOqIGqq.js";import"./index-o0-Kef5A.js";import"./TextReducer-B-H2cHGE.js";import"./SubComponents-DrIlL0Al.js";import"./TextWithTruncation-DOatzAnE.js";import"./ArrowDownSolid-CAJ9wxew.js";import"./ArrowRightSolid-DmJilGE2.js";import"./Divider-BINKUE5V.js";import"./Badge-BeYddg-s.js";import"./type-ceO20y0I.js";import"./colors-BlEKYhgo.js";import"./Indicator-C6NMvhP-.js";import"./StatusOkOutline-nyfZfHQX.js";import"./Grid-Kb2vKuef.js";import"./Markdown-DQohGWul.js";import"./index-Ca2avi9Z.js";import"./shouldForwardProp-Cdy-RLhZ.js";const D=()=>e.createElement(e.Fragment,null,e.createElement(n,{type:"H4"},"Заголовки"),e.createElement(n,{type:"H6"},"Стили используются как в заголовках страниц, так и в мелких компонентах, таких как карточки и алерты"),e.createElement(g,{gap:16,direction:"vertical"},e.createElement(h,null,"Header/H1"),e.createElement(C,null,"Header/H2"),e.createElement(b,null,"Header/H3"),e.createElement(v,null,"Header/H4"),e.createElement(A,null,"Header/H5"),e.createElement(k,null,"Header/H6"))),x=["H1","H2","H3","H4","H5","H6"],E={options:Object.keys(w.text).filter(t=>t!=="link"),control:{type:"select"}},f={options:x,control:{type:"select"},...T("H1")},ee={title:"Hexa UI Components/Typography/Heading",component:s,argTypes:{storyText:{control:{type:"text"}},color:{...E},themedColor:{options:Object.keys(I["text-icons-elements"]),control:{type:"select"},...T("primary")},type:{...f},...u(["theme","as","forwardedAs","ref"])},args:{storyText:"I'm header",color:void 0,themedColor:"primary",testId:"heading-test-id",klId:"heading-kl-id"},parameters:{badges:[l.stable,l.reviewedByDesign],docs:{page:S(p,D)},design:p.pixsoView},decorators:[(t,r)=>e.createElement(g,{gap:16,direction:"vertical"},e.createElement(t,{...r}))]},o={render:t=>e.createElement(s,{color:t.color,type:t.type,...t},t.storyText," ",t.type," ",t.color),argTypes:{storyText:{control:{type:"text"}},color:{...E},type:{...f},...u(["themedColor"])}},a={render:t=>e.createElement("div",null,x.map(r=>e.createElement(s,{key:r,color:t.color,type:r,...t},"I'm header with type ",r)))};var c,i,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: HeadingProps) => <Heading color={args.color} type={args.type} {...args}>
      {args.storyText} {args.type} {args.color}
    </Heading>,
  argTypes: {
    storyText: {
      control: {
        type: 'text'
      }
    },
    color: {
      ...defaultATColor
    },
    type: {
      ...defaultATType
    },
    ...sbHideControls(['themedColor'])
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,y,H;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: HeadingProps) => <div>
      {defaultTypes.map(type => <Heading key={type} color={args.color} type={type} {...args}>
          I&apos;m header with type {type}
        </Heading>)}
    </div>
}`,...(H=(y=a.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const te=["Basic","AllTypes"];export{a as AllTypes,o as Basic,te as __namedExportsOrder,ee as default};
