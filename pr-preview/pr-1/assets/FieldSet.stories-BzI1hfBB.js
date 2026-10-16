import{M as y,R as e,b as g,Q as R,W as X,H as v,S as A}from"./iframe-C5ywg3yF.js";import{w as I}from"./withMeta-bWUFpinF.js";import{L as S,F as W}from"./Field-BN9jxnzL.js";import{o as f}from"./Placeholder-DD0S7nvg.js";import{F as i}from"./index-CxE9bEvZ.js";import{T as j}from"./Tag-D2J0DCjt.js";import{S as T}from"./Select-LTJTiRcm.js";import{T as r}from"./Textbox-DNM5rp-I.js";import{S as q}from"./SegmentedButton-CZ2vUHLh.js";import{T as C}from"./Toggle-h5WMIT3p.js";import{B as Y}from"./Button-NQ8G2asL.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BUnx0FMe.js";import"./blocks-ByEr9Mkl.js";import"./index-Dp0N4kRx.js";import"./TextReducer-DYBA9RxT.js";import"./SubComponents-kdha7qeJ.js";import"./TextWithTruncation-B3iFB_Ef.js";import"./ArrowDownSolid-_KyHq5Me.js";import"./ArrowRightSolid-Duj2LKDv.js";import"./Divider-DL-FS3qr.js";import"./Badge-ejx6pHZd.js";import"./type-CYimqQsV.js";import"./colors-CEAxVyTa.js";import"./Indicator-DkDd6DuE.js";import"./StatusOkOutline-CklF5FNA.js";import"./Grid-OMao_GWl.js";import"./Markdown-fvY8LtSv.js";import"./index-DPF1SB_W.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Help-CEW9C3J5.js";import"./FormLabel-Cl6NqZ0b.js";import"./HelpMessage-CN6qGX_P.js";import"./ToggleButtonGroup-BjtM4pLI.js";import"./ToggleButton-C0DFL2Ft.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./imaskDateOptionsGenerator-C8YxVJmM.js";import"./input-B0Wxb6FI.js";import"./index-Chjiymov.js";import"./Uploader-Bkz2Z5Lr.js";import"./regeneratorRuntime-Dh23YIsD.js";import"./pickAttrs-BgzDEcR5.js";import"./Upload-BIl-jCN9.js";import"./Dropdown-zYnbWrcJ.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C1aX2UMP.js";import"./useMergedState-hWmk9BX_.js";import"./focus-D6fBl5Nk.js";import"./omit-DXgDXInf.js";import"./ArrowRight-DKeSAYRW.js";import"./Loader-BD-fvmCW.js";import"./index-BpcMiooq.js";import"./Delete-Bc3vnftL.js";import"./Download2-dEu52Eh_.js";import"./Menu2-Bukqia22.js";import"./Reload-sGvYa6m3.js";import"./FileItem-GxFrvYtd.js";import"./useTranslation-CbJmFUUZ.js";import"./Status-DfpeWlvB.js";import"./Group-M-SjioCQ.js";import"./Checkbox-SayzM99V.js";import"./AdditionalContent-CGaR5f3H.js";import"./useId-zoCJlebJ.js";import"./index-0ym8uL7g.js";import"./index-q8N1L7ed.js";import"./CodeViewer-BClIRKy2.js";import"./ResizeInput-Sh7vF5bg.js";import"./StatusWarningSolid-D_bT2bQg.js";import"./TimeInput-4OTT_JMH.js";import"./RangePicker-BsR1eS1z.js";import"./RangeSeparator-CHr8vC-B.js";import"./WithGlobalStyles-C_T7EFVW.js";import"./useGlobalStyles-gt8SBDCb.js";import"./dateFns-BYbTvlk0.js";import"./useThemedTextbox-4oG6-pH9.js";import"./typesHelpers-tpz7Of7L.js";import"./useThemedPicker-B5F1n7_Y.js";import"./ArrowRightMini-CGo7ufaA.js";import"./index-DVYfaf-P.js";import"./addEventListener-XFs79bdF.js";import"./Portal-CF_yGYrl.js";import"./Calendar-DUXzFck3.js";import"./Radio-DcTC1BVd.js";import"./index-KdvApCHM.js";import"./Search-D2_ngLzW.js";import"./IconSearch-BPTFigGi.js";import"./index-B9cL_k2v.js";import"./wave-6D6RLP9Y.js";import"./List-Cq8vYI6g.js";import"./InputMasked-MSHBCWYW.js";import"./useClassNamedTextbox-BZR5FXIa.js";import"./InputNumber-kTKOXpAH.js";import"./index-FBskrQl3.js";import"./SearchOutlined-DkKb0CGg.js";import"./button-C0MuISIr.js";import"./InputPassword-D428oXIW.js";import"./StatusOkSolid-CWfQ4eAP.js";import"./IconResolver-CZ0-QjIX.js";const Q={designTokens:!1,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0},Z="FieldSet",ee="",te="",oe="",ne={dod:Q,component:Z,description:ee,usage:te,designLink:oe},Yt={title:"Hexa UI Components/FieldSet",component:i,parameters:{badges:[y.stable,y.reviewedByDesign],docs:{page:I(ne)}}},a=(t,o)=>Array.from({length:t}).map((n,l)=>({label:`${o} option ${l+1}`,value:`${l+1}`})),J=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,le=v(A)`
  > * {
    width: auto
  }
`,c={render:t=>{const o=[{text:"labelPosition: top",value:"top"},{text:"labelPosition: before",value:"before"},{text:"gridLayout",value:"grid"}],[n,l]=g.useState(["top"]),[s,x]=g.useState(S.p_3_6),h=n[0]==="grid";return e.createElement(J,null,e.createElement(le,null,e.createElement(q,{items:o,value:n,onChange:l}),h&&e.createElement(T,{options:Object.values(S).map(k=>({label:k,value:k})),onChange:x,style:{width:125},value:s})),e.createElement(i,{...t,labelPosition:h?void 0:n[0],gridPreset:h?s:void 0}))},args:{items:[{label:"textbox",control:{component:"textbox",placeholder:"hello"}},{label:"textbox-masked",control:{component:"textbox-masked",maskOptions:{mask:"NUM.NUM.NUM.NUM",blocks:{NUM:{mask:/^[0-9]{1,3}$/}}},placeholder:"hello"}},{label:"textbox-number",control:{component:"textbox-number",placeholder:"123"}},{label:"textbox-password",control:{component:"textbox-password",value:"123"}},{label:"textbox-textarea",control:{component:"textbox-textarea",placeholder:"hello",showCount:!0,maxLength:1e3}},{label:"select",control:{component:"select",options:a(4,"Select"),value:"1"}},{label:"multiselect",control:{component:"select",mode:"multiple",options:a(4,"Multiselect"),value:["1"]}},{label:"search",control:{component:"search",placeholder:"search"}},{label:"calendar",control:{component:"calendar"}},{label:"range-picker",control:{component:"range-picker"}},{label:"time-input",control:{component:"time-input"}},{label:"code-viewer",control:{component:"code-viewer",language:"html"}},{label:"button",control:{component:"button",text:"Button text",mode:"secondary"}},{label:"split-button",control:{component:"split-button",text:"Split button text",items:[{children:"Option 1"},{children:"Option 2"}]}},{label:"uploader",control:{component:"uploader",size:"small",description:"You can add up to 3 TXT, DOC, DOCX files up to 2 MB in size."}},{label:"segmented-button",control:{component:"segmented-button",value:["1"],onChange:t=>t,size:"large",items:a(3,"SegmentedButton").map(t=>({text:t.label,value:t.value}))}},{label:"toggle-button-group",control:{component:"toggle-button-group",value:["1"],onChange:t=>t,items:a(3,"ToggleButtonGroup").map(t=>({text:t.label,value:t.value}))}},{label:"checkbox",control:{component:"checkbox",children:"Single checkbox"}},{label:"checkbox-group",control:{component:"checkbox-group",options:a(4,"Checkbox")}},{label:"radio",control:{component:"radio",options:a(4,"Radio"),vertical:!0}},{label:"toggle",control:{component:"toggle",text:"Toggle label text"}},{label:"link",control:{component:"link",children:"Link text"}},{label:"status",control:{component:"status",icon:e.createElement(f,null),label:"Status text"}},{label:"status-group (only vertical)",control:{component:"status-group",items:Array.from({length:5},(t,o)=>({label:`Status ${o+1}`,icon:e.createElement(f,null)}))}},{label:"tag-group horizontal",control:{component:"tag-group",items:[e.createElement(j,{key:0,label:"Tag text 1"}),...Array.from({length:19},(t,o)=>({label:`Tag text ${o+2}`}))]}},{label:"tag-group vertical",control:{component:"tag-group",orientation:"vertical",items:Array.from({length:5},(t,o)=>({label:`Tag text ${o+1}`}))}},{label:"Text",control:{component:"text",children:"Text"}},{label:"custom control",control:e.createElement(e.Fragment,null,e.createElement(r.Number,{value:150,style:{maxWidth:150}})," / ",e.createElement(T,{options:[{label:"KB",value:"KB"},{label:"MB",value:"MB"},{label:"GB",value:"GB"}],style:{width:75},value:"MB"}))},{label:"help-message",control:{component:"help-message",mode:"common",text:"Help message example"}}]}},m={render:()=>e.createElement(J,null,e.createElement(X,null,"Look in code! dev only"),e.createElement(i,{items:[{label:"JSON-like",message:"зашибись! классно!",messageMode:"success",control:{component:"textbox",validationStatus:"success",value:"its better to declare like this"}},{label:"JSON-like field, JSX control",message:"сомнительно, но окээээй",messageMode:"warning",control:e.createElement(r,{value:"its ok, but common props (disabled)"})},e.createElement(W,{key:"JSX Field and control",label:"JSX Field and control",message:"мы все в этом виноваты",messageMode:"error",control:e.createElement(r,{validationStatus:"error"})})]}))},p={args:{labelPosition:"before",items:[{label:"default control",control:{component:"textbox"}},{label:"custom layout",gridLayout:{firstCol:"123px",secondCol:"456px"},control:{component:"textbox"}},{label:"default control",control:{component:"toggle",text:"some button"}},{label:"another custom layout",labelPosition:"top",control:{component:"textbox"}},{label:"default control",control:{component:"button",text:"some button"}}]}},u={args:{labelPosition:"before",items:[{label:"input-like",control:{component:"textbox"}},{label:"text-like",control:{component:"text",children:"Text"}},{label:"text-like",control:{component:"status",label:"Reduced margin before label-like element"}},{label:"text-like",control:{component:"link",children:"Link"}},{label:"input-like",control:{component:"select"}},{label:"input-like",marginBefore:"32px",control:{component:"textbox-textarea",value:"custom margin"}},{label:"input-like",marginBefore:48,control:{component:"search",value:"custom margin"}},{label:"help-message",control:{component:"help-message",mode:"common",text:"Help message example"}}]}},ae=v.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`,b={render:t=>{const[o,n]=g.useState(!1),[l,s]=g.useState(!1),x=[{label:"button",control:{component:"button",disabled:l,text:"button",mode:"secondary"}},{label:"textbox",control:{component:"textbox",value:"textbox"}}];return e.createElement(ae,null,e.createElement(R,null,"Look in code how to disable component manually"),e.createElement(C,{onChange:s},`disable only button: ${o.toString()}`),e.createElement(C,{onChange:n},`disable all: ${o.toString()}`),e.createElement(i,{...t,items:x,disabled:o,labelPosition:"before"}))}},d={render:t=>e.createElement(i.KeyValueMapper,{...t}),args:{gridLayout:{cols:["200px","400px"]},keyTooltip:"tooltip",keyRequired:!0,rowHeight:123123,padding:12,keysMargin:123123,wrapperClasses:{keyClassName:"class1",valueClassName:"class2"},data:[{pairKey:"Input",pairValue:e.createElement(r,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:e.createElement(r.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:e.createElement(Y,{size:"medium",mode:"primary"},"Button")}]}};var B,w,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: FieldSetProps) => {
    const viewItems: SegmentedButtonOption[] = [{
      text: 'labelPosition: top',
      value: 'top'
    }, {
      text: 'labelPosition: before',
      value: 'before'
    }, {
      text: 'gridLayout',
      value: 'grid'
    }];
    const [view, setView] = useState<string[]>(['top']);
    const [gridPreset, setGridPreset] = useState<LayoutPresetKey>(LayoutPreset.p_3_6);
    const isGrid = view[0] === 'grid';
    return <Container>
        <LayoutSwitcher>
          <SegmentedButton items={viewItems} value={view} onChange={setView} />
          {isGrid && <Select options={Object.values(LayoutPreset).map(x => ({
          label: x,
          value: x
        }))} onChange={setGridPreset} style={{
          width: 125
        }} value={gridPreset} />}
        </LayoutSwitcher>

        <FieldSet {...args} labelPosition={!isGrid ? view[0] as FieldProps['labelPosition'] : undefined} gridPreset={isGrid ? gridPreset : undefined} />
      </Container>;
  },
  args: {
    items: [{
      label: 'textbox',
      control: {
        component: 'textbox',
        placeholder: 'hello'
      }
    }, {
      label: 'textbox-masked',
      control: {
        component: 'textbox-masked',
        maskOptions: {
          mask: 'NUM.NUM.NUM.NUM',
          blocks: {
            NUM: {
              mask: /^[0-9]{1,3}$/
            }
          }
        },
        placeholder: 'hello'
      }
    }, {
      label: 'textbox-number',
      control: {
        component: 'textbox-number',
        placeholder: '123'
      }
    }, {
      label: 'textbox-password',
      control: {
        component: 'textbox-password',
        value: '123'
      }
    }, {
      label: 'textbox-textarea',
      control: {
        component: 'textbox-textarea',
        placeholder: 'hello',
        showCount: true,
        maxLength: 1000
      }
    }, {
      label: 'select',
      control: {
        component: 'select',
        options: getOptions(4, 'Select'),
        value: '1'
      }
    }, {
      label: 'multiselect',
      control: {
        component: 'select',
        mode: 'multiple',
        options: getOptions(4, 'Multiselect'),
        value: ['1']
      }
    }, {
      label: 'search',
      control: {
        component: 'search',
        placeholder: 'search'
      }
    }, {
      label: 'calendar',
      control: {
        component: 'calendar'
      }
    }, {
      label: 'range-picker',
      control: {
        component: 'range-picker'
      }
    }, {
      label: 'time-input',
      control: {
        component: 'time-input'
      }
    }, {
      label: 'code-viewer',
      control: {
        component: 'code-viewer',
        language: 'html'
      }
    }, {
      label: 'button',
      control: {
        component: 'button',
        text: 'Button text',
        mode: 'secondary'
      }
    }, {
      label: 'split-button',
      control: {
        component: 'split-button',
        text: 'Split button text',
        items: [{
          children: 'Option 1'
        }, {
          children: 'Option 2'
        }]
      }
    }, {
      label: 'uploader',
      control: {
        component: 'uploader',
        size: 'small',
        description: 'You can add up to 3 TXT, DOC, DOCX files up to 2 MB in size.'
      }
    }, {
      label: 'segmented-button',
      control: {
        component: 'segmented-button',
        value: ['1'],
        onChange: (e: string[]) => e,
        size: 'large',
        items: getOptions(3, 'SegmentedButton').map(item => ({
          text: item.label,
          value: item.value
        }))
      }
    }, {
      label: 'toggle-button-group',
      control: {
        component: 'toggle-button-group',
        value: ['1'],
        onChange: (e: string[]) => e,
        items: getOptions(3, 'ToggleButtonGroup').map(item => ({
          text: item.label,
          value: item.value
        }))
      }
    }, {
      label: 'checkbox',
      control: {
        component: 'checkbox',
        children: 'Single checkbox'
      }
    }, {
      label: 'checkbox-group',
      control: {
        component: 'checkbox-group',
        options: getOptions(4, 'Checkbox')
      }
    }, {
      label: 'radio',
      control: {
        component: 'radio',
        options: getOptions(4, 'Radio'),
        vertical: true
      }
    }, {
      label: 'toggle',
      control: {
        component: 'toggle',
        text: 'Toggle label text'
      }
    }, {
      label: 'link',
      control: {
        component: 'link',
        children: 'Link text'
      }
    }, {
      label: 'status',
      control: {
        component: 'status',
        icon: <Placeholder />,
        label: 'Status text'
      }
    }, {
      label: 'status-group (only vertical)',
      control: {
        component: 'status-group',
        items: Array.from({
          length: 5
        }, (_, index) => ({
          label: \`Status \${index + 1}\`,
          icon: <Placeholder />
        }))
      }
    }, {
      label: 'tag-group horizontal',
      control: {
        component: 'tag-group',
        items: [<Tag key={0} label="Tag text 1" />, ...Array.from({
          length: 19
        }, (_, index) => ({
          label: \`Tag text \${index + 2}\`
        }))]
      }
    }, {
      label: 'tag-group vertical',
      control: {
        component: 'tag-group',
        orientation: 'vertical',
        items: Array.from({
          length: 5
        }, (_, index) => ({
          label: \`Tag text \${index + 1}\`
        }))
      }
    }, {
      label: 'Text',
      control: {
        component: 'text',
        children: 'Text'
      }
    }, {
      label: 'custom control',
      control: <>
          <Textbox.Number value={150} style={{
          maxWidth: 150
        }} />
          {' / '}
          <Select options={[{
          label: 'KB',
          value: 'KB'
        }, {
          label: 'MB',
          value: 'MB'
        }, {
          label: 'GB',
          value: 'GB'
        }]} style={{
          width: 75
        }} value="MB" />
        </>
    }, {
      label: 'help-message',
      control: {
        component: 'help-message',
        mode: 'common',
        text: 'Help message example'
      }
    }]
  }
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,E,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Container>
      <H3>Look in code! dev only</H3>
      <FieldSet items={[{
      label: 'JSON-like',
      message: 'зашибись! классно!',
      messageMode: 'success',
      control: {
        component: 'textbox',
        validationStatus: 'success',
        value: 'its better to declare like this'
      }
    }, {
      label: 'JSON-like field, JSX control',
      message: 'сомнительно, но окээээй',
      messageMode: 'warning',
      control: <Textbox value="its ok, but common props (disabled)" />
    }, <Field key="JSX Field and control" label="JSX Field and control" message="мы все в этом виноваты" messageMode="error" control={<Textbox validationStatus="error" />} />]} />
    </Container>
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var L,D,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    labelPosition: 'before',
    items: [{
      label: 'default control',
      control: {
        component: 'textbox'
      }
    }, {
      label: 'custom layout',
      gridLayout: {
        firstCol: '123px',
        secondCol: '456px'
      },
      control: {
        component: 'textbox'
      }
    }, {
      label: 'default control',
      control: {
        component: 'toggle',
        text: 'some button'
      }
    }, {
      label: 'another custom layout',
      labelPosition: 'top',
      control: {
        component: 'textbox'
      }
    }, {
      label: 'default control',
      control: {
        component: 'button',
        text: 'some button'
      }
    }]
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var N,H,K;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    labelPosition: 'before',
    items: [{
      label: 'input-like',
      control: {
        component: 'textbox'
      }
    }, {
      label: 'text-like',
      control: {
        component: 'text',
        children: 'Text'
      }
    }, {
      label: 'text-like',
      control: {
        component: 'status',
        label: 'Reduced margin before label-like element'
      }
    }, {
      label: 'text-like',
      control: {
        component: 'link',
        children: 'Link'
      }
    }, {
      label: 'input-like',
      control: {
        component: 'select'
      }
    }, {
      label: 'input-like',
      marginBefore: '32px',
      control: {
        component: 'textbox-textarea',
        value: 'custom margin'
      }
    }, {
      label: 'input-like',
      marginBefore: 48,
      control: {
        component: 'search',
        value: 'custom margin'
      }
    }, {
      label: 'help-message',
      control: {
        component: 'help-message',
        mode: 'common',
        text: 'Help message example'
      }
    }]
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var $,G,V;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: FieldSetProps) => {
    const [commonDisabled, setCommonDisabled] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const items: FieldSetItem[] = [{
      label: 'button',
      control: {
        component: 'button',
        disabled: buttonDisabled,
        text: 'button',
        mode: 'secondary'
      }
    }, {
      label: 'textbox',
      control: {
        component: 'textbox',
        value: 'textbox'
      }
    }];
    return <FieldSetsContainer>
        <H4>Look in code how to disable component manually</H4>
        <Toggle onChange={setButtonDisabled}>
          {\`disable only button: \${commonDisabled.toString()}\`}
        </Toggle>
        <Toggle onChange={setCommonDisabled}>
          {\`disable all: \${commonDisabled.toString()}\`}
        </Toggle>
        <FieldSet {...args} items={items} disabled={commonDisabled} labelPosition="before" />
      </FieldSetsContainer>;
  }
}`,...(V=(G=b.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var _,U,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: KeyValueProps) => {
    return <FieldSet.KeyValueMapper {...args} />;
  },
  args: {
    gridLayout: {
      cols: ['200px', '400px']
    },
    keyTooltip: 'tooltip',
    keyRequired: true,
    rowHeight: 123123,
    padding: 12,
    keysMargin: 123123,
    wrapperClasses: {
      keyClassName: 'class1',
      valueClassName: 'class2'
    },
    data: [{
      pairKey: 'Input',
      pairValue: <Textbox placeholder="Text" />
    }, {
      pairKey: 'Textarea',
      pairValue: <Textbox.Textarea placeholder="Text area" />
    }, {
      pairKey: 'Button',
      pairValue: <Button size="medium" mode="primary">
            Button
          </Button>
    }]
  }
}`,...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const Qt=["Basic","WaysToDeclareComponent","OverrideCommonStyles","ReducedMargin","Disabled","KeyValueMapper"];export{c as Basic,b as Disabled,d as KeyValueMapper,p as OverrideCommonStyles,u as ReducedMargin,m as WaysToDeclareComponent,Qt as __namedExportsOrder,Yt as default};
