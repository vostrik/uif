import{R as e,S as X,T as h,a as Y,b as Z,Q as K,H as ee}from"./iframe-DXVY_al-.js";import{F as o}from"./Field-YgzWwvGo.js";import{a as x}from"./Checkbox-Cl9uVH9v.js";import{T as a}from"./Textbox-DDr6OIiV.js";import{T as E}from"./Toggle-B5cbHog7.js";import{R as te}from"./Radio-AFMQ9KE7.js";import{S as oe}from"./SegmentedButton-B5j9yyjy.js";import"./preload-helper-Dp1pzeXC.js";import"./Help-C9KyF4Sx.js";import"./FormLabel-g5DQo_wL.js";import"./Tag-DDt60avN.js";import"./TextReducer-L24KvYIg.js";import"./index-BfDcEK3T.js";import"./omit-DXgDXInf.js";import"./type-CsTtS0gC.js";import"./colors-CsMbn7MB.js";import"./wave-LbmbYf62.js";import"./Group-BgkSKQtg.js";import"./Markdown-DlRQLHKn.js";import"./index-BAYulqpX.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./HelpMessage-SIOObLpW.js";import"./AdditionalContent-ziC3WO2J.js";import"./useId-ZbvgH8iI.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./index-lgiqOHWi.js";import"./index--miG9MHz.js";import"./useGlobalStyles-DBIbeLBm.js";import"./InputMasked-DkaNQw15.js";import"./input-BpTIWK3x.js";import"./index-Chjiymov.js";import"./useThemedTextbox-Cq5Mjd4x.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-DCNzFJDX.js";import"./InputNumber-JjJWXSJf.js";import"./index-CtBoabqo.js";import"./SearchOutlined-BWXO38kT.js";import"./button-CXIseOCg.js";import"./useMergedState-CR6rJtpb.js";import"./InputPassword-BpB75HOe.js";import"./Button-D0QhSnae.js";import"./Dropdown-BLJYQkSA.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-CH4g4j4L.js";import"./focus-BfF3lKIC.js";import"./ArrowRight-D886n5Yw.js";import"./Divider-Hc8qqOlX.js";import"./Loader-BxJLuQsn.js";import"./index-CzITj10R.js";import"./StatusOkSolid-C5PT2fwA.js";import"./useTranslation-DdpNEPN3.js";import"./IconResolver-B5JE2hw5.js";import"./Placeholder-DnfSgq--.js";import"./index-CBsR5aKR.js";const nt={title:"Hexa UI Components/Field/Stories",component:o,tags:["!autodocs"],args:{label:"Label",labelPosition:"before",control:e.createElement(a,null),required:!1}},re=["top","before","after"],ae=["default","full","stretch"],i={args:{labelPosition:"top"}},n={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,description:"With tooltip",tooltip:"Tooltip text"}),e.createElement(o,{...t,description:"With link tooltip",tooltip:"Tooltip text with a [link](https://www.kaspersky.ru/)"}),e.createElement(o,{...t,label:"",tooltip:"Tooltip text",description:"With tooltip when no label text"}),e.createElement(o,{...t,description:"Required",required:!0}))},s={render:t=>e.createElement(e.Fragment,null,re.map(r=>e.createElement(o,{key:r,...t,labelPosition:r,label:`Label ${r}`})))},c={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,description:"Some description"}),e.createElement(o,{...t,description:"Some description with a [link](https://www.kaspersky.ru/)"}),e.createElement(o,{...t,control:e.createElement(E,null,"Label"),description:"Some description"}),e.createElement(o,{...t,control:e.createElement(x,null,"Label"),description:"Some description"}),e.createElement(Y,{mode:"warning",title:"Исключение"},"Для Radio/Checkbox.Group не может быть общего описания, только описание на уровне конкретных айтемов внутри этой группы"),e.createElement(o,{...t,control:e.createElement(x.Group,{options:[{label:"Checkbox 1",value:"1"},{label:"Checkbox 2",value:"2"},{label:"Checkbox 3",value:"3",description:"Some description"},{label:"Checkbox 4",value:"4"}]})}),e.createElement(o,{...t,control:e.createElement(te,{vertical:!0,options:[{label:"Radio 1",value:"1"},{label:"Radio 2",value:"2",description:"Some description"},{label:"Radio 3",value:"3",description:"Some description"},{label:"Radio 4",value:"4"}]})}))},p={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t,messageMode:"success",control:e.createElement(a,{validationStatus:"success"})}),e.createElement(o,{...t,messageMode:"error",control:e.createElement(a,{validationStatus:"error"})}),e.createElement(o,{...t,messageMode:"error",control:e.createElement(x.Group,{options:["1","2","3","4"].map(r=>({label:`Checkbox ${r}`,value:r,invalid:!0}))})}),e.createElement(o,{...t,messageMode:"error",control:e.createElement(oe,{value:["2"],onChange:r=>r,size:"large",items:["1","2","3","4"].map(r=>({text:"Label",value:r}))})}),e.createElement(o,{...t,messageMode:"error",control:e.createElement(E,null,"Label")})),args:{message:`Validation text example
- Password must have:
- At least 8 characters
- At least 1 uppercase letter
- At least 1 number or symbol`}},m={render:t=>{const[r,l]=Z.useState(!1);return e.createElement(N,null,e.createElement(K,null,"Look in code how to disable component manually"),e.createElement(E,{onChange:l},r.toString()),e.createElement(o,{...t,control:e.createElement(a,{disabled:r})}))}},d={args:{additionalComponent:e.createElement(x,null,"Label")}},N=ee.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`,le=({controlWidth:t,...r})=>{const l="The long label ".repeat(10);return e.createElement(N,null,e.createElement(K,null,"labelType=",r.labelType),e.createElement(o,{...r,label:"Basic label",control:e.createElement(a,{value:"min-width: 200px"})}),e.createElement(o,{...r,label:l,control:e.createElement(a,{value:"min-width: 200px"})}),e.createElement(o,{...r,label:"Basic label",control:e.createElement(a,{value:`${t}px`}),controlWidth:t}),e.createElement(o,{...r,label:l,control:e.createElement(a,{value:`${t}px`}),controlWidth:t}))},u={render:t=>e.createElement(e.Fragment,null,ae.map(r=>e.createElement(le,{...t,key:r,labelType:r}))),args:{controlWidth:60}},b={args:{gridLayout:{firstCol:"123px",secondCol:"456px"}}},g={render:t=>e.createElement(X,{gap:"separated",direction:"vertical"},e.createElement(o,{...t,label:e.createElement(e.Fragment,null,e.createElement(h,{type:"BTR3",color:"secondary"},"First line"),e.createElement(h,{type:"BTR4",color:"secondary"},e.createElement("br",null),"Second line")),control:e.createElement(a,null)}))};var S,T,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    labelPosition: 'top'
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var v,F,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: FieldProps) => <>
      <Field {...args} description="With tooltip" tooltip="Tooltip text" />
      <Field {...args} description="With link tooltip" tooltip="Tooltip text with a [link](https://www.kaspersky.ru/)" />
      <Field {...args} label="" tooltip="Tooltip text" description="With tooltip when no label text" />
      <Field {...args} description="Required" required />
    </>
}`,...(y=(F=n.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var C,L,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: FieldProps) => <>
      {labelPositions.map(position => <Field key={position} {...args} labelPosition={position} label={\`Label \${position}\`} />)}
    </>
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var R,f,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: FieldProps) => {
    return <>
        <Field {...args} description="Some description" />
        <Field {...args} description="Some description with a [link](https://www.kaspersky.ru/)" />
        <Field {...args} control={<Toggle>Label</Toggle>} description="Some description" />
        <Field {...args} control={<Checkbox>Label</Checkbox>} description="Some description" />
        <SectionMessage mode="warning" title="Исключение">
          Для Radio/Checkbox.Group не может быть общего описания, только описание на уровне конкретных айтемов внутри этой группы
        </SectionMessage>
        <Field {...args} control={<Checkbox.Group options={[{
        label: 'Checkbox 1',
        value: '1'
      }, {
        label: 'Checkbox 2',
        value: '2'
      }, {
        label: 'Checkbox 3',
        value: '3',
        description: 'Some description'
      }, {
        label: 'Checkbox 4',
        value: '4'
      }]} />} />
        <Field {...args} control={<Radio vertical={true} options={[{
        label: 'Radio 1',
        value: '1'
      }, {
        label: 'Radio 2',
        value: '2',
        description: 'Some description'
      }, {
        label: 'Radio 3',
        value: '3',
        description: 'Some description'
      }, {
        label: 'Radio 4',
        value: '4'
      }]} />} />
      </>;
  }
}`,...(P=(f=c.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var M,D,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: FieldProps) => <>
      <Field {...args} messageMode="success" control={<Textbox validationStatus="success" />} />
      <Field {...args} messageMode="error" control={<Textbox validationStatus="error" />} />
      <Field {...args} messageMode="error" control={<Checkbox.Group options={['1', '2', '3', '4'].map(item => ({
      label: \`Checkbox \${item}\`,
      value: item,
      invalid: true
    }))} />} />
      <Field {...args} messageMode="error" control={<SegmentedButton value={['2']} onChange={e => e} size="large" items={['1', '2', '3', '4'].map(value => ({
      text: 'Label',
      value
    }))} />} />
      <Field {...args} messageMode="error" control={<Toggle>Label</Toggle>} />
    </>,
  args: {
    message: \`Validation text example
- Password must have:
- At least 8 characters
- At least 1 uppercase letter
- At least 1 number or symbol\`
  }
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,G,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: FieldProps) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    return <FieldsContainer>
        <H4>Look in code how to disable component manually</H4>
        <Toggle onChange={setIsDisabled}>
          {isDisabled.toString()}
        </Toggle>
        <Field {...args} control={<Textbox disabled={isDisabled} />} />
      </FieldsContainer>;
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var $,q,W;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    additionalComponent: <Checkbox>Label</Checkbox>
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var I,V,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: FieldProps) => <>
      {labelTypes.map(type => <LabelTypeGroup {...args} key={type} labelType={type} />)}
    </>,
  args: {
    controlWidth: 60
  }
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var _,O,Q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    gridLayout: {
      firstCol: '123px',
      secondCol: '456px'
    }
  }
}`,...(Q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,j,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: FieldProps) => <Space gap="separated" direction="vertical">
      <Field {...args} label={<>
            <Text type="BTR3" color="secondary">First line</Text>
            <Text type="BTR4" color="secondary"><br />Second line</Text>
          </>} control={<Textbox />} />
    </Space>
}`,...(J=(j=g.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const st=["Basic","LabelAdditions","LabelPositions","Description","Validation","Disabled","AdditionalComponent","LabelTypes","GridLayout","CustomLabel"];export{d as AdditionalComponent,i as Basic,g as CustomLabel,c as Description,m as Disabled,b as GridLayout,n as LabelAdditions,s as LabelPositions,u as LabelTypes,p as Validation,st as __namedExportsOrder,nt as default};
