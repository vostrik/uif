import{M as y,R as e,b as g,Q as R,W as X,H as v,S as A}from"./iframe-CWTW431d.js";import{w as I}from"./withMeta-B80vBHhP.js";import{L as S,F as W}from"./Field-C-J-j7-n.js";import{o as f}from"./Placeholder-Bw0WR4Xn.js";import{F as i}from"./index-BBBenYuO.js";import{T as j}from"./Tag-a0Ju7I2Y.js";import{S as T}from"./Select-Ccmgj3zA.js";import{T as r}from"./Textbox-DZ5J0BFU.js";import{S as q}from"./SegmentedButton-CBtK7OXx.js";import{T as C}from"./Toggle-COf30Rrf.js";import{B as Y}from"./Button-Dtt-8qQC.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-BZwqqSX5.js";import"./blocks-5hWq9pxN.js";import"./index-Cifl6OSo.js";import"./TextReducer-BKSOrAn7.js";import"./SubComponents-DV3S-e9U.js";import"./TextWithTruncation-4wYl1Y4Q.js";import"./ArrowDownSolid-Dxbmwou1.js";import"./ArrowRightSolid-PYHen0lO.js";import"./Divider-BNE7kxRe.js";import"./Badge-BxavHYM7.js";import"./type-DnwzfU9Y.js";import"./colors-CDrajaLR.js";import"./Indicator-D27-HXk4.js";import"./StatusOkOutline-wl-jmqUJ.js";import"./Grid-BYWukwlc.js";import"./Markdown-BS7aYAEA.js";import"./index-C-seFtJV.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Help-BDmJRc1Z.js";import"./FormLabel-CGcobH17.js";import"./HelpMessage-Bq5rlA1f.js";import"./ToggleButtonGroup-BgpfDA6s.js";import"./ToggleButton-B1S0Te7Q.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./imaskDateOptionsGenerator-CVbS87xQ.js";import"./input-B9zvPYiu.js";import"./index-Chjiymov.js";import"./Uploader-UmZSaqA_.js";import"./regeneratorRuntime-DIl02UDk.js";import"./pickAttrs-DtXcozgm.js";import"./Upload-gLx23MM1.js";import"./Dropdown-CpY4_2yP.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-C6z_ExK5.js";import"./useMergedState-DIWBApoD.js";import"./focus-bRTu4OQx.js";import"./omit-DXgDXInf.js";import"./ArrowRight-MEBjPGWY.js";import"./Loader-Dwsr2p9J.js";import"./index-Cg7pBzQK.js";import"./Delete-Bfyb0MfQ.js";import"./Download2-gAL9DEHr.js";import"./Menu2-XfxjJBJd.js";import"./Reload-CwTDefPB.js";import"./FileItem-CY6VvfGf.js";import"./useTranslation-BA-QSkbB.js";import"./Status-BVotshUb.js";import"./Group-BXfAcZfu.js";import"./Checkbox-Lx72eYm4.js";import"./AdditionalContent-eqvFhAFS.js";import"./useId-CUQWhris.js";import"./index-BYd2HsKx.js";import"./index-CECn3iMu.js";import"./CodeViewer-C1C9sc1i.js";import"./ResizeInput-Cuejz5qU.js";import"./StatusWarningSolid-pm2crDqn.js";import"./TimeInput-2ycioexy.js";import"./RangePicker-ClU_OgN9.js";import"./RangeSeparator-FMutsyiv.js";import"./WithGlobalStyles-DlY6Q6Kh.js";import"./useGlobalStyles-DzGsrGop.js";import"./dateFns-BeqiE_qv.js";import"./useThemedTextbox-bbxWP79c.js";import"./typesHelpers-tpz7Of7L.js";import"./useThemedPicker-ByAKm6UZ.js";import"./ArrowRightMini-CL2yW989.js";import"./index-rZR0vFU1.js";import"./addEventListener-DJqonJl0.js";import"./Portal-DxC8yDp2.js";import"./Calendar-B62ORhHD.js";import"./Radio-u3MiVqz8.js";import"./index-B2Tt38Ir.js";import"./Search-D9ziXGsn.js";import"./IconSearch-CIkkotrl.js";import"./index-D-MPt99R.js";import"./wave-DKblzsMF.js";import"./List-Bg8LqGmz.js";import"./InputMasked-B6k5DGN3.js";import"./useClassNamedTextbox-C7BYVjFh.js";import"./InputNumber-DtGOqesW.js";import"./index-v60Pz8jA.js";import"./SearchOutlined-ChTgzuYk.js";import"./button-BC2KCpzw.js";import"./InputPassword-DRyt_73p.js";import"./StatusOkSolid-DAGo7cyd.js";import"./IconResolver-Bigm6rDE.js";const Q={designTokens:!1,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0},Z="FieldSet",ee="",te="",oe="",ne={dod:Q,component:Z,description:ee,usage:te,designLink:oe},Yt={title:"Hexa UI Components/FieldSet",component:i,parameters:{badges:[y.stable,y.reviewedByDesign],docs:{page:I(ne)}}},a=(t,o)=>Array.from({length:t}).map((n,l)=>({label:`${o} option ${l+1}`,value:`${l+1}`})),J=v.div`
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
