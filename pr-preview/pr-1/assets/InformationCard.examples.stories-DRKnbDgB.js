import{T as J}from"./Palette-BrjVJZd3.js";import{c as K,M as S,R as t,b as u,H as N}from"./iframe-CuxZtUxP.js";import{w as Q}from"./withMeta-BqFg98vY.js";import{a as U}from"./StoryComponents-CK7kJD3s.js";import{T as X}from"./Toggle-DNd7EzHq.js";import{d as o,M as v,r as s,c as f,b}from"./InformationCard.controls-CijIeYsY.js";import{I as r}from"./InformationCard-DyLxP-5P.js";import{a as Y}from"./Checkbox-GN_6Gck8.js";import{R as Z}from"./Radio-S19TPsl6.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-laC5MAc2.js";import"./blocks-Cx5nhqUz.js";import"./index-DcTSngpd.js";import"./TextReducer-DDrjI2Ts.js";import"./SubComponents-DjSVH-Ma.js";import"./TextWithTruncation-DGkObJqj.js";import"./ArrowDownSolid-DT8risoU.js";import"./ArrowRightSolid-BD1ZcQ2R.js";import"./Divider-FNnXL9Gj.js";import"./Badge-ZSNeDhrE.js";import"./type-GeDzSTZ4.js";import"./colors-DJ1jxL9H.js";import"./Indicator-BDm4vtnD.js";import"./StatusOkOutline-MSqmg68d.js";import"./Grid-9ETswfwf.js";import"./Markdown-CULbeuuj.js";import"./index-DfhmDEte.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./FormLabel-AJ1msRQ3.js";import"./Tag-Dt4urbN1.js";import"./index-BPmhZr6B.js";import"./omit-DXgDXInf.js";import"./wave-DhdBo9LV.js";import"./Group-gZM6GuIE.js";import"./AdditionalContent-CJrFhZE7.js";import"./HelpMessage-vJ8j-KE6.js";import"./useMergedState-P4F0ljFz.js";import"./KeyCode-c5NdJp32.js";import"./propPresentation-CPSL2Fd9.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";import"./Button-CL-Qr1l3.js";import"./Dropdown-y0CDWPOg.js";import"./isEqual-BjiJJFtM.js";import"./focus-D0ElrM-1.js";import"./ArrowRight-DuajFAMc.js";import"./Loader-gIIFbDBw.js";import"./index-BYpoxBYL.js";import"./v4-BoP187Zn.js";import"./button-DiQn-Imx.js";import"./useId-D3DcsVr-.js";import"./generateId-BXJELych.js";import"./index-BttC3HIA.js";import"./index-Dfjq1KcL.js";import"./index-BT_P0ngG.js";const tt={title:"Hexa UI Components/InformationCard/Stories",component:r,tags:["!autodocs"],args:{type:o.type,size:o.size,width:o.width,title:o.title,description:o.description,selected:o.selected,disabled:o.disabled,interactive:o.interactive,testId:"information-card-test-id",klId:"information-card-kl-id"},parameters:{badges:[S.stable,S.reviewedByDesign],docs:{page:Q(v)},design:v.pixsoView}},d={args:{type:o.type,size:o.size,title:o.title,description:o.description}},l={render:e=>t.createElement(r,{...e,footer:s("actions",e.disabled),leftSide:b("iconWithBadge")})},c={render:e=>t.createElement(r,{...e,footer:s("actions",e.disabled),leftSide:b("icon")},f("tags",e.disabled))},m={render:e=>{const n=["vertical","horizontal","center"];return t.createElement(U,null,n.map(i=>t.createElement(r,{...e,key:i,type:i,footer:s("actions",e.disabled),leftSide:b("iconWithBadge")},f("tags",e.disabled))))}},p={render:e=>{const[n,i]=u.useState(!1),[h,j]=u.useState(!1),[q,G]=u.useState(!1);return t.createElement(U,null,t.createElement(r,{...e,selected:n,onClick:()=>i(a=>!a),rightCorner:t.createElement(Y,{disabled:e.disabled,checked:n})}),t.createElement(r,{...e,selected:h,onClick:()=>j(a=>!a),rightCorner:t.createElement(X,{disabled:e.disabled,checked:h})}),t.createElement(r,{...e,selected:q,onClick:()=>G(a=>!a),rightCorner:t.createElement(Z,{disabled:e.disabled,options:[{label:"",value:""}]})}))}},$=N.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`,C={render:e=>t.createElement($,null,t.createElement(r,{...e,footer:s("actions",e.disabled),description:"Short content"},f("tags",e.disabled)),t.createElement(r,{...e,footer:s("actions",e.disabled)},f("tags",e.disabled)))},g={args:{source:K.information_card},render:e=>t.createElement(J,{...e})};var k,y,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: defaultArgs.type,
    size: defaultArgs.size,
    title: defaultArgs.title,
    description: defaultArgs.description
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var I,x,E;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => <InformationCardComponent {...args} footer={resolveFooterVariant('actions', args.disabled)} leftSide={resolveLeftSideVariant('iconWithBadge')} />
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var V,R,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => <InformationCardComponent {...args} footer={resolveFooterVariant('actions', args.disabled)} leftSide={resolveLeftSideVariant('icon')}>
      {resolveContentVariant('tags', args.disabled)}
    </InformationCardComponent>
}`,...(W=(R=c.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var w,z,F;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const informationCardTypes: InformationCardType[] = ['vertical', 'horizontal', 'center'];
    return <StoryColumn>
        {informationCardTypes.map(cardType => <InformationCardComponent {...args} key={cardType} type={cardType} footer={resolveFooterVariant('actions', args.disabled)} leftSide={resolveLeftSideVariant('iconWithBadge')}>
            {resolveContentVariant('tags', args.disabled)}
          </InformationCardComponent>)}
      </StoryColumn>;
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var H,A,B;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [selectedToggle, setSelectedToggle] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(false);
    return <StoryColumn>
        <InformationCardComponent {...args} selected={selectedCheckbox} onClick={() => setSelectedCheckbox(value => !value)} rightCorner={<Checkbox disabled={args.disabled} checked={selectedCheckbox} />} />
        <InformationCardComponent {...args} selected={selectedToggle} onClick={() => setSelectedToggle(value => !value)} rightCorner={<Toggle disabled={args.disabled} checked={selectedToggle} />} />
        <InformationCardComponent {...args} selected={selectedRadio} onClick={() => setSelectedRadio(value => !value)} rightCorner={<Radio disabled={args.disabled} options={[{
        label: '',
        value: ''
      }]} />} />
      </StoryColumn>;
  }
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,P,M;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: InformationCardProps) => <CustomHeightContainer>
      <InformationCardComponent {...args} footer={resolveFooterVariant('actions', args.disabled)} description="Short content">
        {resolveContentVariant('tags', args.disabled)}
      </InformationCardComponent>
      <InformationCardComponent {...args} footer={resolveFooterVariant('actions', args.disabled)}>
        {resolveContentVariant('tags', args.disabled)}
      </InformationCardComponent>
    </CustomHeightContainer>
}`,...(M=(P=C.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,D,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    source: componentColors.information_card
  },
  render: args => <ThemedPalette {...args} />
}`,...(O=(D=g.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ot=["Basic","WithLeftSideAndFooter","WithChildren","Types","Controllable","TwoCardsWithCustomHeight","ColorTokens"];export{d as Basic,g as ColorTokens,p as Controllable,C as TwoCardsWithCustomHeight,m as Types,c as WithChildren,l as WithLeftSideAndFooter,ot as __namedExportsOrder,tt as default};
