import{S as I,C as N}from"./ScrollableContainer-C9BN3XZu.js";import{S as a}from"./Warnings-B48ejef0.js";import{a as u}from"./StoryComponents-CJn5qyLn.js";import{B as d}from"./Button-CthyJnKL.js";import{F as O}from"./Field-CdWrKqVz.js";import{I as r,R as e,T as c,a as R,P as g}from"./iframe-CMq2KAbH.js";import{t as F}from"./Tooltip.stories-CCBjdFN9.js";import{S as U}from"./SegmentedButton-CHkTDZfz.js";import"./Tag-jK9gdpxg.js";import"./TextReducer-Dpv34lw7.js";import"./index-BVVx-a9X.js";import"./omit-DXgDXInf.js";import"./type-D3DD6-1D.js";import"./colors-CLR_yiO4.js";import"./wave-3WO31ZRq.js";import"./Group-BToCNK5g.js";import"./FormLabel-lYRdE9pS.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-C_lHVbvw.js";import"./Dropdown-DNOjr3f3.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-D5s7vtpu.js";import"./useMergedState-9g38g9C2.js";import"./focus-CwA7FrxM.js";import"./ArrowRight-BzdZu4G4.js";import"./Toggle-B21kP8-p.js";import"./AdditionalContent-hq5GWz_N.js";import"./HelpMessage-ibDnZnKg.js";import"./Loader-B5BFds4o.js";import"./index-Ev0QlY--.js";import"./v4-BoP187Zn.js";import"./button-D46-rz2F.js";import"./Help-DoCzjSHA.js";import"./Markdown-DeZNAxi6.js";import"./index-CLXc87jo.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./propPresentation-DhN30H9i.js";import"./blocks-C0PMY0ZX.js";import"./index-h8mnWUxb.js";import"./generateId-BXJELych.js";const Pe={title:"Hexa UI Components/Tooltip/Stories",component:r,tags:["!autodocs"],...F},l={render:t=>e.createElement(u,{style:{paddingLeft:"200px"}},e.createElement(c,{type:"BTM5",themedColor:"primary"},"Tooltip here:"),e.createElement(r,{...t},e.createElement(d,null,"hover me to see Tooltip")))},i={render:t=>e.createElement(u,{style:{paddingLeft:"200px"}},e.createElement(c,{type:"BTM5"},"Tooltip here:"),e.createElement(r,{...t,text:e.createElement(c,{type:"BTM3",themedColor:"primary-invert"},"I'm a Text component")},e.createElement(d,null,"hover me to see Tooltip")))},m={render:t=>e.createElement(u,null,e.createElement(R,{closable:!1,mode:"info",style:{marginBottom:16}},e.createElement(g,null,"Use wrapper for ",e.createElement(a,null,"disabled")," components inside ",e.createElement(a,null,"Tooltip")," if it's not working"),e.createElement(g,null,"Используйте обёртку для ",e.createElement(a,null,"disabled")," компонентов внутри ",e.createElement(a,null,"Tooltip")," если тултип не отображается")),e.createElement(r,{...t},e.createElement("span",null,e.createElement(d,{disabled:!0,text:"Button"}))))},p={render:t=>e.createElement(I,null,e.createElement(N,null,e.createElement(r,{...t,getPopupContainer:n=>n.parentElement}))),args:{children:e.createElement(d,null,"Click me and scroll my container"),trigger:"click"}},s={render:t=>{const[n,L]=e.useState(10),w=e.useMemo(()=>{const o=[];for(let T=0;T<=n;T++)o.push(T);return o},[n]),H=[{value:"10",text:"10"},{value:"100",text:"100"},{value:"1000",text:"1000"}];return e.createElement(u,null,e.createElement(O,{control:e.createElement(U,{value:[n.toString()],type:"radio",items:H,onChange:o=>{L(Number(o[0]))}}),label:"Number of tooltips on page"}),w.map(o=>e.createElement(r,{...t,key:o,text:o,destroyTooltipOnHide:!0},e.createElement(c,null,o,": hover me to see Tooltip"))))}};var S,y,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <StoryColumn style={{
    paddingLeft: '200px'
  }}>
      <Text type="BTM5" themedColor="primary">
        Tooltip here:
      </Text>
      <Tooltip {...args}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,E,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <StoryColumn style={{
    paddingLeft: '200px'
  }}>
      <Text type="BTM5">
        Tooltip here:
      </Text>
      <Tooltip {...args} text={<Text type="BTM3" themedColor="primary-invert">I&apos;m a Text component</Text>}>
        <Button>hover me to see Tooltip</Button>
      </Tooltip>
    </StoryColumn>
}`,...(x=(E=i.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var h,B,b;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <StoryColumn>
      <SectionMessage closable={false} mode="info" style={{
      marginBottom: 16
    }}>
        <P>Use wrapper for <StyledTag>disabled</StyledTag> components inside <StyledTag>Tooltip</StyledTag> if it&apos;s not working</P>
        <P>Используйте обёртку для <StyledTag>disabled</StyledTag> компонентов внутри <StyledTag>Tooltip</StyledTag> если тултип не отображается</P>
      </SectionMessage>
      <Tooltip {...args}>
        <span><Button disabled={true} text="Button" /></span>
      </Tooltip>
    </StoryColumn>
}`,...(b=(B=m.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var v,P,M;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: TooltipProps) => <ScrollableContainer>
      <ContentContainer>
        <Tooltip {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>,
  args: {
    children: <Button>Click me and scroll my container</Button>,
    trigger: 'click'
  }
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var k,z,W;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: TooltipProps) => {
    const [performSize, setPerformSize] = React.useState(10);
    const tooltips = React.useMemo(() => {
      const arr: number[] = [];
      for (let i = 0; i <= performSize; i++) {
        arr.push(i);
      }
      return arr;
    }, [performSize]);
    const items: SegmentedButtonOption[] = [{
      value: '10',
      text: '10'
    }, {
      value: '100',
      text: '100'
    }, {
      value: '1000',
      text: '1000'
    }];
    return <StoryColumn>
        <Field control={<SegmentedButton value={[performSize.toString()]} type="radio" items={items} onChange={value => {
        setPerformSize(Number(value[0]));
      }} />} label="Number of tooltips on page" />
        {tooltips.map(t => <Tooltip {...args} key={t} text={t} destroyTooltipOnHide>
            <Text>{t}: hover me to see Tooltip</Text>
          </Tooltip>)}
      </StoryColumn>;
  }
}`,...(W=(z=s.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const Me=["Basic","WithTextComponent","WithDisabledComponent","WithinScrollableContainer","PerformanceExample"];export{l as Basic,s as PerformanceExample,m as WithDisabledComponent,i as WithTextComponent,p as WithinScrollableContainer,Me as __namedExportsOrder,Pe as default};
