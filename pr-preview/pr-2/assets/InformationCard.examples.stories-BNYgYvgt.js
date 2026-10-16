import{T as J}from"./Palette-D1YANZRt.js";import{c as K,M as S,R as t,b as u,H as N}from"./iframe-DXVY_al-.js";import{w as Q}from"./withMeta-CBaPUhSC.js";import{a as U}from"./StoryComponents-D51pRFFv.js";import{d as o,M as v,r as s,c as f,b}from"./InformationCard.controls-1jrnqtAX.js";import{I as r}from"./InformationCard-HvRGmubO.js";import{a as X}from"./Checkbox-Cl9uVH9v.js";import{T as Y}from"./Toggle-B5cbHog7.js";import{R as Z}from"./Radio-AFMQ9KE7.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-CyCyvv-O.js";import"./blocks-BhP1yI7N.js";import"./index-c6GTnd84.js";import"./TextReducer-L24KvYIg.js";import"./SubComponents-BmDm24jU.js";import"./TextWithTruncation-Bi2HiZvn.js";import"./ArrowDownSolid-CLCLXTUz.js";import"./ArrowRightSolid-BSWeQvzk.js";import"./Divider-Hc8qqOlX.js";import"./Badge-Cj1zsPT9.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./Indicator-B4cq0q5a.js";import"./StatusOkOutline-Dbo4WwyZ.js";import"./Grid-D1T_Hu63.js";import"./Markdown-DlRQLHKn.js";import"./index-BAYulqpX.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./FormLabel-g5DQo_wL.js";import"./Tag-DDt60avN.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./propPresentation-DzyQPo2A.js";import"./resolveDesignControls-CFhBuB_d.js";import"./typesHelpers-tpz7Of7L.js";import"./Button-D0QhSnae.js";import"./Dropdown-BLJYQkSA.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CH4g4j4L.js";import"./useMergedState-CR6rJtpb.js";import"./focus-BfF3lKIC.js";import"./ArrowRight-D886n5Yw.js";import"./Loader-BxJLuQsn.js";import"./index-CzITj10R.js";import"./v4-BoP187Zn.js";import"./button-CXIseOCg.js";import"./AdditionalContent-ziC3WO2J.js";import"./HelpMessage-SIOObLpW.js";import"./useId-ZbvgH8iI.js";import"./generateId-BXJELych.js";import"./index-lgiqOHWi.js";import"./index--miG9MHz.js";import"./index-CBsR5aKR.js";const tt={title:"Hexa UI Components/InformationCard/Stories",component:r,tags:["!autodocs"],args:{type:o.type,size:o.size,width:o.width,title:o.title,description:o.description,selected:o.selected,disabled:o.disabled,interactive:o.interactive,testId:"information-card-test-id",klId:"information-card-kl-id"},parameters:{badges:[S.stable,S.reviewedByDesign],docs:{page:Q(v)},design:v.pixsoView}},d={args:{type:o.type,size:o.size,title:o.title,description:o.description}},l={render:e=>t.createElement(r,{...e,footer:s("actions",e.disabled),leftSide:b("iconWithBadge")})},c={render:e=>t.createElement(r,{...e,footer:s("actions",e.disabled),leftSide:b("icon")},f("tags",e.disabled))},m={render:e=>{const n=["vertical","horizontal","center"];return t.createElement(U,null,n.map(i=>t.createElement(r,{...e,key:i,type:i,footer:s("actions",e.disabled),leftSide:b("iconWithBadge")},f("tags",e.disabled))))}},p={render:e=>{const[n,i]=u.useState(!1),[h,j]=u.useState(!1),[q,G]=u.useState(!1);return t.createElement(U,null,t.createElement(r,{...e,selected:n,onClick:()=>i(a=>!a),rightCorner:t.createElement(X,{disabled:e.disabled,checked:n})}),t.createElement(r,{...e,selected:h,onClick:()=>j(a=>!a),rightCorner:t.createElement(Y,{disabled:e.disabled,checked:h})}),t.createElement(r,{...e,selected:q,onClick:()=>G(a=>!a),rightCorner:t.createElement(Z,{disabled:e.disabled,options:[{label:"",value:""}]})}))}},$=N.div`
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
