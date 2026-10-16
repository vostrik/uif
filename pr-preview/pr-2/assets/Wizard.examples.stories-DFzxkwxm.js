import{B as g}from"./Button-I6hF4eMe.js";import{F as k}from"./index-C8R6w0AO.js";import{b as p,R as o}from"./iframe-BxJnf3ZL.js";import{W as a}from"./Wizard-eGqWhiuh.js";import"./Dropdown-DGWR5wSe.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-lpBnInVO.js";import"./useMergedState-BgQ2XY1A.js";import"./focus-CSmuw2j_.js";import"./omit-DXgDXInf.js";import"./ArrowRight-BHNzx7qw.js";import"./Toggle-CGR2gxI3.js";import"./AdditionalContent-0QTduPgH.js";import"./HelpMessage-DFGrmg6s.js";import"./type-l5tskpde.js";import"./wave-CE4pLSVu.js";import"./FormLabel-C8HaQNzE.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-B4FkS-ry.js";import"./TextReducer-jgmtD67Q.js";import"./index-Dlpfquxs.js";import"./colors-yztLXgoP.js";import"./Group-Dnx8lKl-.js";import"./Divider-Ch4BCEC8.js";import"./Loader-CkJh8F18.js";import"./index-DLAJHFC-.js";import"./v4-BoP187Zn.js";import"./button-ZplnygZi.js";import"./Field-BsTSlUmQ.js";import"./Help-DMNflowG.js";import"./Markdown-M2-twDFV.js";import"./index-DkgxDGTG.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Textbox-CAZ2Fv9U.js";import"./useGlobalStyles-BwyzlKcq.js";import"./InputMasked-CAu3zsjn.js";import"./input-n1WBQ7hV.js";import"./index-Chjiymov.js";import"./useThemedTextbox-C_LafCEC.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-C1QARNsJ.js";import"./InputNumber-BTIEgQNa.js";import"./index-YsXWYt75.js";import"./SearchOutlined-DAC8EMEh.js";import"./InputPassword-t2hcqH-O.js";import"./StatusOkSolid-B81X7uk8.js";import"./useTranslation-XbAzRulq.js";import"./IconResolver-ByUaWSDK.js";import"./Placeholder-B2af5lXh.js";import"./ToggleButtonGroup-limC0JrY.js";import"./ToggleButton-BZPkfKka.js";import"./generateId-BXJELych.js";import"./imaskDateOptionsGenerator-y4qZYTJF.js";import"./Uploader-DRCLneZn.js";import"./regeneratorRuntime-Balhfmr5.js";import"./pickAttrs-CXAuQQhc.js";import"./Upload-p18_l1fs.js";import"./Delete-CxWpfm_p.js";import"./Download2-CAOAxnIK.js";import"./Menu2-CMdAijjE.js";import"./Reload-K6HIr4Vy.js";import"./FileItem-ClHscPFs.js";import"./Status-DFWmYLgf.js";import"./Indicator-DttH4MVv.js";import"./Checkbox-B8VAb0mI.js";import"./useId-D2csa3bI.js";import"./index-BaomynJn.js";import"./index-CRsZk3jd.js";import"./SegmentedButton-BM3VpJFt.js";import"./CodeViewer-BTFeiXzL.js";import"./ResizeInput-C_PRtfKI.js";import"./StatusWarningSolid-DPnOg20O.js";import"./TimeInput-BXgRyk1d.js";import"./RangePicker-BcA5gCS3.js";import"./RangeSeparator-DRH24mKd.js";import"./WithGlobalStyles-C1ne0ZlF.js";import"./dateFns-Cytb5tO8.js";import"./useThemedPicker-DVfd9k-w.js";import"./ArrowRightMini-DBiX0oTM.js";import"./index-B88-SEp9.js";import"./addEventListener-jyfUXkC3.js";import"./Portal-DtLL7wV_.js";import"./Calendar-Ba1Iwhvk.js";import"./Select-vOL0j7UD.js";import"./List-DYgJ-AUb.js";import"./IconSearch-5ySeIJle.js";import"./Radio-B6kw_7nm.js";import"./index-CDrbTqbu.js";import"./Search-ChLnVOkX.js";import"./StatusOkSolid-0pv6zwQl.js";import"./Modal-DkpJobF5.js";import"./PortalWrapper-dyhWagQ1.js";import"./StatusOkOutline-B39sGwVj.js";import"./Sidebar-BjthkiyD.js";import"./useForceUpdate-echXxZXr.js";import"./TextWithTruncation-DRr7EPDb.js";const m=o.createElement("div",{style:{textAlign:"right"}},"Footer Text Element"),c=e=>{const[r,n]=p.useState(!0),[s,t]=p.useState(""),[l,i]=p.useState(),B=b=>{/^\d+$/.test(b)?(n(!0),i(void 0)):(n(!1),i("Should contain only numbers")),t(b)};return[{name:"Step 1",onNext:()=>r,render:()=>o.createElement("div",null,"Step 1 content",o.createElement(k,{labelPosition:"before",items:[{label:"textbox with validation",message:l,control:{component:"textbox",placeholder:"hello",value:s,onChange:B,validationStatus:r?"default":"error"}},{label:"textbox-password",control:{component:"textbox-password"}}]}))},{name:"Step 2",render:()=>o.createElement("div",null,"Step 2 content")},{name:"Step 3",description:"Long long long long long long long long description",render:()=>o.createElement("div",null,"Step 3 content")},{name:"Step 4",description:"Description",render:()=>o.createElement("div",null,"Step 4 content")}].filter((b,M)=>e?e.includes(M):!0)},wt={title:"Hexa UI Components/Wizard/Stories",component:a,tags:["!autodocs"]},d={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}},h={render:e=>{const r=c(),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,isVertical:!0,onFinish:n,onCancel:s,footerAdditionalElement:m})}},u={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"sidebar",...e,steps:s,sidebar:{title:"Wizard in sidebar",onClose:()=>n(!1),visible:r,zIndex:e["sidebar.zIndex"]},onFinish:t,onCancel:l,footerAdditionalElement:m}))},argTypes:{"sidebar.zIndex":{control:{type:"number"}}}},C={render:e=>{const[r,n]=p.useState(!1),s=c(),t=()=>{var i;(i=e.onFinish)==null||i.call(e),n(!1)},l=()=>{var i;(i=e.onCancel)==null||i.call(e),n(!1)};return o.createElement(o.Fragment,null,o.createElement(g,{onClick:()=>n(!0)},"Open wizard"),o.createElement(a,{view:"modal",...e,steps:s,modal:{title:"My title",visible:r},onFinish:t,onCancel:l,footerAdditionalElement:m}))}},F={render:e=>{const r=c([0]),n=()=>{var t;(t=e.onFinish)==null||t.call(e),alert("Finished")},s=()=>{var t;(t=e.onCancel)==null||t.call(e),alert("Cancelled")};return o.createElement(a,{view:"page",...e,steps:r,onFinish:n,onCancel:s,footerAdditionalElement:m})}};var f,S,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var x,v,V;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} isVertical onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(V=(v=h.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var z,w,W;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      setVisible(false);
    };
    const handleCancel = () => {
      args.onCancel?.();
      setVisible(false);
    };
    return <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <WizardComponent view="sidebar" {...args} steps={steps} sidebar={{
        title: 'Wizard in sidebar',
        onClose: () => setVisible(false),
        visible,
        zIndex: args['sidebar.zIndex']
      }} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />
      </>;
  },
  argTypes: {
    'sidebar.zIndex': {
      control: {
        type: 'number'
      }
    }
  }
}`,...(W=(w=u.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var A,y,I;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(false);
    const steps = useStepsWithValidation();
    const handleFinish = () => {
      args.onFinish?.();
      setVisible(false);
    };
    const handleCancel = () => {
      args.onCancel?.();
      setVisible(false);
    };
    return <>
        <Button onClick={() => setVisible(true)}>Open wizard</Button>
        <WizardComponent view="modal" {...args} steps={steps} modal={{
        title: 'My title',
        visible
      }} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />
      </>;
  }
}`,...(I=(y=C.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var T,O,P;F.parameters={...F.parameters,docs:{...(T=F.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const steps = useStepsWithValidation([0]);
    const handleFinish = () => {
      args.onFinish?.();
      alert('Finished');
    };
    const handleCancel = () => {
      args.onCancel?.();
      alert('Cancelled');
    };
    return <WizardComponent view="page" {...args} steps={steps} onFinish={handleFinish} onCancel={handleCancel} footerAdditionalElement={footerText} />;
  }
}`,...(P=(O=F.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Wt=["Page","PageVertical","Sidebar","Modal","PageOneStep"];export{C as Modal,d as Page,F as PageOneStep,h as PageVertical,u as Sidebar,Wt as __namedExportsOrder,wt as default};
